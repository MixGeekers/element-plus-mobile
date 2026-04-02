---
title: 分隔器 ^(测试版)
lang: zh-CN
---

# 分隔器 ^(测试版)

将一块内容区域拆分为多个可调整大小的子区域。

默认使用纵向布局，更适合把页面拆成自上而下的多个内容分区。

## 基础用法

:::demo 默认纵向分隔，适合详情页或多段编辑页。

splitter/basic

:::

## 横向对比布局

:::demo 只有在需要左右对比内容时，才显式使用 `layout="horizontal"`。

splitter/vertical

:::

## 可折叠

:::demo 通过 `collapsible` 快速收起某一段内容。

splitter/collapsible

:::

## 禁用拖拽

:::demo 某个面板不允许调整大小时，可以关闭 `resizable`。

splitter/disableDrag

:::

## 面板尺寸

:::demo 使用 `v-model:size` 获取或控制某个面板的尺寸。

splitter/size

:::

## 延迟更新

:::demo 开启 `lazy` 后，拖拽过程中只显示结果预期，拖拽结束后再统一更新布局。

splitter/lazy

:::

## Splitter API

### Splitter 属性

| 属性名 | 说明         | 类型                                | 默认值   |
| ------ | ------------ | ----------------------------------- | -------- |
| layout | 分隔方向     | ^[enum]`'horizontal' \| 'vertical'` | vertical |
| lazy   | 是否延迟更新 | ^[boolean]                          | false    |

### Splitter 事件

| 事件名      | 说明                                         | 类型                                                                          |
| ----------- | -------------------------------------------- | ----------------------------------------------------------------------------- |
| resizeStart | 开始调整面板大小时触发，`index` 为拖拽条索引 | ^[Function]`(index: number, sizes: number[]) => void`                         |
| resize      | 调整面板大小过程中触发                       | ^[Function]`(index: number, sizes: number[]) => void`                         |
| resizeEnd   | 调整结束后触发                               | ^[Function]`(index: number, sizes: number[]) => void`                         |
| collapse    | 折叠或展开某一侧时触发                       | ^[Function]`(index: number, type: 'start' \| 'end', sizes: number[]) => void` |

## SplitterPanel API

### SplitterPanel 属性

| 属性名              | 说明                       | 类型                  | 默认值 |
| ------------------- | -------------------------- | --------------------- | ------ |
| size / v-model:size | 面板尺寸，支持像素或百分比 | ^[string] / ^[number] | —      |
| min                 | 面板最小尺寸               | ^[string] / ^[number] | —      |
| max                 | 面板最大尺寸               | ^[string] / ^[number] | —      |
| resizable           | 是否允许拖拽调整大小       | ^[boolean]            | true   |
| collapsible         | 是否允许折叠               | ^[boolean]            | false  |

### SplitterPanel 事件

| 事件名      | 说明               | 类型                                |
| ----------- | ------------------ | ----------------------------------- |
| update:size | 面板尺寸更新时触发 | ^[Function]`(size: number) => void` |

### SplitterPanel 插槽

| 插槽名            | 说明               |
| ----------------- | ------------------ |
| default           | 面板默认内容       |
| start-collapsible | 起始侧折叠按钮内容 |
| end-collapsible   | 结束侧折叠按钮内容 |

### SplitterPanel 暴露

| 名称             | 说明                     | 类型                           |
| ---------------- | ------------------------ | ------------------------------ |
| splitterPanelRef | SplitterPanel 根元素引用 | ^[object]`Ref<HTMLDivElement>` |
