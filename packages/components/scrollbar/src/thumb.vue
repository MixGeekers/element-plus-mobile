<template>
  <transition :name="ns.b('fade')">
    <div
      v-show="always || visible"
      ref="instance"
      :class="[ns.e('bar'), ns.is(bar.key)]"
      @mousedown="clickTrackHandler"
      @touchstart.prevent="clickTrackTouchHandler"
      @click.stop
    >
      <div
        ref="thumb"
        :class="ns.e('thumb')"
        :style="thumbStyle"
        @mousedown="clickThumbHandler"
        @touchstart.stop.prevent="clickThumbTouchHandler"
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

let cursorDown = false
let cursorLeave = false
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

const getClientOffset = (event: MouseEvent | TouchEvent) => {
  if ('touches' in event) {
    const touch = event.touches[0] ?? event.changedTouches[0]
    if (!touch) return undefined
    return touch[bar.value.client]
  }

  return event[bar.value.client]
}

const clearHideTimer = () => {
  if (!hideTimer) return
  clearTimeout(hideTimer)
  hideTimer = undefined
}

const showScrollbar = () => {
  clearHideTimer()
  cursorLeave = false
  visible.value = !!props.size
}

const queueHideScrollbar = () => {
  clearHideTimer()
  if (props.always || cursorDown) return

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

const clickThumbHandler = (e: MouseEvent) => {
  // prevent click event of middle and right button
  e.stopPropagation()
  if (e.ctrlKey || [1, 2].includes(e.button)) return

  window.getSelection()?.removeAllRanges()
  startDrag(e)

  const el = e.currentTarget as HTMLDivElement
  if (!el) return
  thumbState.value[bar.value.axis] =
    el[bar.value.offset] -
    (e[bar.value.client] - el.getBoundingClientRect()[bar.value.direction])
}

const clickThumbTouchHandler = (e: TouchEvent) => {
  const clientOffset = getClientOffset(e)
  const el = e.currentTarget as HTMLDivElement
  if (!el || clientOffset === undefined) return

  startDrag(e)
  thumbState.value[bar.value.axis] =
    el[bar.value.offset] -
    (clientOffset - el.getBoundingClientRect()[bar.value.direction])
}

const clickTrackHandler = (e: MouseEvent) => {
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
}

const clickTrackTouchHandler = (e: TouchEvent) => {
  if (!thumb.value || !instance.value || !scrollbar.wrapElement) return

  const clientOffset = getClientOffset(e)
  if (clientOffset === undefined) return

  const offset = Math.abs(
    (e.currentTarget as HTMLElement).getBoundingClientRect()[
      bar.value.direction
    ] - clientOffset
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

const startDrag = (e: MouseEvent | TouchEvent) => {
  e.stopImmediatePropagation()
  if ('touches' in e) e.preventDefault()
  cursorDown = true
  showScrollbar()
  baseScrollHeight = scrollbar.wrapElement!.scrollHeight
  baseScrollWidth = scrollbar.wrapElement!.scrollWidth
  document.addEventListener('mousemove', mouseMoveDocumentHandler)
  document.addEventListener('mouseup', mouseUpDocumentHandler)
  document.addEventListener('touchmove', touchMoveDocumentHandler, {
    passive: false,
  })
  document.addEventListener('touchend', touchEndDocumentHandler)
  document.addEventListener('touchcancel', touchEndDocumentHandler)
  originalOnSelectStart = document.onselectstart
  document.onselectstart = () => false
}

const updateScrollPosition = (clientOffset: number) => {
  if (!instance.value || !thumb.value) return
  if (cursorDown === false) return

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

const mouseMoveDocumentHandler = (e: MouseEvent) => {
  updateScrollPosition(e[bar.value.client])
}

const touchMoveDocumentHandler = (e: TouchEvent) => {
  const clientOffset = getClientOffset(e)
  if (clientOffset === undefined) return
  e.preventDefault()
  updateScrollPosition(clientOffset)
}

const endDrag = () => {
  cursorDown = false
  thumbState.value[bar.value.axis] = 0
  document.removeEventListener('mousemove', mouseMoveDocumentHandler)
  document.removeEventListener('mouseup', mouseUpDocumentHandler)
  document.removeEventListener('touchmove', touchMoveDocumentHandler)
  document.removeEventListener('touchend', touchEndDocumentHandler)
  document.removeEventListener('touchcancel', touchEndDocumentHandler)
  restoreOnselectstart()

  if (cursorLeave) {
    queueHideScrollbar()
  }
}

const mouseUpDocumentHandler = () => {
  endDrag()
}

const touchEndDocumentHandler = () => {
  endDrag()
}

const mouseMoveScrollbarHandler = () => {
  showScrollbar()
}

const mouseLeaveScrollbarHandler = () => {
  cursorLeave = true
  if (cursorDown) {
    visible.value = true
    return
  }
  queueHideScrollbar()
}

const scrollHandler = () => {
  showScrollbar()
  queueHideScrollbar()
}

onBeforeUnmount(() => {
  clearHideTimer()
  restoreOnselectstart()
  document.removeEventListener('mouseup', mouseUpDocumentHandler)
  document.removeEventListener('mousemove', mouseMoveDocumentHandler)
  document.removeEventListener('touchmove', touchMoveDocumentHandler)
  document.removeEventListener('touchend', touchEndDocumentHandler)
  document.removeEventListener('touchcancel', touchEndDocumentHandler)
})

const restoreOnselectstart = () => {
  if (document.onselectstart !== originalOnSelectStart)
    document.onselectstart = originalOnSelectStart
}

useEventListener(
  toRef(scrollbar, 'scrollbarElement'),
  'mousemove',
  mouseMoveScrollbarHandler
)
useEventListener(
  toRef(scrollbar, 'scrollbarElement'),
  'mouseleave',
  mouseLeaveScrollbarHandler
)
useEventListener(toRef(scrollbar, 'wrapElement'), 'scroll', scrollHandler)
useEventListener(
  toRef(scrollbar, 'scrollbarElement'),
  'touchstart',
  showScrollbar
)
useEventListener(
  toRef(scrollbar, 'scrollbarElement'),
  'touchend',
  queueHideScrollbar
)
</script>
