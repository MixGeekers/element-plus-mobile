---
title: 图标
lang: zh-CN
---

# 图标

Element Plus Mobile 默认使用 Iconify 图标。

## 图标使用

- Iconify 官网：https://iconify.design/
- 如果你希望在构建阶段把图标当作 Vue 组件使用，请优先配合 `unplugin-icons` 与 Iconify 图标集。
- 如果你希望在运行时直接把 Iconify 图标名传给组件属性，请阅读 [Iconify 支持](#iconify-support) 章节。
- 当前文档页的图标集合展示基于 `@iconify-json/ep`。

## 安装

### 构建时按需导入

如果你希望像普通 Vue 组件一样使用图标，推荐安装对应的 Iconify 图标集，并通过 [unplugin-icons](https://github.com/antfu/unplugin-icons) 按需导入。

```shell
pnpm add -D unplugin-icons @iconify-json/ep
```

```ts
import Edit from '~icons/ep/edit'
import Search from '~icons/ep/search'
```

这种方式适合模板里直接书写 `<Edit />`、`<Search />` 这类图标组件，并且不会引入不需要的整套图标。

## Iconify 支持{#iconify-support}

如果你希望把图标作为字符串传给组件属性，而不是在构建阶段导入 Vue 组件，`el-icon` 与组件库中常见的 `icon` / `prefix-icon` / `suffix-icon` / `clear-icon` / `close-icon` 类属性都可以直接接收 Iconify 图标名。

如果你已经通过 `unplugin-icons` 在构建阶段自动导入 Vue 组件，也可以继续保持那种方式；原生 Iconify 支持主要用于图标需要以字符串形式在配置、schema 或接口数据中流转的场景。

### 本地优先（Vite / uni-app Vue3）

如果你的项目希望优先使用本地安装的 Iconify 图标集，可以安装对应的 `@iconify-json/*` 包，并在 `vite.config.ts` 中启用官方插件。插件会在应用入口前自动注册本地图标集，之后组件里仍然可以继续使用 `ep:edit` 这类字符串。

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

接入后，已安装图标集会优先从本地注册数据解析；未安装前缀或未命中的图标仍会回退到 Iconify 默认运行时行为。为了控制包体积，建议只安装实际需要的图标集。

### 运行时字符串用法

```vue
<template>
  <el-space wrap>
    <el-icon icon="ep:edit" />
    <el-button icon="ep:search">Search</el-button>
    <el-input prefix-icon="ep:search" placeholder="搜索内容" />
    <el-select suffix-icon="ep:arrow-down" placeholder="请选择" />
  </el-space>
</template>
```

如果你不使用 `Vite` 插件，也可以在应用启动阶段手动调用 `registerIconifyCollection()` 或 `registerIconifyIcon()` 注册本地图标数据，然后继续传递 `ep:edit` 这类字符串。

### 兼容规则

- 包含 `:` 的字符串会按 Iconify 图标名解析，例如 `ep:edit` 或 `@custom:line:search`。
- 不包含 `:` 的字符串仍保持原有行为，会继续按已注册的全局组件名解析。
- 直接传入本地 Vue 图标组件时，行为不变；如果你已经有现成组件，仍然可以优先使用组件形式。

::::warning

运行时 Iconify 图标名默认会在客户端解析图标数据。接入本地优先插件后，已安装图标集会先从本地数据渲染，只有未命中时才会继续走默认运行时加载。
如果您需要 SSR 首屏直接输出 SVG，建议继续传入本地 Vue 图标组件，或传入预先准备好的 Iconify 图标数据对象。

::::

## 简单用法

:::warning

因为HTML标准已经定义了一个名为[menu](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/menu)的标签，
所以你需要使用别名来渲染图标，如果你直接注册`Menu`是不行的。

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

## 与 el-icon 结合

`el-icon`为原始SVG图标提供了额外的属性，更多详细信息，请阅读到最后。

```vue
<template>
  <p>
    with extra class <b>is-loading</b>, your icon is able to rotate 360 deg in 2
    seconds, you can also override this
  </p>
  <el-icon :size="20">
    <Edit />
  </el-icon>
  <el-icon color="#409efc" class="no-inherit">
    <Share />
  </el-icon>
  <el-icon>
    <Delete />
  </el-icon>
  <el-icon class="is-loading">
    <Loading />
  </el-icon>
  <el-button type="primary">
    <el-icon style="vertical-align: middle">
      <Search />
    </el-icon>
    <span style="vertical-align: middle"> Search </span>
  </el-button>
</template>
```

<ElRow>
  <p>
    使用额外的类 <b>is-loading</b>，您的图标能够在 2 内旋转 360 度
    秒，你也可以覆盖这个
  </p>
  <div style="display: flex; align-items: center; justify-content: space-between; width: 100%;">
    <ElIcon :size="20">
      <Edit />
    </ElIcon>
    <ElIcon color="#409efc" class="no-inherit">
      <Share />
    </ElIcon>
    <ElIcon>
      <Delete />
    </ElIcon>
    <ElIcon class="is-loading">
      <Loading />
    </ElIcon>
    <ElButton type="primary">
      <ElIcon style="vertical-align: middle; color: #fff;">
        <Search />
      </ElIcon>
      <span style="vertical-align: middle;"> 搜索 </span>
    </ElButton>
  </div>
</ElRow>

## 直接使用SVG图标

```vue
<template>
  <div style="font-size: 20px">
    <!-- Since svg icons do not carry any attributes by default -->
    <!-- You need to provide attributes directly -->
    <Edit style="width: 1em; height: 1em; margin-right: 8px" />
    <Share style="width: 1em; height: 1em; margin-right: 8px" />
    <Delete style="width: 1em; height: 1em; margin-right: 8px" />
    <Search style="width: 1em; height: 1em; margin-right: 8px" />
  </div>
</template>
```

<ElRow>
  <div style="font-size: 20px;">
    <!-- 由于 svg 图标默认不携带任何属性 -->
    <!-- 需要直接提供属性-->
    <Edit style="width: 1em; height: 1em; margin-right: 8px;" />
    <Share style="width: 1em; height: 1em; margin-right: 8px;" />
    <Delete style="width: 1em; height: 1em; margin-right: 8px;" />
    <Search style="width: 1em; height: 1em; margin-right: 8px;" />
  </div>
</ElRow>

## 图标集合{#icon-collection}

:::tip

**当前页面展示的是 `@iconify-json/ep` 图标集**

**您可以点击图标进行复制**

:::

<IconList />

## API

以下 API 仅针对 `el-icon` 本身；组件库中其他 `icon` 类 props 也遵循相同的输入规则。

### 属性

| 名称  | 描述                                                                      | 类型                                 | 默认           |
| ----- | ------------------------------------------------------------------------- | ------------------------------------ | -------------- |
| icon  | 图标内容，支持 Vue 组件、全局组件名字串以及 Iconify 名称，例如 `mdi:home` | ^[string] / ^[Component] / ^[object] | —              |
| color | SVG 标签的 fill 属性                                                      | ^[string]                            | 从颜色继承     |
| size  | SVG 图标大小，大小 x 大小                                                 | ^[number] / ^[string]                | 从字体大小继承 |

### 插槽

| 名称 | 描述           |
| ---- | -------------- |
| 默认 | 自定义默认内容 |
