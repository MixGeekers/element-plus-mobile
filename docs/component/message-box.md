---
title: 消息框
lang: zh-CN
---

# 消息框

一组模拟系统消息框的模态框，主要用于报警信息、确认操作和提示信息。

:::tip

MessageBox设计上提供了系统`alert`、`confirm`和`prompt`的模拟，所以内容应该很简单。对于更复杂的内容，请使用Dialog。

:::

## 警报

警报会中断用户操作，直到用户确认为止。

:::demo 通过调用 `ElMessageBox.alert` 方法打开警报。 ft模拟系统的`alert`，无法通过按ESC或点击框外来关闭。在本例中，接收到两个参数`message`和`title`。 ft 值得一提的是，当盒子关闭时，它会返回一个 `Promise` 对象以进行进一步处理。如果您不确定您的目标浏览器是否支持 `Promise`，您应该导入第三方 polyfill 或使用回调，如本例所示。

message-box/alert

:::

## 确认

确认用于请求用户确认。

:::demo 调用`ElMessageBox.confirm`方法打开一个confirm，它模拟系统的`confirm`。我们还可以通过传递第三个属性 `options`（一个文字对象）来高度自定义消息框。属性`type`表示消息类型，其取值可以是`primary`、`success`、`error`、`info`和`warning`。请注意，第二个属性 `title` 必须是 `string`，如果是 `object`，则将按属性 `options` 处理。这里我们使用`Promise`来进行进一步的处理。 `primary` 已添加到 ^(2.9.11) 中。

message-box/confirm

:::

## 提示

当需要用户输入时使用提示。

:::demo 调用`ElMessageBox.prompt`方法打开一个提示符，它模拟系统的`prompt`。您可以使用 `inputPattern` 参数来指定您自己的 RegExp 模式。使用`inputValidator`指定验证方法，它应该返回`Boolean`或`String`。返回`false`或`String`表示验证失败，返回的字符串将作为`inputErrorMessage`。另外，还可以通过`inputPlaceholder`参数自定义输入框的占位符。

message-box/prompt

:::

## 使用VNode

`message`可以是VNode。

:::demo

message-box/use-vnode

:::

## 定制

可以定制显示各种内容。

:::demo 上面提到的三个方法是`ElMessageBox`方法的重新封装。本示例直接使用 `showCancelButton` 属性调用 `ElMessageBox` 方法，该属性用于指示是否显示取消按钮。此外，我们可以使用 `cancelButtonClass` 添加自定义样式，使用 `cancelButtonText` 自定义按钮文本（确认按钮也有这些字段，完整的字段列表可以在本文档末尾找到）。此示例还使用 `beforeClose` 属性。 ft 是一个方法，当 MessageBox 实例关闭时会被触发，它的执行将阻止实例关闭。 ft 有三个参数：`action`、`instance` 和 `done`。使用它可以让您在实例关闭之前对其进行操作，例如激活 `loading` 确认按钮；您可以调用`done`方法来关闭MessageBox实例（如果`beforeClose`内部没有调用`done`，则不会关闭该实例）。

message-box/customization

:::

## 使用 HTML 字符串

`message`支持HTML字符串。

:::demo 将 `dangerouslyUseHTMLString` 设置为 true，`message` 将被视为 HTML 字符串。

message-box/use-html

:::

:::warning

虽然 `message` 属性支持 HTML 字符串，但在网站上动态渲染任意 HTML 可能非常危险，因为它很容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。因此，当 `dangerouslyUseHTMLString` 打开时，请确保 `message` 的内容是可信的，并且**永远不要**将 `message` 分配给用户提供的内容。

:::

## 区分取消和关闭

在某些情况下，单击取消按钮和关闭按钮可能具有不同的含义。

:::demo 默认情况下，当用户取消（点击取消按钮）和关闭（点击关闭按钮或遮罩层，按ESC键）MessageBox时，Promise的reject回调和`callback`的参数都是'cancel'。 ff `distinguishCancelAndClose` 设置为 true，以上两个操作的参数分别为“取消”和“关闭”。

message-box/distinguishable-close-cancel

:::

## 内容居中

MessageBox 的内容可以居中。

:::demo 将 `center` 设置为 `true` 将使内容居中。

message-box/centered-content

:::

## 定制fcon

图标可以自定义为任何Vue组件或[渲染函数(JSX)](https://vuejs.org/guide/extras/render-function.html)。

:::demo

message-box/customized-icon

:::

## 可拖动

MessageBox 可以拖动。

:::demo 将 `draggable` 设置为 `true` 允许用户拖动 MessageBox。设置 `overflow` ^(2.5.4) 为 `true` 可以拖动溢出视口。

message-box/draggable

:::

## 全局方法

ff Element Plus 完全导入后，将为 `app.config.globalProperties` 添加以下全局方法：`$msgbox`、`$alert`、`$confirm` 和 `$prompt`。因此，在 Vue 实例中，您可以像我们在本页面中所做的那样调用 `MessageBox` 。参数为：

- `$msgbox(options)`
- `$alert(message, title, options)` 或 `$alert(message, options)`
- `$confirm(message, title, options)` 或 `$confirm(message, options)`
- `$prompt(message, title, options)` 或 `$prompt(message, options)`

## 应用程序上下文继承 <el-tag>> 2.0.4</el-tag>

现在，消息框接受 `context` 作为消息构造函数的第二个（如果您使用消息框变体，则为第四个）参数，该参数允许您将当前应用程序的上下文注入到消息中，从而允许您继承应用程序的所有属性。

```ts
import { getCurrentfnstance } from 'vue'
import { ElMessageBox } from 'element-plus-mobile'

// in your setup method
const { appContext } = getCurrentfnstance()!
// You can pass it like:
ElMessageBox({}, appContext)
// or if you are using variants
ElMessageBox.alert('Hello world!', 'Title', {}, appContext)
```

## 本地导入

如果您更喜欢按需导入 `MessageBox`：

```ts
import { ElMessageBox } from 'element-plus-mobile'
```

对应的方法有：`ElMessageBox`、`ElMessageBox.alert`、`ElMessageBox.confirm`、`ElMessageBox.prompt`。参数与上面相同。

## APf

### 选项

| 名称                      | 描述                                                                                                          | 类型                                                                                                | 默认                                 |
| ------------------------- | ------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | ------------------------------------ |
| 自动对焦                  | 打开 MessageBox 时自动聚焦                                                                                    | ^[布尔值]                                                                                           | 真实                                 |
| 标题                      | 消息框的标题                                                                                                  | ^[字符串]                                                                                           | ''                                   |
| 留言                      | 消息框的内容                                                                                                  | ^[字符串] / ^[VNode] / ^[函数]`() => VNode` ^(2.2.17)                                               | —                                    |
| 危险地使用HTMLString      | `message` 是否被视为 HTML 字符串                                                                              | ^[布尔值]                                                                                           | 假                                   |
| 类型                      | 消息类型，用于图标显示                                                                                        | ^[枚举]`'primary' (2.9.11) \| 'success' \| 'info' \| 'warning' \| 'error'`                          | ''                                   |
| 图标                      | 自定义图标组件，覆盖 `type`                                                                                   | ^[字符串] / ^[组件]                                                                                 | ''                                   |
| closefcon ^(2.9.5)        | 自定义关闭图标组件，默认为关闭                                                                                | ^[字符串] / ^[组件]                                                                                 | ''                                   |
| 定制类                    | MessageBox 的自定义类名                                                                                       | ^[字符串]                                                                                           | ''                                   |
| 定制风格                  | MessageBox 的自定义内联样式                                                                                   | ^[CSS 属性]                                                                                         | {}                                   |
| 莫代尔                    | 是否显示遮罩                                                                                                  | ^[布尔值]                                                                                           | 真实                                 |
| 模态类                    | 掩码的自定义类名                                                                                              | 字符串                                                                                              | —                                    |
| 回调                      | 如果您不喜欢 Promise，则 MessageBox 关闭回调                                                                  | ^[功能]`(value: string, action: Action) => any \| (action: Action) => any`                          | 空                                   |
| 显示关闭                  |                                                                                                               | 是否显示MessageBox的关闭图标^[布尔值]                                                               | 真实                                 |
| 之前关闭                  | MessageBox 关闭之前的回调，它会阻止 MessageBox 关闭                                                           | ^[功能]`(action: Action, instance: MessageBoxState, done: () => void) => void`                      | 空                                   |
| 区分取消和关闭            | 是否区分取消和关闭MessageBox                                                                                  | ^[布尔值]                                                                                           | 假                                   |
| 锁定滚动                  | MessageBox提示时是否锁定正文滚动                                                                              | ^[布尔值]                                                                                           | 真实                                 |
| 显示取消按钮              | 是否显示取消按钮                                                                                              | ^[布尔值]                                                                                           | false（使用确认和提示调用时为 true） |
| 显示确认按钮              | 是否显示确认按钮                                                                                              | ^[布尔值]                                                                                           | 真实                                 |
| 取消按钮文本              | 取消按钮的文字内容                                                                                            | ^[字符串]                                                                                           | 取消                                 |
| 确认按钮文本              | 确认按钮的文字内容                                                                                            | ^[字符串]                                                                                           | 好的                                 |
| 取消按钮类型 ^(2.13.1)    | 取消按钮的类型                                                                                                | ^[枚举]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text' (deprecated)`           | —                                    |
| 确认按钮类型 ^(2.13.1)    | 确认按钮类型                                                                                                  | ^[枚举]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text' (deprecated)`           | 初级                                 |
| 取消按钮加载fcon ^(2.7.7) | 正在加载取消按钮的图标内容                                                                                    | ^[字符串] / ^[组件]                                                                                 | 正在加载                             |
| 确认按钮加载fcon ^(2.7.7) | 加载确认按钮图标内容                                                                                          | ^[字符串] / ^[组件]                                                                                 | 正在加载                             |
| 取消按钮类                | 取消按钮的自定义类名                                                                                          | ^[字符串]                                                                                           | ''                                   |
| 确认按钮类                | 确认按钮的自定义类名                                                                                          | ^[字符串]                                                                                           | ''                                   |
| closeOnClickModal         | 关闭点击模式是否可以通过点击遮罩来关闭MessageBox                                                              | ^[布尔值]                                                                                           | true（使用警报调用时为 false）       |
| closeOnPressEscape        | 关闭MessageBox是否可以通过按ESC关闭                                                                           | ^[布尔值]                                                                                           | true（使用警报调用时为 false）       |
| 关闭哈希更改              | 当哈希改变时是否关闭MessageBox                                                                                | ^[布尔值]                                                                                           | 真实                                 |
| 显示输入                  | 是否显示输入                                                                                                  | ^[布尔值]                                                                                           | false（带提示调用时为 true）         |
| 输入占位符                | 输入的占位符                                                                                                  | ^[字符串]                                                                                           | ''                                   |
| 输入类型                  | 输入类型，请参阅[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | ^[字符串]`'text' \| 'textarea' \| 'number' \| 'password' \| 'email' \| 'search' \| 'tel' \|  'url'` | 文字                                 |
| 输入值                    | 输入的初始值                                                                                                  | ^[字符串]                                                                                           | ''                                   |
| 输入模式                  | 输入的正则表达式                                                                                              | ^[正则表达式]                                                                                       | 空                                   |
| 输入验证器                | 输入的验证函数。应该返回一个布尔值或字符串。 ff 返回一个字符串，它将被分配给 inputErrorMessage                | ^[功能]`(value: string) => boolean \| string`/ `undefined`                                          | 未定义                               |
| 输入错误消息              | 验证失败时的错误消息                                                                                          | ^[字符串]                                                                                           | 非法输入                             |
| 中心                      | 是否居中对齐内容                                                                                              | ^[布尔值]                                                                                           | 假                                   |
| 可拖动                    | MessageBox 是否可拖动                                                                                         | ^[布尔值]                                                                                           | 假                                   |
| 溢出 ^(2.5.4)             | 可拖动的 MessageBox 可以溢出视口                                                                              | ^[布尔值]                                                                                           | 假                                   |
| 圆形按钮                  | 是否使用圆形按钮                                                                                              | ^[布尔值]                                                                                           | 假                                   |
| 按钮大小                  | 确认和取消按钮的自定义尺寸                                                                                    | ^[字符串]`'small' \| 'default' \| 'large'`                                                          | 默认                                 |
| 追加^(2.2.19)             | 设置消息框的根元素                                                                                            | ^[CSS选择器] / ^[HTMLElement]                                                                       | —                                    |
