---
title: 页眉
lang: zh-CN
---

# 页眉

如果页面路径比较简单，建议使用PageHeader而不是Breadcrumb。

## 完整示例

:::demo

page-header/complete

:::

## 基本用法

标准页眉，用于简单场景。

:::demo

page-header/basic

:::

## 自定义图标

默认图标可能不能满足您的要求，您可以通过设置 `icon` 属性来自定义图标
就像这个例子。

:::demo

page-header/custom-icon

:::

## 无图标

有时页面充满了元素，您可能不希望图标显示在页面上，
您可以将 `icon` 属性设置为 `""` 来摆脱它。

:::demo

page-header/no-icon

:::

## 面包屑

页面标题允许您添加面包屑，以便通过 `breadcrumb` 插槽向用户提供路线信息。

:::demo

page-header/breadcrumb

:::

## 附加操作部分

标题可以根据需要复杂化，您可以向标题添加其他部分，以允许丰富的内容
互动。

:::demo

page-header/additional-sections

:::

## 主要内容

有时我们希望头部显示一些共同响应的内容，我们可以利用 `default` 插槽来实现。

:::demo

page-header/main-content

:::

## 解剖学

该组件由这些部分组成

```vue
<template>
  <el-page-header>
    <!-- Line 1 -->
    <template #breadcrumb />
    <!-- Line 2 -->
    <template #icon />
    <template #title />
    <template #content />
    <template #extra />
    <!-- Lines after 2 -->
    <template #default />
  </el-page-header>
</template>
```

## API

### 属性

| 名称 | 描述                              | 类型                | 默认 |
| ---- | --------------------------------- | ------------------- | ---- |
| 图标 | 页眉的图标组件                    | ^[字符串] / ^[组件] | 返回 |
| 标题 | 页眉主标题，默认为 Back 内置 a11y | ^[字符串]           | ''   |
| 内容 | 页眉内容                          | ^[字符串]           | ''   |

### 活动

| 名称 | 描述           | 类型                |
| ---- | -------------- | ------------------- |
| 返回 | 单击右侧时触发 | ^[功能]`() => void` |

### 老虎机

| 名称   | 描述           |
| ------ | -------------- |
| 图标   | 内容作为图标   |
| 标题   | 内容为标题     |
| 内容   | 内容           |
| 额外   | 额外           |
| 面包屑 | 内容作为面包屑 |
| 默认   | 主要内容       |
