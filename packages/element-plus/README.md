# `element-plus-mobile`

> 基于 Element Plus 二次开发的移动端 Vue 3 组件库。

`element-plus-mobile` 面向 H5 / 触控场景，当前版本重点强化了以下能力：

- rem 尺寸体系，便于按根字号整体缩放
- 移动端优先的布局默认值
- 更大的触控区域与更贴近触屏的交互反馈

## 安装

```bash
npm install element-plus-mobile
```

## 快速开始

```ts
import { createApp } from 'vue'
import ElementPlusMobile from 'element-plus-mobile'
import 'element-plus-mobile/dist/index.css'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlusMobile)
app.mount('#app')
```

## 按需使用

```ts
import { ElButton, ElContainer, ElText } from 'element-plus-mobile'
```

## 链接

- 仓库：https://github.com/MixGeekers/element-plus-mobile
- Issues：https://github.com/MixGeekers/element-plus-mobile/issues
