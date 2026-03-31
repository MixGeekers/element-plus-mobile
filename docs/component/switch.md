---
title: 切换
lang: zh-CN
---

# 切换

开关用于在两个相反状态之间切换。

## 基本用法

:::demo 将 `v-model` 绑定到 `Boolean` 类型变量。 `--el-switch-on-color` 和 `--el-switch-off-color` CSS 变量决定两种状态下的背景颜色。

switch/basic

:::

## 尺寸

:::demo

switch/sizes

:::

## 文字描述

您可以添加 `active-text` 和 `inactive-text` 属性来显示文本。使用`inline-prompt`属性来控制文本在点内显示。

:::demo 您可以添加 `active-text` 和 `inactive-text` 属性来显示文本。

switch/text-description

:::

## 显示自定义图标

:::tip

使用 `active-icon` 和 `inactive-icon` 属性添加图标。您可以传递组件名称字符串（提前注册）或组件本身（SVG Vue 组件）。 Element Plus提供了一组图标，您可以在[图标](./icon.md)中找到

:::

:::demo 您可以添加 `active-icon` 和 `inactive-icon` 属性来显示图标。使用`inline-prompt`属性来控制图标在点内显示。

switch/custom-icons

:::

## 扩展值类型

:::demo 您可以设置 `active-value` 和 `inactive-value` 属性。它们都接收 `Boolean`、`String` 或 `Number` 类型的值。

switch/extended-value-types

:::

## 禁用

:::demo 添加 `disabled` 属性会禁用 Switch。

switch/disabled

:::

## 加载中

:::demo 将 `loading` 属性设置为 `true` 表示交换机上的加载状态。

switch/loading

:::

## 防止切换

:::demo 设置 `before-change` 属性，如果返回 `false` 或返回 `Promise` 然后被拒绝，将停止切换。

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

| 名称                        | 描述                                                                                         | 类型                                           | 默认 |
| --------------------------- | -------------------------------------------------------------------------------------------- | ---------------------------------------------- | ---- |
| 模型值 / v 模型             | 绑定值，它应该相当于 `active-value` 或 `inactive-value`，默认情况下它是 `boolean` 类型       | ^[布尔值] / ^[字符串] / ^[数字]                | 假   |
| 已禁用                      | Switch 是否禁用                                                                              | ^[布尔值]                                      | 假   |
| 加载                        | Switch是否处于加载状态                                                                       | ^[布尔值]                                      | 假   |
| 尺寸                        | 开关尺寸                                                                                     | ^[枚举]`'' \| 'large' \| 'default' \| 'small'` | ''   |
| 宽度                        | 开关宽度                                                                                     | ^[数字] / ^[字符串]                            | ''   |
| 内联提示                    | 无论点内显示图标还是文本，文本仅渲染第一个字符                                               | ^[布尔值]                                      | 假   |
| 活动图标                    | 处于 `on` 状态时显示的图标组件，覆盖 `active-text`                                           | ^[字符串] / ^[组件]                            | —    |
| 不活动图标                  | 处于 `off` 状态时显示的图标组件，覆盖 `inactive-text`                                        | ^[字符串] / ^[组件]                            | —    |
| 主动操作图标 ^(2.3.9)       | `on` 状态时显示的图标组件^[字符串] / ^[组件]                                                 | —                                              |
| 非活动操作图标 ^(2.3.9)     | `off` 状态时显示的图标组件^[字符串] / ^[组件]                                                | —                                              |
| 活动文本                    | 处于 `on` 状态时显示的文本                                                                   | ^[字符串]                                      | ''   |
| 非活动文本                  | 处于 `off` 状态时显示的文本                                                                  | ^[字符串]                                      | ''   |
| 活跃值                      | `on`状态时的开关值                                                                           | ^[布尔值] / ^[字符串] / ^[数字]                | 真实 |
| 非活动值                    | `off`状态时的开关值                                                                          | ^[布尔值] / ^[字符串] / ^[数字]                | 假   |
| 名称                        | 输入开关名称                                                                                 | ^[字符串]                                      | ''   |
| 验证事件                    | 是否触发表单验证                                                                             | ^[布尔值]                                      | 真实 |
| 更改前                      | before-change 钩子在开关状态改变之前。如果返回`false`或者返回`Promise`然后被拒绝，将停止切换 | ^[功能]`() => Promise<boolean> \| boolean`     | —    |
| 编号                        | 输入 ID                                                                                      | ^[字符串]                                      | —    |
| 标签索引                    | 输入的 tabindex                                                                              | ^[字符串] / ^[数字]                            | —    |
| 咏叹调标签 ^(a11y) ^(2.7.2) | 与本机输入中的 `aria-label` 相同                                                             | ^[字符串]                                      | —    |
| 活动颜色 ^（已弃用）        | 处于 `on` 状态时的背景颜色（使用 CSS var `--el-switch-on-color` 代替）                       | ^[字符串]                                      | ''   |
| 非活动颜色 ^（已弃用）      | 处于 `off` 状态时的背景颜色（使用 CSS var `--el-switch-off-color` 代替）                     | ^[字符串]                                      | ''   |
| 边框颜色 ^（已弃用）        | 开关的边框颜色（使用 CSS var `--el-switch-border-color` 代替）                               | ^[字符串]                                      | ''   |
| 标签 ^(a11y) ^(已弃用)      | 与本机输入中的 `aria-label` 相同                                                             | ^[字符串]                                      | —    |

### 活动

|名称 |描述 |类型 |
| ------ | ------------------------ | | ------------------------------------------------------- |
|改变 |当值改变时触发 | ^[功能]`(val: boolean \| string \| number) => void` |

### 切换插槽

| 名称                | 描述             |
| ------------------- | ---------------- |
| 主动行动 ^(2.4.4)   | 自定义主动动作   |
| 非活动动作 ^(2.4.4) | 自定义非活动操作 |
| 活跃 ^(2.13.0)      | 定制活动内容     |
| 不活动 ^(2.13.0)    | 自定义非活动内容 |

### 暴露

| 方法 | 描述             | 类型                |
| ---- | ---------------- | ------------------- |
| 焦点 | 手动对焦切换组件 | ^[功能]`() => void` |
