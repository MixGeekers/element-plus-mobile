---
title: 本地发展
lang: zh-CN
---

# 本地发展

## 引导项目

带命令

```shell
pnpm i
```

该项目将安装所有依赖项。

## 网站预览

带命令

```shell
pnpm docs:dev
```

该项目将启动网站供您预览所有现有组件。

## 本地开发

参见[本地开发指南](https://github.com/element-plus/element-plus/blob/dev/CONTRIBUTING.md)

1.通过命令

```shell
pnpm dev
```

将启动本地开发环境。

2. 将您的组件添加到 `play/src/App.vue`

```vue [App.vue]
<template>
  <ComponentYouAreDeveloping />
</template>

<script setup lang="ts">
// make sure this component is registered in @element-plus/components
</script>
```

根据您的需要修改 `App.vue` 文件以使事情正常工作。

## 以下命令在开发过程中也很有用

### 生成组件模板

带命令

```shell
pnpm gen <component-name>
# eg.
pnpm gen awesome
pnpm gen awesome-button
```

会在`packages/components/awesome`和`packages/components/awesome-button`目录下生成组件模板。

### 同步语言环境文件

带命令

```shell
pnpm locale:sync
```

会将 `en.ts` 语言环境文件中的新字段同步到其他语言环境文件，并添加注释 `// to be translated`。
