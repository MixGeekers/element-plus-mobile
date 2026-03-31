---
title: 工具提示
lang: zh-CN
---

# 工具提示

显示鼠标悬停的提示信息。

## 基本用法

工具提示有 9 个位置。

:::demo 使用属性 `content` 设置悬停时的显示内容。属性 `placement` 确定工具提示的位置。其值为 `[orientation]-[alignment]`，有四个方向 `top`、`left`、`right`、`bottom` 和三个对齐方式 `start`、`end`， `null`，默认对齐方式为空。以`placement="left-end"`为例，工具提示将显示在您悬停的元素的左侧，并且工具提示的底部与元素的底部对齐。

tooltip/basic

:::

## 主题

工具提示有两个内置主题：`dark` 和 `light`。

:::tip

要使用自定义主题，您必须知道工具提示渲染到哪里，如果您的工具提示渲染到根元素，则需要全局设置 css 规则。

当您使用自定义主题并同时显示箭头时，建议不要使用线性渐变背景色，因为弹出箭头和内容是两个不同的元素，
弹出箭头的样式需要单独设置，当涉及到渐变背景色时，可能会显得有点奇怪。

:::

:::demo 设置`effect`来修改主题，默认值为`dark`。

tooltip/theme

:::

## 更多内容

显示多行文本并设置其格式。

:::demo 通过添加名为 `content` 的插槽来覆盖 `el-tooltip` 的属性 `content`。

tooltip/rich-content

:::

## 高级用法

除了基本用法之外，还有一些属性允许您自定义自己的属性：

`transition`属性允许您自定义工具提示显示或隐藏的动画，默认值为el-fade-in-linear。

`disabled` 属性允许您禁用 `tooltip`。您只需将其设置为 `true` 即可。

事实上，Tooltip是基于[ElPopper](https://github.com/element-plus/element-plus/tree/dev/packages/components/popper)的扩展，您可以使用ElPopper允许的任何属性。

:::demo

tooltip/advanced-usage

:::

:::tip

工具提示不支持 `router-link` 组件，请使用 `vm.$router.push`。

Tooltip 不支持禁用的表单元素，更多信息可以在 [MDN](https://developer.mozilla.org/en-US/docs/Web/Events/mouseenter) 中找到。您需要使用容器元素包装禁用的表单元素，以使工具提示正常工作。

:::

## HTML 作为内容

content 属性可以设置为 HTML 字符串。

:::warning

虽然 `content` 属性支持 HTML 字符串，但在网站上动态渲染任意 HTML 可能非常危险，因为它很容易导致 [XSS 攻击](https://en.wikipedia.org/wiki/Cross-site_scripting)。因此，当 `raw-content` 开启时，请确保 `content` 是可信的，并且**永远不要**分配用户提供的 `content`。

:::

:::demo

tooltip/html-content

:::

## 虚拟触发

有时我们想在其他触发元素上渲染工具提示，
我们可以将触发器和内容分开。

:::tip

虚拟触发工具提示是受控组件，因此您必须自己控制工具提示的可见性
发生这种情况时，**您将无法**通过单击其他位置来关闭工具提示。

:::

:::demo

tooltip/virtual-trigger

:::

## 单例

Tooltip也可以是单例的，这意味着只有一个tooltip实例可以有多个触发器，该功能是基于`Virtual triggering`实现的

:::tip

已知问题：使用单例时，弹出窗口将从意想不到的地方弹出

:::

:::demo

tooltip/singleton

:::

## 受控

Tooltip可以由父组件控制，通过使用`:visible`可以实现两种方式的绑定。

:::demo

tooltip/controlled

:::

## 动画

Tooltip可以自定义动画，可以使用`transition`设置想要的动画。

:::tip

Transition类，更多信息可以参见[Vue Transition](https://vuejs.org/guide/built-ins/transition.html#css-based-transitions)。

:::

:::demo

tooltip/animations

:::

## 使用 `append-to`

使用`targetElement`之前必须等待DOM挂载。

:::demo

tooltip/append-to

:::

## API

### 属性

| 名称                | 描述                                                                                                 | 类型                                                                                                                                                                        | 默认             |
| ------------------- | ---------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------- | --- |
| 追加到              | 工具提示 CONTENT 附加到哪个元素                                                                      | ^[CSS选择器] / ^[HTMLElement]                                                                                                                                               | —                |
| 效果                | 工具提示主题，内置主题：`dark` / `light`                                                             | ^[枚举]`'dark' \| 'light'`                                                                                                                                                  | 黑暗             |
| 内容                | 显示内容，可被`slot#content`覆盖                                                                     | ^[字符串]                                                                                                                                                                   | ''               |
| 原始内容            | `content`是否被视为HTML字符串                                                                        | ^[布尔值]                                                                                                                                                                   | 假               |
| 安置                | 工具提示的位置                                                                                       | ^[枚举]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | 底部             |
| 后备展示位置        | 工具提示的可能位置列表 [popper.js](https://popper.js.org/docs/v2/modifiers/flip/#fallbackplacements) | ^[数组]`Placement[]`                                                                                                                                                        | —                |
| 可见 / v 模型：可见 | 工具提示的可见性                                                                                     | ^[布尔值]                                                                                                                                                                   | —                |
| 已禁用              | 是否禁用 Tooltip                                                                                     | ^[布尔值]                                                                                                                                                                   | —                |
| 偏移                | 工具提示的偏移量                                                                                     | ^[数字]                                                                                                                                                                     | 12               | 12  |
| 过渡                | 动画名称                                                                                             | ^[字符串]                                                                                                                                                                   | —                |
| popper 选项         | [popper.js](https://popper.js.org/docs/v2/) 参数                                                     | ^[对象]参考[popper.js](https://popper.js.org/docs/v2/) doc                                                                                                                  | {}               |
| 箭头偏移 ^(2.9.10)  | 控制工具提示箭头相对于弹出窗口的偏移（填充）。                                                       | ^[数字]                                                                                                                                                                     | 5                |
| 后显示              | 出现延迟，以毫秒为单位，在受控模式下无效                                                             | ^[数字]                                                                                                                                                                     | 0                |
| 显示箭头            | 工具提示内容是否有箭头                                                                               | ^[布尔值]                                                                                                                                                                   | 真实             |
| 隐藏后              | 消失延迟，单位毫秒，在受控模式下无效                                                                 | ^[数字]                                                                                                                                                                     | 200              | 200 |
| 自动关闭            | 隐藏工具提示的超时（以毫秒为单位），在受控模式下无效                                                 | ^[数字]                                                                                                                                                                     | 0                |
| 波普尔级            | 工具提示弹出器的自定义类名                                                                           | ^[字符串]                                                                                                                                                                   | —                |
| 波普风格            | 工具提示弹出窗口的自定义样式                                                                         | ^[字符串] / ^[对象]                                                                                                                                                         | —                |
| 可输入              | 鼠标是否可以进入tooltip                                                                              | ^[布尔值]                                                                                                                                                                   | 真实             |
| 传送                | 工具提示内容是否传送，如果是`true`，则会传送到`append-to`设置的位置                                  | ^[布尔值]                                                                                                                                                                   | 真实             |
| 触发                | 工具提示应该如何触发（显示），在受控模式下无效                                                       | ^[枚举]`'hover' \| 'click' \| 'focus' \| 'contextmenu'` / ^[数组]`Array<'click' \| 'focus' \| 'hover' \| 'contextmenu'>`                                                    | 悬停             |
| 虚拟触发            | 指示是否启用虚拟触发                                                                                 | ^[布尔值]                                                                                                                                                                   | —                |
| 虚拟参考            | 指示工具提示附加到的参考元素                                                                         | ^[HTMLElement]                                                                                                                                                              | —                |
| 触发键              | 当点击鼠标聚焦到触发元素时，可以定义一组键盘代码，通过键盘控制tooltip的显示，在受控模式下无效        | ^[数组]                                                                                                                                                                     | ['输入'，'空格'] |
| 执着                | 当工具提示处于非活动状态且 `persistent` 为 `false` 时，工具提示将被销毁                              | ^[布尔值]                                                                                                                                                                   | —                |
| 咏叹调标签 ^(a11y)  | 与`aria-label`相同                                                                                   | ^[字符串]                                                                                                                                                                   | —                |
| 聚焦目标 ^(2.11.2)  | 通过悬停触发工具提示时，是否聚焦触发元素，从而提高可访问性                                           | ^[布尔值]                                                                                                                                                                   | 假               |

### 活动

| 名称   | 描述                                             | 类型                             |
| ------ | ------------------------------------------------ | -------------------------------- |
| 演出前 | 在显示工具提示之前触发。将触发原因作为参数传递。 | ^[功能]`(event?: Event) => void` |
| 显示   | 显示工具提示时触发。将触发原因作为参数传递。     | ^[功能]`(event?: Event) => void` |
| 隐藏前 | 在隐藏工具提示之前触发。将触发原因作为参数传递。 | ^[功能]`(event?: Event) => void` |
| 隐藏   | 当工具提示隐藏时触发。将触发原因作为参数传递。   | ^[功能]`(event?: Event) => void` |

### 老虎机

| 名称 | 描述                                     |
| ---- | ---------------------------------------- |
| 默认 | 工具提示触发和引用元素，仅接受单个根元素 |
| 内容 | 定制内容                                 |

### 暴露

| 名称           | 描述                                             | 类型                                              |
| -------------- | ------------------------------------------------ | ------------------------------------------------- |
| 波普尔参考     | el-popper 组件实例                               | ^[对象]`Ref<PopperInstance \| undefined>`         |
| 内容参考       | el-tooltip-content 组件实例                      | ^[对象]`Ref<TooltipContentInstance \| undefined>` |
| 是焦点内部内容 | 验证当前焦点事件是否在 el-tooltip-content 内触发 | ^[功能]`() => boolean \| undefined`               |
| 更新波普尔     | 更新 el-popper 组件实例                          | ^[功能]`() => void`                               |
| 打开           | 暴露 onOpen 函数来管理 el-tooltip 打开状态       | ^[功能]`(event?: Event \| undefined) => void`     |
| 关闭           | 暴露 onClose 函数来管理 el-tooltip 打开状态      | ^[功能]`(event?: Event \| undefined) => void`     |
| 隐藏           | 暴露隐藏功能                                     | ^[功能]`(event?: Event \| undefined) => void`     |

## 常见问题解答

####当tooltip嵌套时，如何在输入框中允许空格？

典型问题：[#20907](https://github.com/element-plus/element-plus/issues/20907)

```vue
<template>
  <el-tooltip content="tooltip content" placement="top" :trigger-keys="[]">
    <el-input v-model="value" placeholder="" />
  </el-tooltip>
</template>
```
