---
title: 空间
lang: zh-CN
---

# 空间

虽然我们有[Divider](./divider.md)，但有时我们需要多个[Divider](./divider.md)来分割元素，所以我们将每个元素堆叠在[Divider](./divider.md)上，但这样做不仅使我们的代码变得丑陋，而且难以维护。 **空间**就是这种组件为我们提供了生产力和优雅。

## 基本用法

基本用例是使用该组件在每个组件之间提供统一的空间

:::demo 使用空间提供空间

space/basic

:::

## 垂直布局

使用`direction`属性来控制布局，我们使用`flex-direction`来实现这一点。

:::demo 我们还提供垂直布局。

space/vertical-layout

:::

## 控制空间的大小

通过 `size` API 控制空间大小。

您可以使用内置尺寸 `small`、`default`、`large` 来设置尺寸，这些尺寸对应于 `8px`、`12px`、`16px`。默认大小为 `small`，又名`8px`

您还可以使用自定义尺寸来覆盖它。请参阅下一部分。

:::demo

space/control-size

:::

## 定制尺寸

有时内置尺寸无法满足业务需求，我们可以使用自定义尺寸（数字类型）来控制项目之间的间距。

:::demo

space/customized-size

:::

:::tip

不要将 `ElSpace` 与依赖于祖先宽度（高度）的组件一起使用，例如`ElSlider`，在这种情况下，当您拖动触发按钮时，条形图会变大，导致光标和触发按钮之间错位。

:::

## 自动换行

当处于**水平**模式时，使用 `wrap`（**bool 类型**）来控制自动换行行为。

:::demo 使用 `wrap` 控制换行

space/auto-wrapping

:::

## 垫片

有时我们想要的不仅仅是空白，所以我们有（spacer）来帮助我们。

## 文字类型间隔符

:::demo

space/literal-type-spacer

:::

## Spacer也可以是VNode

:::demo

space/vnode-type-spacer

:::

## 对齐

设置该属性可以调整子节点的对齐方式，所需的值可以在[align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)中找到。

:::demo 使用 `alignment`

space/alignment

:::

## 填充容器

通过`fill`**（布尔类型）**参数，可以控制子节点是否自动填充容器。

在下面的示例中，当设置为`fill`时，子节点的宽度将自动适应容器的宽度。

:::demo 使用 fill 自动填充子节点的容器

space/fill

:::

您还可以使用`fillRatio`参数来自定义填充比例。默认值为`100`，表示根据父容器`100%`的宽度进行填充。

需要注意的是，水平布局和垂直布局的表达方式略有不同，具体效果可以看下面的例子。

:::demo 使用 fillRatio 自定义填充比例

space/fill-ratio

:::

## API

### 属性

| 名称     | 描述               | 类型                                                                                                                       | 默认 |
| -------- | ------------------ | -------------------------------------------------------------------------------------------------------------------------- | ---- | --- |
| 对齐     | 控制项目的对齐方式 | ^[枚举]`'center' \| 'normal' \| 'stretch' \| ...` [对齐项目](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) | 中心 |
| 类       | 类名               | ^[字符串] / ^[对象] / ^[数组]                                                                                              | —    |
| 方向     | 放置方向           | ^[枚举]`'vertical' \| 'horizontal'`                                                                                        | 水平 |
| 前缀-cls | 空间项目的前缀     | ^[字符串]                                                                                                                  | —    |
| 风格     | 额外的风格规则     | ^[字符串] / ^[对象]`CSSProperties \| CSSProperties[] \| string[]`                                                          | —    |
| 垫片     | 垫片               | ^[字符串] / ^[数字] / ^[VNode]                                                                                             | —    |
| 尺寸     | 间距尺寸           | ^[枚举]`'default' \| 'small' \| 'large'` / ^[数字] / ^[数组]`[number, number]`                                             | 小   |
| 包裹     | 自动包装           | ^[布尔值]                                                                                                                  | 假   |
| 填充     | 是否填充容器       | ^[布尔值]                                                                                                                  | 假   |
| 填充率   | 填充率             | ^[数字]                                                                                                                    | 100  | 100 |

### 老虎机

| 名称 | 描述           |
| ---- | -------------- |
| 默认 | 需要间隔的项目 |
