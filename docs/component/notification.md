---
title: 通知
lang: zh-CN
---

# 通知

在页面的一角显示全局通知消息。

## 基本用法

:::demo Element Plus Mobile 已注册 `$notify` 方法，并且它接收一个对象作为其参数。在最简单的情况下，您可以为通知的​​标题和正文设置 `title` 字段和 ` message` 字段。默认情况下，通知会在 4500 毫秒后自动关闭，但通过设置 `duration` 您可以控制其持续时间。具体来说，如果设置为`0`，则不会自动关闭。请注意，`duration` 以毫秒为单位接收 `Number`。

notification/basic

:::

## 有类型

我们提供四种类型：成功、警告、信息和错误。

:::demo Element Plus Mobile 提供四种通知类型：`primary`、`success`、`warning`、`info` 和 `error`。它们由 `type` 字段设置，其他值将被忽略。我们还为这些类型注册了可以像 `open3` 和 `open4` 一样直接调用的方法，而无需传递 `type` 字段。 `primary` 已添加到 ^(2.9.11) 中。

notification/different-types

:::

## 自定义位置

通知可以从您喜欢的任何角落出现。

:::demo `position` 属性定义通知滑入哪个角落。它可以是 `top-right`、`top-left`、`bottom-right` 或 `bottom-left`。默认为 `top-right`。

notification/positioning

:::

## 带偏移量

自定义通知距屏幕边缘的偏移量。

:::demo 设置 `offset` 属性以自定义通知距屏幕边缘的偏移量。请注意，同一时刻的每个通知实例应该具有相同的偏移量。

notification/offsetting

:::

## 使用 HTML 字符串

`message` 支持 HTML 字符串。

:::demo 将 `dangerouslyUseHTMLString` 设置为 true，`message` 将被视为 HTML 字符串。

notification/raw-html

:::

:::warning

尽管 `message` 属性支持 HTML 字符串，但在网站上动态呈现任意 HTML 可能非常危险，因为它很容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。因此，当 `dangerouslyUseHTMLString` 打开时，请确保 `message` 的内容是可信的，并且**永远不要**将 `message` 分配给用户提供的内容。

:::

## 使用函数发送消息 ^(2.9.0)

`message`可以是VNode。

在^(2.9.0)之后，`message`支持返回值为VNode的函数。

:::demo

notification/use-vnode

:::

## 隐藏关闭按钮

可以隐藏关闭按钮

:::demo 将 `showClose` 属性设置为 `false`，以便用户无法关闭通知。

notification/no-close

:::

## 全局方法

Element Plus Mobile 为 `app.config.globalProperties` 添加了全局方法 `$notify`。因此，在 vue 实例中，您可以像我们在本页面中所做的那样调用 `Notification` 。

## 本地导入

```javascript
import { ElNotification } from 'element-plus-mobile'

ElNotification({
  title: 'Title',
  message: 'This is a message',
  closeIcon: 'ep:close-bold',
})
```

在这种情况下，您应该致电 `ElNotification(options)`。我们还为不同类型注册了方法，例如`ElNotification.success(options)`。您可以调用`ElNotification.closeAll()`手动关闭所有实例。在^(2.10.5)中，您可以通过调用`ElNotification.updateOffsets(position)`手动更新特定方向上所有实例的偏移量。

## 应用程序上下文继承 <el-tag>> 2.0.4</el-tag>

现在，通知接受 `context` 作为消息构造函数的第二个参数，这允许您将当前应用程序的上下文注入到通知中，从而允许您继承应用程序的所有属性。

你可以这样使用它：

:::tip

如果您全局注册了ElNotification组件，它将自动继承您的应用程序上下文。

:::

```ts
import { getCurrentInstance } from 'vue'
import { ElNotification } from 'element-plus-mobile'

// in your setup method
const { appContext } = getCurrentInstance()!
ElNotification({}, appContext)
```

## API

### 选项

| 名称                 | 描述                                                             | 类型                                                                             | 默认   |
| -------------------- | ---------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------ |
| 标题                 | 标题                                                             | ^[字符串]                                                                        | ''     |
| 留言                 | 描述文字                                                         | ^[字符串] / ^[VNode] / ^[函数]`() => VNode`                                      | ''     |
| 危险地使用HTMLString | `message` 是否被视为 HTML 字符串                                 | ^[布尔值]                                                                        | 假     |
| 类型                 | 通知类型                                                         | ^[枚举]`'primary' (2.9.11) \| 'success' \| 'warning' \| 'info' \| 'error' \| ''` | ''     |
| 图标                 | 自定义图标组件。它将被 `type` 覆盖                               | ^[字符串] / ^[组件]                                                              | —      |
| 定制类               | 通知的自定义类名                                                 | ^[字符串]                                                                        | ''     |
| 持续时间             | 关闭前的持续时间。如果设置为0                                    | 则不会自动关闭^[数字]                                                            | 4500   |
| 位置                 | 自定义位置                                                       | ^[枚举]`'top-right' \| 'top-left' \| 'bottom-right' \| 'bottom-left'`            | 右上角 |
| 显示关闭             | 是否显示关闭按钮                                                 | ^[布尔值]                                                                        | 真实   |
| 关闭                 | 关闭时的回调函数                                                 | ^[功能]`() => void`                                                              | —      |
| 点击                 | 点击通知时的回调函数                                             | ^[功能]`() => void`                                                              | —      |
| 偏移                 | 距屏幕上边缘的偏移量。同一时刻的每个通知实例应该具有相同的偏移量 | ^[数字]                                                                          | 0      |
| 追加到               | 设置通知的根元素，默认为 `document.body`                         | ^[CSS选择器] / ^[HTMLElement]                                                    | —      |
| z索引                | 初始 zIndex                                                      | ^[数字]                                                                          | 0      |
| 关闭图标 ^(2.9.8)    | 自定义关闭图标                                                   | ^[字符串] / ^[组件]                                                              | 关闭   |

### 方法

`Notification` 和 `this.$notify` 返回当前的通知实例。如需手动关闭实例，您可以调用`close`。

| 名称 | 描述     | 类型                |
| ---- | -------- | ------------------- |
| 关闭 | 关闭通知 | ^[功能]`() => void` |
