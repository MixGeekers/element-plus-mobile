import { nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import makeScroll from '@element-plus/test-utils/make-scroll'
import defineGetter from '@element-plus/test-utils/define-getter'
import Scrollbar from '../src/scrollbar.vue'
import Thumb from '../src/thumb.vue'

describe('ScrollBar', () => {
  test('vertical', async () => {
    const outerHeight = 204
    const innerHeight = 500
    const wrapper = mount(() => (
      <Scrollbar style={`height: ${outerHeight}px;`}>
        <div style={`height: ${innerHeight}px;`}></div>
      </Scrollbar>
    ))

    const scrollDom = wrapper.find('.el-scrollbar__wrap').element

    const offsetHeightRestore = defineGetter(
      scrollDom,
      'offsetHeight',
      outerHeight
    )
    const scrollHeightRestore = defineGetter(
      scrollDom,
      'scrollHeight',
      innerHeight
    )

    await makeScroll(scrollDom, 'scrollTop', 100)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
      'transform: translateY(50%); height: 5rem;'
    )
    await makeScroll(scrollDom, 'scrollTop', 300)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
      'transform: translateY(150%); height: 5rem;'
    )
    offsetHeightRestore()
    scrollHeightRestore()
  })

  test('horizontal', async () => {
    const outerWidth = 204
    const innerWidth = 500
    const wrapper = mount(() => (
      <Scrollbar style={`height: 100px; width: ${outerWidth}px;`}>
        <div style={`height: 100px; width: ${innerWidth}px;`}></div>
      </Scrollbar>
    ))

    const scrollDom = wrapper.find('.el-scrollbar__wrap').element

    const offsetWidthRestore = defineGetter(
      scrollDom,
      'offsetWidth',
      outerWidth
    )
    const scrollWidthRestore = defineGetter(
      scrollDom,
      'scrollWidth',
      innerWidth
    )

    await makeScroll(scrollDom, 'scrollLeft', 100)
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain(
      'transform: translateX(50%); width: 5rem;'
    )
    await makeScroll(scrollDom, 'scrollLeft', 300)
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain(
      'transform: translateX(150%); width: 5rem;'
    )
    offsetWidthRestore()
    scrollWidthRestore()
  })

  test('both vertical and horizontal', async () => {
    const outerHeight = 204
    const innerHeight = 500
    const outerWidth = 204
    const innerWidth = 500
    const wrapper = mount(() => (
      <Scrollbar style={`height: ${outerHeight}px; width: ${outerWidth}px;`}>
        <div style={`height: ${innerHeight}px; width: ${innerWidth}px;`}></div>
      </Scrollbar>
    ))

    const scrollDom = wrapper.find('.el-scrollbar__wrap').element

    const offsetHeightRestore = defineGetter(
      scrollDom,
      'offsetHeight',
      outerHeight
    )
    const scrollHeightRestore = defineGetter(
      scrollDom,
      'scrollHeight',
      innerHeight
    )
    const offsetWidthRestore = defineGetter(
      scrollDom,
      'offsetWidth',
      outerWidth
    )
    const scrollWidthRestore = defineGetter(
      scrollDom,
      'scrollWidth',
      innerWidth
    )

    await makeScroll(scrollDom, 'scrollTop', 100)
    await makeScroll(scrollDom, 'scrollLeft', 100)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
      'transform: translateY(50%); height: 5rem;'
    )
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain(
      'transform: translateX(50%); width: 5rem;'
    )
    await makeScroll(scrollDom, 'scrollTop', 300)
    await makeScroll(scrollDom, 'scrollLeft', 300)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
      'transform: translateY(150%); height: 5rem;'
    )
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain(
      'transform: translateX(150%); width: 5rem;'
    )

    offsetHeightRestore()
    scrollHeightRestore()
    offsetWidthRestore()
    scrollWidthRestore()
  })

  test('should support touch dragging on thumb', async () => {
    const outerHeight = 204
    const innerHeight = 500
    const wrapper = mount(() => (
      <Scrollbar style={`height: ${outerHeight}px;`}>
        <div style={`height: ${innerHeight}px;`}></div>
      </Scrollbar>
    ))

    const scrollDom = wrapper.find('.el-scrollbar__wrap').element as HTMLElement
    const bar = wrapper.find('.el-scrollbar__bar.is-vertical')
      .element as HTMLElement
    const thumb = wrapper.find(
      '.el-scrollbar__bar.is-vertical .el-scrollbar__thumb'
    ).element as HTMLElement

    const offsetHeightRestore = defineGetter(
      scrollDom,
      'offsetHeight',
      outerHeight
    )
    const scrollHeightRestore = defineGetter(
      scrollDom,
      'scrollHeight',
      innerHeight
    )
    const barHeightRestore = defineGetter(bar, 'offsetHeight', outerHeight - 4)
    const thumbHeightRestore = defineGetter(thumb, 'offsetHeight', 80)

    await nextTick()
    wrapper.find('.el-scrollbar__wrap').trigger('scroll')
    await nextTick()

    const touchStart = new Event('touchstart', {
      bubbles: true,
      cancelable: true,
    })
    Object.defineProperty(touchStart, 'touches', {
      value: [{ pageY: 40, clientY: 40 }],
    })
    Object.defineProperty(touchStart, 'changedTouches', {
      value: [{ pageY: 40, clientY: 40 }],
    })
    thumb.dispatchEvent(touchStart)

    const touchMove = new Event('touchmove', {
      bubbles: true,
      cancelable: true,
    })
    Object.defineProperty(touchMove, 'touches', {
      value: [{ pageY: 120, clientY: 120 }],
    })
    Object.defineProperty(touchMove, 'changedTouches', {
      value: [{ pageY: 120, clientY: 120 }],
    })
    document.dispatchEvent(touchMove)

    const touchEnd = new Event('touchend', {
      bubbles: true,
      cancelable: true,
    })
    Object.defineProperty(touchEnd, 'touches', {
      value: [],
    })
    Object.defineProperty(touchEnd, 'changedTouches', {
      value: [{ pageY: 120, clientY: 120 }],
    })
    document.dispatchEvent(touchEnd)

    expect(scrollDom.scrollTop).toBeGreaterThan(0)

    offsetHeightRestore()
    scrollHeightRestore()
    barHeightRestore()
    thumbHeightRestore()
  })

  test('should render height props', async () => {
    const outerHeight = 204
    const innerHeight = 500
    const wrapper = mount(() => (
      <Scrollbar height={`${outerHeight}px`}>
        <div style={`height: ${innerHeight}px;`}></div>
      </Scrollbar>
    ))

    expect(wrapper.find('.el-scrollbar__wrap').attributes('style')).toContain(
      'height: 204px;'
    )
  })

  test('should render max-height props', async () => {
    const outerHeight = 204
    const innerHeight = 100
    const wrapper = mount(() => (
      <Scrollbar max-height={`${outerHeight}px`}>
        <div style={`height: ${innerHeight}px;`}></div>
      </Scrollbar>
    ))

    expect(wrapper.find('.el-scrollbar__wrap').attributes('style')).toContain(
      'max-height: 204px;'
    )
  })

  test('should render always props', async () => {
    const outerHeight = 204
    const innerHeight = 500
    const wrapper = mount(() => (
      <Scrollbar height={`${outerHeight}px`} always>
        <div style={`height: ${innerHeight}px;`}></div>
      </Scrollbar>
    ))

    expect(wrapper.find('.el-scrollbar__bar').attributes('style')).toBeFalsy()
  })

  test('set scrollTop & scrollLeft', async () => {
    const outerHeight = 204
    const innerHeight = 500
    const outerWidth = 204
    const innerWidth = 500
    const wrapper = mount({
      setup() {
        return () => (
          <Scrollbar
            ref="scrollbar"
            style={`height: ${outerHeight}px; width: ${outerWidth}px;`}
            always
          >
            <div
              style={`height: ${innerHeight}px; width: ${innerWidth}px;`}
            ></div>
          </Scrollbar>
        )
      },
    })

    const scrollbar = wrapper.findComponent({ ref: 'scrollbar' }).vm
    const scrollWrap = wrapper.find('.el-scrollbar__wrap')
    const scrollDom = scrollWrap.element

    const offsetHeightRestore = defineGetter(
      scrollDom,
      'offsetHeight',
      outerHeight
    )
    const scrollHeightRestore = defineGetter(
      scrollDom,
      'scrollHeight',
      innerHeight
    )
    const offsetWidthRestore = defineGetter(
      scrollDom,
      'offsetWidth',
      outerWidth
    )
    const scrollWidthRestore = defineGetter(
      scrollDom,
      'scrollWidth',
      innerWidth
    )

    scrollbar.setScrollTop(100)
    await nextTick()
    scrollWrap.trigger('scroll')
    await nextTick()
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
      'transform: translateY(50%); height: 5rem;'
    )

    scrollbar.setScrollLeft(100)
    await nextTick()
    scrollWrap.trigger('scroll')
    await nextTick()
    expect(wrapper.find('.is-horizontal div').attributes('style')).toContain(
      'transform: translateX(50%); width: 5rem;'
    )

    offsetHeightRestore()
    scrollHeightRestore()
    offsetWidthRestore()
    scrollWidthRestore()
  })

  test('should render min-size props', async () => {
    const outerHeight = 204
    const innerHeight = 10000
    const wrapper = mount(() => (
      <Scrollbar style={`height: ${outerHeight}px;`}>
        <div style={`height: ${innerHeight}px;`}></div>
      </Scrollbar>
    ))

    const scrollDom = wrapper.find('.el-scrollbar__wrap').element

    const offsetHeightRestore = defineGetter(
      scrollDom,
      'offsetHeight',
      outerHeight
    )
    const scrollHeightRestore = defineGetter(
      scrollDom,
      'scrollHeight',
      innerHeight
    )

    await makeScroll(scrollDom, 'scrollTop', 0)
    expect(wrapper.find('.is-vertical div').attributes('style')).toContain(
      'transform: translateY(0%); height: 1.5rem;'
    )
    offsetHeightRestore()
    scrollHeightRestore()
  })

  test('should render tag props', async () => {
    const wrapper = mount(() => (
      <Scrollbar tag="ul">
        {[1, 2, 3].map((item) => (
          <li>{item}</li>
        ))}
      </Scrollbar>
    ))

    expect(
      wrapper.find('.el-scrollbar__view').element instanceof HTMLUListElement
    ).toBeTruthy()
  })

  test('should render wrap-style props', async () => {
    const wrapStyle = 'background: red;'
    const wrapper = mount(() => <Scrollbar wrap-style={wrapStyle} />)

    expect(wrapper.find('.el-scrollbar__wrap').attributes('style')).toContain(
      wrapStyle
    )
  })

  test('should render wrap-class props', async () => {
    const wrapClass = 'test-wrap-class'
    const wrapper = mount(() => <Scrollbar wrap-class={wrapClass} />)

    expect(wrapper.find('.el-scrollbar__wrap').classes()).toContain(wrapClass)
  })

  test('should render view-style props', async () => {
    const viewStyle = 'display: inline-block;'
    const wrapper = mount(() => <Scrollbar view-style={viewStyle} />)

    expect(wrapper.find('.el-scrollbar__view').attributes('style')).toContain(
      viewStyle
    )
  })

  test('should render view-class props', async () => {
    const viewClass = 'test-view-class'
    const wrapper = mount(() => <Scrollbar view-class={viewClass} />)

    expect(wrapper.find('.el-scrollbar__view').classes()).toContain(viewClass)
  })

  test('should not bubble up click event on click scrollbar', async () => {
    const parentClick = vi.fn()
    const wrapper = mount(() => (
      <div onClick={parentClick}>
        <Scrollbar style={{ width: '100px' }}>
          ILoveRemILoveRemILoveRem
        </Scrollbar>
      </div>
    ))
    const scrollbar = wrapper.findComponent(Thumb)
    await scrollbar.trigger('click')
    expect(parentClick).toHaveBeenCalledTimes(0)
  })

  test('should emit end-reached event foreach direction', async () => {
    const endReached = vi.fn()
    const outerHeight = 204
    const innerHeight = 500
    const outerWidth = 204
    const innerWidth = 500
    const wrapper = mount(() => (
      <Scrollbar
        style={`height: ${outerHeight}px; width: ${outerWidth}px;`}
        onEnd-reached={endReached}
      >
        <div style={`height: ${innerHeight}px; width: ${innerWidth}px;`}></div>
      </Scrollbar>
    ))

    const scrollDom = wrapper.find('.el-scrollbar__wrap').element

    const offsetHeightRestore = defineGetter(
      scrollDom,
      'offsetHeight',
      outerHeight
    )
    const scrollHeightRestore = defineGetter(
      scrollDom,
      'scrollHeight',
      innerHeight
    )
    const offsetWidthRestore = defineGetter(
      scrollDom,
      'offsetWidth',
      outerWidth
    )
    const scrollWidthRestore = defineGetter(
      scrollDom,
      'scrollWidth',
      innerWidth
    )

    await makeScroll(scrollDom, 'scrollTop', innerHeight)
    expect(endReached).toHaveBeenCalledWith('bottom')
    endReached.mockReset()
    await makeScroll(scrollDom, 'scrollTop', 0)
    expect(endReached).toHaveBeenCalledWith('top')
    endReached.mockReset()
    await makeScroll(scrollDom, 'scrollLeft', innerWidth)
    expect(endReached).toHaveBeenCalledWith('right')
    endReached.mockReset()
    await makeScroll(scrollDom, 'scrollLeft', 0)
    expect(endReached).toHaveBeenCalledWith('left')
    endReached.mockReset()
    await makeScroll(scrollDom, 'scrollLeft', innerWidth / 2)
    expect(endReached).not.toHaveBeenCalled()
    endReached.mockReset()
    await makeScroll(scrollDom, 'scrollTop', innerHeight / 2)
    expect(endReached).not.toHaveBeenCalled()

    offsetHeightRestore()
    scrollHeightRestore()
    offsetWidthRestore()
    scrollWidthRestore()
  })
})
