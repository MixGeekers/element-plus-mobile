---
title: 链接
lang: zh-CN
---

# 链接

用于展示可点击的文本链接。

默认情况下，链接始终显示下划线，避免把“可点状态”依赖到悬停反馈上。

:::warning 安全提示

`href` 会直接渲染到 `<a>` 标签。如果传入不可信 URL，例如 `javascript:` 协议，可能会导致 XSS 或跳转风险。
在接入外部数据前，请先完成 URL 校验与清洗。

:::

## 基础用法

:::demo

link/basic

:::

## 禁用状态

:::demo

link/disabled

:::

## 下划线策略

`underline` 仅保留 `'always'` 与 `'never'` 两种取值，默认是 `'always'`。

:::demo

link/underline

:::

## 图标链接

:::demo

link/with-icon

:::

## API

### 属性

| 属性名    | 说明               | 类型                                                                            | 默认值  |
| --------- | ------------------ | ------------------------------------------------------------------------------- | ------- |
| type      | 链接类型           | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` | default |
| underline | 是否显示下划线     | ^[enum]`'always' \| 'never'`                                                    | always  |
| disabled  | 是否禁用           | ^[boolean]                                                                      | false   |
| href      | 原生链接 `href`    | ^[string]                                                                       | —       |
| target    | 原生链接 `target`  | ^[enum]`'_blank' \| '_parent' \| '_self' \| '_top'`                             | \_self  |
| icon      | 图标组件或图标名称 | ^[string] / ^[Component]                                                        | —       |

### 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
| icon    | 自定义图标内容 |
