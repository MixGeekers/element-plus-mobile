---
title: 游览
lang: zh-CN
---

# 游览

用于引导用户使用产品的弹出组件。当您想要引导用户使用产品时使用。

## 基本用法

最基本的用法

:::demo

tour/basic

:::

## 非模态

使用 `:mask="false"` 使游览成为非模态的。同时建议与`type="primary"`一起使用以强调指南本身。

:::demo

tour/non-modal

:::

## 安置

更改引导线相对于目标的位置，有 12 个可用位置。当 `target` 为空时，指南将显示在中心。

:::demo

tour/placement

:::

## 自定义蒙版样式

自定义面具样式。

:::demo

tour/mask

:::

## 自定义指标

自定义指标。

:::demo

tour/indicator

:::

## 目标

目标的各种参数传递类型。从 ^(2.5.2) 开始支持字符串和函数类型。

:::demo

tour/target

:::

## 游览API

:::tip
同名巡步组件配置优先级更高
:::

### 旅游属性

| 物业                | 描述                                               | 类型                                                                                                                                                                        | 默认                             |
| ------------------- | -------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------- |
| 追加到              | TourContent 附加到哪个元素                         | ^[CSS选择器] / ^[HTMLElement]                                                                                                                                               | `body`                           |
| 显示箭头            | 是否显示箭头                                       | `boolean`                                                                                                                                                                   | 真实                             |
| 安置                | 引导卡相对于目标元素的位置                         | ^[枚举]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | `bottom`                         |
| 内容风格            | 内容的自定义样式                                   | `CSSProperties`                                                                                                                                                             | —                                |
| 面膜                | 是否启用遮罩、更改遮罩样式和填充颜色绕过自定义道具 | `boolean` \| ^[对象]`{ style?: CSSProperties; color?: string; }`                                                                                                            | `true`                           |
| 差距                | 掩模和目标之间的透明间隙                           | `TourGap`                                                                                                                                                                   | ^[对象]`{ offset: 6, radius: 2}` |
| 类型                | 类型，影响背景颜色和文本颜色                       | `default` \| `primary`                                                                                                                                                      | `default`                        |
| 模型值 / v 模型     | 开放参观                                           | `boolean`                                                                                                                                                                   | `false`                          |
| 当前 / v 模型：当前 | 当前步骤是什么？ `number`                          | `0`                                                                                                                                                                         |
| 滚动到视图选项      | 支持传递自定义scrollIntoView选项                   | `boolean` \| `ScrollIntoViewOptions`                                                                                                                                        | ^[对象]`{ block: 'center' }`     |
| z 索引              | 旅游 zIndex                                        | `number`                                                                                                                                                                    | `2001`                           |
| 显示关闭            | 是否显示关闭按钮                                   | `boolean`                                                                                                                                                                   | `true`                           |
| 关闭图标            | 自定义关闭图标，默认为关闭                         | `string` \| `Component`                                                                                                                                                     | —                                |
| 关闭新闻转义        | 是否可以通过按 ESC                                 | 关闭对话框`boolean`                                                                                                                                                         | `true`                           |
| 目标区域可点击      | 使用 mask                                          | 时目标元素是否可点击`boolean`                                                                                                                                               | `true`                           |

### 巡回赛老虎机

| 名称 | 描述              | 类型                                        |
| ---- | ----------------- | ------------------------------------------- |
| 默认 | tourStep 组件列表 | —                                           |
| 指标 | 自定义指标        | ^[对象]`{ current: number, total: number }` |

### 巡演活动

| 名称 | 描述             | 类型                               |
| ---- | ---------------- | ---------------------------------- |
| 关闭 | 关闭时的回调函数 | ^[功能]`(current: number) => void` |
| 完成 | 完成后的回调函数 | ^[功能]`() => void`                |
| 改变 | 步骤改变时的回调 | ^[功能]`(current: number) => void` |

## TourStep API

### TourStep 属性

| 物业           | 描述                                                                                                                           | 类型                                                                                                                                                                        | 默认      |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------- |
| 目标           | 获取引导卡指向的元素。空使其显示在屏幕中央。从 ^(2.5.2) 开始支持字符串和函数类型。字符串类型是document.querySelector的选择器。 | `HTMLElement` \| `string` \| ^[功能]`() => HTMLElement`                                                                                                                     | —         |
| 显示箭头       | 是否显示箭头                                                                                                                   | `boolean`                                                                                                                                                                   | —         |
| 标题           | 标题                                                                                                                           | `string`                                                                                                                                                                    | —         |
| 描述           | 描述                                                                                                                           | `string`                                                                                                                                                                    | —         |
| 安置           | 引导卡相对于目标元素的位置                                                                                                     | ^[枚举]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | `bottom`  |
| 内容风格       | 内容的自定义样式                                                                                                               | `CSSProperties`                                                                                                                                                             | —         |
| 面膜           | 是否启用遮罩、更改遮罩样式和填充颜色绕过自定义道具                                                                             | `boolean` \| ^[对象]`{ style?: CSSProperties; color?: string; }`                                                                                                            | —         |
| 类型           | 类型，影响背景颜色和文本颜色                                                                                                   | `default` \| `primary`                                                                                                                                                      | `default` |
| 下一个按钮道具 | 下一步按钮的属性                                                                                                               | ^[对象]`{ children: VueNode \| string; onClick: Function }`                                                                                                                 | —         |
| 上一个按钮道具 | 上一个按钮的属性                                                                                                               | ^[对象]`{ children: VueNode \| string; onClick: Function }`                                                                                                                 | —         |
| 滚动到视图选项 | 支持传递自定义scrollIntoView选项，默认遵循游                                                                                   | `scrollIntoViewOptions`属性`boolean` \| `ScrollIntoViewOptions`                                                                                                             | —         |
| 显示关闭       | 是否显示关闭按钮                                                                                                               | `boolean`                                                                                                                                                                   | —         |
| 关闭图标       | 自定义关闭图标，默认为关闭                                                                                                     | `string` \| `Component`                                                                                                                                                     | —         |

### TourStep 插槽

| 名称 | 描述           |
| ---- | -------------- |
| 默认 | 自定义描述     |
| 标题 | 自定义标题内容 |

### TourStep 活动

| 名称 | 描述             | 论点                |
| ---- | ---------------- | ------------------- |
| 关闭 | 关闭时的回调函数 | ^[功能]`() => void` |
