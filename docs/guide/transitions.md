---
title: 内置转换
lang: zh-CN
---

# 内置转换

您可以直接使用 Element Plus Mobile 的内置转场。
在此之前，请阅读[转换文档](https://vuejs.org/guide/built-ins/transition.html)。

## 淡出

:::demo 我们有两种淡入淡出效果：`el-fade-in-linear` 和 `el-fade-in`。

transitions/fade

:::

## 缩放

:::demo `el-zoom-in-left`、`el-zoom-in-center`、`el-zoom-in-top` 和 `el-zoom-in-bottom` 提供。

transitions/zoom

:::

## 折叠

对于塌陷效果，请使用 `el-collapse-transition` 组件。

:::demo

transitions/collapse

:::

## 按需导入

```ts [main.ts]
// collapse
import { ElCollapseTransition } from 'element-plus-mobile'
// fade/zoom
import 'element-plus-mobile/theme-chalk/base.css'
import App from './App.vue'

const app = createApp(App)
app.component(ElCollapseTransition.name, ElCollapseTransition)
```
