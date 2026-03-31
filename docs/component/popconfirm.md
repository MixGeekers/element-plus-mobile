---
title: 弹出确认
lang: zh-CN
---

# 弹出确认

元素单击操作的简单确认对话框。

## 安置

popconfirm 有 9 个展示位置。

:::demo 使用属性`title` 设置点击引用元素时的显示内容。属性 `placement` 确定 popconfirm 的位置。其值为 `[orientation]-[alignment]`，有四个方向 `top`、`left`、`right`、`bottom` 和三个对齐方式 `start`、`end`， `null`，默认对齐方式为空。以`placement="left-end"`为例，popconfirm将显示​​在您悬停的元素的左侧，并且popconfirm的底部与元素的底部对齐。

popconfirm/placement

:::

## 基本用法

Popconfirm 与 Popover 类似。所以对于一些重复的属性，请参考Popover的文档。

:::demo Popconfirm 中只有 `title` 属性可用，`content` 将被忽略。

popconfirm/basic-usage

:::

## 定制

您可以自定义 Popconfirm，例如：

:::demo

popconfirm/customize

:::

## 触发事件

点击按钮触发事件

:::demo

popconfirm/trigger-event

:::

## API

### 属性

| 名称                                | 描述                                                                                | 类型                                                                         | 默认     |
| ----------------------------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | -------- | --- |
| 标题                                | 标题                                                                                | ^[字符串]                                                                    | —        |
| 效果 ^(2.11.2)                      | 工具提示主题，内置主题：`dark` / `light`                                            | ^[枚举]`'dark' \| 'light'` / ^[字符串]                                       | 光       |
| 确认按钮文本                        | 确认按钮文本                                                                        | ^[字符串]                                                                    | —        |
| 取消按钮文本                        | 取消按钮文本                                                                        | ^[字符串]                                                                    | —        |
| 确认按钮类型                        | 确认按钮类型                                                                        | ^[枚举]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text'` | 初级     |
| 取消按钮类型                        | 取消按钮类型                                                                        | ^[枚举]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text'` | 文字     |
| 图标                                | 图标组件                                                                            | ^[字符串] / ^[组件]                                                          | 问题已填 |
| 图标颜色                            | 图标颜色                                                                            | ^[字符串]                                                                    | #f90     |
| 隐藏图标                            | 隐藏图标^[布尔值]                                                                   | 假                                                                           |
| 隐藏后                              | 消失延迟，以毫秒为单位                                                              | ^[数字]                                                                      | 200      | 200 |
| 传送                                | popconfirm是否被传送到身体                                                          | ^[布尔值]                                                                    | 真实     |
| 执着                                | 当 popconfirm 处于非活动状态且 `persistent` 为 `false` 时，popconfirm 将被销毁      | ^[布尔值]                                                                    | 假       |
| 宽度                                | popconfirm 宽度，最小宽度 150px                                                     | ^[字符串] / ^[数字]                                                          | 150      | 150 |
| [工具提示](./tooltip.md#attributes) | 继承工具提示的所有属性，除了：`popper-class`、`popper-style`、`fallback-placements` | —                                                                            | —        |

### 活动

| 名称 | 描述               | 类型                             |
| ---- | ------------------ | -------------------------------- |
| 确认 | 点击确认按钮时触发 | ^[功能]`(e: MouseEvent) => void` |
| 取消 | 单击取消按钮时触发 | ^[功能]`(e: MouseEvent) => void` |

### 老虎机

| 名称          | 描述                         | 类型                                                                           |
| ------------- | ---------------------------- | ------------------------------------------------------------------------------ |
| 参考          | 触发 Popconfirm 的 HTML 元素 | —                                                                              |
| 行动 ^(2.8.1) | Popconfirm 页脚的内容        | ^[对象]`{ confirm: (e: MouseEvent) => void, cancel: (e: MouseEvent) => void }` |

### 暴露

| 名称                | 描述               | 类型                                      |
| ------------------- | ------------------ | ----------------------------------------- |
| popperRef ^(2.10.7) | el-popper 组件实例 | ^[对象]`Ref<PopperInstance \| undefined>` |
| 隐藏 ^(2.10.7)      | 隐藏弹出确认       | ^[功能]`() => void`                       |
