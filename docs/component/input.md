---
title: 输入
lang: zh-CN
---

# 输入

使用鼠标或键盘输入数据。

## 基本用法

:::demo

input/basic

:::

## 禁用

:::demo 使用 `disabled` 属性禁用输入。

input/disabled

:::

## 可清除

:::demo 使用 `clearable` 属性使输入可清除。在版本^(2.13.4)之后，可清除功能也可用于文本区域类型的输入。

input/clearable

:::

## 自定义清除图标 ^(2.11.0)

:::demo 您可以通过设置 `clear-icon` 属性来自定义透明图标。

input/clear-icon

:::

## 格式化程序

在`formatter`的情况下显示数值，我们通常同时使用`parser`。

:::demo

input/formatter

:::

## 密码框

:::demo 使用 `show-password` 属性创建可切换的密码输入。从^(2.13.6)开始，支持`password-icon`插槽覆盖默认图标。

input/password

:::

## 带图标输入

添加一个图标来指示输入类型。

:::demo 要在输入中添加图标，您可以简单地使用 `prefix-icon` 和 `suffix-icon` 属性。此外，`prefix` 和 `suffix` 命名插槽也可以工作。

input/with-icon

:::

## 文本区域

可调整大小以输入多行文本信息。添加属性`type="textarea"`，将`input`更改为原生`textarea`。

:::demo 通过设置 `rows` 属性来控制高度。

input/textarea

:::

## 自动调整文本区域大小

为输入的文本区域类型设置 `autosize` 属性可以使高度根据内容自动调整。可以向 `autosize` 提供选项对​​象，以指定文本区域可以自动调整的最小和最大行数。

:::demo

input/auto-sizing-textarea

:::

## 混合输入

前置或附加一个元素，通常是标签或按钮。

:::demo 使用 `slot` 分发前置或附加到 Input 的元素。

input/mixed-input

:::

## 尺寸

:::demo 添加 `size` 属性以更改输入的大小。除了默认尺寸外，还有另外两个选项：`large`、`small`。

input/various-size

:::

## 限制长度

:::demo `maxlength` 和 `minlength` input 属性，它们声明用户可以输入的字符数限制。 “字符数”是使用 JavaScript 字符串长度来测量的。为输入的文本或文本区域类型设置 `maxlength` 属性可以限制输入值的长度，允许您同时通过将 `show-word-limit` 设置为 `true` 来显示字数。在^(2.11.5)中，您可以将`word-limit-position`设置为`outside`以显示输入之外的字数统计。

input/length-limiting

:::

## 计算字素 ^(2.13.7)

:::demo 设置 `count-graphemes` 来计算文本长度。如果设置了，则不会使用原生 `maxlength` 和 `minlength`。

input/count-graphemes

:::

:::tip

**浏览器支持和后备策略**

当使用 `count-graphemes` 属性时，该组件采用以下方法：

- **主要**：使用 `Intl.Segmenter` API（Chrome 87+、Firefox 125+、Safari 14.1+）进行正确的字素簇处理。这可以正确处理复杂的表情符号、组合标记和零宽度连接序列。

- **回退**：较旧的浏览器回退到 `Array.from()` 以进行基于代码点的迭代。请注意，这可能会分割多代码点字素序列（例如，带有肤色修饰符的表情符号）。

在实现您自己的 `count-graphemes` 函数时，如果您需要对复杂 unicode 字符的强大支持，请考虑使用 `Intl.Segmenter`。

:::

## API

### 属性

| 名称                        | 描述                                                                                                                                                                                                           | 类型                                                                                                | 默认     |
| --------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- | -------- |
| 类型                        | 输入类型，请参阅[MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types)                                                                                                  | ^[字符串]`'text' \| 'textarea' \| 'number' \| 'password' \| 'email' \| 'search' \| 'tel' \|  'url'` | 文字     |
| 模型值 / v 模型             | 绑定值                                                                                                                                                                                                         | ^[字符串] / ^[数字]                                                                                 | —        |
| 模型修饰符 ^(2.11.5)        | v-model 修饰符，参考[Vue 修饰符](https://vuejs.org/guide/essentials/forms.html#modifiers)                                                                                                                      | ^[对象]`{ lazy?: true, number?: true, trim?: true }`                                                | —        |
| 最大长度                    | 与本机输入中的 `maxlength` 相同                                                                                                                                                                                | ^[字符串] / ^[数字]                                                                                 | —        |
| 最小长度                    | 与本机输入中的 `minlength` 相同                                                                                                                                                                                | ^[字符串] / ^[数字]                                                                                 | —        |
| 显示字数限制                | 是否显示字数，仅当 `type` 为 'text' 或 'textarea' 时有效                                                                                                                                                       | ^[布尔值]                                                                                           | 假       |
| 字数限制位置 ^(2.11.5)      | 字数位置，`show-word-limit` 为 true 时有效                                                                                                                                                                     | ^[枚举]`'inside' \| 'outside'`                                                                      | “里面”   |
| 占位符                      | 输入                                                                                                                                                                                                           | 的占位符^[字符串]                                                                                   | —        |
| 可清除                      | 是否显示清除按钮，仅当 `type` 不是 'textarea' 时有效                                                                                                                                                           | ^[布尔值]                                                                                           | 假       |
| 清除图标 ^(2.11.0)          | 自定义透明图标组件                                                                                                                                                                                             | ^[字符串] / ^[对象]`Component`                                                                      | 圆圈关闭 |
| 格式化程序                  | 指定输入值的格式。（仅当 `type` 为“文本”时有效）                                                                                                                                                               | ^[功能]`(value: string \| number) => string`                                                        | —        |
| 解析器                      | 指定从格式化程序输入中提取的值。（仅当 `type` 为“文本”时有效）                                                                                                                                                 | ^[功能]`(value: string) => string`                                                                  | —        |
| 显示密码                    | 是否显示可切换的密码输入^[布尔值]                                                                                                                                                                              | 假                                                                                                  |
| 已禁用                      | 输入是否被禁用                                                                                                                                                                                                 | ^[布尔值]                                                                                           | 假       |
| 尺寸                        | 输入的大小，当 `type` 不是 'textarea' 时有效                                                                                                                                                                   | ^[枚举]`'large' \| 'default' \| 'small'`                                                            | —        |
| 前缀图标                    | 前缀图标组件                                                                                                                                                                                                   | ^[字符串] / ^[组件]                                                                                 | —        |
| 后缀图标                    | 后缀图标组件                                                                                                                                                                                                   | ^[字符串] / ^[组件]                                                                                 | —        |
| 行                          | textarea 的行数，仅当 `type` 为 'textarea' 时有效                                                                                                                                                              | ^[数字]                                                                                             | 2        |
| 自动调整大小                | textarea是否具有自适应高度，仅当`type`为'textarea'时有效。可以接受一个对象，例如`{ minRows: 2, maxRows: 6 }`                                                                                                   | ^[布尔值] / ^[对象]`{ minRows?: number, maxRows?: number }`                                         | 假       |
| 自动完成                    | 与本机输入中的 `autocomplete` 相同                                                                                                                                                                             | ^[字符串]                                                                                           | 关闭     |
| 名称                        | 与本机输入中的 `name` 相同                                                                                                                                                                                     | ^[字符串]                                                                                           | —        |
| 只读                        | 与本机输入中的 `readonly` 相同                                                                                                                                                                                 | ^[布尔值]                                                                                           | 假       |
| 最大                        | 与本机输入中的 `max` 相同                                                                                                                                                                                      | —                                                                                                   | —        |
| 分钟                        | 与本机输入中的 `min` 相同                                                                                                                                                                                      | —                                                                                                   | —        |
| 步骤                        | 与本机输入中的 `step` 相同                                                                                                                                                                                     | —                                                                                                   | —        |
| 调整大小                    | 控制大小调整                                                                                                                                                                                                   | ^[枚举]`'none' \| 'both' \| 'horizontal' \| 'vertical'`                                             | —        |
| 自动对焦                    | 与本机输入中的 `autofocus` 相同                                                                                                                                                                                | ^[布尔值]                                                                                           | 假       |
| 表格                        | 与本机输入中的 `form` 相同                                                                                                                                                                                     | `string`                                                                                            | —        |
| 咏叹调标签 ^(a11y) ^(2.7.2) | 与本机输入中的 `aria-label` 相同                                                                                                                                                                               | ^[字符串]                                                                                           | —        |
| 标签索引                    | 输入选项卡索引                                                                                                                                                                                                 | ^[字符串] / ^[数字]                                                                                 | —        |
| 验证事件                    | 是否触发表单验证                                                                                                                                                                                               | ^[布尔值]                                                                                           | 真实     |
| 输入式                      | 输入元素或文本区域元素的样式                                                                                                                                                                                   | ^[字符串] / ^[对象]`CSSProperties \| CSSProperties[] \| string[]`                                   | {}       |
| 标签 ^(a11y) ^(已弃用)      | 与本机输入中的 `aria-label` 相同                                                                                                                                                                               | ^[字符串]                                                                                           | —        |
| 输入模式 ^(2.10.3)          | 与本机输入中的 `inputmode` 相同                                                                                                                                                                                | ^[字符串]                                                                                           | —        |
| 计数字素 ^(2.13.7)          | 自定义函数来计算字素；设置后，本机 `maxlength`/`minlength` 约束将被绕过。组件使用 `Intl.Segmenter`（Chrome 87+、Firefox 125+、Safari 14.1+）进行正确的字素聚类；旧版浏览器回退到 `Array.from()` 进行代码点迭代 | ^[功能]`(value: string) => number`                                                                  | —        |

### 活动

| 名称     | 描述                                                            | 类型                                                                                          |
| -------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| 模糊     | 当输入模糊时触发                                                | ^[功能]`(event: FocusEvent) => void`                                                          |
| 焦点     | 当输入聚焦时触发                                                | ^[功能]`(event: FocusEvent) => void`                                                          |
| 改变     | 仅当 modelValue 发生变化时，输入框失去焦点或用户按 Enter 时触发 | ^[功能]`(value: string \| number, evt?: Event) => void`                                       |
| 输入     | 当输入值改变时触发                                              | ^[功能]`(value: string \| number) => void`                                                    |
| 清除     | 单击清除按钮清除输入时触发                                      | ^[功能]`(evt?: MouseEvent) => void (After version 2.13.4, the evt parameter can be received)` |
| 按键     | 按下某个键时触发                                                | ^[功能]`(event: KeyboardEvent \| Event) => void`                                              |
| 鼠标离开 | 当鼠标离开输入元素时触发                                        | ^[功能]`(event: MouseEvent) => void`                                                          |
| 鼠标输入 | 当鼠标进入输入元素时触发                                        | ^[功能]`(event: MouseEvent) => void`                                                          |
| 作文开始 | 合成开始时触发                                                  | ^[功能]`(event: CompositionEvent) => void`                                                    |
| 成分更新 | 更新构图时触发                                                  | ^[功能]`(event: CompositionEvent) => void`                                                    |
| 作文结束 | 组合结束时触发                                                  | ^[功能]`(event: CompositionEvent) => void`                                                    |

### 老虎机

| 名称               | 描述                                                                                       |
| ------------------ | ------------------------------------------------------------------------------------------ |
| 前缀               | content 作为输入前缀，仅当 `type` 不是 'textarea' 时才有效                                 |
| 后缀               | 内容作为输入后缀，仅在 `type` 不是 'textarea' 时有效                                       |
| 前置               | 在输入之前添加的内容，仅在 `type` 不是 'textarea' 时有效                                   |
| 附加               | 输入后附加的内容，仅当 `type` 不是 'textarea' 时才有效                                     |
| 密码图标 ^(2.13.6) | 内容为输入密码图标，仅在 `show-password` 为 true 时有效。范围变量是 `{ visible: boolean }` |

### 暴露

| 名称               | 描述                      | 类型                                                  |
| ------------------ | ------------------------- | ----------------------------------------------------- |
| 模糊               | 模糊输入元素              | ^[功能]`() => void`                                   |
| 清除               | 清除输入值                | ^[功能]`() => void`                                   |
| 焦点               | 聚焦输入元素              | ^[功能]`() => void`                                   |
| 输入               | HTML 输入元素             | ^[对象]`Ref<HTMLInputElement>`                        |
| 参考               | HTML 元素、输入或文本区域 | ^[对象]`Ref<HTMLInputElement \| HTMLTextAreaElement>` |
| 调整文本区域大小   | 调整文本区域大小          | ^[功能]`() => void`                                   |
| 选择               | 选择输入元素中的文本      | ^[功能]`() => void`                                   |
| 文本区域           | HTML 文本区域元素         | ^[对象]`Ref<HTMLTextAreaElement>`                     |
| 文本区域样式       | 文本区域的样式            | ^[对象]`Ref<StyleValue>`                              |
| 正在撰写 ^(2.8.0)  | 是输入作曲                | ^[对象]`Ref<boolean>`                                 |
| 密码可见 ^(2.13.7) | 密码是否可见              | ^[对象]`Ref<boolean>`                                 |

## 常见问题解答

####为什么ElInput组件的宽度要通过clearable来扩展？

典型问题：[#7287](https://github.com/element-plus/element-plus/issues/7287)

PS：由于ElInput组件没有默认宽度，当显示可清除图标时，组件的宽度会扩大，可以通过设置宽度来解决。

```vue
<el-input v-model="input" clearable style="width: 200px" />
```
