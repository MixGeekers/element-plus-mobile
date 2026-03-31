---
title: 链接
lang: zh-CN
---

# 链接

文本超链接

:::warning 安全警告
`href` 道具将直接渲染到 `<a>` 标签。如果传递 `javascript:alert(1)` 等值或恶意 URL，可能会导致 **XSS** 或 **开放重定向漏洞**。

使用前务必验证并清理 URL。例如：

<details>
<summary>显示代码示例</summary>

```js
function sanitizeUrl(url) {
  const allowedProtocols = ['http:', 'https:']
  try {
    const parsed = new URL(url, window.location.origin)
    return allowedProtocols.includes(parsed.protocol) ? parsed.href : '#'
  } catch {
    return '#'
  }
}
```

</details>

:::

## 基础

基本文本链接

:::demo

link/basic

:::

## 禁用

链接禁用状态

:::demo

link/disabled

:::

## 下划线

控制何时出现下划线

:::warning

`boolean` 值已被**弃用**，并且\*\*将在 ^(3.0.0) 中删除，请考虑切换到新值。

:::

:::tip

从 ^(2.9.9) 开始，您可以使用 `'always' | 'hover' | 'never'` 来控制何时出现下划线。文档中的示例均使用这些值。如果您使用的版本**低于** ^(2.9.9)，请参考：

:::

```vue
<template>
  <!-- works before 2.9.9, use 'hover' after, removed in 3.0.0 -->
  <el-link underline>link</el-link>
  <!-- works before 2.9.9, use 'never' after, removed in 3.0.0 -->
  <el-link :underline="false">link</el-link>
</template>
```

:::demo

link/underline

:::

## 图标

带图标的链接

:::tip

使用 `icon` 属性添加图标。您可以传递组件名称字符串（提前注册）或组件本身（SVG Vue 组件）。 Element Plus提供了一组图标，您可以在[图标](./icon.md)中找到

:::

:::demo

link/with-icon

:::

## API

### 属性

| 名称   | 描述                        | 类型                                                                            | 默认   |
| ------ | --------------------------- | ------------------------------------------------------------------------------- | ------ |
| 类型   | 类型                        | ^[枚举]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` | 默认   |
| 下划线 | 何时应出现下划线            | ^[枚举]`'always' \| 'hover' \| 'never' \| boolean`                              | 悬停   |
| 已禁用 | 组件是否被禁用              | ^[布尔值]                                                                       | 假     |
| 链接   | 与本机超链接的 `href` 相同  | ^[字符串]                                                                       | —      |
| 目标   | 与本机超链接的`target` 相同 | ^[枚举]`'_blank' \| '_parent' \| '_self' \| '_top'`                             | \_自我 |
| 图标   | 图标组件                    | ^[字符串] / ^[组件]                                                             | —      |

### 老虎机

| 名称 | 描述           |
| ---- | -------------- |
| 默认 | 自定义默认内容 |
| 图标 | 自定义图标组件 |
