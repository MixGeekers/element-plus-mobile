---
title: 空
lang: zh-CN
---

# 空

空状态的占位符提示。

## 基本用法

:::demo

empty/basic-usage

:::

## 自定义图像

使用 `image` 属性设置图像 URL。

:::demo

empty/custom-image

:::

## 图像大小

使用 `image-size` 属性来控制图像大小。

:::demo

empty/image-size

:::

## 底部内容

使用默认插槽在底部插入内容。

:::demo

empty/bottom-content

:::

## 自定义样式

现在您可以为空组件设置自定义样式。
使用`css/scss`语言更改全局或局部颜色。我们设置一些全局颜色变量：`--el-empty-fill-color-0`、`--el-empty-fill-color-1`、`--el-empty-fill-color-2`、......、`--el-empty-fill-color-9`。您可以使用：`:root { --el-empty-fill-color-0: red; --el-empty-fill-color-1: blue; }`。
但通常情况下，如果你想改变风格，你需要改变所有的颜色，因为这些颜色是一个组合。

### 默认变量

| 变量                    | 颜色 |
| ----------------------- | ---- | ----------------------- | ------------------- |
| --el-empty-fill-color-0 |      | --el-empty-fill-color-0 | var(--el-颜色-白色) |
| --el-empty-fill-color-1 |      | --el-empty-fill-color-1 | #fcfcfd             |
| --el-empty-fill-color-2 |      | --el-empty-fill-color-2 | #f8f9fb             |
| --el-empty-fill-color-3 |      | --el-empty-fill-color-3 | #f7f8fc             |
| --el-empty-fill-color-4 |      | --el-empty-fill-color-4 | #eeeff3             |
| --el-empty-fill-color-5 |      | --el-empty-fill-color-5 | #edeef2             |
| --el-empty-fill-color-6 |      | --el-empty-fill-color-6 | #e9ebef             |
| --el-empty-fill-color-7 |      | --el-empty-fill-color-7 | #e5e7e9             |
| --el-empty-fill-color-8 |      | --el-empty-fill-color-8 | #e0e3e9             |
| --el-empty-fill-color-9 |      | --el-empty-fill-color-9 | #d5d7de             |

## API

### 属性

|名称 |描述 |类型 |默认 |
| ----------- | ------------------------ | | --------- | -------- |
|图像|空的图像 URL | ^[字符串] | ''|
|图像大小 |空的图像尺寸（宽度）| ^[数字] | — |
|描述 |空的描述 | ^[字符串] | ''|

### 老虎机

| 名称 | 描述             |
| ---- | ---------------- |
| 默认 | 内容作为底部内容 |
| 图像 | 内容即图像       |
| 描述 | 内容为描述       |
