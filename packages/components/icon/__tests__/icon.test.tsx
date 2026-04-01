import { defineComponent } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, test, vi } from 'vitest'
import { pxToRem } from '@element-plus/utils'
import Icon from '../src/icon.vue'

vi.mock('@iconify/vue', () => ({
  Icon: defineComponent({
    name: 'IconifyStub',
    props: {
      icon: {
        type: [String, Object],
        required: true,
      },
    },
    setup(props, { attrs }) {
      return () => (
        <svg
          {...attrs}
          data-iconify={typeof props.icon === 'string' ? props.icon : 'object'}
        />
      )
    },
  }),
}))

describe('Icon.vue', () => {
  test('render', () => {
    const wrapper = mount(() => <Icon color="#000000" size={18} />)
    expect(wrapper.element.getAttribute('style')).toContain(`--color: #000000`)
    expect(wrapper.element.getAttribute('style')).toContain(
      `font-size: ${pxToRem(18)}`
    )
  })

  test('keeps legacy string rendering behavior', () => {
    const wrapper = mount(Icon, {
      props: {
        icon: 'time',
      },
    })

    expect(wrapper.find('[data-iconify]').exists()).toBe(false)
  })

  test('renders iconify names natively', () => {
    const wrapper = mount(() => <Icon icon="mdi:home" />)

    expect(wrapper.find('[data-iconify="mdi:home"]').exists()).toBe(true)
  })

  test('prefers slots over icon prop', () => {
    const wrapper = mount(() => (
      <Icon icon="mdi:home">
        <span class="slot-icon">slot</span>
      </Icon>
    ))

    expect(wrapper.find('.slot-icon').exists()).toBe(true)
    expect(wrapper.find('[data-iconify="mdi:home"]').exists()).toBe(false)
  })
})
