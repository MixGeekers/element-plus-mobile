---
title: 提及
lang: zh-CN
---

# 提及

用于在输入中提及某人或某事。

## 基本用法

最基本的用法。

:::demo

mention/basic

:::

## 道具 ^(2.11.3)

您可以通过`props`属性自定义`options`的别名。

:::demo

mention/props

:::

## 文本区域

输入类型可设置为`textarea`。

:::demo

mention/textarea

:::

## 自定义标签

通过`label`插槽定制标签。

:::demo

mention/label

:::

## 加载远程选项

异步加载选项。

:::demo

mention/loading

:::

## 自定义触发令牌

通过 `prefix` 道具自定义触发令牌。默认为`@`，也支持`Array<string>`。

:::demo

mention/prefix

:::

## 整体删除

将`whole`属性设置为`true`，当你按退格键时，提及将被整体删除。
设置`check-is-whole`属性来自定义检查逻辑。
:::demo

mention/whole

:::

## 使用表单

与 `el-form` 一起使用。

:::demo

mention/form

:::

::: tip
由于该组件是基于组件 [`el-input`](./input.md#attributes) 开发的，所以原有的属性没有改变，所以这里不再重复，
请前往原始组件查看文档。
:::

## API

### 属性

| 名称                              | 描述                                             | 类型                                                                  | 默认                                                     |
| --------------------------------- | ------------------------------------------------ | --------------------------------------------------------------------- | -------------------------------------------------------- |
| 选项                              | 提及选项列表                                     | ^[数组]`MentionOption[]`                                              | `[]`                                                     |
| 道具 ^(2.11.3)                    | 配置选项                                         | ^[对象]`MentionOptionProps`                                           | `{value: 'value', label: 'label', disabled: 'disabled'}` |
| 前缀                              | 触发提及的前缀字符。字符串长度必须恰好为 1       | ^[字符串] \| ^[数组]`string[]`                                        | `'@'`                                                    |
| 分裂                              | 用于分割提及的字符。字符串长度必须恰好为 1       | ^[字符串]                                                             | `' '`                                                    |
| 过滤选项                          | 自定义过滤选项逻辑                               | ^[假] \| ^[功能]`(pattern: string, option: MentionOption) => boolean` | —                                                        |
| 安置                              | 设置弹出位置                                     | ^[字符串]`'bottom' \| 'top'`                                          | `'bottom'`                                               |
| 显示箭头                          | 下拉面板是否有箭头                               | ^[布尔值]                                                             | `false`                                                  |
| 偏移                              | 下拉面板的偏移量                                 | ^[数字]                                                               | `0`                                                      |
| 整体                              | 按退格删除时提及内容是否整体删除                 | ^[布尔值]                                                             | `false`                                                  |
| 检查是否完整                      | 当按退格删除时，检查提及是否是一个整体           | ^[功能]`(pattern: string, prefix: string) => boolean`                 | —                                                        |
| 加载                              | 提及的下拉面板是否处于加载状态                   | ^[布尔值]                                                             | `false`                                                  |
| 模型值 / v 模型                   | 输入值                                           | ^[字符串]                                                             | —                                                        |
| 波普尔级                          | 下拉面板的自定义类名                             | ^[字符串] / ^[对象]                                                   | ''                                                       |
| 波普风格 ^(2.11.5)                | 下拉面板的自定义样式                             | ^[字符串] / ^[对象]                                                   | —                                                        |
| popper 选项                       | [popper.js](https://popper.js.org/docs/v2/) 参数 | ^[object] 参考[popper.js doc](https://popper.js.org/docs/v2/)         | —                                                        |
| [输入道具](./input.md#attributes) | —                                                | —                                                                     | —                                                        |

### 活动

| 名称                          | 描述                                                                    | 类型                                                           |
| ----------------------------- | ----------------------------------------------------------------------- | -------------------------------------------------------------- |
| 搜索                          | 当前缀命中时触发                                                        | ^[功能]`(pattern: string, prefix: string) => void`             |
| 选择                          | 当用户选择选项                                                          | 时触发^[功能]`(option: MentionOption, prefix: string) => void` |
| 整体删除 ^(2.10.4)            | 当删除整个提及且 `whole` 为 `true` 或 `check-is-whole` 为 `true` 时触发 | ^[功能]`(pattern: string, prefix: string) => void`             |
| [输入事件](./input.md#events) | —                                                                       | —                                                              |

### 老虎机

| 名称                         | 描述               | 类型                                            |
| ---------------------------- | ------------------ | ----------------------------------------------- |
| 标签                         | 内容作为选项标签   | ^[对象]`{ item: MentionOption, index: number }` |
| 加载                         | 内容作为选项加载   | —                                               |
| 标题                         | 下拉菜单顶部的内容 | —                                               |
| 页脚                         | 下拉菜单底部的内容 | —                                               |
| [输入插槽](./input.md#slots) | —                  | —                                               |

### 暴露

| 名称              | 描述                | 类型                                  |
| ----------------- | ------------------- | ------------------------------------- |
| 输入              | el-input 组件实例   | ^[对象]`Ref<InputInstance \| null>`   |
| 工具提示          | el-tooltip 组件实例 | ^[对象]`Ref<TooltipInstance \| null>` |
| 下拉可见 ^(2.8.5) | 工具提示显示状态    | ^[对象]`ComputedRef<boolean>`         |

## 类型声明

<details>
  <summary>显示声明</summary>

```ts
type MentionOption = {
  value?: string
  label?: string
  disabled?: boolean
  [key: string]: any
}

type MentionOptionProps = {
  value?: string
  label?: string
  disabled?: string
  [key: string]: string | undefined
}
```

</details>
