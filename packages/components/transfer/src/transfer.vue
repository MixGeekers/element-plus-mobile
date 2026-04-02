<template>
  <div :class="ns.b()" :data-active-panel="activePanel">
    <div :class="ns.e('tabs')" role="tablist">
      <button
        type="button"
        role="tab"
        :class="[ns.e('tab'), ns.is('active', activePanel === 'left')]"
        :aria-selected="activePanel === 'left'"
        @click="switchPanel('left')"
      >
        <span :class="ns.e('tab-title')">{{ leftPanelTitle }}</span>
        <span :class="ns.e('tab-count')">{{ sourceData.length }}</span>
        <span :class="ns.e('tab-summary')">{{ leftCheckedSummary }}</span>
      </button>
      <button
        type="button"
        role="tab"
        :class="[ns.e('tab'), ns.is('active', activePanel === 'right')]"
        :aria-selected="activePanel === 'right'"
        @click="switchPanel('right')"
      >
        <span :class="ns.e('tab-title')">{{ rightPanelTitle }}</span>
        <span :class="ns.e('tab-count')">{{ targetData.length }}</span>
        <span :class="ns.e('tab-summary')">{{ rightCheckedSummary }}</span>
      </button>
      <div :class="ns.e('tab-indicator')" :style="indicatorStyle" />
    </div>

    <div :class="ns.e('toolbar')">
      <div :class="ns.e('toolbar-meta')">
        <span :class="ns.e('toolbar-title')">{{ currentPanelTitle }}</span>
        <span :class="ns.e('toolbar-summary')">{{
          currentCheckedSummary
        }}</span>
      </div>
      <el-checkbox
        :model-value="currentAllChecked"
        :indeterminate="currentIsIndeterminate"
        :disabled="!currentHasCheckableData"
        :validate-event="false"
        :aria-label="currentPanelTitle"
        :class="ns.e('toolbar-check')"
        @change="handleCurrentAllCheckedChange"
      />
    </div>

    <div v-if="filterable" :class="ns.e('filter')">
      <el-input
        v-model="currentQuery"
        size="default"
        :placeholder="panelFilterPlaceholder"
        :prefix-icon="Search"
        clearable
        :validate-event="false"
      />
    </div>

    <div
      ref="panelsRef"
      :class="ns.e('panels')"
      @scroll.passive="syncActivePanel"
    >
      <div
        :class="[ns.e('panel'), ns.is('active', activePanel === 'left')]"
        data-direction="left"
        role="tabpanel"
        :aria-hidden="activePanel !== 'left'"
      >
        <transfer-panel
          ref="leftPanel"
          :data="sourceData"
          :option-render="optionRender"
          :format="format"
          :filter-method="filterMethod"
          :default-checked="leftDefaultChecked"
          :props="props.props"
          @checked-change="onSourceCheckedChange"
        >
          <template #empty>
            <slot name="left-empty" />
          </template>
          <slot name="left-footer" />
        </transfer-panel>
      </div>
      <div
        :class="[ns.e('panel'), ns.is('active', activePanel === 'right')]"
        data-direction="right"
        role="tabpanel"
        :aria-hidden="activePanel !== 'right'"
      >
        <transfer-panel
          ref="rightPanel"
          :data="targetData"
          :option-render="optionRender"
          :format="format"
          :filter-method="filterMethod"
          :default-checked="rightDefaultChecked"
          :props="props.props"
          @checked-change="onTargetCheckedChange"
        >
          <template #empty>
            <slot name="right-empty" />
          </template>
          <slot name="right-footer" />
        </transfer-panel>
      </div>
    </div>

    <transition :name="`${ns.namespace.value}-fade-in-linear`">
      <div v-show="currentHasChecked" :class="ns.e('action-bar')">
        <div :class="ns.e('action-copy')">
          <span :class="ns.e('action-title')">{{ currentPanelTitle }}</span>
          <span :class="ns.e('action-summary')">{{
            currentCheckedSummary
          }}</span>
        </div>
        <el-button
          type="primary"
          :class="ns.e('action-button')"
          @click="moveCurrentChecked"
        >
          <el-icon v-if="activePanel === 'right'"><arrow-left /></el-icon>
          <span>{{ currentMoveButtonText }}</span>
          <el-icon v-if="activePanel === 'left'"><arrow-right /></el-icon>
        </el-button>
      </div>
    </transition>
  </div>
</template>

<script lang="ts" setup generic="T extends TransferDataItem = TransferDataItem">
import { Comment, computed, h, nextTick, reactive, ref, watch } from 'vue'
import { ArrowLeft, ArrowRight, Search, debugWarn } from '@element-plus/utils'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { ElButton } from '@element-plus/components/button'
import { ElCheckbox } from '@element-plus/components/checkbox'
import { ElIcon } from '@element-plus/components/icon'
import { ElInput } from '@element-plus/components/input'
import { useFormItem } from '@element-plus/components/form'
import { transferEmits } from './transfer'
import {
  useCheckedChange,
  useComputedData,
  useMove,
  usePropsAlias,
  useTab,
} from './composables'
import TransferPanel from './transfer-panel.vue'

import type { VNode } from 'vue'
import type { CheckboxValueType } from '@element-plus/components/checkbox'
import type {
  TransferCheckedState,
  TransferDataItem,
  TransferDirection,
  TransferFormat,
  TransferProps,
} from './transfer'
import type { TransferPanelInstance } from './transfer-panel'

defineOptions({
  name: 'ElTransfer',
})

const props = withDefaults(defineProps<TransferProps<T>>(), {
  data: () => [],
  titles: () => [] as unknown as [string, string],
  buttonTexts: () => [] as unknown as [string, string],
  leftDefaultChecked: () => [],
  rightDefaultChecked: () => [],
  modelValue: () => [],
  format: () => ({}),
  props: () => ({
    label: 'label',
    key: 'key',
    disabled: 'disabled',
  }),
  targetOrder: 'original',
  validateEvent: true,
})
const emit = defineEmits(transferEmits)
const slots = defineSlots<{
  default?: (props: { option: T }) => VNode[]
  'left-empty'?: () => VNode[]
  'left-footer'?: () => VNode[]
  'right-empty'?: () => VNode[]
  'right-footer'?: () => VNode[]
}>()

const { t } = useLocale()
const ns = useNamespace('transfer')
const { formItem } = useFormItem()

const checkedState = reactive<TransferCheckedState>({
  leftChecked: [],
  rightChecked: [],
})

const propsAlias = usePropsAlias(props)

const { sourceData, targetData } = useComputedData(props)

const { onSourceCheckedChange, onTargetCheckedChange } = useCheckedChange(
  checkedState,
  emit
)

const { addToLeft, addToRight } = useMove(props, checkedState, emit)

type MobileTransferPanelInstance = TransferPanelInstance & {
  query: string
  allChecked: boolean
  isIndeterminate: boolean
  checkableData: T[]
  handleAllCheckedChange: (value: CheckboxValueType) => void
}

const leftPanel = ref<MobileTransferPanelInstance>()
const rightPanel = ref<MobileTransferPanelInstance>()
const {
  activePanel,
  indicatorStyle,
  panelsRef,
  scrollToPanel,
  syncActivePanel,
} = useTab()

const clearQuery = (which: TransferDirection) => {
  switch (which) {
    case 'left':
      leftPanel.value!.query = ''
      break
    case 'right':
      rightPanel.value!.query = ''
      break
  }
}

const leftPanelTitle = computed(
  () => props.titles[0] || t('el.transfer.titles.0')
)

const rightPanelTitle = computed(
  () => props.titles[1] || t('el.transfer.titles.1')
)

const panelFilterPlaceholder = computed(
  () => props.filterPlaceholder || t('el.transfer.filterPlaceholder')
)

const currentPanelTitle = computed(() =>
  activePanel.value === 'left' ? leftPanelTitle.value : rightPanelTitle.value
)

const formatCheckedSummary = (
  format: TransferFormat,
  checkedLength: number,
  dataLength: number
) => {
  const { noChecked, hasChecked } = format

  if (noChecked && hasChecked) {
    return checkedLength > 0
      ? hasChecked
          .replace(/\${checked}/g, checkedLength.toString())
          .replace(/\${total}/g, dataLength.toString())
      : noChecked.replace(/\${total}/g, dataLength.toString())
  }

  return `${checkedLength}/${dataLength}`
}

const leftCheckedSummary = computed(() =>
  formatCheckedSummary(
    props.format,
    checkedState.leftChecked.length,
    sourceData.value.length
  )
)

const rightCheckedSummary = computed(() =>
  formatCheckedSummary(
    props.format,
    checkedState.rightChecked.length,
    targetData.value.length
  )
)

const currentChecked = computed(() =>
  activePanel.value === 'left'
    ? checkedState.leftChecked
    : checkedState.rightChecked
)

const currentCheckedSummary = computed(() =>
  activePanel.value === 'left'
    ? leftCheckedSummary.value
    : rightCheckedSummary.value
)

const currentPanelRef = computed(() =>
  activePanel.value === 'left' ? leftPanel.value : rightPanel.value
)

const currentQuery = computed({
  get: () => currentPanelRef.value?.query || '',
  set: (value: string) => {
    if (currentPanelRef.value) currentPanelRef.value.query = value
  },
})

const currentHasCheckableData = computed(() =>
  Boolean(currentPanelRef.value?.checkableData.length)
)

const currentAllChecked = computed(
  () => currentPanelRef.value?.allChecked ?? false
)

const currentIsIndeterminate = computed(
  () => currentPanelRef.value?.isIndeterminate ?? false
)

const currentHasChecked = computed(() => currentChecked.value.length > 0)

const currentMoveButtonText = computed(() => {
  if (activePanel.value === 'left') {
    return props.buttonTexts[1] || rightPanelTitle.value
  }

  return props.buttonTexts[0] || leftPanelTitle.value
})

const switchPanel = (panel: TransferDirection) => {
  scrollToPanel(panel)
}

const handleCurrentAllCheckedChange = (value: CheckboxValueType) => {
  currentPanelRef.value?.handleAllCheckedChange(value)
}

const moveCurrentChecked = async () => {
  if (activePanel.value === 'left') {
    addToRight()
    await nextTick()
    switchPanel('right')
    return
  }

  addToLeft()
  await nextTick()
  switchPanel('left')
}

watch(
  () => props.modelValue,
  () => {
    if (props.validateEvent) {
      formItem?.validate?.('change').catch((err) => debugWarn(err))
    }
  }
)

const optionRender = computed(() => (option: T) => {
  if (props.renderContent) return props.renderContent(h, option)

  const defaultSlotVNodes = (slots.default?.({ option }) || []).filter(
    (node) => node.type !== Comment
  )
  if (defaultSlotVNodes.length) {
    return defaultSlotVNodes
  }

  return h(
    'span',
    option[propsAlias.value.label] || option[propsAlias.value.key]
  )
})

defineExpose({
  /** @description clear the filter keyword of a certain panel */
  clearQuery,
  /** @description left panel ref */
  leftPanel,
  /** @description right panel ref */
  rightPanel,
})
</script>
