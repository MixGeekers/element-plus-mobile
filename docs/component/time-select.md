---
title: 时间选择
lang: zh-CN
---

# 时间选择

使用“时间选择”进行时间输入。

可用时间范围为 00:00 至 23:59

固定时间列表会以全宽底部面板打开。

## 固定时间选择器

提供固定时间列表供用户选择。

:::demo 使用 `el-time-select` 标签，然后使用 `start`、`end` 和 `step` 分配开始时间、结束时间和时间步。

time-select/basic

:::

## 时间格式

使用 `format` 控制时间（小时和分钟）的显示格式。

检查 [此处](https://day.js.org/docs/en/display/format#list-of-all-available-formats) Day.js 所有可用格式的列表。

:::warning

注意大小写

:::

:::demo

time-select/time-formats

:::

## 固定时间范围

如果先选择了开始时间或结束时间，另一侧的可选项会自动联动，避免生成无效区间。

:::demo

time-select/time-range

:::

## API

### 属性

| 名称                        | 描述                           | 类型                                   | 默认值        |
| --------------------------- | ------------------------------ | -------------------------------------- | ------------- |
| `model-value / v-model`     | 绑定值                         | `string`                               | —             |
| `disabled`                  | 是否禁用 TimeSelect            | `boolean`                              | `false`       |
| `editable`                  | 输入框是否可编辑               | `boolean`                              | `true`        |
| `clearable`                 | 是否显示清除按钮               | `boolean`                              | `true`        |
| `include-end-time` ^(2.9.3) | 选项中是否包含 `end`           | `boolean`                              | `false`       |
| `size`                      | 输入尺寸                       | `'large' \| 'default' \| 'small'`      | —             |
| `placeholder`               | 占位文本                       | `string`                               | —             |
| `name` ^(2.13.3)            | 原生输入框 `name`              | `string`                               | —             |
| `prefix-icon`               | 自定义前缀图标组件             | `string / Component`                   | `Clock`       |
| `clear-icon`                | 自定义清除图标组件             | `string / Component`                   | `CircleClose` |
| `start`                     | 开始时间                       | `string`                               | `09:00`       |
| `end`                       | 结束时间                       | `string`                               | `18:00`       |
| `step`                      | 时间步长                       | `string`                               | `00:30`       |
| `min-time`                  | 最小可选时间；更早的项会被禁用 | `string`                               | —             |
| `max-time`                  | 最大可选时间；更晚的项会被禁用 | `string`                               | —             |
| `format`                    | 时间显示格式                   | `string`                               | `HH:mm`       |
| `empty-values` ^(2.7.0)     | 自定义空值集合                 | `any[]`                                | —             |
| `value-on-clear` ^(2.7.0)   | 清空时返回的值                 | `string / number / boolean / Function` | —             |
| `popper-class` ^(2.11.4)    | 下拉面板自定义类名             | `string`                               | `''`          |
| `popper-style` ^(2.11.4)    | 下拉面板自定义样式             | `string / object`                      | —             |

### 事件

| 名称                | 描述                   | 类型                          |
| ------------------- | ---------------------- | ----------------------------- |
| `update:modelValue` | 当绑定值更新时触发     | `(value: string) => void`     |
| `change`            | 当用户确认一个值时触发 | `(value: string) => void`     |
| `focus`             | 输入框聚焦时触发       | `(event: FocusEvent) => void` |
| `blur`              | 输入框失焦时触发       | `(event: FocusEvent) => void` |
| `clear` ^(2.7.7)    | 点击清除按钮时触发     | `() => void`                  |

### 暴露

| 名称    | 描述           | 类型         |
| ------- | -------------- | ------------ |
| `focus` | 聚焦输入组件   | `() => void` |
| `blur`  | 让输入组件失焦 | `() => void` |
