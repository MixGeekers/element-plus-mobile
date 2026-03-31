---
title: <ElBadge value="beta">Tree V2 虚拟树</ElBadge>
lang: zh-CN
---

# <ElBadge value="beta">Tree V2 虚拟树</ElBadge>

树视图对于任何数据量都具有极快的滚动性能

## 基本用法

基本树结构。

:::demo

tree-v2/basic

:::

## 可选

用于节点选择。

:::demo

tree-v2/selectable

:::

:::warning

当使用show-checkbox时，由于`check-on-click-leaf`默认为true，
可以通过单击节点来检查最后一个树的子节点。

:::

## 禁用复选框

节点的复选框可以设置为禁用。

:::demo 在示例中，defaultProps 中声明了 `disabled` 属性，并且部分节点设置为 `disabled: true`。相应的复选框被禁用并且无法单击。

tree-v2/disabled

:::

## 默认展开并默认选中

树节点可以初始展开或检查

:::demo 使用 `default-expanded-keys` 和 `default-checked-keys` 分别设置初始展开和初始检查的节点。

tree-v2/default-state

:::

## 自定义节点内容

树节点的内容可以自定义，因此您可以随意添加图标或按钮

:::demo

tree-v2/custom-node

:::

## 自定义节点类 ^(2.9.0)

树节点的类别可以自定义

:::demo

tree-v2/custom-node-class

:::

## 自定义节点图标 ^(2.10.3)

您可以为不同的节点状态自定义图标。树节点公开 `expanded` 属性和 `isLeaf` 属性，允许您根据节点的状态动态渲染不同的图标：叶节点、展开节点或折叠节点。

:::demo

tree-v2/custom-icon

:::

## 树节点过滤^(2.9.1)

`filter-method` 方法在版本 `2.9.1` 之后只能接受第三个参数。
树节点可以过滤

:::demo 调用Tree实例的`filter`方法来过滤树节点。它的参数是过滤关键字。请注意，要使其正常工作，需要 `filter-method`，其值是过滤方法。

tree-v2/filter

:::

## TreeV2 API

### TreeV2 属性

| 名称                     | 描述                                                                                         | 类型                                                                    | 默认 |
| ------------------------ | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------- | ---- | --- |
| 数据                     | 树数据                                                                                       | ^[数组]`Array<{[key: string]: any}>`                                    | —    |
| 空文本                   | 数据无效时显示的文本                                                                         | ^[字符串]                                                               | —    |
| [道具](#props)           | 配置选项见下表                                                                               | ^[对象]                                                                 | —    |
| 当前突出显示             | 当前节点是否高亮                                                                             | ^[布尔值]                                                               | 假   |
| 单击展开节点             | 单击节点时是否展开或折叠节点，如果为 false，则仅在单击箭头图标时展开或折叠节点。             | ^[布尔值]                                                               | 真实 |
| 单击节点时检查           | 单击节点时是否选中或取消选中节点，如果为 false，则只能通过单击复选框来选中或取消选中该节点。 | ^[布尔值]                                                               | 假   |
| 单击叶检查 ^(2.9.6)      | 单击叶节点（最后一个子节点）时是否选中或取消选中节点。                                       | ^[布尔值]                                                               | 真实 |
| 默认扩展键               | 初始扩展节点的键数组                                                                         | ^[数组]`Array<string \| number>`                                        | —    |
| 显示复选框               | 节点是否可选                                                                                 | ^[布尔值]                                                               | 假   |
| 严格检查                 | 当`show-checkbox`为`true`时，节点的检查状态是否不影响其父节点和子节点                        | ^[布尔值]                                                               | 假   |
| 默认检查键               | 初始检查节点的键数组                                                                         | ^[数组]`Array<string \| number>`                                        | —    |
| 当前节点键               | 初始选择节点的键                                                                             | ^[字符串] / ^[数字]                                                     | —    |
| 过滤方法                 | 当使用filter方法时，该函数将在每个节点上执行。如果返回`false`，树节点将被隐藏。              | ^[功能]`(query: string, data: TreeNodeData, node: TreeNode) => boolean` | —    |
| 缩进                     | 相邻级别节点的水平缩进（以像素为单位） ^[数字]                                               | 16                                                                      | 16   |
| 图标                     | 自定义树节点图标组件                                                                         | ^[字符串] / ^[组件]                                                     | —    |
| 项目大小 ^(2.2.33)       | 自定义树节点高度                                                                             | ^[数字]                                                                 | 26   | 26  |
| 滚动条始终开启 ^(2.10.4) | 始终显示滚动条                                                                               | ^[布尔值]                                                               | 假   |
| 高度                     | 树的高度                                                                                     | ^[数字]                                                                 | 200  | 200 |

### 道具

| 属性        | 描述                                             | 类型                                                                                            | 默认   |
| ----------- | ------------------------------------------------ | ----------------------------------------------------------------------------------------------- | ------ |
| 价值        | 节点的唯一标识键名称，其值在整个树中应该是唯一的 | ^[字符串]                                                                                       | 编号   |
| 标签        | 指定节点对象的哪个键用作节点的标签               | ^[字符串]                                                                                       | 标签   |
| 儿童        | 指定哪个节点对象用作节点的子树                   | ^[字符串]                                                                                       | 儿童   |
| 已禁用      | 如果节点的复选框被禁用，则指定节点对象代表哪个键 | ^[字符串]                                                                                       | 已禁用 |
| 类 ^(2.9.0) | 自定义节点类名                                   | ^[字符串] / ^[功能]`(data: TreeNodeData, node: TreeNode) => string \| {[key: string]: boolean}` | —      |

### TreeV2 暴露

`Tree` 有以下方法，返回当前选定的节点数组。

| 方法                | 描述                                                                               | 参数                                                                 |
| ------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------- |
| 过滤器              | 过滤所有树节点，过滤后的节点将被隐藏                                               | `(query: string)`                                                    |
| 获取已检查节点      | 如果节点可以选择（`show-checkbox`为`true`），则返回当前选择的节点数组              | `(leafOnly: boolean)`                                                |
| 获取已检查密钥      | 如果可以选择节点（`show-checkbox` 为 `true`），则返回当前选定的节点键数组          | `(leafOnly: boolean)`                                                |
| 设置CheckedKeys     | 设置要检查的某些节点                                                               | `(keys: TreeKey[])`                                                  |
| 设置已检查          | 设置节点是否被检查                                                                 | `(key: TreeKey, checked: boolean)`                                   |
| 设置扩展键          | 设置要展开的某些节点                                                               | `(keys: TreeKey[])`                                                  |
| 获取半检查节点      | 如果节点可以被选中（`show-checkbox`为`true`），则返回当前选中一半的节点数组        | —                                                                    |
| 获取HalfCheckedKeys | 如果节点可以被选择（`show-checkbox` 是 `true`），它返回当前选择的一半节点键数组    | —                                                                    |
| 获取当前密钥        | 返回突出显示节点的键（如果没有突出显示节点，则未定义）                             | —                                                                    |
| 获取当前节点        | 返回突出显示节点的数据（如果没有突出显示节点，则未定义）                           | —                                                                    |
| 设置当前键          | 通过 key                                                                           | 设置突出显示的节点`(key: TreeKey)`                                   |
| 获取节点            | 通过键或数据获取节点                                                               | `(data: TreeKey \| TreeNodeData)`                                    |
| 展开节点            | 展开指定节点                                                                       | `(node: TreeNode)`                                                   |
| 折叠节点            | 折叠指定节点                                                                       | `(node: TreeNode)`                                                   |
| 设置数据            | 当数据非常大时，使用反应式数据会导致性能不佳，因此我们提供了一种方法来避免这种情况 | `(data: TreeData)`                                                   |
| 滚动至 ^(2.8.0)     | 滚动到给定位置                                                                     | `(offset: number)`                                                   |
| 滚动到节点 ^(2.8.0) | 使用指定的滚动策略滚动到给定的树键                                                 | `(key: TreeKey, strategy?: auto \| smart \| center \| start \| end)` |

### TreeV2 事件

| 名称              | 描述                       | 参数                                                                                                                                    |
| ----------------- | -------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| 节点单击          | 单击节点时触发             | `(data: TreeNodeData, node: TreeNode, e: MouseEvent)`                                                                                   |
| 节点删除 ^(2.8.3) | 将某物拖放到节点上时触发   | `(data: TreeNodeData, node: TreeNode, e: DragEvent)`                                                                                    |
| 节点上下文菜单    | 当右键单击节点时触发       | `(e: Event, data: TreeNodeData, node: TreeNode)`                                                                                        |
| 检查-更改         | 当节点的选定状态改变时触发 | `(data: TreeNodeData, checked: boolean)`                                                                                                |
| 检查              | 单击节点的复选框后触发     | `(data: TreeNodeData, info: { checkedKeys: TreeKey[],checkedNodes: TreeData, halfCheckedKeys: TreeKey[], halfCheckedNodes: TreeData,})` |
| 当前变化          | 当前节点发生变化时触发     | `(data: TreeNodeData, node: TreeNode)`                                                                                                  |
| 节点展开          | 当前节点打开时触发         | `(data: TreeNodeData, node: TreeNode)`                                                                                                  |
| 节点崩溃          | 当前节点关闭时触发         | `(data: TreeNodeData, node: TreeNode)`                                                                                                  |

### TreeV2 老虎机

| 名称        | 描述                 | 类型                                            |
| ----------- | -------------------- | ----------------------------------------------- |
| 默认        | 树节点的自定义内容   | ^[对象]`{ node: TreeNode, data: TreeNodeData }` |
| 空 ^(2.9.0) | 数据为空时自定义内容 | —                                               |

## 类型声明

<details>
  <summary>显示声明</summary>

```ts
type TreeNodeData = Record<string, any>
type TreeKey = string | number
type TreeData = TreeNodeData[]

interface TreeNode {
  key: TreeKey
  level: number
  parent?: TreeNode
  children?: TreeNode[]
  data: TreeNodeData
  disabled?: boolean
  label?: string
  isLeaf?: boolean
  expanded?: boolean
  isEffectivelyChecked?: boolean
}
```

</details>
