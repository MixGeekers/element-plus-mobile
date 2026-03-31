---
title: 转账
lang: zh-CN
---

# 转账

## 基本用法

:::demo 数据通过 `data` 属性传递到 Transfer。数据需要是一个对象数组，每个对象应具有以下属性：`key` 是数据项的标识，`label` 是显示的文本，`disabled` 指示数据项是否被禁用。目标列表内的项目与绑定到 `v-model` 的变量同步，并且该变量的值是目标项目键的数组。因此，如果您不希望目标列表最初为空，您可以使用数组初始化 `v-model`。

transfer/basic

:::

## 可过滤

您可以搜索和过滤数据项。

:::demo 将 `filterable` 属性设置为 `true` 以启用过滤器模式。默认情况下，如果数据项`label`包含搜索关键字，则该数据项将包含在搜索结果中。此外，您还可以使用 `filter-method` 属性实现您自己的过滤器方法。它采用一个方法，并在关键字更改时将搜索关键字和每个数据项传递给它。对于某个数据项，如果该方法返回 true，则该数据项将包含在结果列表中。

transfer/filterable

:::

## 可定制

您可以自定义列表标题、按钮文本、数据项的呈现功能、检查列表页脚中的状态文本和列表页脚内容。

:::demo 使用 `titles`、`button-texts`、`render-content` 和 `format` 分别自定义列表标题、按钮文本、数据项的渲染功能、检查列表标题中的状态文本。另外，您还可以使用作用域槽来自定义数据项。对于列表页脚内容，提供了两个命名槽：`left-footer` 和 `right-footer`。另外，如果您想初步检查某些项目，可以使用 `left-default-checked` 和 `right-default-checked`。最后，此示例演示了 `change` 事件。请注意，此演示无法在 JSFiddle 中运行，因为它不支持 JSX 语法。在实际项目中，如果正确配置了相关依赖，`render-content` 就可以正常工作。

transfer/customizable

:::

## 自定义空内容^(2.9.0)

当列表为空或没有找到过滤结果时，您可以自定义内容。

:::demo 使用 `left-empty` 和 `right-empty` 插槽自定义每个面板的空内容。

transfer/empty-content

:::

## 道具别名

默认情况下，Transfer 在数据项中查找 `key`、`label` 和 `disabled`。如果您的数据项具有不同的键名称，您可以使用 `props` 属性来定义别名。

:::demo 此示例中的数据项没有 `key` 或 `label`，而是具有 `value` 和 `desc`。所以需要为`key`和`label`设置别名。

transfer/prop-alias

:::

## 转账接口

### 传输属性

|名称 |描述 |类型 |默认 |
| ------------------------ | | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ | -------- |
|模型值 / v 模型 |绑定值| ^[数组]`Array<string \| number>` | []|
|数据|数据来源| ^[数组]`Record<string, any>[]` | []|
|可过滤|传输是否可过滤 | ^[布尔值] |假 |
|过滤器占位符 |过滤器输入的占位符 | ^[字符串] | — |
|过滤方法|自定义过滤方法| ^[功能]`(query: string, item: Record<string, any>) => boolean` | — |
|目标顺序|目标列表中元素的排序策略。如果设置为 `original`，元素将保持与数据源相同的顺序。如果设置为`push`，则新添加的元素将被推到底部。如果设置为`unshift`，则新添加的元素将插入到顶部 | ^[枚举]`'original' \| 'push' \| 'unshift'` |原创|
|标题|自定义列表标题 | ^[数组]`[string, string]` | []|
|按钮文本|自定义按钮文本| ^[数组]`[string, string]` | []|
|渲染内容 |数据项的自定义渲染函数| ^[对象]`renderContent` | — |
|格式|用于检查列表标题中状态的文本 | ^[对象]`TransferFormat` | {} |
| [道具](#type-declarations) |数据源的 prop 别名 | ^[对象]`TransferPropsAlias` | — |
|左默认选中 |左侧列表初始检查数据项的键数组 | ^[数组]`Array<string \| number>` | []|
|右默认检查 |右列表初始检查数据项的键数组 | ^[数组]`Array<string \| number>` | []|
|验证事件 |是否触发表单验证 | ^[布尔值] |真实 |

### 转移事件

| 名称         | 描述                                               | 类型                                                                                            |
| ------------ | -------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| 改变         | 右侧列表中数据项发生变化时触发                     | ^[功能]`(value: TransferKey[], direction: TransferDirection, movedKeys: TransferKey[]) => void` |
| 左检查更改   | 当最终用户更改左侧列表中任何数据项的选中状态时触发 | ^[功能]`(value: TransferKey[], movedKeys?: TransferKey[]) => void`                              |
| 右键检查更改 | 当最终用户更改右侧列表中任何数据项的选中状态时触发 | ^[功能]`(value: TransferKey[], movedKeys?: TransferKey[]) => void`                              |

### 传输槽位

| 名称          | 描述                                       | 类型                                  |
| ------------- | ------------------------------------------ | ------------------------------------- |
| 默认          | 数据项的自定义内容。                       | ^[对象]`{ option: TransferDataItem }` |
| 左页脚        | 左侧列表页脚的内容                         | —                                     |
| 右页脚        | 右列表页脚的内容                           | —                                     |
| 左空 ^(2.9.0) | 左侧面板为空或没有数据与过滤器匹配时的内容 | —                                     |
| 右空 ^(2.9.0) | 右面板为空或没有数据与过滤器匹配时的内容   | —                                     |

### 转移暴露

| 名称     | 描述                     | 类型                                        |
| -------- | ------------------------ | ------------------------------------------- |
| 清除查询 | 清除某个面板的过滤关键字 | ^[功能]`(which: TransferDirection) => void` |
| 左面板   | 左面板参考               | ^[对象]`Ref<TransferPanelInstance>`         |
| 右面板   | 右面板参考               | ^[对象]`Ref<TransferPanelInstance>`         |

## 转账面板API

### 传输面板暴露

| 名称 | 描述       | 类型      |
| ---- | ---------- | --------- |
| 查询 | 过滤关键字 | ^[字符串] |

## 类型声明

<details>
  <summary>显示声明</summary>

```ts
import type { h as H, VNode } from 'vue'

type TransferKey = string | number

type TransferDirection = 'left' | 'right'

type TransferDataItem = Record<string, any>

type renderContent<T extends TransferDataItem = TransferDataItem> = (
  h: typeof H,
  option: T
) => VNode | VNode[]

interface TransferFormat {
  noChecked?: string
  hasChecked?: string
}

interface TransferPropsAlias {
  label?: string
  key?: string
  disabled?: string
}
```

</details>
