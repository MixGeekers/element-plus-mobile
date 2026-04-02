---
title: 布局
lang: zh-CN
---

# 布局

使用 24 栏网格快速组织页面内容。

:::tip

`Row / Col` 默认基于 Flex 布局，无需再设置 `type="flex"`。
默认断点收敛为 `xs / sm / md` 三档，推荐从窄屏开始逐步增强。

:::

## 基础布局

:::demo 通过 `row` 和 `col` 的 `span` 属性组织内容分区。

layout/basic-layout

:::

## 列间距

:::demo 使用 `gutter` 控制列之间的留白。

layout/column-spacing

:::

## 混合布局

:::demo 组合不同的列宽，构建更灵活的内容分组。

layout/hybrid-layout

:::

## 列偏移

:::demo 使用 `offset` 控制列的起始位置。

layout/column-offset

:::

## 对齐方式

:::demo 通过 `justify` 和 `align` 调整行内容的分布方式。

layout/alignment

:::

## 响应式布局

默认断点如下：

- `xs`：`< 480px`
- `sm`：`>= 480px`
- `md`：`>= 768px`

:::demo

layout/responsive-layout

:::

## 隐藏工具类

如需按断点隐藏元素，请引入：

```ts
import 'element-plus-mobile/theme-chalk/display.css'
```

可用类名如下：

- `hidden-xs-only`：仅在 `xs` 隐藏
- `hidden-sm-only`：仅在 `sm` 隐藏
- `hidden-sm-and-down`：在 `sm` 及更窄屏幕隐藏
- `hidden-sm-and-up`：在 `sm` 及更宽屏幕隐藏
- `hidden-md-only`：仅在 `md` 隐藏
- `hidden-md-and-down`：在 `md` 及更窄屏幕隐藏
- `hidden-md-and-up`：在 `md` 及更宽屏幕隐藏

## Row API

### Row 属性

| 属性名  | 说明             | 类型                                                                                         | 默认值 |
| ------- | ---------------- | -------------------------------------------------------------------------------------------- | ------ |
| gutter  | 栅格间隔         | ^[number]                                                                                    | 0      |
| justify | 水平方向对齐方式 | ^[enum]`'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | start  |
| align   | 垂直方向对齐方式 | ^[enum]`'top' \| 'middle' \| 'bottom'`                                                       | —      |
| tag     | 自定义元素标签   | ^[string]                                                                                    | div    |

### Row 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Col API

### Col 属性

| 属性名 | 说明                    | 类型                                                                                    | 默认值 |
| ------ | ----------------------- | --------------------------------------------------------------------------------------- | ------ |
| span   | 栅格占据的列数          | ^[number]                                                                               | 24     |
| offset | 左侧偏移的列数          | ^[number]                                                                               | 0      |
| push   | 向右移动的列数          | ^[number]                                                                               | 0      |
| pull   | 向左移动的列数          | ^[number]                                                                               | 0      |
| xs     | `< 480px` 响应式列配置  | ^[number] / ^[object]`{ span?: number, offset?: number, pull?: number, push?: number }` | —      |
| sm     | `>= 480px` 响应式列配置 | ^[number] / ^[object]`{ span?: number, offset?: number, pull?: number, push?: number }` | —      |
| md     | `>= 768px` 响应式列配置 | ^[number] / ^[object]`{ span?: number, offset?: number, pull?: number, push?: number }` | —      |
| tag    | 自定义元素标签          | ^[string]                                                                               | div    |

### Col 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

<style lang="scss">
@use '../examples/layout/index.scss';
</style>
