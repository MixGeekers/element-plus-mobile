---
title: 输入数字
lang: zh-CN
---

# 输入数字

输入具有可自定义范围的数值。

`InputNumber` 默认采用更适合触控的输入框和操作按钮尺寸，`controls-position="right"` 也会沿用同一套移动端布局。

## 基本用法

:::demo 在 `<el-input-number>` 元素中将变量绑定到 `v-model` 并设置。

input-number/basic

:::

:::tip

当在输入框中输入无效字符串时，输入值会向上层发出 `NaN` 错误结果

:::

## 禁用

:::demo `disabled` 属性接受 `boolean`，如果该值为 `true`，则该组件被禁用。如果只是需要将值控制在一个范围内，可以添加`min`属性来设置最小值，添加`max`属性来设置最大值。默认情况下，最小值为`Number.MIN_SAFE_INTEGER`。

input-number/disabled

:::

## 步骤

允许您定义增量步骤。

:::demo 添加 `step` 属性来设置步骤。

input-number/steps

:::

## 严格执行步骤

:::demo `step-strictly` 属性接受 `boolean`。如果该属性为`true`，则输入值只能是步长的倍数。

input-number/step-strictly

:::

## 精度

:::demo 添加 `precision` 属性来设置输入值的精度。

input-number/precision

:::

:::tip

`precision` 的值必须是非负整数，且不能小于 `step` 的小数位。

:::

## 尺寸

使用属性 `size` 通过 `large` 或 `small` 设置附加尺寸。

:::demo

input-number/size

:::

## 控制位置

:::demo 设置`controls-position` 来决定控制按钮的位置。

input-number/controlled

:::

## 自定义图标 ^(2.6.3)

:::demo 使用 `decrease-icon` 和 `increase-icon` 设置自定义图标。

input-number/custom

:::

## 带前缀和后缀 ^(2.8.4)

:::demo 使用名为 slot 的前缀和后缀。

input-number/with-prefix-suffix

:::

:::tip

出于精确目的，输入数字限制为 [Number.MIN_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MIN_SAFE_INTEGER) 到 [Number.MAX_SAFE_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER)。

:::

## API

### 属性

| 名称                        | 描述                              | 类型                                      | 默认                  |
| --------------------------- | --------------------------------- | ----------------------------------------- | --------------------- |
| 模型值 / v 模型             | 绑定值                            | ^[数字] / ^[空]                           | —                     |
| 分钟                        | 最小允许值                        | ^[数字]                                   | 数量.MIN_SAFE_INTEGER |
| 最大                        | 最大允许值                        | ^[数字]                                   | 数量.MAX_SAFE_INTEGER |
| 步骤                        | 增量步                            | ^[数字]                                   | 1                     |
| 严格执行                    | 输入值是否只能是step的倍数        | ^[布尔值]                                 | 假                    |
| 精度                        | 输入值精度                        | ^[数字]                                   | —                     |
| 尺寸                        | 组件的尺寸                        | ^[枚举]`'large' \| 'default' \| 'small'`  | 默认                  |
| 只读 ^(2.2.16)              | 与本机输入中的 `readonly` 相同    | ^[布尔值]                                 | 假                    |
| 已禁用                      | 组件是否被禁用                    | ^[布尔值]                                 | 假                    |
| 控制                        | 是否启用控制按钮                  | ^[布尔值]                                 | 真实                  |
| 控制位置                    | 控制按钮的位置                    | ^[枚举]`'' \| 'right'`                    | —                     |
| 名称                        | 与本机输入中的 `name` 相同        | ^[字符串]                                 | —                     |
| 咏叹调标签 ^(a11y) ^(2.7.2) | 与本机输入中的 `aria-label` 相同  | ^[字符串]                                 | —                     |
| 占位符                      | 与本机输入中的 `placeholder` 相同 | ^[字符串]                                 | —                     |
| 编号                        | 与本机输入中的 `id` 相同          | ^[字符串]                                 | —                     |
| 清除值 ^(2.2.0)             | 清除输入框时应设置值              | ^[数字] / ^[空] / ^[枚举]`'min' \| 'max'` | —                     |
| 验证事件                    | 是否触发表单验证                  | ^[布尔值]                                 | 真实                  |
| 标签 ^(a11y) ^(已弃用)      | 与本机输入中的 `aria-label` 相同  | ^[字符串]                                 | —                     |
| 输入模式 ^(2.10.3)          | 与本机输入中的 `inputmode` 相同   | ^[字符串]                                 | —                     |
| 对齐 ^(2.10.5)              | 内部输入文本的对齐方式            | ^[枚举]`'left' \| 'center' \| 'right'`    | '中心'                |
| 残疾人科学 ^(2.10.5)        | 禁用科学记数法的输入（例如“e”）   | ^[布尔值]                                 | 假                    |

### 老虎机

| 名称              | 描述                     |
| ----------------- | ------------------------ |
| 减少图标 ^(2.6.3) | 自定义输入框按钮减少图标 |
| 增加图标 ^(2.6.3) | 自定义输入框按钮增加图标 |
| 前缀 ^(2.8.4)     | 内容作为输入前缀         |
| 后缀 ^(2.8.4)     | 内容作为输入后缀         |

### 活动

| 名称 | 描述             | 类型                                                                                |
| ---- | ---------------- | ----------------------------------------------------------------------------------- |
| 改变 | 当值改变时触发   | ^[功能]`(currentValue: number \| undefined, oldValue: number \| undefined) => void` |
| 模糊 | 当输入模糊时触发 | ^[功能]`(event: FocusEvent) => void`                                                |
| 焦点 | 当输入聚焦时触发 | ^[功能]`(event: FocusEvent) => void`                                                |

### 暴露

| 名称 | 描述               | 类型                |
| ---- | ------------------ | ------------------- |
| 焦点 | 获得输入组件的焦点 | ^[功能]`() => void` |
| 模糊 | 移除输入组件的焦点 | ^[功能]`() => void` |
