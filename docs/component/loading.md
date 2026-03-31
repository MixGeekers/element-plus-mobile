---
title: 加载中
lang: zh-CN
---

# 加载中

加载数据时显示动画。

## 加载到容器内

加载数据时在容器（例如表格）中显示动画。

:::demo Element Plus Mobile 提供了两种调用加载的方式：指令和服务。对于自定义指令 `v-loading`，您只需为其绑定一个 `boolean` 值即可。默认情况下，加载掩码将附加到使用该指令的元素。添加 `body` 修饰符会使遮罩附加到 body 元素。

loading/basic

:::

## 定制

您可以自定义加载文本、加载微调器和背景颜色。

:::demo 向绑定 `v-loading` 的元素添加属性 `element-loading-text`，其值将显示在微调器下方。类似地，`element-loading-spinner / element-loading-svg`和`element-loading-background`属性分别用于设置svg图标、背景颜色值和加载图标。

loading/customization

:::

:::warning

虽然`element-loading-spinner / element-loading-svg`属性支持传入HTML片段，但在网站上动态渲染任意HTML是非常危险的，因为很容易引起[XSS攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。请确保`element-loading-spinner / element-loading-svg`的内容是可信的。 **永远不要**将用户提交的内容分配给 `element-loading-spinner / element-loading-svg` 属性。

:::

## 全屏加载

加载数据时显示全屏动画。

:::demo 当用作指令时，全屏加载需要 `fullscreen` 修饰符，并且它将附加到正文。在这种情况下，如果您希望禁用正文滚动，可以添加另一个修饰符 `lock`。当作为服务使用时，Loading 会默认全屏。

loading/fullscreen

:::

## 服务

您还可以使用服务调用加载。进口装柜服务：

```ts
import { ElLoading } from 'element-plus-mobile'
```

调用它：

```ts
ElLoading.service(options)
```

参数`options`为Loading的配置，其详细信息见下表。 `LoadingService` 返回一个 Loading 实例，您可以通过调用其 `close` 方法来关闭它：

```ts
const loadingInstance = ElLoading.service(options)
nextTick(() => {
  // Loading should be closed asynchronously
  loadingInstance.close()
})
```

请注意，在这种情况下，全屏加载是单例的。如果在关闭现有全屏 Loading 之前调用新的全屏 Loading，则将返回现有全屏 Loading 实例，而不是实际创建另一个 Loading 实例：

```ts
const loadingInstance1 = ElLoading.service({ fullscreen: true })
const loadingInstance2 = ElLoading.service({ fullscreen: true })
console.log(loadingInstance1 === loadingInstance2) // true
```

在其中任意一个上调用`close`方法都可以关闭本次全屏Loading。

如果完全导入Element Plus Mobile，则会向`app.config.globalProperties`注册一个全局方法`$loading`。您可以像这样调用它：`this.$loading(options)`，它还返回一个 Loading 实例。

## 应用上下文继承 ^(2.9.10)

现在，加载接受 `context` 作为加载构造函数的第二个参数，它允许您将当前应用程序的上下文注入到加载中，从而允许您继承应用程序的所有属性。

你可以这样使用它：

:::tip

如果您全局注册了ElLoading组件，它将自动继承您的应用程序上下文。

:::

```ts
import { getCurrentInstance } from 'vue'
import { ElLoading } from 'element-plus-mobile'

// in your setup method
const { appContext } = getCurrentInstance()!
ElLoading.service({}, appContext)
```

## API

### 选项

| 名称            | 描述                                                                                                                  | 类型                                    | 默认      |
| --------------- | --------------------------------------------------------------------------------------------------------------------- | --------------------------------------- | --------- | --- |
| 目标            | Loading 时需要覆盖 DOM 节点。接受 DOM 对象或字符串。如果是字符串，则传递给`document.querySelector`，获取对应的DOM节点 | ^[字符串] / ^[HTMLElement]              | 文档正文  |
| 身体            | 与 `v-loading` 的 `body` 修饰符相同                                                                                   | ^[布尔值]                               | 假        |
| 全屏            | 与 `v-loading` 的 `fullscreen` 修饰符相同                                                                             | ^[布尔值]                               | 真实      |
| 锁              | 与 `v-loading` 的 `lock` 修饰符相同                                                                                   | ^[布尔值]                               | 假        |
| 文字            | 加载显示在微调器下的文本                                                                                              | ^[字符串] / ^[VNode] / ^[数组]`VNode[]` | —         |
| 旋转器          | 自定义微调器的类名                                                                                                    | ^[字符串]                               | —         |
| 背景            | 蒙版的背景颜色                                                                                                        | ^[字符串]                               | —         |
| 定制类          | 用于加载的自定义类名                                                                                                  | ^[字符串]                               | —         |
| svg             | svg                                                                                                                   | 自定义 SVG 元素覆盖默认加载微调器       | ^[字符串] | —   |
| svgViewBox      | svgViewBox                                                                                                            | 设置用于加载 svg 元素的 viewBox 属性    | ^[字符串] | —   |
| 关闭前 ^(2.7.8) | 加载尝试关闭之前执行的函数。如果此函数返回 false，则关闭过程将中止。否则，加载将关闭。                                | ^[功能]`() => boolean`                  | —         |
| 已关闭 ^(2.7.8) | 加载完成后触发的函数已完全关闭                                                                                        | ^[功能]`() => void`                     | —         |

### 指令

| 名称                  | 描述                                       | 类型                    |
| --------------------- | ------------------------------------------ | ----------------------- |
| V 型加载              | 加载数据时显示动画                         | ^[布尔值] / ^[加载选项] |
| 元素加载文本          | 加载显示在微调器下的文本                   | ^[字符串]               |
| 元素加载旋转器        | 自定义微调器的图标                         | ^[字符串]               |
| 元素加载-svg          | 自定义微调器的图标（与元素加载微调器相同） | ^[字符串]               |
| 元素加载 svg-view-box | 设置用于加载 svg 元素的 viewBox 属性       | ^[字符串]               |
| 元素加载背景          | 蒙版的背景颜色                             | ^[字符串]               |
| 元素加载自定义类      | 用于加载的自定义类名                       | ^[字符串]               |
