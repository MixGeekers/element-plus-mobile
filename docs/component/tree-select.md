---
title: 树选择
lang: zh-CN
---

# 树选择

下拉菜单的树选择器，
它结合了组件 `el-tree` 和 `el-select` 的功能。

## 基本用法

树结构的选择器。

:::demo

tree-select/basic

:::

## 选择任意级别

当使用`check-strictly=true`属性时，可以检查任何节点，
否则仅支持叶节点。

:::tip

使用 `show-checkbox` 时，由于 `check-on-click-node` 默认为 false，
只能通过勾选来选择，可以设置为true，
然后单击要选择的节点。

:::

:::demo

tree-select/check-strictly

:::

:::warning

当使用show-checkbox时，由于`check-on-click-leaf`默认为true，
可以通过单击节点来检查最后一个树的子节点。

:::

## 多项选择

使用单击或复选框进行多项选择。

:::demo

tree-select/multiple

:::

## 禁用选择

使用禁用字段禁用选项。

:::demo

tree-select/disabled

:::

## 可过滤

使用关键字过滤或自定义过滤方法。
`filterMethod`可以自定义数据的过滤方法，
`filterNodeMethod`可以自定义数据节点的过滤方法。

:::demo

tree-select/filterable

:::

## 自定义内容

自定义树节点的内容。

:::demo

tree-select/slots

:::

## 延迟加载

树节点的延迟加载，适合大数据列表。

:::demo

tree-select/lazy

:::

## 使用节点键属性

默认情况下，`modelValue` 正在寻找 `value` 密钥。
对于不同的数据结构，必须提供`node-key`才能正常工作。

:::tip

1. `node-key` 在整棵树中应该是唯一的。
2. `value-key`与`node-key`具有相同的目标。
3. 与选择组件相反，树选择不能检索对象值。

:::

:::demo

tree-select/node-key

:::

## API

### 属性

由于该组件结合了组件 `el-tree` 和 `el-select` 的功能，
原来的属性没有改变，所以这里不再重复，
请前往原始组件查看文档。

| 属性                                  | 暴露                               | 活动                              | 老虎机                           |
| ------------------------------------- | ---------------------------------- | --------------------------------- | -------------------------------- |
| [树](./tree.md#attributes)            | [树](./tree.md#exposes)            | [树](./tree.md#events)            | [树](./tree.md#slots)            |
| [选择](./select.md#select-attributes) | [选择](./select.md#select-exposes) | [选择](./select.md#select-events) | [选择](./select.md#select-slots) |

#### 自身属性

| 名称               | 描述                                                       | 类型                   | 默认 |
| ------------------ | ---------------------------------------------------------- | ---------------------- | ---- |
| 缓存数据 ^(2.2.26) | 惰性节点的缓存数据，结构与data相同，用于获取卸载数据的标签 | ^[数组]`CacheOption[]` | []   |

### 暴露

:::warning

在树和选择组件下公开方法已被**弃用**，并且\*\*将在^(3.0.0)中删除，请在其组件层下使用它们：`tree`和`select`。

:::

| 名称                             | 描述                                                                          | 类型                                                                                                                                                                                        |
| -------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| 树引用 ^(2.11.3)                 | 树组件实例                                                                    | `TreeInstance`                                                                                                                                                                              |
| selectRef ^(2.11.3)              | 选择组件实例                                                                  | `SelectInstance`                                                                                                                                                                            |
| 过滤器 ^（已弃用）               | 过滤所有树节点，过滤后的节点将被隐藏                                          | 接受一个参数，该参数将用作过滤器节点方法的第一个参数                                                                                                                                        |
| updateKeyChildren ^（已弃用）    | 将新数据设置到节点，仅在分配 `node-key` 时有效                                | (key, data) 接受两个参数： 1. 节点的 key 2. 新数据                                                                                                                                          |
| getCheckedNodes ^（已弃用）      | 如果节点可以选择（`show-checkbox`为`true`），则返回当前选择的节点数组         | (leafOnly, includeHalfChecked) 接受两个布尔类型参数： 1. 默认值为`false`。如果参数为`true`，则仅返回当前选中的子节点数组。 2.默认值为`false`。如果参数为`true`，则返回值包含halfchecked节点 |
| setCheckedNodes ^（已弃用）      | 设置要检查的某些节点，仅在分配 `node-key` 时有效                              | 要检查的节点数组                                                                                                                                                                            |
| getCheckedKeys ^（已弃用）       | 如果可以选择节点（`show-checkbox` 为 `true`），则返回当前选定的节点键数组     | (leafOnly) 接受布尔类型参数，默认值为`false`。如果参数为`true`，则仅返回当前选中的子节点数组。                                                                                              |
| setCheckedKeys ^（已弃用）       | 设置要检查的某些节点，仅在分配 `node-key` 时有效                              | (keys, leafOnly) 接受两个参数： 1. 要检查的节点键数组 2. 布尔参数。如果设置为`true`，则仅设置叶子节点的检查状态。默认值为 `false`。                                                         |
| setChecked ^（已弃用）           | 设置节点是否选中，仅在指定 `node-key` 时有效                                  | (key/data, Checked, Deep) 接受三个参数： 1. 要检查的节点的键或数据 2. 指示是否检查的布尔类型参数。 3. 一个布尔类型参数，指示深度与否。                                                      |
| getHalfCheckedNodes ^（已弃用）  | 如果节点可以被选中（`show-checkbox`为`true`），则返回当前选中一半的节点数组   | —                                                                                                                                                                                           |
| getHalfCheckedKeys ^（已弃用）   | 如果可以选择节点（`show-checkbox` 是 `true`），则返回当前选择的一半节点键数组 | —                                                                                                                                                                                           |
| getCurrentKey ^（已弃用）        | 返回突出显示节点的键（如果没有突出显示节点，则为 null）                       | —                                                                                                                                                                                           |
| getCurrentNode ^（已弃用）       | 返回突出显示节点的数据（如果没有突出显示节点，则返回 null）                   | —                                                                                                                                                                                           |
| setCurrentKey ^（已弃用）        | 通过按键设置突出显示的节点，仅在分配 `node-key` 时有效                        | (key, shouldAutoExpandParent=true) 1. 要突出显示的节点的键。如`null`，取消当前高亮节点2.是否自动展开父节点                                                                                  |
| setCurrentNode ^（已弃用）       | 设置突出显示的节点，仅在分配 `node-key` 时有效                                | (node,shouldAutoExpandParent=true) 1.要高亮显示的节点 2.是否自动展开父节点                                                                                                                  |
| getNode ^（已弃用）              | 通过数据或键获取节点                                                          | (data) 节点的数据或键                                                                                                                                                                       |
| 删除 ^（已弃用）                 | 删除节点，仅在分配节点键时有效                                                | (data) 要删除的节点的数据或节点                                                                                                                                                             |
| 追加 ^（已弃用）                 | 将子节点追加到树中的给定节点                                                  | (data,parentNode) 1. 子节点要追加的数据 2. 父节点的数据、键或节点                                                                                                                           |
| insertBefore ^（已弃用）         | 在树中的给定节点之前插入一个节点                                              | (data, refNode) 1. 待插入节点的数据 2. 引用节点的数据、键或节点                                                                                                                             |
| insertAfter ^（已弃用）          | 在树中的给定节点之后插入一个节点                                              | (data, refNode) 1. 待插入节点的数据 2. 引用节点的数据、键或节点                                                                                                                             |
| 焦点 ^（已弃用）                 | 聚焦输入组件                                                                  | ^[功能]`() => void`                                                                                                                                                                         |
| 模糊^（已弃用）                  | 模糊输入组件，并隐藏下拉菜单                                                  | ^[功能]`() => void`                                                                                                                                                                         |
| selectedLabel ^(2.8.5) ^(已弃用) | 获取当前选择的标签                                                            | ^[对象]`ComputedRef<string \| string[]>`                                                                                                                                                    |

## 类型声明

<details>
  <summary>显示声明</summary>

```ts
type CacheOption = {
  value: string | number | boolean | object
  currentLabel: string | number
  isDisabled: boolean
}
```

</details>
