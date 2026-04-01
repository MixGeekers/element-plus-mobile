---
title: 图标
lang: zh-CN
---

# 图标

Element Plus 提供了一组常用图标。

## 图标使用

- 如果你想像示例一样**直接使用**，则需要在使用前对组件进行[全局注册](https://v3.vuejs.org/guide/component-registration.html#global-registration)。

- 如果您想查看所有可用的 SVG 图标，请检查 [@element-plus/icons-vue@1.x](https://unpkg.com/browse/@element-plus/icons-vue@1/dist/es/)[@element-plus/icons-vue@latest](https://unpkg.com/browse/@element-plus/icons-vue@latest/dist/types/components/) 和源 [element-plus-icons](https://github.com/element-plus/element-plus-icons) 或 [Icon收藏](#icon-collection)

## 安装

### 使用包装管理器

选择您喜欢的包管理器。

::: code-group

```shell [npm]
$ npm install @element-plus/icons-vue
```

```shell [yarn]
$ yarn add @element-plus/icons-vue
```

```shell [pnpm]
$ pnpm install @element-plus/icons-vue
```

:::

### 注册所有图标

您需要从`@element-plus/icons-vue`导入所有图标并全局注册它们。

```ts
// main.ts

// if you're using CDN, please remove this line.
import * as ElementPlusIconsVue from '@element-plus/icons-vue'

const app = createApp(App)
for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
  app.component(key, component)
}
```

您也可以参考[此模板](https://codepen.io/sxzz/pen/xxpvdrg)。

### 在浏览器中导入

直接通过浏览器HTML标签导入Element Plus Icons，并使用全局变量`ElementPlusIconsVue`。

根据不同的CDN提供商，有不同的引入方式。
这里我们以 [unpkg](https://unpkg.com) 和 [jsDelivr](https://jsdelivr.com) 为例。
您还可以使用其他 CDN 提供商。

::: code-group

```html [unpkg]
<script src="//unpkg.com/@element-plus/icons-vue"></script>
```

```html [jsDelivr]
<script src="//cdn.jsdelivr.net/npm/@element-plus/icons-vue"></script>
```

:::

:::tip

建议使用CDN导入Element Plus用户锁定版本
链接地址上，以免Element Plus时受到不兼容更新的影响
未来还会升级。请检查[unpkg.com](https://unpkg.com)
锁定版本的方法。

:::

### 自动导入

使用 [unplugin-icons](https://github.com/antfu/unplugin-icons) 和 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import)
自动从 iconify 导入任何图标集合。
您可以参考[此模板](https://github.com/sxzz/element-plus-best-practices/blob/db2dfc983ccda5570033a0ac608a1bd9d9a7f658/vite.config.ts#L21-L58)。

### 原生 Iconify 支持

`el-icon` 以及组件库中大部分 `icon` / `prefix-icon` / `suffix-icon` 类属性现在都可以直接接收 Iconify 图标名。

```vue
<template>
  <el-space>
    <el-icon icon="mdi:home" />
    <el-button icon="mdi:heart">Like</el-button>
    <el-input prefix-icon="mdi:magnify" placeholder="搜索内容" />
  </el-space>
</template>
```

::::tip

包含 `:` 的字符串会按 Iconify 图标名解析，例如 `mdi:home` 或 `@custom:line:search`。
不包含 `:` 的字符串仍保持原有行为，会继续按已注册的全局组件名解析。

::::

::::warning

运行时 Iconify 名称会在客户端加载图标数据。
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
import { Edit, Share, Delete, Search, Loading } from '@element-plus/icons-vue'
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

**任何版本都可以使用SVG图标**只要你安装了

**您可以点击图标进行复制**

:::

<IconList />

## API

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
