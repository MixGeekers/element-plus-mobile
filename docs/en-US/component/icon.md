---
title: Icon
lang: en-US
---

# Icon

Element Plus Mobile uses Iconify as the default icon source.

## Icon Usage

- Iconify website: https://iconify.design/
- If you want to use icons as Vue components at build time, prefer `unplugin-icons` with an Iconify collection.
- If you want to pass Iconify icon names directly at runtime, see the [Iconify Support](#iconify-support) section.
- The icon collection shown on this page is based on `@iconify-json/ep`.

## Installation

### Build-Time On-Demand Imports

If you want to use icons like regular Vue components, install the matching Iconify collection and import them on demand with [unplugin-icons](https://github.com/antfu/unplugin-icons).

```shell
pnpm add -D unplugin-icons @iconify-json/ep
```

```ts
import Edit from '~icons/ep/edit'
import Search from '~icons/ep/search'
```

This works well when you want to write `<Edit />` or `<Search />` directly in templates without pulling in a whole icon library.

## Iconify Support{#iconify-support}

If you want to pass icons as strings instead of importing Vue components at build time, `el-icon` and common `icon` / `prefix-icon` / `suffix-icon` / `clear-icon` / `close-icon` style props across the component library can accept Iconify icon names directly.

If you already use `unplugin-icons` to auto-import Vue components at build time, you can keep doing that. Native Iconify support mainly targets scenarios where icons need to flow through config objects, schemas, or API data as strings.

### Local-First Setup (Vite / uni-app Vue3)

If your project prefers locally installed Iconify collections, install the matching `@iconify-json/*` package and enable the official plugin in `vite.config.ts`. The plugin registers local collections before your app entry runs, so your components can keep using string names such as `ep:edit`.

```shell
pnpm add -D @iconify-json/ep
```

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { ElementPlusIconify } from 'element-plus-mobile/vite/iconify'

export default defineConfig({
  plugins: [vue(), ElementPlusIconify()],
})
```

```ts
// vite.config.ts (uni-app Vue3 / HBuilderX 3.2+)
import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import { ElementPlusIconify } from 'element-plus-mobile/vite/iconify'

export default defineConfig({
  plugins: [uni(), ElementPlusIconify()],
})
```

With this setup, installed collections are resolved from local registered data first. Unknown prefixes or missing icons still fall back to the default Iconify runtime behavior. To keep bundle size under control, install only the collections you actually use.

### Runtime String Usage

```vue
<template>
  <el-space wrap>
    <el-icon icon="ep:edit" />
    <el-button icon="ep:search">搜索商品</el-button>
    <el-input prefix-icon="ep:search" placeholder="输入关键词" />
    <el-select suffix-icon="ep:arrow-down" placeholder="选择排序" />
  </el-space>
</template>
```

If you do not want to use the `Vite` plugin, you can also call `registerIconifyCollection()` or `registerIconifyIcon()` during app startup and keep passing string names such as `ep:edit`.

### Compatibility Rules

- Strings containing `:` are treated as Iconify icon names, such as `ep:edit` or `@custom:line:search`.
- Strings without `:` keep the previous behavior and are still resolved as globally registered component names.
- Passing local Vue icon components still works exactly as before, and remains the most stable option when you already have component imports.

::::warning

Runtime Iconify icon names resolve icon data on the client by default. After enabling the local-first plugin, installed collections render from local data first and only fall back to the default runtime loader when they miss.
If you need SSR to output SVG on first render, prefer local Vue icon components or preloaded Iconify icon data objects.

::::

## Simple Usage

:::warning

Because HTML standard has already defined a tag named [menu](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu),
so you need to use an alias in order to render the icon, if you register `Menu` directly it will not work.

:::

```vue
<!-- Use el-icon to provide attributes to SVG icon -->
<template>
  <div>
    <el-icon :size="size" :color="color">
      <Edit />
    </el-icon>
    <!-- Or use it independently without derive attributes from parent -->
    <Edit />
  </div>
</template>
```

<vp-script setup>
import Delete from '~icons/ep/delete'
import Edit from '~icons/ep/edit'
import Loading from '~icons/ep/loading'
import Search from '~icons/ep/search'
import Share from '~icons/ep/share'
</vp-script>

<ElRow>
  <div>
    <ElIcon :size="30">
      <Edit />
    </ElIcon>
    <Edit />
  </div>
</ElRow>

## Combined with el-icon

`el-icon` adds size, color, and state styling to raw SVG icons, which is especially useful for mobile buttons, status rows, and shortcut entries.

```vue
<template>
  <p>Add the <b>is-loading</b> class to make the icon spin automatically.</p>
  <el-icon :size="20">
    <Edit />
  </el-icon>
  <el-icon class="icon-demo__accent">
    <Share />
  </el-icon>
  <el-icon>
    <Delete />
  </el-icon>
  <el-icon class="is-loading">
    <Loading />
  </el-icon>
  <el-button type="primary">
    <el-icon class="icon-demo__button-icon">
      <Search />
    </el-icon>
    <span>搜索商品</span>
  </el-button>
</template>
```

<ElRow>
  <p>
    Add the <b>is-loading</b> class to make the icon spin automatically.
  </p>
  <div class="icon-demo">
    <ElIcon :size="20">
      <Edit />
    </ElIcon>
    <ElIcon class="icon-demo__accent">
      <Share />
    </ElIcon>
    <ElIcon>
      <Delete />
    </ElIcon>
    <ElIcon class="is-loading">
      <Loading />
    </ElIcon>
    <ElButton type="primary">
      <ElIcon class="icon-demo__button-icon">
        <Search />
      </ElIcon>
      <span>搜索商品</span>
    </ElButton>
  </div>
</ElRow>

## Using SVG icon directly

```vue
<template>
  <div class="icon-demo icon-demo--plain">
    <!-- Since svg icons do not carry any attributes by default -->
    <!-- You need to provide attributes directly -->
    <Edit class="icon-demo__svg" />
    <Share class="icon-demo__svg" />
    <Delete class="icon-demo__svg" />
    <Search class="icon-demo__svg" />
  </div>
</template>
```

<ElRow>
  <div class="icon-demo icon-demo--plain">
    <!-- Since svg icons do not carry any attributes by default -->
    <!-- You need to provide attributes directly -->
    <Edit class="icon-demo__svg" />
    <Share class="icon-demo__svg" />
    <Delete class="icon-demo__svg" />
    <Search class="icon-demo__svg" />
  </div>
</ElRow>

## Icon Collection{#icon-collection}

:::tip

**This page displays the `@iconify-json/ep` icon set**

**You can click the icon to copy it**

:::

<IconList />

## API

The following API belongs to `el-icon` itself. Other `icon`-like props across the component library follow the same input rules.

### Attributes

| Name  | Description                                                                                         | Type                                 | Default                |
| ----- | --------------------------------------------------------------------------------------------------- | ------------------------------------ | ---------------------- |
| icon  | Icon content. Supports Vue components, global component names, and Iconify names such as `mdi:home` | ^[string] / ^[Component] / ^[object] | —                      |
| color | SVG tag's fill attribute                                                                            | ^[string]                            | inherit from color     |
| size  | SVG icon size, size x size                                                                          | ^[number] / ^[string]                | inherit from font size |

### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | Customize default content |

<style scoped>
.icon-demo {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.75rem;
  width: 100%;
}

.icon-demo--plain {
  font-size: 1.25rem;
}

.icon-demo__accent {
  color: var(--el-color-primary);
}

.icon-demo__button-icon {
  display: inline-flex;
  align-items: center;
}

.icon-demo__svg {
  width: 1em;
  height: 1em;
}
</style>
