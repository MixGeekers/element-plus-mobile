import { nextTick, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { afterAll, beforeAll, describe, expect, it, vi } from 'vitest'
import { ElSplitter, ElSplitterPanel } from '../index'
import { useElementSize } from './__mocks__/vueuse'

// jsdom does not support useElementSize and useResizeObserver so mock
vi.mock('@vueuse/core', () => {
  return import('./__mocks__/vueuse')
})

const createPointerEvent = (
  type: string,
  values: Record<string, number | string | boolean> = {}
) => {
  const event = new MouseEvent(type, {
    bubbles: true,
    cancelable: true,
  }) as PointerEvent

  Object.entries({
    pointerId: 1,
    pointerType: 'touch',
    button: 0,
    ...values,
  }).forEach(([key, value]) => {
    Object.defineProperty(event, key, { value })
  })

  return event
}

describe('Splitter', () => {
  const mockResizeObserver = vi.fn(() => ({
    observe: vi.fn(),
    unobserve: vi.fn(),
    disconnect: vi.fn(),
  }))

  beforeAll(() => {
    window.ResizeObserver = mockResizeObserver
  })

  afterAll(() => {
    vi.restoreAllMocks()
  })

  it('should render correctly', () => {
    const wrapper = mount(() => (
      <ElSplitter>
        <ElSplitterPanel>Left Panel</ElSplitterPanel>
        <ElSplitterPanel>Right Panel</ElSplitterPanel>
      </ElSplitter>
    ))

    expect(wrapper.find('.el-splitter').exists()).toBe(true)
    expect(wrapper.find('.el-splitter__vertical').exists()).toBe(true)
    expect(wrapper.findAll('.el-splitter-panel')).toHaveLength(2)
  })

  it('should render with horizontal layout', () => {
    const wrapper = mount(() => (
      <ElSplitter layout="horizontal">
        <ElSplitterPanel>Left Panel</ElSplitterPanel>
        <ElSplitterPanel>Right Panel</ElSplitterPanel>
      </ElSplitter>
    ))

    expect(wrapper.find('.el-splitter__horizontal').exists()).toBe(true)
  })

  it('should keep panels size consistent with props.size when containerSize is 0.', async () => {
    const splitterWidth = ref(100)
    const size = ref('30%')
    const mockSize = useElementSize.mockReturnValue({
      width: splitterWidth,
      height: ref(400),
    })

    const wrapper = mount(() => (
      <div style={{ width: splitterWidth.value, height: '400px' }}>
        <ElSplitter layout="horizontal">
          <ElSplitterPanel>
            <div class="demo-panel">1</div>
          </ElSplitterPanel>
          <ElSplitterPanel size={size.value}>
            <div class="demo-panel">2</div>
          </ElSplitterPanel>
        </ElSplitter>
      </div>
    ))

    await nextTick()
    const panels = wrapper.findAll('.el-splitter-panel')

    // default size
    expect(panels[0].attributes('style')).toContain('flex-basis: 70px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 30px;')

    splitterWidth.value = 0
    size.value = '80%'

    await nextTick()

    // default size
    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 0px;')

    const panelComps = wrapper.findComponent({ name: 'ElSplitter' }).vm.panels

    expect(panelComps[0].size).toBeUndefined()
    expect(panelComps[1].size).toBe('80%')

    mockSize.mockRestore()
  })

  it('should respect min and max size constraints', async () => {
    const wrapper = mount(() => (
      <div style={{ width: '400px', height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel size={150} min={100} max={200}>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()
    const panels = wrapper.findAll('.el-splitter-panel')

    // default size
    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')

    const simulateDrag = async (startPos: number, endPos: number) => {
      const splitBar = wrapper.find('.el-splitter-bar__dragger')

      splitBar.element.dispatchEvent(
        createPointerEvent('pointerdown', { pageY: startPos })
      )
      window.dispatchEvent(createPointerEvent('pointermove', { pageY: endPos }))
      window.dispatchEvent(createPointerEvent('pointerup', { pageY: endPos }))

      await nextTick()
    }

    // Test min size constraint: drag left to minimum value 100px
    await simulateDrag(150, 50)
    expect(panels[0].attributes('style')).toContain('flex-basis: 100px;')

    // Test max size constraint: drag right to maximum value 200px
    await simulateDrag(50, 150)
    expect(panels[0].attributes('style')).toContain('flex-basis: 200px;')
  })

  it('should support pointer dragging', async () => {
    const wrapper = mount(() => (
      <div style={{ width: '400px', height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel>Left Panel</ElSplitterPanel>
          <ElSplitterPanel>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))

    await nextTick()
    const panels = wrapper.findAll('.el-splitter-panel')
    const splitBar = wrapper.find('.el-splitter-bar__dragger')

    splitBar.element.dispatchEvent(
      createPointerEvent('pointerdown', { pageY: 200, pointerType: 'touch' })
    )
    window.dispatchEvent(
      createPointerEvent('pointermove', { pageY: 100, pointerType: 'touch' })
    )
    await nextTick()
    window.dispatchEvent(
      createPointerEvent('pointerup', { pageY: 100, pointerType: 'touch' })
    )
    await nextTick()

    expect(panels[0].attributes('style')).toContain('flex-basis: 100px;')
  })

  it('should handle collapse', async () => {
    const wrapper = mount(() => (
      <div style={{ width: '400px', height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel size={150} collapsible>
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__collapse-icon.is-start'
    )
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__collapse-icon.is-end'
    )

    // default size
    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')

    // Click collapse button
    await startCollapseButton.trigger('click')
    await nextTick()

    // Panel should be collapsed (size = 0)
    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')

    // Click collapse button  to expand
    await endCollapseButton.trigger('click')
    await nextTick()

    // Panel should be restored to original size
    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')
  })

  it('should emit resize events', async () => {
    const onResizeStart = vi.fn()
    const onResize = vi.fn()
    const onResizeEnd = vi.fn()

    const wrapper = mount(() => (
      <div style={{ width: '400px', height: '400px' }}>
        <ElSplitter
          onResizeStart={onResizeStart}
          onResize={onResize}
          onResizeEnd={onResizeEnd}
        >
          <ElSplitterPanel>Left Panel</ElSplitterPanel>
          <ElSplitterPanel>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const simulateDrag = async (startPos: number, endPos: number) => {
      const splitBar = wrapper.find('.el-splitter-bar__dragger')

      splitBar.element.dispatchEvent(
        createPointerEvent('pointerdown', { pageY: startPos })
      )
      await nextTick()

      const pointerMove = createPointerEvent('pointermove', { pageY: endPos })
      window.dispatchEvent(pointerMove)
      await nextTick()
      window.dispatchEvent(pointerMove)

      window.dispatchEvent(createPointerEvent('pointerup', { pageY: endPos }))

      await nextTick()
    }

    await simulateDrag(200, 100)

    expect(onResizeStart).toHaveBeenCalledWith(0, [200, 200])
    expect(onResize).toHaveBeenCalledTimes(2)
    expect(onResize.mock.calls[0]).toEqual([0, [200, 200]])
    expect(onResize.mock.calls[1]).toEqual([0, [100, 300]])
    expect(onResizeEnd).toHaveBeenCalledWith(0, [100, 300])
  })

  it('should emit collapse event', async () => {
    const onCollapse = vi.fn()
    const wrapper = mount(() => (
      <div style={{ width: '400px', height: '400px' }}>
        <ElSplitter onCollapse={onCollapse}>
          <ElSplitterPanel collapsible>Left Panel</ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__collapse-icon.is-start'
    )
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__collapse-icon.is-end'
    )

    // Click collapse button
    await startCollapseButton.trigger('click')
    await nextTick()
    expect(onCollapse).toHaveBeenCalledWith(0, 'start', [0, 400])

    // Click collapse button to expand
    await endCollapseButton.trigger('click')
    await nextTick()
    expect(onCollapse).toHaveBeenCalledWith(0, 'end', [200, 200])
  })

  it('should collapse normally when size is two-way bound and min & max is set', async () => {
    const size = ref(150)
    const wrapper = mount(() => (
      <div style={{ width: '400px', height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel
            v-model:size={size.value}
            collapsible
            min={50}
            max={200}
          >
            Left Panel
          </ElSplitterPanel>
          <ElSplitterPanel collapsible>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const panels = wrapper.findAll('.el-splitter-panel')
    const startCollapseButton = wrapper.find(
      '.el-splitter-bar__collapse-icon.is-start'
    )
    const endCollapseButton = wrapper.find(
      '.el-splitter-bar__collapse-icon.is-end'
    )

    // default size
    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')

    // Click collapse button
    await startCollapseButton.trigger('click')
    await nextTick()

    // Panel should be collapsed (size = 0)
    expect(panels[0].attributes('style')).toContain('flex-basis: 0px;')

    // Click collapse button to expand
    await endCollapseButton.trigger('click')
    await nextTick()

    // Panel should be restored to original size
    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')

    // Click collapse button  to expand
    await endCollapseButton.trigger('click')
    await nextTick()

    // Panel should be collapsed (size = 400)
    expect(panels[0].attributes('style')).toContain('flex-basis: 400px;')
  })

  it('should not update panel size until drag ends when lazy is true', async () => {
    const wrapper = mount(() => (
      <div style={{ width: '400px', height: '400px' }}>
        <ElSplitter lazy>
          <ElSplitterPanel>Left Panel</ElSplitterPanel>
          <ElSplitterPanel>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()
    const panels = wrapper.findAll('.el-splitter-panel')
    const splitBar = wrapper.find('.el-splitter-bar__dragger')

    splitBar.element.dispatchEvent(
      createPointerEvent('pointerdown', { pageY: 200 })
    )
    window.dispatchEvent(createPointerEvent('pointermove', { pageY: 100 }))
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 200px;')

    window.dispatchEvent(createPointerEvent('pointerup', { pageY: 100 }))
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 100px;')
  })

  it('should update panel size immediately when lazy is false', async () => {
    const wrapper = mount(() => (
      <div style={{ width: '400px', height: '400px' }}>
        <ElSplitter>
          <ElSplitterPanel>Left Panel</ElSplitterPanel>
          <ElSplitterPanel>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()
    const panels = wrapper.findAll('.el-splitter-panel')
    const splitBar = wrapper.find('.el-splitter-bar__dragger')

    splitBar.element.dispatchEvent(
      createPointerEvent('pointerdown', { pageY: 200 })
    )
    window.dispatchEvent(createPointerEvent('pointermove', { pageY: 100 }))
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 100px;')

    window.dispatchEvent(createPointerEvent('pointerup', { pageY: 100 }))
    await nextTick()
    expect(panels[0].attributes('style')).toContain('flex-basis: 100px;')
  })

  it('should emit resizeEnd with latest sizes data in lazy mode', async () => {
    const onResizeEnd = vi.fn()
    const wrapper = mount(() => (
      <div style={{ width: '400px', height: '400px' }}>
        <ElSplitter lazy onResizeEnd={onResizeEnd}>
          <ElSplitterPanel>Left Panel</ElSplitterPanel>
          <ElSplitterPanel>Right Panel</ElSplitterPanel>
        </ElSplitter>
      </div>
    ))
    await nextTick()

    const splitBar = wrapper.find('.el-splitter-bar__dragger')

    splitBar.element.dispatchEvent(
      createPointerEvent('pointerdown', { pageY: 200 })
    )
    await nextTick()

    window.dispatchEvent(createPointerEvent('pointermove', { pageY: 150 }))
    await nextTick()

    window.dispatchEvent(createPointerEvent('pointerup', { pageY: 150 }))
    await nextTick()

    expect(onResizeEnd).toHaveBeenCalledWith(0, [150, 250])

    const panels = wrapper.findAll('.el-splitter-panel')
    expect(panels[0].attributes('style')).toContain('flex-basis: 150px;')
    expect(panels[1].attributes('style')).toContain('flex-basis: 250px;')
  })

  it('should not still display the mask after the panel updates', async () => {
    const show = ref(true)
    const wrapper = mount(() => (
      <ElSplitter onResizeStart={() => (show.value = false)}>
        {show.value ? (
          <ElSplitterPanel v-if={show.value}>Left Panel</ElSplitterPanel>
        ) : null}
        <ElSplitterPanel>Right Panel</ElSplitterPanel>
      </ElSplitter>
    ))
    await nextTick()

    expect(wrapper.find('.el-splitter__mask').exists()).toBeFalsy()

    const splitBar = wrapper.find('.el-splitter-bar__dragger')
    splitBar.element.dispatchEvent(
      createPointerEvent('pointerdown', { pageY: 200 })
    )
    await nextTick()
    expect(wrapper.find('.el-splitter__mask').exists()).toBeFalsy()
  })
})
