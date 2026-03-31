---
title: 快速开始
lang: zh-CN
---

# 快速开始

本节介绍如何在项目中使用 Element Plus Mobile。

## 用法

### 完全导入

如果你不太关心bundle的大小，那么使用完全导入会更方便。

```ts [main.ts]
import { createApp } from 'vue'
import ElementPlusMobile from 'element-plus-mobile'
import 'element-plus-mobile/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlusMobile)
app.mount('#app')
```

#### 掌侧支撑

如果使用volar，请将全局组件类型定义添加到`tsconfig.json`中的`compilerOptions.types`中。

```json [tsconfig.json]
{
  "compilerOptions": {
    // ...
    "types": ["element-plus-mobile/global"]
  }
}
```

### 按需导入

您需要使用额外的插件来导入您使用的组件。

####自动导入<el-tag type="primary" style="vertical-align: middle;" effect="dark" size="small">推荐</el-tag>

首先您需要安装`unplugin-vue-components`和`unplugin-auto-import`。

::: code-group

```shell [npm]
$ npm install -D unplugin-vue-components unplugin-auto-import
```

```shell [yarn]
$ yarn add -D unplugin-vue-components unplugin-auto-import
```

```shell [pnpm]
$ pnpm install -D unplugin-vue-components unplugin-auto-import
```

:::

然后将以下代码添加到您的 `Vite` 或 `Webpack` 配置文件中。

::: code-group

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  // ...
  plugins: [
    // ...
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
})
```

```js [webpack.config.js]
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // ...
  plugins: [
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
}
```

:::

有关更多捆绑器（[Rollup](https://rollupjs.org/)、[Vue CLI](https://cli.vuejs.org/)）和配置，请参考 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components#installation) 和 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import#install)。

#### 努克斯特

对于Nuxt用户，只需安装`@element-plus/nuxt`。

::: code-group

```shell [npm]
$ npm install -D @element-plus/nuxt
```

```shell [yarn]
$ yarn add -D @element-plus/nuxt
```

```shell [pnpm]
$ pnpm install -D @element-plus/nuxt
```

:::

然后将以下代码添加到您的配置文件中。

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['@element-plus/nuxt'],
})
```

请参阅[文档](https://github.com/element-plus/element-plus-nuxt#readme)了解如何配置它。

### 手动导入

Element Plus Mobile 提供开箱即用的[Tree Shaking](https://webpack.js.org/guides/tree-shaking/)
基于ES模块的功能。

但您需要安装 [unplugin-element-plus](https://github.com/element-plus/unplugin-element-plus) 才能导入样式。
并参考[文档](https://github.com/element-plus/unplugin-element-plus#readme)了解如何配置它。

```vue [App.vue]
<template>
  <el-button>I am ElButton</el-button>
</template>

<script setup lang="ts">
import { ElButton } from 'element-plus-mobile'
</script>
```

```ts [vite.config.ts]
import { defineConfig } from 'vite'
import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig({
  // ...
  plugins: [ElementPlus()],
})
```

## 入门模板

我们提供了[Vite模板](https://github.com/element-plus/element-plus-vite-starter)。

对于 Nuxt 用户，我们有一个 [Nuxt 模板](https://github.com/element-plus/element-plus-nuxt-starter)。

对于 Laravel 用户，我们有一个 [Laravel 模板](https://github.com/element-plus/element-plus-in-laravel-starter)。

## 全局配置

注册 Element Plus Mobile 时，您可以传递一个全局配置对象 `size` 和
`zIndex` 为表单组件设置默认 `size`，为 `zIndex`
弹出组件，`zIndex` 的默认值为 `2000`。

完全导入：

```ts [main.ts]
import { createApp } from 'vue'
import ElementPlusMobile from 'element-plus-mobile'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlusMobile, { size: 'small', zIndex: 3000 })
```

按需：

```vue [App.vue]
<template>
  <el-config-provider :size="size" :z-index="zIndex">
    <app />
  </el-config-provider>
</template>

<script setup lang="ts">
import { ElConfigProvider } from 'element-plus-mobile'

const zIndex = 3000
const size = 'small'
</script>
```

## 使用 Nuxt.js

我们还可以使用[Nuxt.js](https://nuxt.com)。更多详情请参考[Element Plus Nuxt.js 入门模板](https://github.com/element-plus/element-plus-nuxt-starter)。

## 让我们开始吧

从现在起您就可以启动您的项目了。对于每个组件的用途，请
请参阅[各个组件文档](../component/button.md)。
