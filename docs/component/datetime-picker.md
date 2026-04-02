---
title: 日期时间选择器
lang: zh-CN
---

# 日期时间选择器

在一个选择器中选择日期和时间。

:::tip

DateTimePicker 派生自 DatePicker 和 TimePicker。关于属性更详细的解释可以参考DatePicker和TimePicker。

:::

日期和时间选择都会收敛到同一个底部面板流程里。

## 日期和时间

:::demo 通过将 `type` 设置为 `datetime`，您可以在一个选择器中同时选择日期和时间。这两个步骤会保留在同一套底部面板流程里。

datetime-picker/date-and-time

:::

## 日期时间格式

使用 `format` 控制输入框中显示文本的格式。使用 `value-format` 控制绑定值的格式。

默认情况下，组件接受并发出 `Date` 对象。

检查 [此处](https://day.js.org/docs/en/display/format#list-of-all-available-formats) Day.js 所有可用格式的列表。

:::warning

注意大小写

:::

:::demo

datetime-picker/date-and-time-formats

:::

## 下拉面板中的日期和时间格式

使用 `date-format` 和 `time-format` 控制下拉面板输入框中显示文本的格式。

:::demo

datetime-picker/date-and-time-formats-panel

:::

## 日期和时间范围

:::demo 您可以通过将 `type` 设置为 `datetimerange` 来选择日期和时间范围。

datetime-picker/date-and-time-range

:::

## 开始日期和结束日期的默认时间值

:::demo 当在日期面板上选择 `datetimerange` 类型的日期范围时，`00:00:00` 将用作开始日期和结束日期的默认时间值。我们可以通过 `default-time` 属性来控制它。 `default-time` 接受最多包含两个 Date 对象的数组。第一项控制开始日期的时间值，第二项控制结束日期的时间值。

datetime-picker/default-time

:::

## 自定义图标 ^(2.8.0)

带有插槽的自定义图标可用。

:::demo

datetime-picker/custom-icon

:::

## API

### 属性

| 名称               | 描述                                                                             | 类型                                                                                           | 默认                |
| ------------------ | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------------------- |
| 模型值 / v 模型    | 绑定值，如果是 `range` 选择器，则数组长度应为 2                                  | ^[数字] / ^[字符串] / ^[日期] / ^[数组]`number[] \| string[] \| Date[]`                        | ''                  |
| 只读               | DatePicker 是否为只读                                                            | ^[布尔值]                                                                                      | 假                  |
| 已禁用             | DatePicker 是否被禁用                                                            | ^[布尔值]                                                                                      | 假                  |
| 可编辑             | 输入是否可编辑                                                                   | ^[布尔值]                                                                                      | 真实                |
| 可清除             | 是否显示清除按钮                                                                 | ^[布尔值]                                                                                      | 真实                |
| 尺寸               | 输入的大小                                                                       | ^[枚举]`'large' \| 'default' \| 'small'`                                                       | 默认                |
| 占位符             | 非范围模式下的占位符                                                             | ^[字符串]                                                                                      | —                   |
| 开始占位符         | 范围模式下开始日期的占位符                                                       | ^[字符串]                                                                                      | —                   |
| 结束占位符         | 范围模式下结束日期的占位符                                                       | ^[字符串]                                                                                      | —                   |
| 类型               | 选取器的类型                                                                     | ^[枚举]`'year' \| 'month' \| 'date' \| 'datetime' \| 'week' \| 'datetimerange' \| 'daterange'` | 日期                |
| 格式               | 输入框中显示值的格式                                                             | ^[字符串] 请参阅[日期格式](./date-picker.md#date-formats)                                      | YYYY-MM-DD HH:mm:ss |
| 波普尔级           | DateTimePicker 下拉菜单的自定义类名                                              | ^[字符串]                                                                                      | —                   |
| 波普风格           | DateTimePicker 下拉菜单的自定义样式                                              | ^[字符串] / ^[对象]                                                                            | —                   |
| 范围分隔符         | 范围分隔符                                                                       | ^[字符串]                                                                                      | '-'                 |
| 默认值             | 可选，日历的默认日期                                                             | ^[对象]`Date \| [Date, Date]`                                                                  | —                   |
| 默认时间           | 选择日期后的默认时间值。如果未指定，将使用时间 `00:00:00`                        | ^[对象]`Date \| [Date, Date]`                                                                  | —                   |
| 值格式             | 可选，绑定值的格式。如果未指定，绑定值将为 Date 对象                             | ^[字符串] 请参阅[日期格式](https://day.js.org/docs/en/display/format)                          | —                   |
| 日期格式 ^(2.4.0)  | 可选，输入内部面板中显示的日期格式                                               | ^[字符串] 请参阅[日期格式](https://day.js.org/docs/en/display/format)                          | 年-月-日            |
| 时间格式 ^(2.4.0)  | 可选，输入内部面板中显示的时间格式                                               | ^[字符串] 请参阅[日期格式](https://day.js.org/docs/en/display/format)                          | 时:分:秒            |
| 编号               | 与本机输入中的 `id` 相同                                                         | ^[字符串] / ^[数组]`[string, string]`                                                          | —                   |
| 名称               | 与本机输入中的 `name` 相同                                                       | ^[字符串]                                                                                      | —                   |
| 前缀图标           | 自定义前缀图标组件                                                               | ^[字符串] / `Component`                                                                        | 日期                |
| 清除图标           | 自定义透明图标组件                                                               | ^[字符串] / `Component`                                                                        | 圆圈关闭            |
| 快捷方式           | 用于设置快捷方式选项的对象数组                                                   | ^[数组]`Array<{ text: string, value: Date \| Function }>`                                      | —                   |
| 禁用日期           | 确定某个日期是否被禁用并以该日期作为参数的函数。应该返回一个布尔值               | ^[功能]`(data: Date) => boolean`                                                               | —                   |
| 残疾人时间         | 指定无法选择的小时数组                                                           | ^[功能]`(role: string, comparingDate?: Dayjs) => number[]`                                     | —                   |
| 伤残分钟数         | 指定无法选择的分钟数组                                                           | ^[功能]`(hour: number, role: string, comparingDate?: Dayjs) => number[]`                       | —                   |
| 禁用秒             | 指定无法选择的秒数组                                                             | ^[功能]`(hour: number, minute: number, role: string, comparingDate?: Dayjs) => number[]`       | —                   |
| 细胞类别名称       | 设置自定义类名                                                                   | ^[功能]`(data: Date) => string`                                                                | —                   |
| 空值 ^(2.7.0)      | 组件的空值，[参见配置提供程序](./config-provider.md#empty-values-configurations) | ^[数组]                                                                                        | —                   |
| 清除值 ^(2.7.0)    | 清除返回值，[参见配置提供程序](./config-provider.md#empty-values-configurations) | ^[字符串] / ^[数字] / ^[布尔值] / ^[函数]                                                      | —                   |
| 现在显示 ^(2.8.7)  | 是否显示立即按钮                                                                 | ^[布尔值]                                                                                      | 真实                |
| 显示页脚 ^(2.10.5) | 是否显示日期选择器为 1 的页脚 ^[enum]`'datetime' \| 'datetimerange'`             | ^[布尔值]                                                                                      | 真实                |
| 显示确认 ^(2.11.0) | 是否显示确认按钮                                                                 | ^[布尔值]                                                                                      | 真实                |
| 显示周数 ^(2.10.3) | 除星期外还显示星期数                                                             | `boolean`                                                                                      | 假                  |

### 活动

| 名称          | 描述                                        | 参数                                                                                  |
| ------------- | ------------------------------------------- | ------------------------------------------------------------------------------------- |
| 改变          | 当用户确认值或单击外部                      | 时触发^[功能]`(val: typeof v-model) => void`                                          |
| 模糊          | 当输入模糊时触发                            | ^[功能]`(e: FocusEvent) => void`                                                      |
| 焦点          | 当输入聚焦时触发                            | ^[功能]`(e: FocusEvent) => void`                                                      |
| 清除 ^(2.7.7) | 单击清除按钮时触发                          | ^[功能]`() => void`                                                                   |
| 日历更改      | 当日历选择的日期更改时触发。仅适用于`range` | ^[功能]`(val: [Date, null \| Date]) => void`                                          |
| 面板更换      | 单击导航按钮时触发。                        | ^[功能]`(date: Date \| [Date, Date], mode: 'month' \| 'year', view?: string) => void` |
| 可见变化      | 当 DateTimePicker 的下拉菜单出现/消失时触发 | ^[功能]`(visibility: boolean) => void`                                                |

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

| 方法          | 描述                 | 类型                |
| ------------- | -------------------- | ------------------- |
| 焦点          | 聚焦 DatePicker 组件 | ^[功能]`() => void` |
| 模糊 ^(2.8.7) | 模糊 DatePicker 组件 | ^[功能]`() => void` |

## 类型声明

<details>
  <summary>显示声明</summary>

```ts
// DateTimePicker 复用 DatePicker 和 TimePicker 的值类型。
```

</details>
