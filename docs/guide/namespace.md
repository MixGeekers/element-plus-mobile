---
title: Custom Namespace
lang: zh-CN
---

## 自定义命名空间 ^(2.2.0)

:::tip

我们在 [element-plus-vite-starter](https://github.com/element-plus/element-plus-vite-starter) 中提供了一个示例。
检查一下。

:::

默认命名空间是 `el`。
在特殊情况下，我们可能需要自定义它的命名空间。

由于我们使用sass来编写样式，如果要自定义所有命名空间。
我们必须假设您已经使用 sass。

必须同时设置 `ElConfigProvider` 和 scss `$namespace`。

### 设置 `ElConfigProvider`

使用 `ElConfigProvider` 包装您的根组件。

```vue [App.vue]
<template>
  <el-config-provider namespace="ep">
    <!-- ... -->
  </el-config-provider>
</template>
```

### 设置 Scss 和 CSS 变量

创建`styles/element/index.scss`：

```scss [styles/element/index.scss]
// we can add this to custom namespace, default is 'el'
@forward 'element-plus-mobile/theme-chalk/src/mixins/config.scss' with (
  $namespace: 'ep'
);
// ...
```

在`vite.config.ts`中导入`styles/element/index.scss`：

> webpack也是如此，需要在`preprocessorOptions`中进行设置。

```ts [vite.config.ts]
import { defineConfig } from 'vite'
// https://vitejs.dev/config/
export default defineConfig({
  // ...
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "~/styles/element/index.scss" as *;`,
      },
    },
  },
  // ...
})
```

仅此而已。
