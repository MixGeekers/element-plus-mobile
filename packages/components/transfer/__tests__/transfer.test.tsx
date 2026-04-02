import { nextTick, reactive, ref } from 'vue'
import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import Transfer from '../src/transfer.vue'

import type { TransferDataItem, renderContent } from '../src/transfer'

describe('Transfer', () => {
  const getTestData = () => {
    const data = []
    for (let i = 1; i <= 15; i++) {
      data.push({
        key: i,
        label: `备选项 ${i}`,
        disabled: i % 4 === 0,
      })
    }
    return data
  }

  const getTransfer = (wrapper: ReturnType<typeof mount>) =>
    wrapper.findComponent({ name: 'ElTransfer' })

  const getPanelLabels = (
    wrapper: ReturnType<typeof mount>,
    direction: 'left' | 'right' = 'left'
  ) =>
    wrapper.findAll(
      `.el-transfer__panel[data-direction="${direction}"] .el-transfer-panel__body .el-checkbox__label`
    )

  it('create', () => {
    const wrapper = mount(() => <Transfer data={getTestData()} />)
    expect(getTransfer(wrapper).exists()).toBe(true)
  })

  it('default target list', () => {
    const value = ref([1, 4])
    const wrapper = mount(() => (
      <Transfer v-model={value.value} data={getTestData()} />
    ))
    const transferVm: any = getTransfer(wrapper).vm
    expect(transferVm.sourceData.length).toBe(13)
  })

  it('filterable', async () => {
    const value = ref([])
    const method = (query: string, option: TransferDataItem) => {
      return option.key === Number(query)
    }

    const wrapper = mount(() => (
      <Transfer
        v-model={value.value}
        filterable
        data={getTestData()}
        filter-method={method}
      />
    ))

    await wrapper.find('.el-transfer__filter input').setValue('1')
    const leftList: any = wrapper.findComponent({ name: 'ElTransferPanel' })
    expect(leftList.vm.filteredData.length).toBe(1)
  })

  it('transfer', async () => {
    const value = ref([1, 4])
    const wrapper = mount(() => (
      <Transfer
        v-model={value.value}
        leftDefaultChecked={[2, 3]}
        rightDefaultChecked={[1]}
        data={getTestData()}
      />
    ))

    const transferVm: any = getTransfer(wrapper).vm

    transferVm.addToLeft()
    await nextTick()
    expect(transferVm.sourceData.length).toBe(14)

    transferVm.addToRight()
    await nextTick()
    expect(transferVm.sourceData.length).toBe(12)
  })

  it('customize', () => {
    const state = reactive({
      value: [2],
      titles: ['表1', '表2'],
      format: { noChecked: 'no', hasChecked: 'has' },
    })
    const renderFunc: renderContent = (_h, option) => (
      <span>{`${option.key} - ${option.label}`}</span>
    )
    const wrapper = mount(() => (
      <Transfer
        v-model={state.value}
        titles={state.titles as [string, string]}
        format={state.format}
        renderContent={renderFunc}
        data={getTestData()}
      />
    ))

    const transfer = getTransfer(wrapper)
    expect(
      transfer
        .find('.el-transfer__tab.is-active .el-transfer__tab-title')
        .text()
    ).toBe('表1')
    expect(
      wrapper
        .find(
          '.el-transfer__panel[data-direction="left"] .el-transfer-panel__list .el-checkbox__label span'
        )
        .text()
    ).toBe('1 - 备选项 1')
    expect(transfer.find('.el-transfer__toolbar-summary').text()).toBe('no')
  })

  it('check', async () => {
    const value = ref([])
    const wrapper = mount(() => (
      <Transfer v-model={value.value} data={getTestData()} />
    ))

    const leftList: any = wrapper.findComponent({ name: 'ElTransferPanel' })
    leftList.vm.handleAllCheckedChange(true)
    await nextTick()

    expect(leftList.vm.checked.length).toBe(12)
    expect(
      getTransfer(wrapper).find('.el-transfer__action-bar').isVisible()
    ).toBe(true)
  })

  it('switches tabs and moves checked items through action bar', async () => {
    const value = ref([1])
    const wrapper = mount(() => (
      <Transfer
        v-model={value.value}
        leftDefaultChecked={[2, 3]}
        data={getTestData()}
      />
    ))

    const transfer = getTransfer(wrapper)
    expect(transfer.attributes('data-active-panel')).toBe('left')

    await transfer.findAll('.el-transfer__tab')[1].trigger('click')
    await nextTick()
    expect(transfer.attributes('data-active-panel')).toBe('right')

    await transfer.findAll('.el-transfer__tab')[0].trigger('click')
    await nextTick()
    await transfer.find('.el-transfer__action-bar .el-button').trigger('click')
    await nextTick()
    await nextTick()

    expect(value.value).toStrictEqual([1, 2, 3])
    expect(transfer.attributes('data-active-panel')).toBe('right')
  })

  describe('target order', () => {
    it('original(default)', async () => {
      const value = ref([1, 4])
      const wrapper = mount(() => (
        <Transfer
          v-model={value.value}
          leftDefaultChecked={[2, 3]}
          data={getTestData()}
        />
      ))

      const transferVm: any = getTransfer(wrapper).vm
      transferVm.addToRight()
      await nextTick()
      const targetItems = getPanelLabels(wrapper, 'right')
      expect(targetItems.map((item) => item.text())).toStrictEqual([
        '备选项 1',
        '备选项 2',
        '备选项 3',
        '备选项 4',
      ])
    })

    it('push', async () => {
      const value = ref([1, 4])
      const wrapper = mount(() => (
        <Transfer
          v-model={value.value}
          leftDefaultChecked={[2, 3]}
          target-order="push"
          data={getTestData()}
        />
      ))

      const transferVm: any = getTransfer(wrapper).vm
      transferVm.addToRight()
      await nextTick()
      const targetItems = getPanelLabels(wrapper, 'right')
      expect(targetItems.map((item) => item.text())).toStrictEqual([
        '备选项 1',
        '备选项 4',
        '备选项 2',
        '备选项 3',
      ])
    })

    it('unshift', async () => {
      const value = ref([1, 4])
      const wrapper = mount(() => (
        <Transfer
          v-model={value.value}
          leftDefaultChecked={[2, 3]}
          target-order="unshift"
          data={getTestData()}
        />
      ))

      const transferVm: any = getTransfer(wrapper).vm
      transferVm.addToRight()
      await nextTick()
      const targetItems = getPanelLabels(wrapper, 'right')
      expect(targetItems.map((item) => item.text())).toStrictEqual([
        '备选项 2',
        '备选项 3',
        '备选项 1',
        '备选项 4',
      ])
    })
  })

  describe('validate clearQuery', () => {
    it('set query and clear query', async () => {
      const value = ref([])
      const wrapper = mount(() => (
        <Transfer
          v-model={value.value}
          filterable={true}
          data={getTestData()}
        />
      ))

      const transferVm: any = getTransfer(wrapper).vm
      transferVm.leftPanel.query = '11'
      transferVm.rightPanel.query = '22'
      await nextTick()
      expect(transferVm.leftPanel.query).toBe('11')
      expect(transferVm.rightPanel.query).toBe('22')

      transferVm.clearQuery('left')
      await nextTick()
      expect(transferVm.leftPanel.query).toBeFalsy()

      transferVm.clearQuery('right')
      await nextTick()
      expect(transferVm.rightPanel.query).toBeFalsy()
    })
  })

  describe('render default slot', () => {
    it('single comment node', () => {
      const wrapper = mount(Transfer, {
        props: {
          data: getTestData(),
        },
        slots: {
          default: '<!--  -->',
        },
      })

      const labels = getPanelLabels(wrapper)
      expect(labels.map((l) => l.text())).toMatchInlineSnapshot(`
        [
          "备选项 1",
          "备选项 2",
          "备选项 3",
          "备选项 4",
          "备选项 5",
          "备选项 6",
          "备选项 7",
          "备选项 8",
          "备选项 9",
          "备选项 10",
          "备选项 11",
          "备选项 12",
          "备选项 13",
          "备选项 14",
          "备选项 15",
        ]
      `)
    })

    it('multiple comment nodes', () => {
      const wrapper = mount(Transfer, {
        props: {
          data: getTestData(),
        },
        slots: {
          default: `
<!--  -->
<!--  -->
`,
        },
      })

      const labels = getPanelLabels(wrapper)
      expect(labels.map((l) => l.text())).toMatchInlineSnapshot(`
        [
          "备选项 1",
          "备选项 2",
          "备选项 3",
          "备选项 4",
          "备选项 5",
          "备选项 6",
          "备选项 7",
          "备选项 8",
          "备选项 9",
          "备选项 10",
          "备选项 11",
          "备选项 12",
          "备选项 13",
          "备选项 14",
          "备选项 15",
        ]
      `)
    })

    it('contents with multiple comment nodes', () => {
      const wrapper = mount(Transfer, {
        props: {
          data: getTestData(),
        },
        slots: {
          default: `
<!--  -->
1
<!--  -->
2
`,
        },
      })

      const labels = getPanelLabels(wrapper)
      expect(labels.map((l) => l.text())).toMatchInlineSnapshot(`
        [
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
          "1  2",
        ]
      `)
    })
  })

  describe('empty slots', () => {
    it('render left-empty and right-empty slots', () => {
      const wrapper = mount(() => (
        <Transfer
          data={[]}
          v-slots={{
            'left-empty': () => <span>No data</span>,
            'right-empty': () => <span>No data</span>,
          }}
        />
      ))

      const panels = wrapper.findAll('.el-transfer-panel__empty')
      expect(panels).toHaveLength(2)
      expect(panels[0].text()).toBe('No data')
      expect(panels[1].text()).toBe('No data')
    })

    it('render default empty content when slots not provided', () => {
      const wrapper = mount(() => <Transfer data={[]} />)

      const panels = wrapper.findAll('.el-transfer-panel__empty')
      expect(panels).toHaveLength(2)
      expect(panels[0].text()).toBe('No data')
      expect(panels[1].text()).toBe('No data')
    })

    it('show no match content when filtering', async () => {
      const wrapper = mount(() => (
        <Transfer
          data={getTestData()}
          filterable={true}
          v-slots={{
            'left-empty': () => <span>No data</span>,
          }}
        />
      ))

      const leftPanel: any = wrapper.findComponent({ name: 'ElTransferPanel' })
      leftPanel.vm.query = 'non-existing-data'
      await nextTick()

      const emptyContent = wrapper.find('.el-transfer-panel__empty')
      expect(emptyContent.exists()).toBe(true)
      expect(emptyContent.text()).toBe('No data')
    })
  })
})
