---
title: 按钮
lang: zh-CN
---

# 按钮

用于承载页面中的主要操作、次要操作和轻量文本操作。

## 基本用法

:::demo 使用 `type`、`plain`、`round`、`dashed` 和 `circle` 定义 Button 的样式。

button/basic

:::

## 禁用按钮

`disabled` 属性确定按钮是否被禁用。

:::demo 使用 `disabled` 属性来确定按钮是否被禁用。它接受 `Boolean` 值。

button/disabled

:::

## 链接按钮

:::warning

`type="text"` 已被 **弃用**，并且 **将** 在 ^(3.0.0) 中删除，请考虑切换到新的 API。

^(2.2.1)中添加了新的API `link`，您可以使用`type` API设置链接按钮的主题

:::

:::demo

button/link

:::

## 文本按钮

:::tip

文字按钮自 <el-tag round effect="plain" size="small">2.2.0</el-tag> 开始升级全新设计，如果您想使用
以前版本的按钮，您可能需要查看[链接](./link.md#basic)。

API 也更新了，因为 `type` 属性也代表按钮的样式。所以我们必须制作一个新的API
`text: boolean` 用于文本按钮。

:::

没有边框和背景的按钮。

:::demo

button/text

:::

## 图标按钮

使用图标为按钮添加更多含义。您可以单独使用图标来节省一些空间，也可以与文本一起使用。

:::demo 使用 `icon` 属性添加图标。您可以在Element Plus图标组件中找到图标列表。使用 `<i>` 标签可以将图标添加到文本右侧。也可以使用自定义图标。

button/icon

:::

## 按钮组

按钮组默认纵向排列；只有在底部双按钮栏等场景下，才显式设置 `direction="horizontal"`。

:::demo 使用 `<el-button-group>` 组织一组连续操作。

button/group

:::

## 加载按钮

点击按钮加载数据，按钮显示加载状态。

将 `loading` 属性设置为 `true` 以显示加载状态。

:::tip

您可以使用 `loading` 插槽或 `loadingIcon` 自定义您的加载组件

ps: `loading` slot 的优先级高于loadingIcon

:::

:::demo

button/loading

:::

## 尺寸

除了默认大小外，Button 组件还提供了三种额外的大小供您在不同的场景中进行选择。

:::demo 使用属性 `size` 通过 `large`、`small` 设置附加尺寸。

button/size

:::

## 标签 ^(2.3.4)

您可以自定义元素标签，例如button、div、a、router-link、nuxt-link。

:::demo

button/tag

:::

## 自定义颜色 ^（测试版）

您可以自定义按钮颜色。

我们将自动计算悬停颜色和活动颜色。

:::demo

button/custom

:::

## 按钮 API

### Button 属性

| 属性名            | 说明                                                                    | 类型                                                                                                         | 默认值  |
| ----------------- | ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------ | ------- |
| size              | 按钮尺寸                                                                | ^[enum]`'large' \| 'default' \| 'small'`                                                                     | —       |
| type              | 按钮类型，设置 `color` 时以后者为准                                     | ^[enum]`'default' \| 'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| '' \| 'text' (deprecated)` | —       |
| plain             | 是否为朴素按钮                                                          | ^[boolean]                                                                                                   | false   |
| text ^(2.2.0)     | 是否为文本按钮                                                          | ^[boolean]                                                                                                   | false   |
| bg ^(2.2.0)       | 文本按钮背景色是否常亮                                                  | ^[boolean]                                                                                                   | false   |
| link ^(2.2.1)     | 是否为链接按钮                                                          | ^[boolean]                                                                                                   | false   |
| round             | 是否为圆角按钮                                                          | ^[boolean]                                                                                                   | false   |
| circle            | 是否为圆形按钮                                                          | ^[boolean]                                                                                                   | false   |
| dashed ^(2.13.3)  | 是否为虚线按钮                                                          | ^[boolean]                                                                                                   | false   |
| loading           | 是否处于加载状态                                                        | ^[boolean]                                                                                                   | false   |
| loading-icon      | 自定义加载图标组件                                                      | ^[string] / ^[Component]                                                                                     | Loading |
| disabled          | 是否禁用                                                                | ^[boolean]                                                                                                   | false   |
| icon              | 图标组件                                                                | ^[string] / ^[Component]                                                                                     | —       |
| autofocus         | 与原生按钮 `autofocus` 一致                                             | ^[boolean]                                                                                                   | false   |
| native-type       | 与原生按钮 `type` 一致                                                  | ^[enum]`'button' \| 'submit' \| 'reset'`                                                                     | button  |
| auto-insert-space | 自动在两个汉字之间插入空格（仅当文本长度为 2 且所有字符均为中文时生效） | ^[boolean]                                                                                                   | false   |
| color             | 自定义按钮颜色，自动计算 `hover` 和 `active` 颜色                       | ^[string]                                                                                                    | —       |
| dark              | 深色模式下自动将 `color` 转换为深色系颜色                               | ^[boolean]                                                                                                   | false   |
| tag ^(2.3.4)      | 自定义元素标签                                                          | ^[string] / ^[Component]                                                                                     | button  |

### Button 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
| loading | 自定义加载组件 |
| icon    | 自定义图标组件 |

### Button 暴露

| 名称           | 说明           | 类型                                                                                                           |
| -------------- | -------------- | -------------------------------------------------------------------------------------------------------------- |
| ref            | 按钮 HTML 元素 | ^[object]`Ref<HTMLButtonElement>`                                                                              |
| size           | 按钮尺寸       | ^[object]`ComputedRef<'' \| 'small' \| 'default' \| 'large'>`                                                  |
| type           | 按钮类型       | ^[object]`ComputedRef<'' \| 'default' \| 'primary' \| 'success' \| 'warning' \| 'info' \| 'danger' \| 'text'>` |
| disabled       | 按钮是否禁用   | ^[object]`ComputedRef<boolean>`                                                                                |
| shouldAddSpace | 是否自动补空格 | ^[object]`ComputedRef<boolean>`                                                                                |

## 按钮组 API

### ButtonGroup 属性

| 属性名              | 说明                 | 类型                                                               | 默认值   |
| ------------------- | -------------------- | ------------------------------------------------------------------ | -------- |
| size                | 控制按钮组内按钮大小 | ^[enum]`'large' \| 'default' \| 'small'`                           | —        |
| type                | 控制按钮组内按钮类型 | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info'` | —        |
| direction ^(2.11.9) | 排列方向             | ^[enum]`'horizontal' \| 'vertical'`                                | vertical |

### ButtonGroup 插槽

| 插槽名  | 说明             | 子标签 |
| ------- | ---------------- | ------ |
| default | 自定义按钮组内容 | Button |
