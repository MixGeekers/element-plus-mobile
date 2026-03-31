---
title: ColorPickerPanel ^（测试版）
lang: zh-CN
---

# ColorPickerPanel ^（测试版）

`ColorPickerPanel`是`ColorPicker`的核心部件。

## 基本用法

:::demo ColorPickerPanel 需要将字符串类型变量绑定到 v-model。

color-picker-panel/basic

:::

## 阿尔法

:::demo ColorPickerPanel 支持 Alpha 通道选择。要激活 Alpha 选择，只需添加 `show-alpha` 属性。

color-picker-panel/alpha

:::

## 预定义颜色

:::demo ColorPickerPanel 支持预定义的颜色选项

color-picker-panel/predefined-color

:::

## 边框

默认情况下，颜色选择器面板有边框，但在某些情况下您不想要它。

:::demo

color-picker-panel/border

:::

## 禁用

`disabled` 属性确定颜色选择器是否完全禁用。

:::demo

color-picker-panel/disabled

:::

## API

### 属性

| 名称                   | 描述                     | 类型                                                                                                  | 默认                                                                         |
| ---------------------- | ------------------------ | ----------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| 模型值 / v 模型        | 绑定值                   | ^[字符串]                                                                                             | —                                                                            |
| 边框                   | 颜色选择器面板是否有边框 | ^[布尔值]                                                                                             | 真实                                                                         |
| 已禁用                 | 是否禁用颜色选择器       | ^[布尔值]                                                                                             | 假                                                                           |
| 显示阿尔法             | 是否显示 alpha 滑块      | ^[布尔值]                                                                                             | 假                                                                           |
| 颜色格式               | v-model 的颜色格式       | ^[枚举]`'rgb' \| 'prgb' \| 'hex' \| 'hex3' \| 'hex4' \| 'hex6' \| 'hex8' \| 'name' \| 'hsl' \| 'hsv'` | ^[枚举]`'hex' (when show-alpha is false) \| 'rgb' (when show-alpha is true)` |
| 预定义                 | 预定义颜色选项           | ^[数组]`string[]`                                                                                     | —                                                                            |
| 验证事件 ^(2.11.7)     | 是否触发表单验证         | ^[布尔值]                                                                                             | 真实                                                                         |
| 色调滑块类 ^(2.13.6)   | 类名将传递给hue-slider   | ^[对象]`string \| string[] \| Record<string, boolean>`                                                | —                                                                            |
| 色调滑块样式 ^(2.13.6) | 样式将传递给hue-slider   | ^[字符串] / ^[对象]`StyleValue`                                                                       | —                                                                            |

### 老虎机

| 名称 | 描述   |
| ---- | ------ | -------------- |
| 页脚 | 在输入 | 之后附加的内容 |

### 暴露

| 名称          | 描述           | 类型                   |
| ------------- | -------------- | ---------------------- |
| 颜色          | 当前颜色对象   | ^[对象]`Color`         |
| 输入参考      | 自定义输入参考 | ^[对象]`InputInstance` |
| 更新^(2.11.4) | 更新子组件     | ^[功能]`() => void`    |
