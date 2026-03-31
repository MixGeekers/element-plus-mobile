---
title: 留言
lang: zh-CN
---

# 留言

用于在活动后显示反馈。与Notification的区别在于后者常用于显示系统级的被动通知。

## 基本用法

默认显示在顶部，3秒后消失。您可以使用 `placement` 属性控制位置。

:::demo Message 的设置与通知非常相似，所以部分选项这里不再详细解释。您可以结合通知文档查看下面的选项表来了解它。 Element Plus Mobile注册了`$message`的调用方法。消息可以使用字符串或VNode作为参数，并且它将作为主体显示。

message/basic

:::

## 类型

用于显示成功、警告、消息和错误活动的反馈。

:::demo 当您需要更多自定义时，消息组件还可以将对象作为参数。例如，设置值`type`可以定义不同的类型，默认为`info`。在这种情况下，主体将作为 `message` 的值传入。另外，我们还为不同类型注册了方法，因此您可以直接调用它，而无需传递像`open4`这样的类型。 `primary` 已添加到 ^(2.9.11) 中。

message/different-types

:::

## 普通 ^(2.6.3)

将 `plain` 设置为纯背景。

:::demo

message/plain

:::

## 可关闭

可以添加关闭按钮。

:::demo 默认消息无法手动关闭。如果需要可关闭的消息，可以设置`showClose`字段。另外，和通知一样，消息也有一个可控的`duration`。默认持续时间为3000毫秒，设置为`0`时不会消失。

message/closable

:::

## 使用 HTML 字符串

`message` 支持 HTML 字符串。

:::demo 将 `dangerouslyUseHTMLString` 设置为 true，`message` 将被视为 HTML 字符串。

message/raw-html

:::

:::warning

虽然 `message` 属性支持 HTML 字符串，但在网站上动态渲染任意 HTML 可能非常危险，因为它很容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。因此，当 `dangerouslyUseHTMLString` 开启时，请确保 `message` 的内容是可信的，并且**永远不要**将 `message` 分配给用户提供的内容。

:::

## 分组

合并具有相同内容的消息。

:::demo 将 `grouping` 设置为 true，`message` 的相同内容将被合并。

message/grouping

:::

## 放置 ^(2.11.0)

控制消息出现的位置。消息可以显示在顶部（默认）或视口的其他位置。

:::demo

message/placement

:::

## 全局方法

Element Plus Mobile 为 `app.config.globalProperties` 添加了全局方法 `$message`。因此，在 vue 实例中，您可以像我们在本页面中所做的那样调用 `Message` 。

## 本地导入

```ts
import { ElMessage } from 'element-plus-mobile'
```

在这种情况下，您应该致电 `ElMessage(options)`。我们还为不同类型注册了方法，例如`ElMessage.success(options)`。您可以调用`ElMessage.closeAll()`手动关闭所有实例。

## 应用上下文继承 ^(2.0.3)

现在消息接受 `context` 作为消息构造函数的第二个参数，它允许您将当前应用程序的上下文注入到消息中，从而允许您继承应用程序的所有属性。

你可以这样使用它：

:::tip

如果您全局注册了 ElMessage 组件，它将自动继承您的应用程序上下文。

:::

```ts
import { getCurrentInstance } from 'vue'
import { ElMessage } from 'element-plus-mobile'

// in your setup method
const { appContext } = getCurrentInstance()!
ElMessage({}, appContext)
```

## API

### 选项

| 名称                 | 描述                                                                   | 类型                                                                                       | 默认 |
| -------------------- | ---------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ---- | ---- |
| 留言                 | 留言内容                                                               | ^[字符串] / ^[VNode] / ^[函数]`() => VNode`                                                | ''   |
| 类型                 | 消息类型                                                               | ^[枚举]`'primary' (2.9.11) \| 'success' \| 'warning' \| 'info' \| 'error'`                 | 信息 |
| 普通 ^(2.6.3)        | 消息是否简单                                                           | ^[布尔值]                                                                                  | 假   |
| 图标                 | 自定义图标组件，覆盖`type`                                             | ^[字符串] / ^[组件]                                                                        | —    |
| 危险地使用HTMLString | `message` 是否被视为 HTML 字符串                                       | ^[布尔值]                                                                                  | 假   |
| 定制类               | 消息的自定义类名                                                       | ^[字符串]                                                                                  | ''   |
| 持续时间             | 显示持续时间，毫秒。如果设置为0，则不会自动关闭                        | ^[数字]                                                                                    | 3000 | 3000 |
| 显示关闭             | 是否显示关闭按钮                                                       | ^[布尔值]                                                                                  | 假   |
| 关闭                 | 以消息实例作为参数关闭时的回调函数                                     | ^[功能]`() => void`                                                                        | —    |
| 偏移                 | 设置到视口边缘的距离（当放置为“顶部”时为顶部，当放置为“底部”时为底部） | ^[数字]                                                                                    | 16   | 16   |
| 放置 ^(2.11.0)       | 留言放置位置                                                           | ^[枚举]`'top' \| 'top-left' \| 'top-right' \| 'bottom' \| 'bottom-left' \| 'bottom-right'` | 顶部 |
| 追加到               | 设置消息的根元素，默认为 `document.body`                               | ^[CSS选择器] / ^[HTMLElement]                                                              | —    |
| 分组                 | 合并相同内容的消息，不支持VNode消息类型                                | ^[布尔值]                                                                                  | 假   |
| 重复次数             | 重复次数，与徽章类似，与`grouping`                                     | 一起使用时作为初始编号^[数字]                                                              | 1    |

### 方法

`Message` 和 `this.$message` 返回当前的 Message 实例。如需手动关闭实例，您可以调用`close`。

| 名称 | 描述     | 类型                |
| ---- | -------- | ------------------- |
| 关闭 | 关闭留言 | ^[功能]`() => void` |
