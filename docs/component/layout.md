---
title: 布局
lang: zh-CN
---

# 布局

使用基本的 24 列快速轻松地创建布局。

:::tip

组件默认使用flex布局，无需手动设置`type="flex"`。

请注意父容器应避免使用`inline`相关样式，
这将导致组件无法填满其宽度。

列的基本单位是1，最大为24，最小为0。

:::

## 基本布局

使用列创建基本网格布局。

:::demo 通过 `row` 和 `col`，我们可以使用 `span` 属性轻松操纵布局。

layout/basic-layout

:::

## 列间距

支持列间距。

:::demo Row提供`gutter`属性来指定列之间的间距，其默认值为0。

layout/column-spacing

:::

## 混合布局

通过组合基本的1/24列形成更复杂的混合布局。

:::demo

layout/hybrid-layout

:::

## 列偏移量

您可以指定列偏移。

:::demo 您可以通过设置 Col 的 `offset` 属性值来指定列偏移数。

layout/column-offset

:::

## 对齐

默认使用flex布局来灵活对齐列。

:::demo 您可以通过设置 `justify` 属性来定义子元素的布局：start、center、end、space- Between、space-around 或 space-evenly。

layout/alignment

:::

## 响应式布局

对于移动优先网格，预设了三个断点：
`xs`、`sm` 和 `md`。

- `xs`：`<480px`
- `sm`：`>=480px`
- `md`：`>=768px`

:::demo

layout/responsive-layout

:::

## 用于隐藏元素的实用程序类

此外，Element Plus 还提供了一系列用于隐藏元素的类
某些条件。这些类可以添加到任何 DOM 元素或自定义组件中。
您需要导入以下 CSS 文件才能使用这些类：

```js
import 'element-plus-mobile/theme-chalk/display.css'
```

课程有：

- `hidden-xs-only` - 仅在超小视口时隐藏
- `hidden-sm-only` - 仅在小视口上隐藏
- `hidden-sm-and-down` - 在小视口和向下时隐藏
- `hidden-sm-and-up` - 在小视口及以上时隐藏
- `hidden-md-only` - 仅在中等视口时隐藏
- `hidden-md-and-down` - 在中等视口和向下时隐藏
- `hidden-md-and-up` - 在中等视口及以上时隐藏
- `hidden-lg-only` - 仅在大视口时隐藏
- `hidden-lg-and-down` - 在大视口和向下时隐藏
- `hidden-lg-and-up` - 在大视口及以上时隐藏
- `hidden-xl-only` - 仅在超大视口时隐藏

## 行API

### 行属性

| 名称 | 描述               | 类型                                                                                         | 默认 |
| ---- | ------------------ | -------------------------------------------------------------------------------------------- | ---- |
| 天沟 | 网格间距           | ^[数字]                                                                                      | 0    |
| 证明 | Flex布局的水平对齐 | ^[枚举]`'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | 开始 |
| 对齐 | Flex布局的垂直对齐 | ^[枚举]`'top' \| 'middle' \| 'bottom'`                                                       | —    |
| 标签 | 自定义元素标签     | ^[字符串]                                                                                    | 分区 |

### 行槽

| 名称 | 描述           | 子标签 |
| ---- | -------------- | ------ |
| 默认 | 自定义默认内容 | 上校   |

## 列 API

### 列属性

| 名称     | 描述                          | 类型                                                                                       | 默认 |
| -------- | ----------------------------- | ------------------------------------------------------------------------------------------ | ---- |
| 跨度     | 网格跨越的列数                | ^[数字]                                                                                    | 24   |
| 偏移     | 网格左侧的间距数              | ^[数字]                                                                                    | 0    |
| 推       | 网格向右移动的列数            | ^[数字]                                                                                    | 0    |
| 拉       | 网格向左移动的列数            | ^[数字]                                                                                    | 0    |
| xs       | `<480px` 响应式列或列道具对象 | `<480px` ^[数字] / ^[对象]`{span?: number, offset?: number, pull?: number, push?: number}` | —    |
| SM       | `≥480px` 响应式列或列道具对象 | `≥480px` ^[数字] / ^[对象]`{span?: number, offset?: number, pull?: number, push?: number}` | —    |
| 医学博士 | `≥768px` 响应式列或列道具对象 | `≥768px` ^[数字] / ^[对象]`{span?: number, offset?: number, pull?: number, push?: number}` | —    |
| 标签     | 自定义元素标签                | ^[字符串]                                                                                  | 分区 |

### 栏位

| 名称 | 描述           |
| ---- | -------------- |
| 默认 | 自定义默认内容 |

<style lang="scss">
@use '../examples/layout/index.scss';
</style>
