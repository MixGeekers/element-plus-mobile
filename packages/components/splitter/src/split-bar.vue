<script setup lang="ts">
import { computed, onBeforeUnmount, ref } from 'vue'
import {
  ArrowDown,
  ArrowLeft,
  ArrowRight,
  ArrowUp,
  pxToRem,
} from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'

const ns = useNamespace('splitter-bar')

defineOptions({
  name: 'ElSplitterBar',
})

const props = defineProps({
  index: {
    type: Number,
    required: true,
  },
  layout: {
    type: String,
    values: ['horizontal', 'vertical'] as const,
    default: 'vertical',
  },
  resizable: {
    type: Boolean,
    default: true,
  },
  lazy: Boolean,
  startCollapsible: Boolean,
  endCollapsible: Boolean,
})

const emit = defineEmits(['moveStart', 'moving', 'moveEnd', 'collapse'])

const isHorizontal = computed(() => props.layout === 'horizontal')

const barWrapStyles = computed(() => {
  if (isHorizontal.value) {
    return { width: 0 }
  }
  return { height: 0 }
})

const draggerStyles = computed(() => {
  return {
    width: isHorizontal.value ? pxToRem(28) : '100%',
    height: isHorizontal.value ? '100%' : pxToRem(28),
    touchAction: 'none',
  }
})

const draggerPseudoClass = computed(() => {
  const prefix = ns.e('dragger')
  return {
    [`${prefix}-horizontal`]: isHorizontal.value,
    [`${prefix}-vertical`]: !isHorizontal.value,
    [`${prefix}-active`]: !!startPos.value,
  }
})

const startPos = ref<[x: number, y: number] | null>(null)
const activePointerId = ref<number | null>(null)

const cleanupPointerListeners = () => {
  window.removeEventListener('pointermove', onPointerMove)
  window.removeEventListener('pointerup', onPointerUp)
  window.removeEventListener('pointercancel', onPointerUp)
}

const onPointerDown = (e: PointerEvent) => {
  if (!props.resizable) return
  if (e.pointerType === 'mouse' && (e.ctrlKey || [1, 2].includes(e.button)))
    return

  e.preventDefault()
  startPos.value = [e.pageX, e.pageY]
  activePointerId.value = e.pointerId
  ;(e.currentTarget as HTMLElement | null)?.setPointerCapture?.(e.pointerId)
  emit('moveStart', props.index)
  window.addEventListener('pointermove', onPointerMove)
  window.addEventListener('pointerup', onPointerUp)
  window.addEventListener('pointercancel', onPointerUp)
}

const onPointerMove = (e: PointerEvent) => {
  if (activePointerId.value !== null && e.pointerId !== activePointerId.value)
    return
  if (!startPos.value) return

  const { pageX, pageY } = e
  const offsetX = pageX - startPos.value![0]
  const offsetY = pageY - startPos.value![1]
  const offset = isHorizontal.value ? offsetX : offsetY
  emit('moving', props.index, offset)
}

const onPointerUp = (e?: PointerEvent) => {
  if (
    e &&
    activePointerId.value !== null &&
    e.pointerId !== activePointerId.value
  )
    return

  startPos.value = null
  activePointerId.value = null
  cleanupPointerListeners()
  emit('moveEnd', props.index)
}

const StartIcon = computed(() => (isHorizontal.value ? ArrowLeft : ArrowUp))
const EndIcon = computed(() => (isHorizontal.value ? ArrowRight : ArrowDown))

onBeforeUnmount(() => {
  cleanupPointerListeners()
})
</script>

<template>
  <div :class="[ns.b()]" :style="barWrapStyles">
    <div
      :class="[
        ns.e('dragger'),
        draggerPseudoClass,
        ns.is('disabled', !resizable),
        ns.is('lazy', resizable && lazy),
      ]"
      :style="draggerStyles"
      @pointerdown="onPointerDown"
    >
      <button
        v-if="startCollapsible"
        type="button"
        :class="[ns.e('collapse-icon'), ns.is('start')]"
        @pointerdown.stop.prevent
        @click.stop="emit('collapse', index, 'start')"
      >
        <slot name="start-collapsible">
          <component
            :is="StartIcon"
            :style="{ width: pxToRem(14), height: pxToRem(14) }"
          />
        </slot>
      </button>

      <span :class="[ns.e('handle'), ns.e(`handle-${layout}`)]" />

      <button
        v-if="endCollapsible"
        type="button"
        :class="[ns.e('collapse-icon'), ns.is('end')]"
        @pointerdown.stop.prevent
        @click.stop="emit('collapse', index, 'end')"
      >
        <slot name="end-collapsible">
          <component
            :is="EndIcon"
            :style="{ width: pxToRem(14), height: pxToRem(14) }"
          />
        </slot>
      </button>
    </div>
  </div>
</template>
