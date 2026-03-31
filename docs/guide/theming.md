---
title: 自定义主题
lang: zh-CN
---

# 自定义主题

Element Plus Mobile 使用 BEM 样式的 CSS，以便您可以轻松覆盖样式。但如果
您需要大规模替换样式，例如更改主题颜色
蓝色到橙色或绿色，也许一一覆盖它们并不是一个好主意。

我们提供了四种更改样式变量的方法。

## 更改主题颜色

这些是有关自定义主题的示例。

- 完全导入：[element-plus-vite-starter](https://github.com/element-plus/element-plus-vite-starter)
- 按需：[unplugin-element-plus/examples/vite](https://github.com/element-plus/unplugin-element-plus)

### 通过 SCSS 变量

`theme-chalk`是用SCSS编写的。
您可以在[`packages/theme-chalk/src/common/var.scss`](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss)中找到SCSS变量。

:::warning

我们使用 sass 模块 ([sass:map](https://sass-lang.com/documentation/values/maps)...) 和 `@use` 来重构所有 SCSS 变量。并且通过对所有SCSS变量使用`@use`，解决了`@import`造成的重复输出问题。

> [Sass 模块简介 | CSS-技巧](https://css-tricks.com/introducing-sass-modules/)

例如，我们使用 `$colors` 作为贴图来保留不同类型的颜色。

`$notification` 是 `notification` 组件的所有变量所在的映射。

将来，我们将为每个组件定制的变量编写文档。您也可以直接查看源代码[var.scss](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/common/var.scss)。

:::

```scss
$colors: () !default;
$colors: map.deep-merge(
  (
    'white': #ffffff,
    'black': #000000,
    'primary': (
      'base': #409eff,
    ),
    'success': (
      'base': #67c23a,
    ),
    'warning': (
      'base': #e6a23c,
    ),
    'danger': (
      'base': #f56c6c,
    ),
    'error': (
      'base': #f56c6c,
    ),
    'info': (
      'base': #909399,
    ),
  ),
  $colors
);
```

### 如何覆盖它？

如果您的项目也使用SCSS，您可以直接更改Element Plus Mobile样式变量。创建一个新的样式文件，例如`styles/element/index.scss`：

:::warning

您应该使用 `@use 'xxx.scss' as *;` 而不是 `@import 'xxx.scss';`。

因为sass团队表示他们最终会删除`@import`。

> [Sass: @use](https://sass-lang.com/documentation/at-rules/use) 与 [Sass: @import](https://sass-lang.com/documentation/at-rules/import)

:::

```scss [styles/element/index.scss]
/* just override what you need */
@forward 'element-plus-mobile/theme-chalk/src/common/var.scss' with (
  $colors: (
    'primary': (
      'base': green,
    ),
  )
);

// If you just import on demand, you can ignore the following content.
// if you want to import all styles:
// @use "element-plus-mobile/theme-chalk/src/index.scss" as *;
```

然后在项目的入口文件中，导入此样式文件而不是 Element 内置的 CSS：

:::tip

在element-plus-mobile的scss之前导入`element/index.scss`，以避免sass混合变量的问题，因为我们需要通过您的自定义变量生成light-x。

:::

创建一个 `element/index.scss` 来组合您的变量和 element-plus-mobile 的变量。 （如果你在ts中导入它们，它们将不会合并。）

:::tip

另外，你应该区分你的scss和元素变量scss。
如果混合在一起，`element-plus-mobile`的每次热更新都需要编译大量的scss文件，导致速度慢。

:::

```ts [main.ts]
import { createApp } from 'vue'
import './styles/element/index.scss'
import ElementPlusMobile from 'element-plus-mobile'
import App from './App.vue'

const app = createApp(App)
app.use(ElementPlusMobile)
```

如果您使用的是vite，并且您希望在按需导入时自定义主题。

使用`scss.additionalData`编译各组件的scss变量。

```ts [vite.config.ts]
import path from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// You can also use unplugin-vue-components
// import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
// or use unplugin-element-plus
import ElementPlus from 'unplugin-element-plus/vite'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    vue(),
    // use unplugin-vue-components
    // Components({
    //   resolvers: [
    //     ElementPlusResolver({
    //       importStyle: "sass",
    //       // directives: true,
    //       // version: "2.1.5",
    //     }),
    //   ],
    // }),
    // or use unplugin-element-plus
    ElementPlus({
      useSource: true,
    }),
  ],
})
```

如果您使用的是 webpack，并且您希望在按需导入时自定义主题。

```js [webpack.config.js]
// use unplugin-element-plus

import ElementPlus from 'unplugin-element-plus/webpack'

export default defineConfig({
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
  plugins: [
    ElementPlus({
      useSource: true,
    }),
  ],
})
```

### 通过 CSS 变量

CSS 变量是一个非常有用的功能，几乎所有浏览器都已经支持。 （即：等等？）

> 从[使用 CSS 自定义属性（变量）| 了解更多信息MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties)

我们已经使用CSS变量来重构几乎所有组件的样式系统。

:::tip

它与SCSS变量系统兼容。我们利用SCSS的功能来自动生成css变量以供使用。

:::

这意味着您可以动态更改组件内的各个变量以更好地自定义它，而无需修改 scss 并重新编译它。

> 以后每个组件的css变量名和角色文档都会写入到每个组件中。

像这样：

```css
:root {
  --el-color-primary: green;
}
```

如果您只想自定义特定组件，只需为某些组件单独添加内联样式即可。

```html
<el-tag style="--el-tag-bg-color: red">Tag</el-tag>
```

出于性能考虑，更建议在类下自定义css变量而不是全局`:root`。

```css
.custom-class {
  --el-tag-bg-color: red;
}
```

如果你想通过脚本控制 css var，试试这个：

```ts
// document.documentElement is global
const el = document.documentElement
// const el = document.getElementById('xxx')

// get css var
getComputedStyle(el).getPropertyValue(`--el-color-primary`)

// set css var
el.style['--el-color-primary'] = 'red'
```

如果您想要更优雅的方式，请查看此内容。
[使用CssVar | Vue使用](https://vueuse.org/core/usecssvar/)
