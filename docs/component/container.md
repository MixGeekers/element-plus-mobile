---
title: Container 布局容器
lang: zh-CN
---

# Container 布局容器

用于搭建页面壳层。

`<el-container>` 默认按纵向堆叠子元素，适合组织 `<el-header> / <el-main> / <el-footer>` 这类自上而下的页面结构。
只有在明确需要横向分栏时，才显式设置 `direction="horizontal"`。

:::tip

这些组件基于 Flex 布局。`<el-container>` 的直接子元素应为 `<el-header> / <el-aside> / <el-main> / <el-footer>` 中的一个或多个。

:::

<style lang="scss">
@use '../examples/container/common-layout.scss';
</style>

## 基础页面壳

:::demo 最常见的页面结构：顶部信息、主内容区、底部主要操作。

container/layout-mobile-basic

:::

## 底部导航栏

:::demo 当页面存在一级导航时，可将 `<el-footer>` 组织为底部导航栏。

container/layout-mobile-tabbar

:::

## 沉浸式页面

:::demo 弱导航场景可以只保留 Main，让内容占满整个视口。

container/layout-mobile-fullscreen

:::

## Container API

### Container 属性

| 属性名      | 说明                 | 类型                                | 默认值   |
| ----------- | -------------------- | ----------------------------------- | -------- |
| direction   | 子元素排列方向       | ^[enum]`'horizontal' \| 'vertical'` | vertical |
| full-screen | 容器是否占满视口高度 | ^[boolean]                          | false    |

### Container 插槽

| 插槽名  | 说明           | 子标签                                     |
| ------- | -------------- | ------------------------------------------ |
| default | 自定义默认内容 | Container / Header / Aside / Main / Footer |

## Header API

### Header 属性

| 属性名 | 说明               | 类型       | 默认值 |
| ------ | ------------------ | ---------- | ------ |
| height | 顶栏高度           | ^[string]  | 3.5rem |
| fixed  | 是否固定在视口顶部 | ^[boolean] | false  |

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

| 属性名 | 说明               | 类型       | 默认值 |
| ------ | ------------------ | ---------- | ------ |
| height | 底栏高度           | ^[string]  | 3.5rem |
| fixed  | 是否固定在视口底部 | ^[boolean] | false  |

### Footer 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
