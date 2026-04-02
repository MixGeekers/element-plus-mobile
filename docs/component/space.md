---
title: 空间
lang: zh-CN
---

# 空间

`Space` 用来组织一组内容之间的统一留白。

默认采用纵向堆叠，更适合表单分组、列表和操作区块。
只有在明确需要横向排列时，才显式设置 `direction="horizontal"`。

## 基础用法

:::demo 默认纵向堆叠，适合列表和信息分组。

space/basic

:::

## 横向紧凑排布

:::demo 需要横向操作条或筛选项时，可显式启用 `direction="horizontal"`。

space/auto-wrapping

:::

## 控制间距

:::demo 通过内置尺寸控制内容之间的留白强度。

space/control-size

:::

## 自定义间距

:::demo 当内置尺寸不够用时，可以直接传入数字。

space/customized-size

:::

## 分隔符

:::demo 文字分隔符。

space/literal-type-spacer

:::

:::demo VNode 分隔符。

space/vnode-type-spacer

:::

## 对齐方式

:::demo 在横向排布下，可以通过 `alignment` 控制不同高度内容的对齐方式。

space/alignment

:::

## 自动填充

`fill` 主要用于横向排布，让每个子项按比例占据可用宽度。

:::demo

space/fill

:::

## 填充比例

`fillRatio` 仅在 `fill + direction="horizontal"` 时生效。

:::demo

space/fill-ratio

:::

## API

### 属性

| 属性名    | 说明                   | 类型                                                                                                                          | 默认值                                        |
| --------- | ---------------------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| direction | 排列方向               | ^[enum]`'vertical' \| 'horizontal'`                                                                                           | vertical                                      |
| alignment | 子项对齐方式           | ^[enum]`'center' \| 'normal' \| 'stretch' \| ...` [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items) | vertical 时为 stretch，horizontal 时为 center |
| size      | 间距尺寸               | ^[enum]`'default' \| 'small' \| 'large'` / ^[number] / ^[array]`[number, number]`                                             | small                                         |
| spacer    | 自定义分隔内容         | ^[string] / ^[number] / ^[VNode]                                                                                              | —                                             |
| wrap      | 横向排布时是否自动换行 | ^[boolean]                                                                                                                    | false                                         |
| fill      | 横向排布时是否填充容器 | ^[boolean]                                                                                                                    | false                                         |
| fillRatio | 横向填充时的最小占比   | ^[number]                                                                                                                     | 100                                           |
| class     | 自定义类名             | ^[string] / ^[object] / ^[array]                                                                                              | —                                             |
| style     | 自定义样式             | ^[string] / ^[object]`CSSProperties \| CSSProperties[] \| string[]`                                                           | —                                             |
| prefixCls | 自定义前缀             | ^[string]                                                                                                                     | —                                             |

### 插槽

| 插槽名  | 说明               |
| ------- | ------------------ |
| default | 需要统一留白的内容 |
