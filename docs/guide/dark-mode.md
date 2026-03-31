---
title: 深色模式 ^(2.2.0)
lang: zh-CN
---

# 深色模式 ^(2.2.0)

时隔许久，Element Plus 支持深色模式了！

我们提取并统一了所有必要的变量，使得基于 CSS Vars 的实现成为可能。

## 如何启用它？

首先，您可以创建一个开关来切换 html 的 `dark` 类。

> 如果您只需要深色模式，只需为 html 添加 `dark` 类即可。

```html
<html class="dark">
  <head></head>
  <body></body>
</html>
```

> 如果你想切换它，我推荐[useDark | Vue使用](https://vueuse.org/core/useDark/)。

然后，您只需一行代码即可快速启用它，在您的条目中导入 CSS。

```ts [main.ts]
// if you just want to import css
import 'element-plus-mobile/theme-chalk/dark/css-vars.css'
```

> 如果需要示例，可以参考[element-plus-vite-starter](https://github.com/element-plus/element-plus-vite-starter)。

## 自定义变量

### 通过 CSS

只需通过 CSS Vars 覆盖它即可。

例如，新文件 `styles/dark/css-vars.css`：

```css
html.dark {
  /* custom dark bg color */
  --el-bg-color: #626aef;
}
```

按照Element Plus的样式导入：

```ts [main.ts]
import 'element-plus-mobile/theme-chalk/dark/css-vars.css'
import './styles/dark/css-vars.css'
```

### 通过 SCSS

如果使用scss，也可以导入scss文件进行编译。

> 您可以参考[主题](./theming.md)以获取更多信息。

```scss [styles/element/index.scss]
/*just override what you need*/
@forward 'element-plus-mobile/theme-chalk/src/dark/var.scss' with (
  $bg-color: (
    'page': #0a0a0a,
    '': #626aef,
    'overlay': #1d1e1f,
  )
);
```

```ts [main.ts]
import './styles/element/index.scss'

// or just want to import scss?
// import 'element-plus-mobile/theme-chalk/src/dark/css-vars.scss'
```
