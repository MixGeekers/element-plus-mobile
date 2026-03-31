---
title: 开发常见问题
lang: zh-CN
---

# 开发常见问题

以下是开发中容易遇到的问题。

## 如果遇到依赖相关的问题

```shell
rm -rf node_modules
pnpm i
```

## 链接本地依赖

```shell
# get dist
pnpm build
cd dist/element-plus
# set cur element-plus to global `node_modules`
pnpm link --global
# for esm we also need link element-plus for dist
pnpm link --global element-plus

# go to your project, link to `element-plus`
cd your-project
pnpm link --global element-plus
```

> 更多信息请参阅[pnpm 链接](https://pnpm.io/cli/link)。

## 主题

我们不应该在scss文件中写中文注释。

使用 vite 构建时，会在 css 文件头中生成警告 `@charset "UTF-8";`。

> 更多信息请参阅 [#3219](https://github.com/element-plus/element-plus/issues/3219)。
