---
title: 开关
lang: zh-CN
---

# 开关

开关用于在两个相反状态之间切换。

开关默认保留较大的触控面积，建议搭配简短文案或图标使用。

## 基本用法

:::demo 将 `v-model` 绑定到 `Boolean` 类型变量。需要定制状态色时，优先使用 Element Plus 的颜色变量，例如 `--el-color-success` 与 `--el-color-danger`。

switch/basic

:::

## 尺寸

:::demo 三档尺寸都会保留足够的触控面积；`default` 仍然是最推荐的表单默认值。

switch/sizes

:::

## 文字描述

您可以通过 `active-text` 和 `inactive-text` 显示状态说明。开启 `inline-prompt` 后，开关内部只适合放非常短的提示词。

:::demo 推荐把较长说明放在开关两侧，把开关内部保留给单字或短词提示。

switch/text-description

:::

## 显示自定义图标

:::tip

使用 `active-icon` 和 `inactive-icon` 属性添加图标。您可以传递组件名称字符串（提前注册）或组件本身（SVG Vue 组件）。 Element Plus提供了一组图标，您可以在[图标](./icon.md)中找到

:::

:::demo 图标通常比长文本更容易识别，尤其适合可见性、权限和状态型场景。

switch/custom-icons

:::

## 扩展值类型

:::demo 您可以设置 `active-value` 和 `inactive-value`，让开关直接映射到业务字段，而不必局限于布尔值。

switch/extended-value-types

:::

## 禁用

:::demo 添加 `disabled` 属性会禁用开关，常用于只读信息或权限受限的设置项。

switch/disabled

:::

## 加载中

:::demo 将 `loading` 属性设置为 `true` 可以避免用户连续点击导致重复提交。

switch/loading

:::

## 防止切换

:::demo 设置 `before-change` 后，可以在真正改变状态前执行校验或异步确认。

switch/prevent-switching

:::

## 自定义操作图标 ^(2.3.9)

:::demo 您可以添加 `active-action-icon` 和 `inactive-action-icon` 属性来显示图标。

switch/custom-action-icon

:::

## 自定义操作槽 ^(2.4.4)

:::demo 您可以使用 `active-action` 和 `inactive-action` 插槽来自定义操作。

switch/custom-action-slot

:::

## API

### 属性

| 名称                            | 说明                                                    | 类型                                    | 默认值  |
| ------------------------------- | ------------------------------------------------------- | --------------------------------------- | ------- |
| `model-value / v-model`         | 绑定值，默认与 `active-value` / `inactive-value` 对应   | `boolean / string / number`             | `false` |
| `disabled`                      | 是否禁用开关                                            | `boolean`                               | `false` |
| `loading`                       | 是否处于加载状态                                        | `boolean`                               | `false` |
| `size`                          | 开关尺寸                                                | `'' \| 'large' \| 'default' \| 'small'` | `''`    |
| `width`                         | 自定义开关宽度                                          | `string / number`                       | `''`    |
| `inline-prompt`                 | 是否在开关内部显示提示词或图标                          | `boolean`                               | `false` |
| `active-icon`                   | `on` 状态时显示的图标，优先级高于 `active-text`         | `string / Component`                    | —       |
| `inactive-icon`                 | `off` 状态时显示的图标，优先级高于 `inactive-text`      | `string / Component`                    | —       |
| `active-action-icon` ^(2.3.9)   | `on` 状态时圆点内部显示的图标                           | `string / Component`                    | —       |
| `inactive-action-icon` ^(2.3.9) | `off` 状态时圆点内部显示的图标                          | `string / Component`                    | —       |
| `active-text`                   | `on` 状态时的说明文字                                   | `string`                                | `''`    |
| `inactive-text`                 | `off` 状态时的说明文字                                  | `string`                                | `''`    |
| `active-value`                  | `on` 状态对应的值                                       | `boolean / string / number`             | `true`  |
| `inactive-value`                | `off` 状态对应的值                                      | `boolean / string / number`             | `false` |
| `name`                          | 原生 `input` 的 `name`                                  | `string`                                | `''`    |
| `validate-event`                | 是否触发表单校验                                        | `boolean`                               | `true`  |
| `before-change`                 | 切换前钩子，返回 `false` 或 rejected Promise 会阻止切换 | `() => boolean \| Promise<boolean>`     | —       |
| `id`                            | 原生 `input` 的 `id`                                    | `string`                                | —       |
| `tabindex`                      | 原生 `input` 的 `tabindex`                              | `string / number`                       | —       |
| `aria-label` ^(a11y) ^(2.7.2)   | 原生 `input` 的 `aria-label`                            | `string`                                | —       |
| `active-color` ^(deprecated)    | `on` 状态背景色，建议改用 `--el-switch-on-color`        | `string`                                | `''`    |
| `inactive-color` ^(deprecated)  | `off` 状态背景色，建议改用 `--el-switch-off-color`      | `string`                                | `''`    |
| `border-color` ^(deprecated)    | 开关边框色，建议改用 `--el-switch-border-color`         | `string`                                | `''`    |
| `label` ^(a11y) ^(deprecated)   | 与原生 `input` 的 `aria-label` 等价                     | `string`                                | —       |

### 事件

| 名称                | 说明                                 | 类型                                           |
| ------------------- | ------------------------------------ | ---------------------------------------------- |
| `update:modelValue` | 当绑定值更新时触发                   | `(value: boolean \| string \| number) => void` |
| `change`            | 当用户完成一次状态切换时触发         | `(value: boolean \| string \| number) => void` |
| `input`             | 与 `change` 同步触发，用于兼容旧用法 | `(value: boolean \| string \| number) => void` |

### 切换插槽

| 名称                       | 说明                            |
| -------------------------- | ------------------------------- |
| `active-action` ^(2.4.4)   | 自定义 `on` 状态下圆点内部内容  |
| `inactive-action` ^(2.4.4) | 自定义 `off` 状态下圆点内部内容 |
| `active` ^(2.13.0)         | 自定义 `on` 状态文本或图标区域  |
| `inactive` ^(2.13.0)       | 自定义 `off` 状态文本或图标区域 |

### 暴露

| 名称      | 说明                 | 类型           |
| --------- | -------------------- | -------------- |
| `focus`   | 手动聚焦开关         | `() => void`   |
| `checked` | 当前是否处于选中状态 | `Ref<boolean>` |
