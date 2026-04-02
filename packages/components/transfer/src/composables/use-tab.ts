import { computed, nextTick, ref } from 'vue'

import type { TransferDirection } from '../transfer'

const PANEL_INDEX: Record<TransferDirection, number> = {
  left: 0,
  right: 1,
}

export const useTab = () => {
  const activePanel = ref<TransferDirection>('left')
  const panelsRef = ref<HTMLElement>()

  const indicatorStyle = computed(() => ({
    transform: `translateX(${PANEL_INDEX[activePanel.value] * 100}%)`,
  }))

  const syncActivePanel = () => {
    const panels = panelsRef.value
    if (!panels) return

    const width = panels.clientWidth || panels.offsetWidth
    if (!width) return

    activePanel.value = panels.scrollLeft >= width / 2 ? 'right' : 'left'
  }

  const scrollToPanel = async (
    panel: TransferDirection,
    behavior: ScrollBehavior = 'smooth'
  ) => {
    activePanel.value = panel
    await nextTick()

    const panels = panelsRef.value
    if (!panels) return

    const width = panels.clientWidth || panels.offsetWidth
    if (!width) return

    const left = width * PANEL_INDEX[panel]
    if (typeof panels.scrollTo === 'function') {
      panels.scrollTo({ left, behavior })
      return
    }

    panels.scrollLeft = left
  }

  return {
    activePanel,
    indicatorStyle,
    panelsRef,
    scrollToPanel,
    syncActivePanel,
  }
}
