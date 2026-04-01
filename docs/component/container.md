---
title: Container 布局容器
lang: zh-CN
---

# Container 布局容器

用于布局的容器组件，方便搭建页面基本结构：

`<el-container>`：外层容器。在移动端布局中默认垂直排列子元素，需要并排布局时可设置 `direction="horizontal"`。

`<el-header>`：顶栏容器。

`<el-aside>`：侧边栏容器。

`<el-main>`：主内容区容器。

`<el-footer>`：底栏容器。

:::tip

这些组件采用 Flex 布局。`<el-container>` 的直接子元素必须是以上四个组件中的一个或多个，这四个组件的父元素也必须是 `<el-container>`。

:::

## 常见布局

<style lang="scss">
@use '../examples/container/common-layout.scss';
</style>

:::demo

container/layout-hm

:::

:::demo

container/layout-hmf

:::

:::demo

container/layout-am

:::

:::demo

container/layout-ham

:::

:::demo

container/layout-hamf

:::

:::demo

container/layout-ahm

:::

:::demo

container/layout-ahmf

:::

## 示例

:::demo

container/example

:::

## 移动端布局

下面的示例沿用上面“结构示意”的写法，重点说明 `Header`、`Main`、`Footer` 在移动端页面中的职责分工。
如果你的页面需要占满视口，可在页面根节点使用 `full-screen`；如果需要页面级吸顶或吸底，再按需给 `Header`、`Footer` 增加 `fixed`。

:::demo 最基础的移动端页面壳：Header + Main + Footer。

container/layout-mobile-basic

:::

:::demo 底部导航型布局：在 Footer 中组织 Tab Bar。

container/layout-mobile-tabbar

:::

:::demo 沉浸式布局：只保留 Main，适合弱导航场景。

container/layout-mobile-fullscreen

:::

## Container API

### Container 属性

| 属性名      | 说明                 | 类型                                | 默认值   |
| ----------- | -------------------- | ----------------------------------- | -------- |
| direction   | 子元素的排列方向     | ^[enum]`'horizontal' \| 'vertical'` | vertical |
| full-screen | 容器是否占满视口高度 | ^[boolean]                          | false    |

### Container 插槽

| 插槽名  | 说明           | 子标签                                     |
| ------- | -------------- | ------------------------------------------ |
| default | 自定义默认内容 | Container / Header / Aside / Main / Footer |

## Header API

### Header 属性

| 属性名 | 说明                     | 类型       | 默认值 |
| ------ | ------------------------ | ---------- | ------ |
| height | 顶栏高度                 | ^[string]  | 3.5rem |
| fixed  | 是否将顶栏固定在视口顶部 | ^[boolean] | false  |

### Header 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Aside API

### Aside 属性

| 属性名 | 说明       | 类型      | 默认值 |
| ------ | ---------- | --------- | ------ |
| width  | 侧边栏宽度 | ^[string] | 100%   |

### Aside 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Main API

### Main 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

## Footer API

### Footer 属性

| 属性名 | 说明                     | 类型       | 默认值 |
| ------ | ------------------------ | ---------- | ------ |
| height | 底栏高度                 | ^[string]  | 3.5rem |
| fixed  | 是否将底栏固定在视口底部 | ^[boolean] | false  |

### Footer 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
