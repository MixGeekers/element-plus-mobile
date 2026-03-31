---
title: 自定义默认值
lang: zh-CN
---

# 自定义默认值

组件库允许您自定义组件道具的默认值。

通过提前配置默认值，您可以减少重复的 prop 声明并保持模板更干净、更一致。

## 基本用法

您可以使用组件提供的静态 `setPropsDefaults` 方法来自定义组件的默认 props。

:::tip

请注意，默认自定义**仅适用于声明性组件**并且**必须在组件初始化之前执行**。

配置的默认值是全局的。设置后，它们将应用于注册该组件的所有 Vue 应用程序。

一旦组件第一次渲染，默认值就变得不可变并且不能再更改。

:::

```ts [main.ts]
import { ElButton } from 'element-plus-mobile'

ElButton.setPropsDefaults({
  type: 'primary',
  size: 'small',
})
```

应用定制后，以下两种用法是等效的：

```vue [App.vue]
<template>
  <el-button>Hello</el-button>
  <el-button type="primary" size="small">Hello</el-button>
</template>
```

::: warning

不建议为其他组件内部使用的组件设置默认值。

例如：

```ts
// This will cause the behavior of the el-autocomplete component to change.
ElInput.setPropsDefaults({ maxlength: 1 })
```

:::
