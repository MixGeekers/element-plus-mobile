---
title: 级联
lang: zh-CN
---

# 级联

如果选项具有清晰的层次结构，可以使用Cascader来查看和选择它们。

## 基本用法

子选项统一通过点按展开。

:::demo 将 `options` 属性分配给选项数组会呈现 Cascader。`el-cascader` 会固定使用点按展开，并保持当前激活的菜单列可见。

cascader/basic

:::

## 禁用选项

通过在选项对象中设置 `disabled` 字段来禁用选项。

:::demo 在此示例中，`options` 数组中的第一项具有 `disabled: true` 字段，因此它被禁用。默认情况下，Cascader 检查每个选项对象中的 `disabled` 字段；如果您使用其他字段名称来指示是否禁用某个选项，则可以在 `props.disabled` 属性中分配它（有关详细信息，请参阅下面的 API 表）。当然，字段名`value`、`label`、`children`也可以用同样的方式自定义。

cascader/option-disabling

:::

## 可清除

为`el-cascader`设置`clearable`属性，在选中值后即可出现清除图标

:::demo

cascader/clearable

:::

## 自定义清除图标 ^(2.11.0)

可以通过设置`clear-icon`属性来自定义透明图标

:::demo

cascader/clear-icon

:::

## 只显示最后一层

输入只能显示最后一级，不能显示所有级别。

:::demo `show-all-levels` 属性定义是否显示所有级别。如果是`false`，则只显示最后一级。

cascader/last-level

:::

## 多项选择

在标签中添加 `:props="props"` 并设置数据 `props = { multiple: true }` 以使用多选。

做：

```vue
<template>
  <el-cascader :props="props" />
</template>

<script lang="ts" setup>
const props = { multiple: true }
</script>
```

不要这样做：

```vue
<template>
  <!--  Object literal binging here is invalid syntax for cascader  -->
  <el-cascader :props="{ multiple: true }" />
</template>
```

:::demo 使用多重选择时，默认显示所有选定的标签。您可以设置 `collapse-tags = true` 折叠选定的标签。您可以设置 `max-collapse-tags` 显示最大可见标签数，默认 1。

cascader/multiple-selection

:::

## 选择任意级别的选项

单选时只能检查叶子节点，多选时检查父节点最终会导致检查叶子节点。启用此功能后，可以使父子节点解除链接，并且可以选择任意级别的选项。

:::demo 设置 `props.checkStrictly = true` 使节点的选中状态不影响其父节点和子节点，然后可以选择任意级别的选项。

cascader/any-level

:::

## 动态加载

当检查节点时动态加载其子节点。

:::demo 设置`lazy = true`使用动态加载，并且您必须通过`lazyload`指定如何加载数据源。 `lazyload`有两个参数，第一个参数`node`是当前点击的节点，`resolve`是加载完成的回调，必须调用。为了更准确地显示节点的状态，可以添加`leaf`字段（可通过`props.leaf`修改）来指示是否为叶子节点。否则，将通过是否有子节点来推断。

cascader/dynamic-loading

:::

## 可过滤

使用关键字搜索并选择选项。

:::demo 将 `filterable` 添加到 `el-cascader` 即可启用过滤。 Cascader 将匹配标签或父标签（根据 `show-all-levels`）包含输入关键字的节点。当然，你可以通过`filter-method`自定义搜索逻辑，它接受一个函数，第一个参数是`node`，第二个参数是`keyword`，并且需要返回一个布尔值来指示是否命中。

cascader/filterable

:::

## 自定义选项内容

您可以自定义级联节点的内容。

:::demo 您可以通过`scoped slot`自定义级联节点的内容。您可以在范围内访问`node`和`data`，分别代表当前节点的Node对象和节点数据。

cascader/custom-content

:::

## 自定义建议项^(2.9.5)

您可以通过 `suggestion-item` 插槽自定义过滤器建议项。您将可以访问范围内的 `item`，代表建议项。

:::demo

cascader/custom-suggestion-item

:::

## 级联面板

`CascaderPanel`是`Cascader`的核心组件，具有单选、多选、动态加载等多种功能。

:::demo 就像`el-cascader`一样，您可以通过`options`设置替代选项，并通过`props`启用其他功能，详细信息请参见下面的API表单。

cascader/panel

:::

## 自定义标签 ^(2.10.3)

您可以自定义标签。

:::demo 将自定义标签插入 `el-cascader` 的插槽中。 `collapse-tags`、`collapse-tags-tooltip`、`max-collapse-tags` 将不起作用。

cascader/custom-tag

:::

## 显示选中的策略 ^(2.10.5)

控制选定值在多选模式下的显示方式。

:::demo 在多选模式下，您可以使用 `show-checked-strategy` 来控制所选值的显示方式。默认策略是`child`，它显示所有选定的子节点。 `parent` 策略仅在选择所有子节点时才显示父节点。

cascader/show-checked-strategy

:::

## 点击查看节点 ^(2.10.5)

仅使用 `multiple` 或 `checkStrictly` 属性。

您可以添加 `checkOnClickNode` 以便能够通过前缀图标单击节点。\
使用 `showPrefix` 切换前缀的可见性。
:::tip 添加 `checkOnClickLeaf` 以仅检查叶节点（最后一个子节点），默认启用。
:::

:::demo

cascader/check-on-click-node

:::

## 自定义页眉和页脚 ^(2.10.5)

您可以使用插槽自定义下拉列表的页眉和页脚。

:::demo 使用插槽自定义内容。

cascader/custom-header-footer

:::

## 级联 API

### 级联属性

| 名称                               | 描述                                                                                                | 类型                                                      | 默认     |
| ---------------------------------- | --------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | -------- |
| 模型值 / v 模型                    | 绑定值                                                                                              | ^[字符串] / ^[数字] /^[数组]`string[] \| number[] \| any` | —        |
| 选项                               | 选项数据，`value` 和 `label` 的密钥可以由 `CascaderProps` 自定义。                                  | ^[数组]`CascaderOption[]`                                 | —        |
| [道具](#cascaderprops)             | 配置选项见下面`CascaderProps`表。                                                                   | ^[对象]`CascaderProps`                                    | —        |
| 尺寸                               | 输入大小                                                                                            | ^[枚举]`'large' \| 'default' \| 'small'`                  | —        |
| 占位符                             | 输入的占位符                                                                                        | ^[字符串]                                                 | —        |
| 已禁用                             | Cascader 是否被禁用                                                                                 | ^[布尔值]                                                 | —        |
| 可清除                             | 是否可以清除所选值                                                                                  | ^[布尔值]                                                 | —        |
| 清除图标 ^(2.11.0)                 | 自定义透明图标组件                                                                                  | ^[字符串] / ^[对象]`Component`                            | 圆圈关闭 |
| 显示所有级别                       | 是否显示输入中所选值的所有级别                                                                      | ^[布尔值]                                                 | 真实     |
| 折叠标签                           | 多选模式下是否折叠标签                                                                              | ^[布尔值]                                                 | —        |
| 折叠标签工具提示                   | 是否在折叠标签摘要中显示所有已选标签。要使用此功能，`collapse-tags` 必须为 true                     | ^[布尔值]                                                 | 假       |
| 最大折叠标签工具提示高度 ^(2.10.2) | 折叠标签工具提示的最大高度。                                                                        | ^[字符串] / ^[数字]                                       | —        |
| 分隔符                             | 选项标签分隔符                                                                                      | ^[字符串]                                                 | ' / '    |
| 可过滤                             | 是否可以搜索选项                                                                                    | ^[布尔值]                                                 | —        |
| 过滤方法                           | 自定义搜索逻辑，第一个参数是`node`，第二个参数是`keyword`，需要返回一个布尔值表示是否命中。         | ^[功能]`(node: CascaderNode, keyword: string) => boolean` | —        |
| 去抖                               | 输入过滤器关键字时的去抖延迟（以毫秒为单位） ^[数字]                                                | 300                                                       | 300      |
| 过滤前                             | 过滤前的钩子函数，以要过滤的值作为参数。如果返回`false`或者返回`Promise`然后被拒绝，过滤将被中止    | ^[功能]`(value: string) => boolean`                       | —        |
| 波普尔级                           | Cascader 下拉菜单和标签工具提示的自定义类名                                                         | ^[字符串]                                                 | ''       |
| 波普风格                           | Cascader 下拉菜单和标签工具提示的自定义样式                                                         | ^[字符串] / ^[对象]                                       | —        |
| 标签类型                           | 标签类型                                                                                            | ^[枚举]`'success' \| 'info' \| 'warning' \| 'danger'`     | 信息     |
| 标签效果 ^(2.7.8)                  | 标签效果                                                                                            | ^[枚举]`'light' \| 'dark' \| 'plain'`                     | 光       |
| 验证事件                           | 是否触发表单验证                                                                                    | ^[布尔值]                                                 | 真实     |
| 最大折叠标签 ^(2.3.10)             | 要显示的最大标签数。要使用此功能，`collapse-tags` 必须为 true                                       | ^[数字]                                                   | 1        |
| 空值 ^(2.7.0)                      | 组件的空值，[参见配置提供程序](./config-provider.md#empty-values-configurations)                    | ^[数组]                                                   | —        |
| 清除值 ^(2.7.0)                    | 清除返回值，[参见配置提供程序](./config-provider.md#empty-values-configurations)                    | ^[字符串] / ^[数字] / ^[布尔值] / ^[函数]                 | —        |
| 持久 ^(2.7.8)                      | 当下拉列表处于非活动状态且 `persistent` 为 `false` 时，下拉列表将被销毁                             | ^[布尔值]                                                 | 真实     |
| 显示检查策略 ^(2.10.5)             | 在多选模式下显示选中节点的策略。当您想要整洁时，请使用 `parent`。当每一项都很重要时，请使用 `child` | ^[枚举]`'parent' \| 'child'`                              | 孩子     |

### 级联事件

| 名称          | 描述                      | 类型                                                    |
| ------------- | ------------------------- | ------------------------------------------------------- |
| 改变          | 绑定值改变时触发          | ^[功能]`(value: CascaderValue) => void`                 |
| 扩展-更改     | 展开选项更改时触发        | ^[功能]`(value: CascaderValue) => void`                 |
| 模糊          | Cascader 模糊时触发       | ^[功能]`(event: FocusEvent) => void`                    |
| 焦点          | Cascader 聚焦时触发       | ^[功能]`(event: FocusEvent) => void`                    |
| 清除 ^(2.7.7) | 在可清除的 Select         | 中单击清除图标时触发^[功能]`() => void`                 |
| 可见变化      | 当下拉菜单出现/消失时触发 | ^[功能]`(value: boolean) => void`                       |
| 删除标签      | 多选模式下删除标签时触发  | ^[功能]`(value: CascaderNode['valueByOption']) => void` |

### 级联插槽

| 名称            | 描述                                                     | 类型                                                    |
| --------------- | -------------------------------------------------------- | ------------------------------------------------------- |
| 默认            | Cascader节点的自定义内容，分别是当前Node对象和节点数据。 | ^[对象]`{ node: any, data: any }`                       |
| 空              | 没有匹配选项时的内容。                                   | —                                                       |
| 前缀 ^(2.9.4)   | 内容作为输入前缀                                         | —                                                       |
| 建议项 ^(2.9.5) | 搜索时建议项目的自定义内容                               | ^[对象]`{ item: CascaderNode }`                         |
| 标签 ^(2.10.3)  | 自定义标签样式                                           | ^[对象]`{ data: Tag[], deleteTag: (tag: Tag) => void }` |
| 标头 ^(2.10.5)  | 下拉菜单顶部的内容                                       | —                                                       |
| 页脚 ^(2.10.5)  | 下拉菜单底部的内容                                       | —                                                       |

### 级联暴露

| 名称                   | 描述                                                                        | 类型                                                        |
| ---------------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 获取已检查节点         | 获取当前选中节点的数组，(leafOnly) 是否只返回叶子选中的节点，默认为 `false` | ^[功能]`(leafOnly: boolean) => CascaderNode[] \| undefined` |
| 级联面板参考           | 级联面板参考                                                                | ^[对象]`ComputedRef<any>`                                   |
| 切换波普可见 ^(2.2.31) | 切换 popper 的可见类型                                                      | ^[功能]`(visible?: boolean) => void`                        |
| 内容参考               | 级联内容参考                                                                | ^[对象]`ComputedRef<any>`                                   |
| 当前文本 ^(2.8.4)      | 选定的内容文本                                                              | ^[对象]`ComputedRef<string>`                                |
| 焦点 ^(2.11.8)         | 聚焦输入元素                                                                | ^[功能]`() => void`                                         |
| 模糊 ^(2.11.8)         | 模糊输入元素                                                                | ^[功能]`() => void`                                         |

## CascaderPanel API

### CascaderPanel 属性

| 名称                   | 描述                                                               | 类型                                                   | 默认 |
| ---------------------- | ------------------------------------------------------------------ | ------------------------------------------------------ | ---- |
| 模型值 / v 模型        | 绑定值                                                             | ^[字符串]/^[数字]/^[数组]`string[] \| number[] \| any` | —    |
| 选项                   | 选项数据，`value` 和 `label` 的密钥可以由 `CascaderProps` 自定义。 | ^[数组]`CascaderOption[]`                              | —    |
| [道具](#cascaderprops) | 配置选项见下面`CascaderProps`表。                                  | ^[对象]`CascaderProps`                                 | —    |

### CascaderPanel 事件

| 名称         | 描述                                             | 类型                                                 |
| ------------ | ------------------------------------------------ | ---------------------------------------------------- |
| 改变         | 绑定值改变时触发                                 | ^[功能]`(value: CascaderValue \| undefined) => void` |
| 更新：模型值 | 绑定值改变时触发                                 | ^[功能]`(value: CascaderValue \| undefined) => void` |
| 扩展-更改    | 展开选项更改时触发                               | ^[功能]`(value: CascaderNodePathValue) => void`      |
| 关闭         | close panel事件，提供给Cascader收起panel的判断。 | ^[功能]`() => void`                                  |

### CascaderPanel 插槽

| 名称        | 描述                                                     | 类型                              |
| ----------- | -------------------------------------------------------- | --------------------------------- |
| 默认        | Cascader节点的自定义内容，分别是当前Node对象和节点数据。 | ^[对象]`{ node: any, data: any }` |
| 空 ^(2.8.3) | 没有数据时面板的内容。                                   | —                                 |

### CascaderPanel 暴露

| 名称           | 描述                                                                        | 类型                                                        |
| -------------- | --------------------------------------------------------------------------- | ----------------------------------------------------------- |
| 获取已检查节点 | 获取当前选中节点的数组，(leafOnly) 是否只返回叶子选中的节点，默认为 `false` | ^[功能]`(leafOnly: boolean) => CascaderNode[] \| undefined` |
| 清除已检查节点 | 清除选中的节点                                                              | ^[功能]`() => void`                                         |

## CascaderProps

| 属性                       | 描述                                                                                          | 类型                                                                | 默认   |
| -------------------------- | --------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------ | --- |
| 展开触发                   | 扩展选项触发方式。`el-cascader` 始终使用 `click`；直接使用 `CascaderPanel` 时该选项仍可生效。 | ^[枚举]`'click' \| 'hover'`                                         | 点击   |
| 多个                       | 是否启用多选                                                                                  | ^[布尔值]                                                           | 假     |
| 严格检查                   | 节点的检查状态是否不影响其父节点和子节点                                                      | ^[布尔值]                                                           | 假     |
| 发出路径                   | 当检查的节点发生变化时，是否发出节点路径数组，如果为 false，则仅发出节点的值。                | ^[布尔值]                                                           | 真实   |
| 懒惰                       | 是否动态加载子节点，与`lazyload`属性一起使用                                                  | ^[布尔值]                                                           | 假     |
| 延迟加载                   | 加载子节点数据的方法，仅在 `lazy` 为 true 时有效。 ^(2.11.5)版本之后支持reject参数。          | ^[功能]`(node: Node, resolve: Resolve, reject: () => void) => void` | —      |
| 价值                       | 指定节点对象的哪个键用作节点的值                                                              | ^[字符串]                                                           | 价值   |
| 标签                       | 指定节点对象的哪个键用作节点的标签                                                            | ^[字符串]                                                           | 标签   |
| 儿童                       | 指定节点对象的哪个键用作节点的子节点                                                          | ^[字符串]                                                           | 儿童   |
| 已禁用                     | 指定节点对象的哪个键用作节点的禁用                                                            | ^[字符串]                                                           | 已禁用 |
| 叶                         | 指定节点对象的哪个键用作节点的叶字段                                                          | ^[字符串]                                                           | 叶     |
| 悬停阈值                   | 当 `CascaderPanel` 配置为悬停展开时使用的阈值                                                 | ^[数字]                                                             | 500    | 500 |
| checkOnClickNode ^(2.10.5) | 单击节点时是否选中或取消选中节点                                                              | ^[布尔值]                                                           | 假     |
| checkOnClickLeaf ^(2.10.5) | 单击叶节点（最后一个子节点）时是否选中或取消选中节点。                                        | ^[布尔值]                                                           | 真实   |
| 显示前缀 ^(2.10.5)         | 是否显示单选或复选框前缀                                                                      | ^[布尔值]                                                           | 真实   |

## 类型声明

<details>
  <summary>显示声明</summary>

```ts
type CascaderNodeValue = string | number
type CascaderNodePathValue = CascaderNodeValue[]
type CascaderValue =
  | CascaderNodeValue
  | CascaderNodePathValue
  | (CascaderNodeValue | CascaderNodePathValue)[]

type Resolve = (data: any) => void

type ExpandTrigger = 'click' | 'hover'

type LazyLoad = (node: Node, resolve: Resolve, reject: () => void) => void

type isDisabled = (data: CascaderOption, node: Node) => boolean

type isLeaf = (data: CascaderOption, node: Node) => boolean

interface CascaderOption extends Record<string, unknown> {
  label?: string
  value?: CascaderNodeValue
  children?: CascaderOption[]
  disabled?: boolean
  leaf?: boolean
}

interface CascaderProps {
  expandTrigger?: ExpandTrigger
  multiple?: boolean
  checkStrictly?: boolean
  emitPath?: boolean
  lazy?: boolean
  lazyLoad?: LazyLoad
  value?: string
  label?: string
  children?: string
  disabled?: string | isDisabled
  leaf?: string | isLeaf
  hoverThreshold?: number
}

class Node {
  readonly uid: number
  readonly level: number
  readonly value: CascaderNodeValue
  readonly label: string
  readonly pathNodes: Node[]
  readonly pathValues: CascaderNodePathValue
  readonly pathLabels: string[]

  childrenData: ChildrenData
  children: Node[]
  text: string
  loaded: boolean
  /**
   * Is it checked
   *
   * @default false
   */
  checked: boolean
  /**
   * Used to indicate the intermediate state of unchecked and fully checked child nodes
   *
   * @default false
   */
  indeterminate: boolean
  /**
   * Loading Status
   *
   * @default false
   */
  loading: boolean

  // getter
  isDisabled: boolean
  isLeaf: boolean
  valueByOption: CascaderNodeValue | CascaderNodePathValue

  // method
  appendChild(childData: CascaderOption): Node
  calcText(allLevels: boolean, separator: string): string
  broadcast(): void
  emit(): void
  onParentCheck(checked: boolean): void
  onChildCheck(): void
  setCheckState(checked: boolean): void
  doCheck(checked: boolean): void
}

Node as CascaderNode
```

</details>
