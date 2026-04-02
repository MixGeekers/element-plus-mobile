---
title: 时间选择器
lang: zh-CN
---

# 时间选择器

使用时间选择器进行时间输入。

时间列表会以底部弹层展开，而不是桌面端风格的箭头式交互。

## 任意时间选择器

可以选择任意时间点。

:::demo 默认情况下，您可以滚动时间列表来选择时间，整个流程会保持在单列底部面板中。

time-picker/basic

:::

## 限制时间范围

您还可以限制可选时间范围。

:::demo 通过指定 `disabledHours` `disabledMinutes` 和 `disabledSeconds` 来限制时间范围。

time-picker/basic-range

:::

## 任意时间范围

可以选择任意时间范围。

:::demo 我们可以通过添加 `is-range` 属性来选择时间范围。范围模式会将起止时间一起保留在同一套面板里。

time-picker/range

:::

## API

### 属性

| 名称                          | 描述                                  | 类型                                                                              | 默认值        |
| ----------------------------- | ------------------------------------- | --------------------------------------------------------------------------------- | ------------- |
| `model-value / v-model`       | 绑定值；范围模式下应为长度为 2 的数组 | `Date / [Date, Date] / number / [number, number] / string / [string, string]`     | `''`          |
| `readonly`                    | 是否只读                              | `boolean`                                                                         | `false`       |
| `disabled`                    | 是否禁用                              | `boolean`                                                                         | `false`       |
| `editable`                    | 输入框是否可编辑                      | `boolean`                                                                         | `true`        |
| `clearable`                   | 是否显示清除按钮                      | `boolean`                                                                         | `true`        |
| `size`                        | 输入尺寸                              | `'large' \| 'default' \| 'small'`                                                 | —             |
| `placeholder`                 | 非范围模式下的占位文本                | `string`                                                                          | `''`          |
| `start-placeholder`           | 范围模式开始输入框占位文本            | `string`                                                                          | —             |
| `end-placeholder`             | 范围模式结束输入框占位文本            | `string`                                                                          | —             |
| `is-range`                    | 是否开启时间范围模式                  | `boolean`                                                                         | `false`       |
| `range-separator`             | 范围分隔符                            | `string`                                                                          | `'-'`         |
| `format`                      | 输入框中显示值的格式                  | `string`                                                                          | `HH:mm:ss`    |
| `value-format`                | 绑定值格式；未指定时返回 `Date`       | `string`                                                                          | —             |
| `id`                          | 原生输入框 `id`，范围模式下可传数组   | `string / [string, string]`                                                       | —             |
| `name`                        | 原生输入框 `name`，范围模式下可传数组 | `string / [string, string]`                                                       | `''`          |
| `prefix-icon`                 | 自定义前缀图标组件                    | `string / Component`                                                              | `Clock`       |
| `clear-icon`                  | 自定义清除图标组件                    | `string / Component`                                                              | `CircleClose` |
| `disabled-hours`              | 返回不可选小时列表                    | `(role: string, comparingDate?: Dayjs) => number[]`                               | —             |
| `disabled-minutes`            | 返回不可选分钟列表                    | `(hour: number, role: string, comparingDate?: Dayjs) => number[]`                 | —             |
| `disabled-seconds`            | 返回不可选秒列表                      | `(hour: number, minute: number, role: string, comparingDate?: Dayjs) => number[]` | —             |
| `tabindex`                    | 输入框 `tabindex`                     | `string / number`                                                                 | `0`           |
| `empty-values` ^(2.7.0)       | 自定义空值集合                        | `any[]`                                                                           | —             |
| `value-on-clear` ^(2.7.0)     | 清空时返回的值                        | `string / number / boolean / Function`                                            | —             |
| `save-on-blur` ^(2.13.4)      | 无值时聚焦后是否自动填入当前时间      | `boolean`                                                                         | `true`        |
| `popper-class`                | 弹层自定义类名                        | `string`                                                                          | `''`          |
| `popper-style`                | 弹层自定义样式                        | `string / object`                                                                 | —             |
| `aria-label` ^(a11y) ^(2.7.2) | 原生输入框 `aria-label`               | `string`                                                                          | —             |

### 事件

| 名称                | 描述                   | 类型                                                                                                |
| ------------------- | ---------------------- | --------------------------------------------------------------------------------------------------- |
| `update:modelValue` | 当绑定值更新时触发     | `(value: Date \| [Date, Date] \| number \| [number, number] \| string \| [string, string]) => void` |
| `change`            | 当用户确认一个值时触发 | `(value: Date \| [Date, Date] \| number \| [number, number] \| string \| [string, string]) => void` |
| `focus`             | 输入框聚焦时触发       | `(event: FocusEvent) => void`                                                                       |
| `blur`              | 输入框失焦时触发       | `(event: FocusEvent) => void`                                                                       |
| `clear` ^(2.7.7)    | 点击清除按钮时触发     | `() => void`                                                                                        |
| `visible-change`    | 弹层显示状态改变时触发 | `(visible: boolean) => void`                                                                        |

### 暴露

| 名称                    | 描述             | 类型         |
| ----------------------- | ---------------- | ------------ |
| `focus`                 | 聚焦输入框       | `() => void` |
| `blur`                  | 让输入框失焦     | `() => void` |
| `handleOpen` ^(2.2.16)  | 打开时间选择面板 | `() => void` |
| `handleClose` ^(2.2.16) | 关闭时间选择面板 | `() => void` |

## 类型声明

<details>
  <summary>显示声明</summary>

```ts
// TimePicker 默认输出 Date，也可通过 value-format 输出字符串或数字。
```

</details>
