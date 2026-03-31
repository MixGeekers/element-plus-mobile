---
title: 分频器
lang: zh-CN
---

# 分频器

分隔内容的分界线。

## 基本用法

将文本划分为不同的段落。

:::demo

divider/basic-usage

:::

## 自定义内容

您可以自定义分隔线上的内容。

:::demo

divider/custom-content

:::

## 虚线

您可以设置分隔线的样式。

:::demo

divider/line-dashed

:::

## 垂直分隔线

:::demo

divider/vertical-divider

:::

## API

### 属性

| 名称     | 描述                       | 类型                                                                                                                                    | 默认 |
| -------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| 方向     | 设置分隔线的方向           | ^[枚举]`'horizontal' \| 'vertical'`                                                                                                     | 水平 |
| 边框样式 | 设置分隔线的样式           | ^[enum]`'none' \| 'solid' \| 'hidden' \| 'dashed' \| ...` [css/边框样式](https://developer.mozilla.org/zh-CN/docs/Web/CSS/border-style) | 固体 |
| 内容位置 | 自定义内容在分割线上的位置 | ^[枚举]`'left' \| 'right' \| 'center'`                                                                                                  | 中心 |

### 老虎机

| 名称 | 描述                 |
| ---- | -------------------- |
| 默认 | 分隔线上的自定义内容 |
