---
title: 安装
lang: zh-CN
---

# 安装

## 兼容性 ^(2.5.0)

Element Plus Mobile 可以在支持最后 2 个版本的浏览器上运行。

如果您确实需要支持过时的浏览器，请自行添加 [Babel](https://babeljs.io/) 和 Polyfill。

由于Vue 3不再支持IE11，Element Plus Mobile也不支持IE。

| 版本    | ![Chrome](https://cdn.jsdelivr.net/npm/@browser-logos/chrome/chrome_32x32.png) <br> Chrome | ![IE](https://cdn.jsdelivr.net/npm/@browser-logos/edge/edge_32x32.png) <br> 边缘 | ![火狐](https://cdn.jsdelivr.net/npm/@browser-logos/firefox/firefox_32x32.png) <br> 火狐 | ![Safari](https://cdn.jsdelivr.net/npm/@browser-logos/safari/safari_32x32.png) <br> Safari |
| ------- | ------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ |
| < 2.5.0 | 铬≥64                                                                                      | 边缘≥79                                                                          | 火狐 ≥ 78                                                                                | 狩猎 ≥ 12                                                                                  |
| 2.5.0 + | 铬≥85                                                                                      | 边缘≥85                                                                          | 火狐 ≥ 79                                                                                | Safari ≥ 14.1                                                                              |

### 萨斯

版本`2.8.5`及更高版本，[Sass](https://github.com/sass)的最低兼容版本为`1.79.0`。

如果您的终端提示`legacy JS API Deprecation Warning`，您可以在[vite.config.ts](https://vitejs.dev/config/shared-options.html#css-preprocessoroptions)中配置以下代码。

```ts [vite.config.ts]{7}
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  // ...
  css: {
    preprocessorOptions: {
      scss: { api: 'modern-compiler' },
    },
  },
  // ...
})
```

### 版本

Element Plus Mobile 目前正在积极开发中。 [![ElementPlus移动版徽章](https://img.shields.io/npm/v/element-plus-mobile.svg?style=flat-square)](https://www.npmjs.org/package/element-plus-mobile)

另外，dev分支上的每一次commit和PR都会发布到[pkg.pr.new](https://github.com/stackblitz-labs/pkg.pr.new)，如果你想使用一些未发布的内容，可以参考[这里](https://github.com/element-plus/element-plus/issues/18433#issuecomment-2392618431)。

## 使用包管理器

**我们建议使用包管理器（[NPM](https://www.npmjs.com/)、[Yarn](https://classic.yarnpkg.com/lang/en/)、[PNPM](https://pnpm.io/)) 安装 Element Plus Mobile**，
这样您就可以使用 [Vite](https://vitejs.dev) 和
[Webpack](https://webpack.js.org/)。

选择您喜欢的包管理器。

::: code-group

```shell [npm]
$ npm install element-plus-mobile --save
```

```shell [yarn]
$ yarn add element-plus-mobile
```

```shell [pnpm]
$ pnpm install element-plus-mobile
```

:::

如果您的网络环境不好，建议使用镜像注册表[cnpm](https://github.com/cnpm/cnpm)或[npmmirror](https://npmmirror.com/)。

```shell
npm config set registry https://registry.npmmirror.com
```

## 在浏览器中导入

直接通过浏览器HTML标签导入Element Plus Mobile，并使用全局变量`ElementPlusMobile`。

根据不同的CDN提供商，有不同的引入方式。
这里我们以 [unpkg](https://unpkg.com) 和 [jsDelivr](https://jsdelivr.com) 为例。
您还可以使用其他 CDN 提供商。

::: code-group

```html [unpkg]
<head>
  <!-- Import style -->
  <link
    rel="stylesheet"
    href="//unpkg.com/element-plus-mobile/dist/index.css"
  />
  <!-- Import Vue 3 -->
  <script src="//unpkg.com/vue@3"></script>
  <!-- Import component library -->
  <script src="//unpkg.com/element-plus-mobile"></script>
</head>
```

```html [jsDelivr]
<head>
  <!-- Import style -->
  <link
    rel="stylesheet"
    href="//cdn.jsdelivr.net/npm/element-plus-mobile/dist/index.css"
  />
  <!-- Import Vue 3 -->
  <script src="//cdn.jsdelivr.net/npm/vue@3"></script>
  <!-- Import component library -->
  <script src="//cdn.jsdelivr.net/npm/element-plus-mobile"></script>
</head>
```

:::

:::tip

我们建议使用 CDN 导入锁定版本的 Element Plus Mobile
链接地址上，以免Element Plus Mobile时受到不兼容更新的影响
未来还会升级。请检查[unpkg.com](https://unpkg.com)
锁定版本的方法。

由于原生HTML解析行为的限制，单封闭标签可能会导致一些异常，所以请使用双封闭标签，[参考](https://vuejs.org/guide/essentials/component-basics.html#in-dom-template-parsing-caveats)

```html
<!-- examples -->
<el-table>
  <el-table-column></el-table-column>
  <el-table-column></el-table-column>
</el-table>
```

:::

## 你好世界

有了CDN，我们可以轻松使用Element Plus Mobile
编写一个 Hello World 页面。 [在线演示](https://codepen.io/iamkun/pen/YzWMaVr)

<iframe height="469" style="width: 100%;" scrolling="no" title="YzWMaVr" src="https://codepen.io/iamkun/embed/YzWMaVr?height=469&theme-id=light&default-tab=html,result" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
  See the Pen <a href='https://codepen.io/iamkun/pen/YzWMaVr'>YzWMaVr</a> by iamkun
  (<a href='https://codepen.io/iamkun'>@iamkun</a>) on <a href='https://codepen.io'>CodePen</a>.
</iframe>

如果您通过包管理器安装并希望将其与
打包工具，请阅读
下一节：[快速入门](/guide/quickstart)。
