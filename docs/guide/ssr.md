---
title: 服务器端渲染 (SSR)
lang: zh-CN
---

# 服务器端渲染 (SSR)

使用Element Plus Mobile进行SSR开发时，需要在SSR过程中进行特殊处理，以避免水合物错误。

:::tip

对于Nuxt用户，我们提供了包含这些特殊进程的[Nuxt模块](https://github.com/element-plus/element-plus-nuxt)。您只需要安装它。

:::

## 提供 ID

提供的值用于在 Element Plus Mobile 中生成唯一 ID。
由于不同的ID在SSR中容易出现水合物错误，为了保证服务器端和客户端生成相同的ID，我们需要将`ID_injection_key`注入到Vue中。

```ts [main.ts]
// irrelevant code omitted
import { createApp } from 'vue'
import { ID_INJECTION_KEY } from 'element-plus-mobile'
import App from './App.vue'

const app = createApp(App)
app.provide(ID_INJECTION_KEY, {
  prefix: 1024,
  current: 0,
})
```

## 提供ZIndex

当您使用SSR进行开发时，您可能会遇到`z-index`导致的水合错误。在这种情况下，我们建议注入初始值以避免此类错误。

```ts [main.ts]
// irrelevant code omitted
import { createApp } from 'vue'
import { ZINDEX_INJECTION_KEY } from 'element-plus-mobile'
import App from './App.vue'

const app = createApp(App)
app.provide(ZINDEX_INJECTION_KEY, { current: 0 })
```

## 传送

[Teleport](https://vuejs.org/guide/scaling-up/ssr.html#teleports) 被 Element Plus Mobile 中的多个组件内部使用（例如 ElDialog、ElDrawer、ElTooltip、ElDropdown、ElSelect、ElDatePicker ...），因此在 SSR 期间需要进行特殊处理。

### 在坐骑上渲染传送

一个更简单的解决方案是有条件地渲染坐骑上的传送。

例如，在 Nuxt 中使用 `ClientOnly` 组件。

```html
<client-only>
  <el-tooltip content="the tooltip content">
    <el-button>tooltip</el-button>
  </el-tooltip>
</client-only>
```

或

```vue
<script setup>
import { ref } from 'vue'

const isClient = ref(false)

onMounted(() => {
  isClient.value = true
})
</script>

<template>
  <el-tooltip v-if="isClient" content="the tooltip content">
    <el-button>tooltip</el-button>
  </el-tooltip>
</template>
```

### 注入传送标记

另一种方法是将传送标记注入最终页面 HTML 中的正确位置。

您需要将传送标记注入到 `<body>` 标记附近。

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title>Element Plus Mobile</title>
    <!--preload-links-->
  </head>
  <body>
    <!--app-teleports-->
    <div id="app"><!--app-html--></div>
    <script type="module" src="/src/entry-client.js"></script>
  </body>
</html>
```

:::tip

如果修改[Namespace](./namespace.md)或`append-to`属性，则需要调整`#el-popper-container-`值。

:::

```js [src/entry-server.js]
// irrelevant code omitted
import { renderToString } from 'vue/server-renderer'
import { createApp } from './main'

export async function render(url, manifest) {
  // ...
  const ctx = {}
  const html = await renderToString(app, ctx)
  const preloadLinks = renderPreloadLinks(ctx.modules, manifest)
  const teleports = renderTeleports(ctx.teleports)

  return [html, preloadLinks, teleports]
}

function renderTeleports(teleports) {
  if (!teleports) return ''
  return Object.entries(teleports).reduce((all, [key, value]) => {
    if (key.startsWith('#el-popper-container-')) {
      return `${all}<div id="${key.slice(1)}">${value}</div>`
    }
    return all
  }, teleports.body || '')
}
```

```js [server.js or prerender.js]
// irrelevant code omitted
const [appHtml, preloadLinks, teleports] = await render(url, manifest)

const html = template
  .replace('<!--preload-links-->', preloadLinks)
  .replace('<!--app-html-->', appHtml)
  .replace(/(\n|\r\n)\s*<!--app-teleports-->/, teleports)
```
