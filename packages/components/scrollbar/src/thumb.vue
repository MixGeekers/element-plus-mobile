<template>
  <transition :name="ns.b('fade')">
    <div
      v-show="always || visible"
      ref="instance"
      :class="[ns.e('bar'), ns.is(bar.key)]"
      @pointerdown="clickTrackHandler"
      @click.stop
    >
      <div
        ref="thumb"
        :class="ns.e('thumb')"
        :style="thumbStyle"
        @pointerdown.stop="clickThumbHandler"
      />
    </div>
  </transition>
</template>

<script lang="ts" setup>
import { computed, inject, onBeforeUnmount, ref, toRef } from 'vue'
import { useEventListener } from '@vueuse/core'
import { isClient, throwError } from '@element-plus/utils'
import { useNamespace } from '@element-plus/hooks'
import { scrollbarContextKey } from './constants'
import { BAR_MAP, renderThumbStyle } from './util'

import type { ThumbProps } from './thumb'

const COMPONENT_NAME = 'Thumb'
const props = defineProps<ThumbProps>()

const scrollbar = inject(scrollbarContextKey)
const ns = useNamespace('scrollbar')

if (!scrollbar) throwError(COMPONENT_NAME, 'can not inject scrollbar context')

const instance = ref<HTMLDivElement>()
const thumb = ref<HTMLDivElement>()

const thumbState = ref<Partial<Record<'X' | 'Y', number>>>({})
const visible = ref(false)
const HIDE_DELAY = 600

let activePointerId: number | null = null
let dragging = false
let baseScrollHeight = 0
let baseScrollWidth = 0
let originalOnSelectStart:
  | ((this: GlobalEventHandlers, ev: Event) => any)
  | null = isClient ? document.onselectstart : null
let hideTimer: ReturnType<typeof setTimeout> | undefined

const bar = computed(() => BAR_MAP[props.vertical ? 'vertical' : 'horizontal'])

const thumbStyle = computed(() =>
  renderThumbStyle({
    size: props.size,
    move: props.move,
    bar: bar.value,
  })
)

const clearHideTimer = () => {
  if (!hideTimer) return
  clearTimeout(hideTimer)
  hideTimer = undefined
}

const showScrollbar = () => {
  clearHideTimer()
  visible.value = !!props.size
}

const queueHideScrollbar = () => {
  clearHideTimer()
  if (props.always || dragging) return

  hideTimer = setTimeout(() => {
    visible.value = false
  }, HIDE_DELAY)
}

const offsetRatio = computed(
  () =>
    // offsetRatioX = original width of thumb / current width of thumb / ratioX
    // offsetRatioY = original height of thumb / current height of thumb / ratioY
    // instance height = wrap height - GAP
    instance.value![bar.value.offset] ** 2 /
    scrollbar.wrapElement![bar.value.scrollSize] /
    props.ratio /
    thumb.value![bar.value.offset]
)

const clickThumbHandler = (e: PointerEvent) => {
  // prevent click event of middle and right button
  e.stopPropagation()
  if (e.pointerType === 'mouse' && (e.ctrlKey || [1, 2].includes(e.button)))
    return

  window.getSelection()?.removeAllRanges()
  startDrag(e)

  const el = e.currentTarget as HTMLDivElement
  if (!el) return
  thumbState.value[bar.value.axis] =
    el[bar.value.offset] -
    (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction])
}

const clickTrackHandler = (e: PointerEvent) => {
  if (!thumb.value || !instance.value || !scrollbar.wrapElement) return

  const offset = Math.abs(
    (e.target as HTMLElement).getBoundingClientRect()[bar.value.direction] -
      e[bar.value.client]
  )
  const thumbHalf = thumb.value[bar.value.offset] / 2
  const thumbPositionPercentage =
    ((offset - thumbHalf) * 100 * offsetRatio.value) /
    instance.value[bar.value.offset]

  scrollbar.wrapElement[bar.value.scroll] =
    (thumbPositionPercentage * scrollbar.wrapElement[bar.value.scrollSize]) /
    100
  showScrollbar()
  queueHideScrollbar()
}

const startDrag = (e: PointerEvent) => {
  e.stopImmediatePropagation()
  e.preventDefault()
  activePointerId = e.pointerId
  dragging = true
  showScrollbar()
  baseScrollHeight = scrollbar.wrapElement!.scrollHeight
  baseScrollWidth = scrollbar.wrapElement!.scrollWidth
  document.addEventListener('pointermove', pointerMoveDocumentHandler)
  document.addEventListener('pointerup', pointerUpDocumentHandler)
  document.addEventListener('pointercancel', pointerUpDocumentHandler)
  originalOnSelectStart = document.onselectstart
  document.onselectstart = () => false
}

const updateScrollPosition = (clientOffset: number) => {
  if (!instance.value || !thumb.value) return
  if (dragging === false) return

  const prevPage = thumbState.value[bar.value.axis]
  if (!prevPage) return

  const offset =
    (instance.value.getBoundingClientRect()[bar.value.direction] -
      clientOffset) *
    -1
  const thumbClickPosition = thumb.value[bar.value.offset] - prevPage
  const thumbPositionPercentage =
    ((offset - thumbClickPosition) * 100 * offsetRatio.value) /
    instance.value[bar.value.offset]

  if (bar.value.scroll === 'scrollLeft') {
    scrollbar.wrapElement![bar.value.scroll] =
      (thumbPositionPercentage * baseScrollWidth) / 100
  } else {
    scrollbar.wrapElement![bar.value.scroll] =
      (thumbPositionPercentage * baseScrollHeight) / 100
  }
}

const pointerMoveDocumentHandler = (e: PointerEvent) => {
  if (activePointerId !== null && e.pointerId !== activePointerId) return
  updateScrollPosition(e[bar.value.client])
}

const endDrag = () => {
  dragging = false
  activePointerId = null
  thumbState.value[bar.value.axis] = 0
  document.removeEventListener('pointermove', pointerMoveDocumentHandler)
  document.removeEventListener('pointerup', pointerUpDocumentHandler)
  document.removeEventListener('pointercancel', pointerUpDocumentHandler)
  restoreOnselectstart()
  queueHideScrollbar()
}

const pointerUpDocumentHandler = (e: PointerEvent) => {
  if (activePointerId !== null && e.pointerId !== activePointerId) return
  endDrag()
}

const scrollHandler = () => {
  showScrollbar()
  queueHideScrollbar()
}

onBeforeUnmount(() => {
  clearHideTimer()
  restoreOnselectstart()
  document.removeEventListener('pointermove', pointerMoveDocumentHandler)
  document.removeEventListener('pointerup', pointerUpDocumentHandler)
  document.removeEventListener('pointercancel', pointerUpDocumentHandler)
})

const restoreOnselectstart = () => {
  if (document.onselectstart !== originalOnSelectStart)
    document.onselectstart = originalOnSelectStart
}

useEventListener(toRef(scrollbar, 'wrapElement'), 'scroll', scrollHandler)
</script>
