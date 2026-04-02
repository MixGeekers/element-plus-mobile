<template>
  <div :class="ns.b('panel')">
    <div :class="[ns.be('panel', 'body'), ns.is('with-footer', hasFooter)]">
      <el-checkbox-group
        v-show="!hasNoMatch && !isEmpty(data)"
        v-model="checked"
        :validate-event="false"
        :class="ns.be('panel', 'list')"
      >
        <el-checkbox
          v-for="item in filteredData"
          :key="item[propsAlias.key]"
          :class="ns.be('panel', 'item')"
          :value="item[propsAlias.key]"
          :disabled="item[propsAlias.disabled]"
          :validate-event="false"
        >
          <option-content :option="optionRender?.(item)" />
        </el-checkbox>
      </el-checkbox-group>
      <div
        v-show="hasNoMatch || isEmpty(data)"
        :class="ns.be('panel', 'empty')"
      >
        <slot name="empty">
          {{ hasNoMatch ? t('el.transfer.noMatch') : t('el.transfer.noData') }}
        </slot>
      </div>
    </div>
    <div v-if="hasFooter" :class="ns.be('panel', 'footer')">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup generic="T extends TransferDataItem = TransferDataItem">
import { Comment, computed, reactive, toRefs, useSlots } from 'vue'
import { isEmpty, mutable } from '@element-plus/utils'
import { useLocale, useNamespace } from '@element-plus/hooks'
import { ElCheckbox, ElCheckboxGroup } from '@element-plus/components/checkbox'
import { transferPanelEmits } from './transfer-panel'
import { useCheck, usePropsAlias } from './composables'

import type { VNode } from 'vue'
import type { TransferDataItem } from './transfer'
import type { TransferPanelProps, TransferPanelState } from './transfer-panel'

defineOptions({
  name: 'ElTransferPanel',
})

const props = withDefaults(defineProps<TransferPanelProps<T>>(), {
  data: () => [],
  format: () => ({}),
  defaultChecked: () => [],
  props: () =>
    mutable({
      label: 'label',
      key: 'key',
      disabled: 'disabled',
    }),
})
const emit = defineEmits(transferPanelEmits)
const slots = useSlots()

const OptionContent = ({ option }: { option?: VNode | VNode[] }) => option

const { t } = useLocale()
const ns = useNamespace('transfer')

const panelState = reactive<TransferPanelState>({
  checked: [],
  allChecked: false,
  query: '',
  checkChangeByUser: true,
})

const propsAlias = usePropsAlias(props)

const {
  filteredData,
  checkableData,
  checkedSummary,
  isIndeterminate,
  handleAllCheckedChange,
} = useCheck(props, panelState, emit)

const hasNoMatch = computed(
  () => !isEmpty(panelState.query) && isEmpty(filteredData.value)
)

const hasFooter = computed(() => {
  const footerNodes = slots.default?.() || []
  return footerNodes.some((node) => node.type !== Comment)
})

const { checked, allChecked, query } = toRefs(panelState)

defineExpose({
  /** @description filter keyword */
  query,
  /** @description checked item keys in current panel */
  checked,
  /** @description whether all checkable items are checked */
  allChecked,
  /** @description checked summary text */
  checkedSummary,
  /** @description whether checked state is indeterminate */
  isIndeterminate,
  /** @description checkable items after filtering */
  checkableData,
  /** @description filtered data */
  filteredData,
  /** @description toggle all checkable items */
  handleAllCheckedChange,
})
</script>
