---
title: 虚拟化表 ^(beta)
lang: zh-CN
---

# 虚拟化表 ^(beta)

随着 Web 开发的不断发展，表格组件一直是我们的 Web 应用程序中最受欢迎的组件，尤其是仪表板、数据分析。对于[Table V1](./table.md)，即使只有1000条数据，使用它时也会很烦人，因为性能很差。

借助虚拟化表，您可以在眨眼间呈现大量数据。

:::tip

该组件**仍在测试**，使用风险自负。如果您发现任何错误或问题，请在 [GitHub](https://github.com/element-plus/element-plus/issues) 报告，以便我们修复。还有一些 API 在本文档中没有提及，其中一些没有提及
尚未完全开发，这就是为什么这里没有提及它们。

**尽管**虚拟表很高效，但当数据负载太大时，您的**网络**和**内存大小**可能会成为应用程序的瓶颈。因此请记住，虚拟表永远不是所有问题的最终解决方案，请考虑对数据进行分页、添加过滤器等。

:::

## 基本用法

让我们通过渲染一个包含 10 列和 1000 行的基本示例来演示虚拟化表的性能。

:::demo

table-v2/basic

:::

## 自动调整大小

当您不想手动将 `width` 和 `height` 属性传递给表时，可以使用 AutoResizer 包装表组件。
这将自动为您更新宽度和高度。

调整浏览器的大小以查看其工作原理。

:::tip

确保 `AutoResizer` 的父节点 **具有固定高度**，因为其默认高度值设置为 100%。
或者，您可以通过将 `style` 属性传递给 `AutoResizer` 来定义它。

:::

:::demo

table-v2/auto-resizer

:::

## 自定义单元格渲染器{#customize-cell-renderer}

当然，您可以根据需要渲染表格单元格。以下是如何自定义单元格的简单示例。

:::demo

table-v2/cell-templating

:::

## 包含选择的表

使用自定义的单元格渲染器来允许选择您的表格。

:::demo

table-v2/selection

:::

## 内联编辑

正如我们在上面的选择中演示的那样，您可以使用相同的方法来启用内联编辑。

:::demo

table-v2/inline-editing

:::

## 状态表

您可以突出显示表格内容以区分“成功、信息、警告、危险”和其他状态。

要自定义行的外观，请使用 `row-class-name` 属性。例如，每 10 行使用 `bg-blue-200` 类突出显示，每 5 行使用 `bg-red-100` 类突出显示。

:::demo

table-v2/row-class

:::

## 具有粘性行的表

您可以使某些行粘在表格顶部，这可以通过使用 `fixed-data` 属性轻松实现。

您可以根据滚动事件动态设置粘性行，如本示例所示。

:::demo

table-v2/sticky-rows

:::

## 具有固定列的表

如果您出于某种原因希望将列固定在左侧或右侧，则可以通过向表添加特殊属性来实现此目的。

可以将列的属性`fixed`设置为`true`（代表`FixedDir.LEFT`）或`FixedDir.LEFT`或`FixedDir.RIGHT`

:::demo

table-v2/fixed-columns

:::

## 分组标题

通过自定义标头渲染器，您可以对标头进行分组，如本示例所示。

:::tip

在本例中，我们使用了 Playground 中不支持的 `JSX` 功能。您可以在本地环境或在线 IDE（例如 `codesandbox`）上尝试它们。

建议您在 JSX 中编写表组件，因为它包含 VNode 操作。

:::

:::demo

table-v2/grouping-header

:::

## 过滤器

Virtualized Table 提供自定义标头渲染器，用于创建自定义标头。然后我们可以利用它们来渲染过滤器。

:::demo

table-v2/filter

:::

## 可排序

您可以使用排序状态对表进行排序。

:::demo

table-v2/sort

:::

## 受控排序

您可以根据需要定义多个可排序列。请记住，如果您定义多个可排序列，UI
可能会让您的用户感到困惑，因为不清楚当前正在对哪一列进行排序。

:::demo

table-v2/controlled-sort

:::

## 交叉悬停

处理大型列表时，很容易忘记您正在访问的当前行和列。在这种情况下，使用此功能会非常有帮助。

:::demo

table-v2/cross-hovering

:::

## 科尔斯潘

虚拟化表不使用内置的 `table` 元素，因此 `colspan` 和 `rowspan` 的行为与 [TableV1](./table.md) 略有不同。然而，使用定制的行渲染器，这些功能仍然可以实现。在本节中，我们将演示如何实现这一目标。

:::demo

table-v2/colspan

:::

## 行距

由于我们已经介绍了 [Colspan](#colspan)，因此值得注意的是我们还有行跨度。它与 colspan 有点不同，但想法
基本上是一样的。

:::demo

table-v2/rowspan

:::

## Rowspan 和 Colspan 一起

我们可以将 rowspan 和 colspan 结合在一起来实现您的业务目标！

:::demo

table-v2/spans

:::

## 树数据

虚拟表还可以以树状结构呈现数据。通过单击箭头图标，您可以展开或折叠树节点。

:::demo

table-v2/tree-data

:::

## 动态高度行

虚拟表能够呈现具有动态高度的行。如果您正在处理数据并且不确定内容大小，
此功能非常适合渲染根据内容高度进行调整的行。要启用此功能，请传递 `estimated-row-height` 属性。
估计高度与实际内容越接近，渲染体验越流畅。

:::tip

每行的高度在渲染行期间动态测量。因此，如果您尝试显示大量数据，
用户界面 **可能** 弹跳。

:::

:::demo

table-v2/dynamic-height

:::

## 详细视图

使用动态高度渲染，您还可以在表格中显示详细视图。

:::demo

table-v2/detailed-view

:::

## 自定义页脚

当您想要显示结论消息或信息时，呈现自定义页脚。

:::demo

table-v2/footer

:::

## 自定义空渲染器

渲染自定义的空元素。

:::demo

table-v2/empty

:::

## 叠加

当您想要显示加载指示器或其他内容时，在表格顶部渲染覆盖层。

:::demo

table-v2/overlay

:::

## 手动滚动

使用表 V2 提供的方法以手动/编程方式滚动所需的偏移量/行。

:::tip

`scrollToRow`的第二个参数是滚动策略，默认是`auto`，它计算位置
自行滚动。如果您希望滚动到特定位置，您可以自己定义策略。
可用选项为 `"auto" | "center" | "end" | "start" | "smart"`

`smart` 和 `auto` 之间的区别在于，`auto` 是 `smart` 滚动策略的子集。

:::

:::demo

table-v2/manual-scroll

:::

## TableV2 API

### TableV2 属性

| 名称           | 描述                                                                   | 类型                                                | 默认   |
| -------------- | ---------------------------------------------------------------------- | --------------------------------------------------- | ------ | --- |
| 缓存           | 提前渲染的行数以提高性能                                               | `number`                                            | 2      |
| 估计行高       | 渲染动态高度行的估计行高                                               | `number`                                            | —      |
| 标头类         | 传递给标头包装器的自定义类名                                           | `string` / 函数<[HeaderClassGetter](#typings)>      | —      |
| 标题道具       | 传递给标头组件的自定义 props 名称                                      | `object` / 函数 <[HeaderPropsGetter](#typings)>     | —      |
| 标题单元格属性 | 传递给标题单元组件的自定义道具名称                                     | `object` / 函数 <[HeaderCellPropsGetter](#typings)> | —      |
| 标题高度       | 表头的高度由`height`设置。如果给定一个数组，它会呈现等于其长度的标题行 | `number`/ `number[]`                                | 50     | 50  |
| 页脚高度       | 页脚元素的高度（如果提供）将成为表格高度计算的一部分。                 | `number`                                            | 0      |
| 行级           | 传递给行包装器的自定义类名                                             | `string` / 函数<[RowClassGetter](#typings)>         | —      |
| 行键           | 每行的键，如果没有提供，将是该行的索引                                 | `string` / `Symbol` / `number`                      | 编号   |
| 行道具         | 传递给行组件的自定义道具名称                                           | `object` / 函数<[RowPropsGetter](#typings)>         | —      |
| 行高           | 每行的高度，用于计算表格的总高度                                       | `number`                                            | 50     | 50  |
| 行事件处理程序 | 附加到每行的处理程序集合                                               | `object`\<[RowEventHandlers](#typings)\>            | —      |
| 细胞道具       | 传递给每个单元格的额外属性（标题单元格除外）                           | `object` / 函数<[CellPropsGetter](#typings)>        | —      |
| 专栏           | 列定义的数组。                                                         | [专栏[]](#column-attribute)                         | —      |
| 数据           | 要在表中呈现的数据数组。                                               | [数据[]](#typings)                                  | []     |
| 数据获取器     | 一种自定义从数据源获取数据的方法。                                     | 函数<[DataGetter\<T\>](#typings)>                   | —      |
| 固定数据       | 用于在主要内容上方和标题下方呈现行的数据                               | `object`\<[数据](#typings)\>                        | —      |
| 展开列键       | 列键指示哪一行是可展开的                                               | `string`                                            | —      |
| 扩展行键       | 用于扩展行的键数组，可与 `v-model`                                     | 一起使用[密钥类型[]](#typings)                      | —      |
| 默认扩展行键   | 默认扩展行的键数组，**非反应性**                                       | [密钥类型[]](#typings)                              | —      |
| 类             | 虚拟表的类名将应用于所有三个表（左、右、主）                           | `string` / `array` / `object`                       | —      |
| 固定           | Flag 指示表格列的宽度是固定的还是灵活的。                              | `boolean`                                           | 假     |
| 宽度^（必填）  | 桌子宽度                                                               | `number`                                            | —      |
| 高度^（必填）  | 桌子高度                                                               | `number`                                            | —      |
| 最大高度       | 桌子最大高度                                                           | `number`                                            | —      |
| 缩进大小       | 树表的水平缩进                                                         | `number`                                            | 12     | 12  |
| h 滚动条大小   | 表示表格水平滚动条的大小，用于防止水平和垂直滚动条折叠                 | `number`                                            | 6      |
| v 滚动条大小   | 表示表格垂直滚动条的大小，用于防止水平和垂直滚动条折叠                 | `number`                                            | 6      |
| 滚动条始终开启 | 如果为 true，则滚动条将始终显示，而不是当鼠标放置在表格上方时显示      | `boolean`                                           | 假     |
| 排序依据       | 排序指示器                                                             | `object`\<[排序依据](#typings)\>                    | {}     |
| 排序状态       | 多重排序指示器                                                         | `object`\<[排序状态](#typings)\>                    | 未定义 |

### TableV2 老虎机

| 名称       | 类型                                        |
| ---------- | ------------------------------------------- |
| 细胞       | `object`\<[CellSlotProps](#typings)\>       |
| 标题       | `object`\<[HeaderSlotProps](#typings)\>     |
| 标题单元格 | `object`\<[HeaderCellSlotProps](#typings)\> |
| 行         | `object`\<[RowSlotProps](#typings)\>        |
| 页脚       | —                                           |
| 空         | —                                           |
| 覆盖       | —                                           |

### TableV2 事件

| 名称       | 描述                                                       | 参数                                                         |
| ---------- | ---------------------------------------------------------- | ------------------------------------------------------------ |
| 列排序     | 列排序时调用                                               | `object`\<[ColumnSortParam](#typings)\>                      |
| 扩展行更改 | 当展开的行发生更改时调用                                   | [密钥类型[]](#typings)                                       |
| 已达到目的 | 当到达表末尾时调用。回调包含剩余距离，通常是滚动条的高度。 | ^[功能]`(remainDistance: number) => void`                    |
| 滚动       | 滚动后调用                                                 | `object`\<[滚动参数](#typings)\>                             |
| 行渲染     | 呈现行时调用                                               | `object`\<[RowsRenderedParams](#typings)\>                   |
| 行展开     | 通过单击箭头图标                                           | 展开/折叠树节点时调用`object`\<[RowExpandParams](#typings)\> |

### TableV2 暴露

| 方法       | 描述                           | 参数                                                                               |
| ---------- | ------------------------------ | ---------------------------------------------------------------------------------- |
| 滚动至     | 滚动到给定位置                 | ^[功能]`(param: {scrollLeft?: number, scrollTop?: number}) => void`                |
| 向左滚动   | 滚动到给定的水平位置           | ^[功能]`(scrollLeft: number) => void`                                              |
| 滚动至顶部 | 滚动到给定的垂直位置           | ^[功能]`(scrollTop: number) => void`                                               |
| 滚动到行   | 使用指定的滚动策略滚动到给定行 | ^[功能]`(row: number, strategy?: 'center' \| 'end' \| 'start' \| 'smart') => void` |

:::tip

请注意，这些是 `JavaScript` 对象，因此您**不能对这些属性使用** kebab-case

:::

### 列属性

| 名称             | 描述                                                | 类型                                                                                                                                                                 | 默认 |
| ---------------- | --------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---- |
| 对齐             | 表格单元格内容的对齐方式                            | [对准](https://github.com/element-plus/element-plus/blob/b92b22932758f0ddea98810ae248f6ca62f77e25/packages/components/table-v2/src/constants.ts#L6)                  | 左   |
| 类               | 列的类名                                            | `string`                                                                                                                                                             | —    |
| 关键             | 唯一标识                                            | [密钥类型](#typings)                                                                                                                                                 | —    |
| 数据键           | 数据唯一标识                                        | [密钥类型](#typings)                                                                                                                                                 | —    |
| 固定             | 固定柱方向                                          | `boolean` / [固定目录](https://github.com/element-plus/element-plus/blob/b92b22932758f0ddea98810ae248f6ca62f77e25/packages/components/table-v2/src/constants.ts#L11) | 假   |
| 弹性增长         | CSSProperties flex Growth，仅当这不是固定表时有用   | `number`                                                                                                                                                             | 0    |
| 伸缩收缩         | CSSProperties Flex Shrink，仅当这不是固定表时才有用 | `number`                                                                                                                                                             | 1    |
| 标头类           | 用于自定义标题列类                                  | `string`                                                                                                                                                             | —    |
| 隐藏             | 列是否不可见                                        | `boolean`                                                                                                                                                            | —    |
| 风格             | 列单元格自定义样式，将与网格单元格合并              | ^[对象]`CSSProperties`                                                                                                                                               | —    |
| 可排序           | 指示该列是否可排序                                  | `boolean`                                                                                                                                                            | —    |
| 标题             | 标题单元格中呈现的默认文本                          | `string`                                                                                                                                                             | —    |
| 最大宽度         | 列的最大宽度                                        | `number`                                                                                                                                                             | —    |
| 最小宽度         | 列的最小宽度                                        | `number`                                                                                                                                                             | —    |
| 宽度^（必填）    | 列的宽度                                            | `number`                                                                                                                                                             | —    |
| 细胞渲染器       | 定制Cell渲染器                                      | `VueComponent` / (道具: [CellRenderProps](#typings)) => VNode                                                                                                        | —    |
| 标题单元格渲染器 | 定制化的头部渲染器                                  | `VueComponent` / (道具: [HeaderRenderProps](#typings)) => VNode                                                                                                      | —    |

## 打字{#打字}

<details>
<summary>显示类型声明</summary>

```ts
type HeaderClassGetter = (param: {
  columns: Column<any>[]
  headerIndex: number
}) => string

type HeaderPropsGetter = (param: {
  columns: Column<any>[]
  headerIndex: number
}) => Record<string, any>

type HeaderCellPropsGetter = (param: {
  columns: Column<any>[]
  column: Column<any>
  columnIndex: number
  headerIndex: number
  style: CSSProperties
}) => Record<string, any>

type RowClassGetter = (param: {
  columns: Column<any>[]
  rowData: any
  rowIndex: number
}) => string

type RowPropsGetter = (param: {
  columns: Column<any>[]
  rowData: any
  rowIndex: number
}) => Record<string, any>

type CellPropsGetter = (param: {
  column: Column<any>
  columns: Column<any>[]
  columnIndex: number
  cellData: any
  rowData: any
  rowIndex: number
}) => void

type DataGetterParams<T> = {
  columns: Column<T>[]
  column: Column<T>
  columnIndex: number
} & RowCommonParams

type DataGetter<T> = (params: DataGetterParams<T>) => T

type CellRenderProps<T> = {
  cellData: T
  column: Column<T>
  columns: Column<T>[]
  columnIndex: number
  rowData: any
  rowIndex: number
}

type HeaderRenderProps<T> = {
  column: Column<T>
  columns: Column<T>[]
  columnIndex: number
  headerIndex: number
}

type ScrollParams = {
  xAxisScrollDir: 'forward' | 'backward'
  scrollLeft: number
  yAxisScrollDir: 'forward' | 'backward'
  scrollTop: number
}

type CellSlotProps<T> = {
  column: Column<T>
  columns: Column<T>[]
  columnIndex: number
  depth: number
  style: CSSProperties
  rowData: any
  rowIndex: number
  isScrolling: boolean
  expandIconProps?:
    | {
        rowData: any
        rowIndex: number
        onExpand: (expand: boolean) => void
      }
    | undefined
}

type HeaderSlotProps = {
  cells: VNode[]
  columns: Column<any>[]
  headerIndex: number
}

type HeaderCellSlotProps = {
  class: string
  columns: Column<any>[]
  column: Column<any>
  columnIndex: number
  headerIndex: number
  style: CSSProperties
  headerCellProps?: any
  sortBy: SortBy
  sortState?: SortState | undefined
  onColumnSorted: (e: MouseEvent) => void
}

type RowCommonParams = {
  rowData: any
  rowIndex: number
}

type RowEventHandlerParams = {
  rowKey: KeyType
  event: Event
} & RowCommonParams

type RowEventHandler = (params: RowEventHandlerParams) => void
type RowEventHandlers = {
  onClick?: RowEventHandler
  onContextmenu?: RowEventHandler
  onDblclick?: RowEventHandler
  onMouseenter?: RowEventHandler
  onMouseleave?: RowEventHandler
}

type RowsRenderedParams = {
  rowCacheStart: number
  rowCacheEnd: number
  rowVisibleStart: number
  rowVisibleEnd: number
}

type RowSlotProps = {
  columns: Column<any>[]
  rowData: any
  columnIndex: number
  rowIndex: number
  data: any
  key: number | string
  isScrolling?: boolean
  style: CSSProperties
}

type RowExpandParams = {
  expanded: boolean
  rowKey: KeyType
} & RowCommonParams

type Data = {
  [key: KeyType]: any
  children?: Array<any>
}

type FixedData = Data

type KeyType = string | number | symbol

type ColumnSortParam<T> = { column: Column<T>; key: KeyType; order: SortOrder }

enum SortOrder {
  ASC = 'asc',
  DESC = 'desc',
}

enum Alignment {
  LEFT = 'left',
  CENTER = 'center',
  RIGHT = 'right',
}

type SortBy = { key: KeyType; Order: SortOrder }
type SortState = Record<KeyType, SortOrder>
```

</details>

## 常见问题解答

#### 如何呈现第一列中带有复选框的列表？

由于您可以定义自己的单元格渲染器，因此您可以执行示例中的操作
[自定义单元格渲染器](#customize-cell-renderer)自己渲染了`checkbox`，并维护
你自己陈述一下。

#### 为什么虚拟化表提供的功能比[TableV1](./table.md)少

对于虚拟化表，我们打算提供更少的功能，让我们的用户根据需要实现自己的功能。
集成太多功能会使代码难以维护，而对于大多数用户来说，基本功能就足够了。一些关键
功能尚未开发。我们很乐意听取您的意见。加入[Discord](https://discord.com/invite/gXK9XNzW3X) 敬请关注。
