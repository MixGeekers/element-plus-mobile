---
title: 进展
lang: zh-CN
---

# 进展

进度用于显示当前操作的进度，告知用户当前的状态。

## 线性进度条

:::demo 使用 `percentage` 属性设置百分比。这是**必填**，并且必须在 `0-100` 之间。您可以通过设置 `format` 自定义文本格式。

progress/linear-progress-bar

:::

## 内部百分比

在这种情况下，百分比不占用额外空间。

:::demo `stroke-width` 属性决定进度条的 `width`，并使用 `text-inside` 属性将描述放在进度条内。

progress/internal-percentage

:::

## 自定义颜色

您可以使用 `color` attr 设置进度条颜色。它接受颜色字符串、函数或数组。

:::demo

progress/custom-color

:::

## 圆形进度条

:::demo 您可以为`circle`指定`type`属性来使用圆形进度条，并使用`width`属性来改变圆形的大小。

progress/circular-progress-bar

:::

## 仪表板进度条

您还可以为 `dashboard` 指定 `type` 属性以使用仪表板进度条。

:::demo

progress/dashboard-progress-bar

:::

## 定制内容

:::demo 使用默认插槽添加自定义内容。

progress/customized-content

:::

## 不确定的进度

:::demo 使用 `indeterminate` 属性设置不确定进度，用 `duration` 控制动画持续时间。

progress/indeterminate-progress

:::

## 条纹进度

:::demo 使用 `striped` 属性设置条带进度。您可以使用 `striped-flow` 使条纹流动，并使用 `duration` 控制动画持续时间。

progress/striped-progress

:::

## API

### 属性

| 名称            | 描述                                                   | 类型                                                                                                   | 默认 |
| --------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------ | ---- | --- |
| 百分比^（必填） | 百分比                                                 | ^[编号]`(0-100)`                                                                                       | 0    |
| 类型            | 进度条的类型                                           | ^[枚举]`'line' \| 'circle' \| 'dashboard'`                                                             | 线   |
| 笔划宽度        | 进度条的宽度                                           | ^[数字]                                                                                                | 6    |
| 内文            | 是否将百分比放在进度条内，仅当 `type` 为 'line' 时有效 | ^[布尔值]                                                                                              | 假   |
| 状态            | 进度条的当前状态                                       | ^[枚举]`'success' \| 'exception' \| 'warning'`                                                         | —    |
| 不确定          | 设置不确定的进度                                       | ^[布尔值]                                                                                              | 假   |
| 持续时间        | 控制不确定进度或条纹流进度的动画持续时间               | ^[数字]                                                                                                | 3    |
| 颜色            | 进度条的背景颜色。覆盖 `status` 道具                   | ^[字符串] / ^[函数]`(percentage: number) => string` / ^[数组]`{ color: string; percentage: number }[]` | ''   |
| 宽度            | 圆形进度条的画布宽度                                   | ^[数字]                                                                                                | 126  | 126 |
| 显示文本        | 是否显示百分比                                         | ^[布尔值]                                                                                              | 真实 |
| 笔划线帽        | 结束路径处的圆形/仪表板类型形状                        | ^[枚举]`'butt' \| 'round' \| 'square'`                                                                 | 圆形 |
| 格式            | 自定义文本格式                                         | ^[功能]`(percentage: number) => string`                                                                | —    |
| 条纹 ^(2.3.4)   | 进度条颜色上的条纹                                     | ^[布尔值]                                                                                              | 假   |
| 条纹流 ^(2.3.4) | 让条纹流动                                             | ^[布尔值]                                                                                              | 假   |

### 老虎机

| 名称 | 描述     | 类型                            |
| ---- | -------- | ------------------------------- |
| 默认 | 定制内容 | ^[对象]`{ percentage: number }` |
