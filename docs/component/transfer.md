---
title: 穿梭框
lang: zh-CN
---

# 穿梭框

## 基本用法

::::demo 数据通过 `data` 属性传递到 Transfer。数据需要是一个对象数组，每个对象应具有以下属性：`key` 是数据项的标识，`label` 是显示文本，`disabled` 指示该项是否禁用。当前实现采用标签页切换、整屏列表和底部操作栏的布局，目标列表中的项目会与绑定到 `v-model` 的数组保持同步。如果不希望目标列表初始为空，可以直接用数组初始化 `v-model`。

transfer/basic

::::

## 可过滤

您可以搜索和过滤数据项。

::::demo 将 `filterable` 设置为 `true` 后，当前标签页顶部会显示搜索框。默认情况下，如果数据项的 `label` 包含搜索关键字，则该数据项会包含在搜索结果中。您也可以通过 `filter-method` 自定义过滤逻辑；当关键字变化时，组件会把搜索关键字和当前数据项传给该方法，返回 `true` 的数据项会显示在结果列表中。

transfer/filterable

::::

## 可定制

您可以自定义标签标题、底部操作按钮文案、数据项渲染方式、状态摘要文本以及面板页脚内容。

::::demo 使用 `titles`、`button-texts`、`render-content` 和 `format` 分别自定义标签标题、底部操作按钮文案、数据项渲染函数和状态摘要文本。您也可以使用作用域插槽自定义数据项内容。面板页脚提供 `left-footer` 和 `right-footer` 两个命名插槽。如果希望初始就选中部分项目，可以使用 `left-default-checked` 和 `right-default-checked`。此示例同时演示了 `change` 事件。请注意，此示例无法在 JSFiddle 中运行，因为它不支持 JSX 语法。在实际项目中，只要正确配置相关依赖，`render-content` 就可以正常工作。

transfer/customizable

::::

## 自定义空内容 ^(2.9.0)

当列表为空或没有找到过滤结果时，您可以自定义内容。

::::demo 使用 `left-empty` 和 `right-empty` 插槽自定义每个面板的空内容。

transfer/empty-content

::::

## 属性别名

默认情况下，Transfer 会在数据项中查找 `key`、`label` 和 `disabled`。如果您的数据项使用了不同的字段名，可以通过 `props` 属性定义别名。

::::demo 此示例中的数据项没有 `key` 或 `label`，而是使用 `value` 和 `desc`。因此需要为 `key` 和 `label` 设置别名。

transfer/prop-alias

::::

## 穿梭框 API

### 穿梭框属性

| 名称                  | 描述                                                                                                                                                                       | 类型                                                               | 默认     |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -------- |
| model-value / v-model | 绑定值                                                                                                                                                                     | ^[array]`Array<string \| number>`                                  | []       |
| data                  | 数据源                                                                                                                                                                     | ^[array]`Record<string, any>[]`                                    | []       |
| filterable            | 是否可过滤                                                                                                                                                                 | ^[boolean]                                                         | false    |
| filter-placeholder    | 过滤输入框占位符                                                                                                                                                           | ^[string]                                                          | -        |
| filter-method         | 自定义过滤方法                                                                                                                                                             | ^[Function]`(query: string, item: Record<string, any>) => boolean` | -        |
| target-order          | 目标列表中元素的排序策略。如果设置为 `original`，元素将保持与数据源相同的顺序；如果设置为 `push`，新添加的元素会追加到底部；如果设置为 `unshift`，新添加的元素会插入到顶部 | ^[enum]`'original' \| 'push' \| 'unshift'`                         | original |
| titles                | 自定义标签标题                                                                                                                                                             | ^[array]`[string, string]`                                         | []       |
| button-texts          | 自定义底部操作栏按钮文本                                                                                                                                                   | ^[array]`[string, string]`                                         | []       |
| render-content        | 数据项的自定义渲染函数                                                                                                                                                     | ^[object]`renderContent`                                           | -        |
| format                | 标签页与工具栏中的状态摘要文本                                                                                                                                             | ^[object]`TransferFormat`                                          | {}       |
| [props](#类型声明)    | 数据源的 prop 别名                                                                                                                                                         | ^[object]`TransferPropsAlias`                                      | -        |
| left-default-checked  | 左侧列表初始选中的数据项 key 数组                                                                                                                                          | ^[array]`Array<string \| number>`                                  | []       |
| right-default-checked | 右侧列表初始选中的数据项 key 数组                                                                                                                                          | ^[array]`Array<string \| number>`                                  | []       |
| validate-event        | 是否触发表单校验                                                                                                                                                           | ^[boolean]                                                         | true     |

### 穿梭框事件

| 名称               | 描述                                         | 类型                                                                                                |
| ------------------ | -------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| change             | 右侧列表中的数据项发生变化时触发             | ^[Function]`(value: TransferKey[], direction: TransferDirection, movedKeys: TransferKey[]) => void` |
| left-check-change  | 最终用户更改左侧列表中数据项的选中状态时触发 | ^[Function]`(value: TransferKey[], movedKeys?: TransferKey[]) => void`                              |
| right-check-change | 最终用户更改右侧列表中数据项的选中状态时触发 | ^[Function]`(value: TransferKey[], movedKeys?: TransferKey[]) => void`                              |

### 穿梭框插槽

| 名称                 | 描述                                       | 类型                                    |
| -------------------- | ------------------------------------------ | --------------------------------------- |
| default              | 数据项的自定义内容                         | ^[object]`{ option: TransferDataItem }` |
| left-footer          | 左侧面板页脚内容                           | -                                       |
| right-footer         | 右侧面板页脚内容                           | -                                       |
| left-empty ^(2.9.0)  | 左侧面板为空或没有匹配过滤结果时显示的内容 | -                                       |
| right-empty ^(2.9.0) | 右侧面板为空或没有匹配过滤结果时显示的内容 | -                                       |

### 穿梭框暴露

| 名称       | 描述                     | 类型                                            |
| ---------- | ------------------------ | ----------------------------------------------- |
| clearQuery | 清除指定面板的过滤关键字 | ^[Function]`(which: TransferDirection) => void` |
| leftPanel  | 左侧面板实例             | ^[object]`Ref<TransferPanelInstance>`           |
| rightPanel | 右侧面板实例             | ^[object]`Ref<TransferPanelInstance>`           |

## 穿梭面板 API

### 穿梭面板暴露

| 名称  | 描述       | 类型      |
| ----- | ---------- | --------- |
| query | 过滤关键字 | ^[string] |

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
