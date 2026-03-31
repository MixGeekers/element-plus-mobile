---
title: 时间选择器
lang: zh-CN
---

# 时间选择器

使用时间选择器进行时间输入。

## 任意时间选择器

可以任意选择时间。

:::demo 默认情况下，您可以滚动鼠标滚轮来选择时间，或者当设置 `arrow-control` 属性时，您可以使用控制箭头。

time-picker/basic

:::

## 限制时间范围

您还可以限制时间范围。

:::demo 通过指定 `disabledHours` `disabledMinutes` 和 `disabledSeconds` 来限制时间范围。

time-picker/basic-range

:::

## 任意时间范围

可以选择任意时间范围。

:::demo 我们可以通过添加 `is-range` 属性来选择时间范围。此外，范围模式还支持 `arrow-control`。

time-picker/range

:::

## API

### 属性

| 名称                        | 描述                                                                                                 | 类型                                                                                        | 默认                         |
| --------------------------- | ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------- | ---------------------------- |
| 模型值 / v 模型             | 绑定值，如果是数组，长度应为2                                                                        | ^[数字] / ^[字符串] / ^[对象]`Date \| [Date, Date] \| [number, number] \| [string, string]` | ''                           |
| 只读                        | TimePicker 是否为只读                                                                                | ^[布尔值]                                                                                   | 假                           |
| 已禁用                      | TimePicker 是否被禁用                                                                                | ^[布尔值]                                                                                   | 假                           |
| 可编辑                      | 输入是否可编辑                                                                                       | ^[布尔值]                                                                                   | 真实                         |
| 可清除                      | 是否显示清除按钮                                                                                     | ^[布尔值]                                                                                   | 真实                         |
| 尺寸                        | 输入的大小                                                                                           | ^[枚举]`'large' \| 'default' \| 'small'`                                                    | —                            |
| 占位符                      | 非范围模式下的占位符                                                                                 | ^[字符串]                                                                                   | ''                           |
| 开始占位符                  | 范围模式下开始时间的占位符                                                                           | ^[字符串]                                                                                   | —                            |
| 结束占位符                  | 范围模式下结束时间的占位符                                                                           | ^[字符串]                                                                                   | —                            |
| 是范围                      | 是否选择时间范围                                                                                     | ^[布尔值]                                                                                   | 假                           |
| 箭头控制                    | 是否使用箭头按钮选择时间                                                                             | ^[布尔值]                                                                                   | 假                           |
| 波普尔级                    | TimePicker 下拉菜单的自定义类名                                                                      | ^[字符串]                                                                                   | ''                           |
| 波普风格                    | TimePicker 下拉菜单的自定义样式                                                                      | ^[字符串] / ^[对象]                                                                         | —                            |
| popper 选项                 | 自定义 popper 选项请参阅 [popper.js](https://popper.js.org/docs/v2/)                                 | ^[对象]`Partial<PopperOptions>`                                                             | {}                           |
| 后备放置 ^(2.8.4)           | 工具提示的可能位置列表 [popper.js](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements) | ^[数组]`Placement[]`                                                                        | ['底部'、'顶部'、'右'、'左'] |
| 放置 ^(2.8.4)               | 下拉菜单的位置                                                                                       | `Placement`                                                                                 | 底部                         |
| 范围分隔符                  | 范围分隔符                                                                                           | ^[字符串]                                                                                   | '-'                          |
| 格式                        | 输入框中显示值的格式                                                                                 | ^[字符串] 请参阅[日期格式](./date-picker.md#date-formats)                                   | —                            |
| 默认值                      | 可选，日历的默认日期                                                                                 | ^[日期] / ^[数组]`[Date, Date]`                                                             | —                            |
| 值格式                      | 可选，绑定值的格式。如果未指定，绑定值将为 Date 对象                                                 | ^[字符串] 请参阅[日期格式](./date-picker.md#date-formats)                                   | —                            |
| 编号                        | 与本机输入中的 `id` 相同                                                                             | ^[字符串] / ^[数组]`[string, string]`                                                       | —                            |
| 名称                        | 与本机输入中的 `name` 相同                                                                           | ^[字符串]                                                                                   | ''                           |
| 咏叹调标签 ^(a11y) ^(2.7.2) | 与本机输入中的 `aria-label` 相同                                                                     | ^[字符串]                                                                                   | —                            |
| 前缀图标                    | 自定义前缀图标组件                                                                                   | ^[字符串] / ^[组件]                                                                         | 时钟                         |
| 清除图标                    | 自定义透明图标组件                                                                                   | ^[字符串] / ^[组件]                                                                         | 圆圈关闭                     |
| 残疾人时间                  | 指定无法选择的小时数组                                                                               | ^[功能]`(role: string, comparingDate?: Dayjs) => number[]`                                  | —                            |
| 伤残分钟数                  | 指定无法选择的分钟数组                                                                               | ^[功能]`(hour: number, role: string, comparingDate?: Dayjs) => number[]`                    | —                            |
| 禁用秒                      | 指定无法选择的秒数组                                                                                 | ^[功能]`(hour: number, minute: number, role: string, comparingDate?: Dayjs) => number[]`    | —                            |
| 传送                        | 时间选择器下拉列表是否传送到身体                                                                     | ^[布尔值]                                                                                   | 真实                         |
| 标签索引                    | 输入选项卡索引                                                                                       | ^[字符串] / ^[数字]                                                                         | 0                            |
| 空值 ^(2.7.0)               | 组件的空值，[参见配置提供程序](./config-provider.md#empty-values-configurations)                     | ^[数组]                                                                                     | —                            |
| 清除值 ^(2.7.0)             | 清除返回值，[参见配置提供程序](./config-provider.md#empty-values-configurations)                     | ^[字符串] / ^[数字] / ^[布尔值] / ^[函数]                                                   | —                            |
| 保存模糊 ^(2.13.4)          | 当没有选择任何值时是否自动填充当前焦点时间的输入                                                     | ^[布尔值]                                                                                   | 真实                         |
| 标签 ^(a11y) ^(已弃用)      | 与本机输入中的 `aria-label` 相同                                                                     | ^[字符串]                                                                                   | —                            |

### 活动

| 名称          | 描述                                         | 类型                                                                                                     |
| ------------- | -------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| 改变          | 当用户确认值时触发                           | ^[功能]`(val: number \| string \| Date \| [number, number] \| [string, string] \| [Date, Date]) => void` |
| 模糊          | 当输入模糊时触发                             | ^[功能]`(e: FocusEvent) => void`                                                                         |
| 焦点          | 当输入聚焦时触发                             | ^[功能]`(e: FocusEvent) => void`                                                                         |
| 清除 ^(2.7.7) | 当在可清除的 TimePicker 中单击清除图标时触发 | ^[功能]`() => void`                                                                                      |
| 可见变化      | 当 TimePicker 的下拉菜单出现/消失时触发      | ^[功能]`(visibility: boolean) => void`                                                                   |

### 暴露

| 名称               | 描述                     | 类型                |
| ------------------ | ------------------------ | ------------------- |
| 焦点               | 聚焦 TimePicker 组件     | ^[功能]`() => void` |
| 模糊               | 模糊 TimePicker 组件     | ^[功能]`() => void` |
| 处理打开 ^(2.2.16) | 打开 TimePicker 弹出窗口 | ^[功能]`() => void` |
| 处理关闭 ^(2.2.16) | 关闭 TimePicker 弹出窗口 | ^[功能]`() => void` |

## 类型声明

<details>
  <summary>显示声明</summary>

```ts
type Placement =
  | 'top'
  | 'top-start'
  | 'top-end'
  | 'bottom'
  | 'bottom-start'
  | 'bottom-end'
  | 'left'
  | 'left-start'
  | 'left-end'
  | 'right'
  | 'right-start'
  | 'right-end'
```

</details>
