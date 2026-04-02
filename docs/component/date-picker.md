---
title: 日期选择器
lang: zh-CN
---

# 日期选择器

使用日期选择器进行日期输入。

日期选择器会以底部弹层面板呈现，范围选择会保持起止两端在同一套流程中完成。

## 输入日期

基本日期选择器以“天”为单位。

:::demo 测量值由 `type` 属性确定。您可以通过 `shortcuts` 属性启用快速选项。禁用日期由`disabledDate` 设置，这是一个函数。

date-picker/enter-date

:::

## 其他测量

您可以通过扩展标准日期选择器组件来选择周、月、年或多个日期。

:::demo

date-picker/other-measurements

:::

## 日期范围

支持选择日期范围。

:::demo 范围选择会保持起止日期在同一套流程中完成，也可以通过快捷选项减少操作次数。

date-picker/date-range

:::

## 月份范围

支持选择月份范围。

:::demo 月份范围选择同样遵循底部弹出式交互，适合报表周期或账单周期设置。

date-picker/month-range

:::

## 年份范围 ^(2.8.0)

支持选择年份范围。

:::demo 年份范围选择沿用同样的面板模式，适合长期规划场景。

date-picker/year-range

:::

## 默认值

如果用户未选择日期，则默认显示今天的日历。您可以使用 `default-value` 设置另一个日期。它的值应该可以由 `new Date()` 解析。

如果类型为 `daterange`，则 `default-value` 设置左侧日历。

:::demo

date-picker/default-value

:::

## 日期格式

使用 `format` 控制输入框中显示文本的格式。使用 `value-format` 控制绑定值的格式。

默认情况下，组件接受并发出 `Date` 对象。

检查 [此处](https://day.js.org/docs/en/display/format#list-of-all-available-formats) Day.js 所有可用格式的列表。

:::warning

注意大小写

:::

:::demo

date-picker/date-formats

:::

## 开始日期和结束日期的默认时间

选择日期范围时，您可以指定开始日期和结束日期的时间部分。

:::demo 默认情况下，开始日期和结束日期的时间部分均为 `00:00:00`。设置`default-time`可以分别改变它们的时间。它接受最多包含两个 Date 对象的数组。第一个字符串设置开始日期的时间，第二个字符串设置结束日期的时间。

date-picker/default-time

:::

## 设置前缀的自定义内容

前缀的内容可以自定义。

:::demo 将 `prefix-icon` 设置为从其他 .vue 导入或由渲染函数生成的组件。

date-picker/custom-prefix-icon

:::

## 自定义内容

cell的内容可以自定义，在scoped-slot中可以获取cell的数据。注意，自定义的内容结构要和默认的结构一致，否则可能会出现风格错位的情况。

:::demo

date-picker/custom-content

:::

## 自定义图标 ^(2.8.0)

带有插槽的自定义图标可用。

:::demo

date-picker/custom-icon

:::

详细数据请参考：

```ts
interface DateCell {
  column: number
  customClass: string | undefined
  disabled: boolean
  end: boolean
  inRange: boolean
  row: number
  selected: Dayjs | undefined
  isCurrent: boolean | undefined
  isSelected: boolean
  renderText: string | undefined
  start: boolean
  text: number
  timestamp: number
  date: Date
  dayjs: Dayjs
  type: 'normal' | 'today' | 'week' | 'next-month' | 'prev-month'
}
```

## 本地化

默认语言环境为英语，如果需要使用其他语言，请查看[国际化](/guide/i18n)

请注意，日期时间区域设置（月份名称、一周的第一天...）也在本地化中配置。

## API

### 属性

| 名称               | 描述                                                                                                   | 类型                                                                                                                                                           | 默认          |
| ------------------ | ------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------- |
| 模型值 / v 模型    | 绑定值，如果是 `range` 选择器，则数组长度应为 2                                                        | ^[数字] / ^[字符串] / ^[日期] / ^[数组]`number[] \| string[] \| Date[]`                                                                                        | ''            |
| 只读               | DatePicker 是否为只读                                                                                  | ^[布尔值]                                                                                                                                                      | 假            |
| 已禁用             | DatePicker 是否被禁用                                                                                  | ^[布尔值]                                                                                                                                                      | 假            |
| 尺寸               | 输入的大小                                                                                             | ^[枚举]`'' \| 'large' \| 'default' \| 'small'`                                                                                                                 | —             |
| 可编辑             | 输入是否可编辑                                                                                         | ^[布尔值]                                                                                                                                                      | 真实          |
| 可清除             | 是否显示清除按钮                                                                                       | ^[布尔值]                                                                                                                                                      | 真实          |
| 占位符             | 非范围模式下的占位符                                                                                   | ^[字符串]                                                                                                                                                      | ''            |
| 开始占位符         | 范围模式下开始日期的占位符                                                                             | ^[字符串]                                                                                                                                                      | —             |
| 结束占位符         | 范围模式下结束日期的占位符                                                                             | ^[字符串]                                                                                                                                                      | —             |
| 类型               | 选取器的类型                                                                                           | ^[枚举]`'year' \| 'years' \|'month' \| 'months' \| 'date' \| 'dates' \| 'datetime' \| 'week' \| 'datetimerange' \| 'daterange' \| 'monthrange' \| 'yearrange'` | 日期          |
| 格式               | 输入框中显示值的格式                                                                                   | ^[字符串] 请参阅[日期格式](#date-formats)                                                                                                                      | 年-月-日      |
| 波普尔级           | DatePicker 下拉菜单的自定义类名                                                                        | ^[字符串]                                                                                                                                                      | —             |
| 波普风格           | DatePicker 下拉菜单的自定义样式                                                                        | ^[字符串] / ^[对象]                                                                                                                                            | —             |
| 范围分隔符         | 范围分隔符                                                                                             | ^[字符串]                                                                                                                                                      | '-'           |
| 默认值             | 可选，日历的默认日期                                                                                   | ^[对象]`Date \| [Date, Date]`                                                                                                                                  | —             |
| 默认时间           | 可选，选择日期范围时使用的时间值                                                                       | ^[对象]`Date \| [Date, Date]`                                                                                                                                  | —             |
| 值格式             | 可选，绑定值的格式。如果未指定，绑定值将为 Date 对象                                                   | ^[字符串] 请参阅[日期格式](#date-formats)                                                                                                                      | —             |
| 编号               | 与本机输入中的 `id` 相同                                                                               | ^[字符串] / ^[数组]`[string, string]`                                                                                                                          | —             |
| 名称               | 与本机输入中的 `name` 相同                                                                             | ^[字符串] / ^[数组]`[string, string]`                                                                                                                          | ''            |
| 前缀图标           | 自定义前缀图标组件。默认情况下，如果 `type` 的值为 `TimeLikeType`，则该值为 `Clock`，否则为 `Calendar` | ^[字符串] / ^[对象]`Component`                                                                                                                                 | ''            |
| 清除图标           | 自定义透明图标组件                                                                                     | ^[字符串] / ^[对象]`Component`                                                                                                                                 | `CircleClose` |
| 验证事件           | 是否触发表单验证                                                                                       | ^[布尔值]                                                                                                                                                      | 真实          |
| 禁用日期           | 确定某个日期是否被禁用并以该日期作为参数的函数。应该返回一个布尔值                                     | ^[功能]`(data: Date) => boolean`                                                                                                                               | —             |
| 快捷方式           | 用于设置快捷方式选项的对象数组                                                                         | ^[数组]`Array<{ text: string, value: Date \| Function }>`                                                                                                      | []            |
| 细胞类别名称       | 设置自定义类名                                                                                         | ^[功能]`(data: Date) => string`                                                                                                                                | —             |
| 空值 ^(2.7.0)      | 组件的空值，[参见配置提供程序](./config-provider.md#empty-values-configurations)                       | ^[数组]                                                                                                                                                        | —             |
| 清除值 ^(2.7.0)    | 清除返回值，[参见配置提供程序](./config-provider.md#empty-values-configurations)                       | ^[字符串] / ^[数字] / ^[布尔值] / ^[函数]                                                                                                                      | —             |
| 显示页脚 ^(2.10.5) | 是否显示页脚                                                                                           | ^[布尔值]                                                                                                                                                      | 真实          |
| 显示确认 ^(2.11.0) | 是否显示确认按钮                                                                                       | ^[布尔值]                                                                                                                                                      | 真实          |
| 显示周数 ^(2.10.3) | 除星期外还显示星期数                                                                                   | ^[布尔值]                                                                                                                                                      | 假            |
| 自动下拉^(2.11.4)  | 该属性决定当输入焦点时是否弹出日期选择器面板。 （3.0版本中默认值将设置为false）                        | ^[布尔值]                                                                                                                                                      | 真实          |

### 活动

| 名称          | 描述                                         | 类型                                                                                  |
| ------------- | -------------------------------------------- | ------------------------------------------------------------------------------------- |
| 改变          | 当用户确认值或单击外部                       | 时触发^[功能]`(val: typeof v-model) => void`                                          |
| 模糊          | 当输入模糊时触发                             | ^[功能]`(e: FocusEvent) => void`                                                      |
| 焦点          | 当输入聚焦时触发                             | ^[功能]`(e: FocusEvent) => void`                                                      |
| 清除 ^(2.7.7) | 单击清除按钮时触发                           | ^[功能]`() => void`                                                                   |
| 日历更改      | 当日历选择的日期更改时触发。仅适用于 `range` | ^[功能]`(val: [Date, null \| Date]) => void`                                          |
| 面板更换      | 单击导航按钮时触发。                         | ^[功能]`(date: Date \| [Date, Date], mode: 'month' \| 'year', view?: string) => void` |
| 可见变化      | 当 DatePicker 的下拉菜单出现/消失时触发      | ^[功能]`(visibility: boolean) => void`                                                |

### 老虎机

| 名称            | 描述                 |
| --------------- | -------------------- |
| 默认            | 自定义单元格内容     |
| 范围分隔符      | 自定义范围分隔符内容 |
| 上个月 ^(2.8.0) | 上个月图标           |
| 下个月 ^(2.8.0) | 下个月图标           |
| 去年 ^(2.8.0)   | 上一年图标           |
| 明年 ^(2.8.0)   | 明年图标             |

### 暴露

| 名称               | 描述                     | 类型                |
| ------------------ | ------------------------ | ------------------- |
| 焦点               | 聚焦 DatePicker 组件     | ^[功能]`() => void` |
| 模糊 ^(2.8.7)      | 模糊 DatePicker 组件     | ^[功能]`() => void` |
| 处理打开 ^(2.2.16) | 打开 DatePicker 弹出窗口 | ^[功能]`() => void` |
| 处理关闭 ^(2.2.16) | 关闭 DatePicker 弹出窗口 | ^[功能]`() => void` |

## 类型声明

<details>
  <summary>显示声明</summary>

```ts
type TimeLikeType = 'datetime' | 'datetimerange'
```

</details>
