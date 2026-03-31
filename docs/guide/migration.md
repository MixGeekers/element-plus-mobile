---
title: 迁移
lang: zh-CN
---

# 迁移

[本指南](https://github.com/element-plus/element-plus/discussions/5658) 将帮助您从 Element 2.x 升级到 Element Plus。

## Vue 3 迁移构建

在 Vue 3 迁移构建中使用 Element Plus 时，您可能会遇到一些问题。一些组件依赖于 Vue 3 内部 API。值得尝试将 compatConfig 模式调整为 3，无论是全局还是[项目中的每个组件](https://v3-migration.vuejs.org/migration-build.html)。

## 迁移工具：hammer_and_wrench：

我们为您制作了一个迁移工具，用于将您的项目从[Element UI](https://element.eleme.io)迁移到Element Plus。
您可以在这里找到[gogo代码迁移工具](https://github.com/thx/gogocode/tree/main/packages/gogocode-plugin-element)。

我们已经在 [Vue Element Admin](https://github.com/PanJiaChen/vue-element-admin) (Vue 2 + Element UI) 上对此进行了测试。您可以在[此处](https://github.com/gogocodeio/vue-element-admin)找到转译代码。

<style scoped>
  details {
    margin-top: 8px;
  }
</style>
