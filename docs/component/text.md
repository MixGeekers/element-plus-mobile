---
title: 文字
lang: zh-CN
---

# 文字

用于承载说明、提示和状态文本。

## 基础用法

:::demo 通过 `type` 区分文本语义。

text/basic

:::

## 尺寸

:::demo 使用 `size` 调整文本层级。

text/sizes

:::

## 省略

:::demo `truncated` 适合单行省略，`line-clamp` 适合多行省略。

text/truncated

:::

## 标签覆盖

:::demo 根据语义替换为 `p / b / i / sub / sup` 等标签。

text/override

:::

## 混排

:::demo 文本可以自然组合图标和其他组件。

text/mixed

:::

## API

### 属性

| 属性名    | 说明               | 类型                                                               | 默认值  |
| --------- | ------------------ | ------------------------------------------------------------------ | ------- |
| type      | 文本类型           | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —       |
| size      | 文本尺寸           | ^[enum]`'large' \| 'default' \| 'small'`                           | default |
| truncated | 是否单行省略       | ^[boolean]                                                         | false   |
| lineClamp | 多行省略的最大行数 | ^[string] / ^[number]                                              | —       |
| tag       | 自定义元素标签     | ^[string]                                                          | span    |

### 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
