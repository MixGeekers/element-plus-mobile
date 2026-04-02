---
title: 滚动条
lang: zh-CN
---

# 滚动条

用于替代浏览器原生滚动条。

滚动条会在滚动或拖拽时显示，不再依赖桌面端的 hover 反馈。

## 基本用法

:::demo 为一个固定高度的内容区提供更清晰的滚动反馈。

scrollbar/basic-usage

:::

## 水平滚动

:::demo 当横向内容超出容器时，滚动条会自动出现在底部。

scrollbar/horizontal-scroll

:::

## 最大高度

:::demo 内容较短时保持自然高度，超出后再进入滚动。

scrollbar/max-height

:::

## 手动滚动

:::demo 使用 `setScrollTop` 或 `setScrollLeft` 主动控制滚动位置。

scrollbar/manual-scroll

:::

## 无限滚动 ^(2.10.0)

:::demo 监听 `end-reached`，可用于推荐流、消息流等无限加载场景。

scrollbar/infinite-scroll

:::

## API

### 属性

| 属性名                            | 说明                                       | 类型                                                                | 默认值 |
| --------------------------------- | ------------------------------------------ | ------------------------------------------------------------------- | ------ |
| height                            | 滚动条高度                                 | ^[string] / ^[number]                                               | —      |
| max-height                        | 滚动条最大高度                             | ^[string] / ^[number]                                               | —      |
| native                            | 是否使用原生滚动条样式                     | ^[boolean]                                                          | false  |
| wrap-style                        | 包装容器样式                               | ^[string] / ^[object]`CSSProperties \| CSSProperties[] \| string[]` | —      |
| wrap-class                        | 包装容器类名                               | ^[string]                                                           | —      |
| view-style                        | 视图样式                                   | ^[string] / ^[object]`CSSProperties \| CSSProperties[] \| string[]` | —      |
| view-class                        | 视图类名                                   | ^[string]                                                           | —      |
| noresize                          | 是否忽略容器尺寸变化，用于减少不必要的重算 | ^[boolean]                                                          | false  |
| tag                               | 视图根元素标签                             | ^[string]                                                           | div    |
| always                            | 是否始终显示滚动条                         | ^[boolean]                                                          | false  |
| min-size                          | 滚动条最小尺寸                             | ^[number]                                                           | 20     |
| id ^(2.4.0)                       | 视图 ID                                    | ^[string]                                                           | —      |
| role ^(2.4.0) ^(a11y)             | 视图角色                                   | ^[string]                                                           | —      |
| aria-label ^(2.4.0) ^(a11y)       | 视图 `aria-label`                          | ^[string]                                                           | —      |
| aria-orientation ^(2.4.0) ^(a11y) | 视图 `aria-orientation`                    | ^[enum]`'horizontal' \| 'vertical'`                                 | —      |
| tabindex ^(2.8.3)                 | 包装容器的 `tabindex`                      | ^[number] / ^[string]                                               | —      |
| distance ^(2.10.5)                | 触发到达事件的距离，单位为 px              | ^[number]                                                           | 0      |

### 事件

| 事件名                | 说明                     | 类型                                                                     |
| --------------------- | ------------------------ | ------------------------------------------------------------------------ |
| scroll                | 滚动时触发，返回滚动距离 | ^[Function]`({ scrollLeft: number, scrollTop: number }) => void`         |
| end-reached ^(2.10.0) | 滚动到边缘时触发         | ^[Function]`(direction: 'top' \| 'bottom' \| 'left' \| 'right') => void` |

### 插槽

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

### 暴露方法

| 名称          | 说明               | 类型                                                                       |
| ------------- | ------------------ | -------------------------------------------------------------------------- |
| handleScroll  | 处理滚动事件       | ^[Function]`() => void`                                                    |
| scrollTo      | 滚动到指定坐标     | ^[Function]`(options: ScrollToOptions \| number, yCoord?: number) => void` |
| setScrollTop  | 设置纵向滚动距离   | ^[Function]`(scrollTop: number) => void`                                   |
| setScrollLeft | 设置横向滚动距离   | ^[Function]`(scrollLeft: number) => void`                                  |
| update        | 手动更新滚动条状态 | ^[Function]`() => void`                                                    |
| wrapRef       | 滚动容器根元素引用 | ^[object]`Ref<HTMLDivElement>`                                             |
