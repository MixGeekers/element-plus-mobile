---
title: 表
lang: zh-CN
---

# 表

显示具有相似格式的多个数据。您可以对表格中的数据进行排序、过滤、比较。

## 基本表

基本表仅用于数据显示。

:::demo 通过对象数组设置 demo 的属性 `data` 后，可以使用 `el-table-column` 中的 `prop`（对应 `data` 数组中对象的一个键）向表列插入数据，并设置属性 `label` 来定义列名称。您还可以使用属性 `width` 来定义列的宽度。

table/basic

:::

## 条纹表

条纹表可以更容易地区分不同的行。

:::demo 属性 `stripe` 接受 `Boolean`。如果是 `true`，表将被条带化。

table/striped

:::

## 带边框的表格

:::demo 默认情况下，表格没有垂直边框。如果需要，可以将属性`border`设置为`true`。

table/with-border

:::

## 状态表

您可以突出显示表格内容以区分“成功、信息、警告、危险”和其他状态。

:::demo 在 `el-table` 中使用 `row-class-name` 将自定义类添加到特定行。然后您可以使用自定义类来设计它。

table/with-status

:::

## 带有显示溢出工具提示的表格

当内容太长时，会分成多行，可以使用 `show-overflow-tooltip` 将其保持在一行。

:::demo 属性 `show-overflow-tooltip`，接受 `Boolean` 值。当设置 `true` 时，当鼠标悬停在单元格上时，额外的内容将显示在工具提示中。

table/show-overflow-tooltip

:::

## 具有固定标题的表

当行太多时，可以使用固定标题。

:::demo 通过设置`el-table`的属性`height`，可以固定表头，无需任何其他代码。

table/fixed-header

:::

## 具有固定列的表

当列太多时，可以修复其中的一些列。

:::demo 属性 `fixed` 用于 `el-table-column`，它接受 `Boolean`。如果是 `true`，该列将固定在左侧。它还接受两个字符串文字：“left”和“right”，两者都表示该列将固定在相应的方向。

table/fixed-column

:::

## 具有固定列和标题的表

当您有大量数据要放入表中时，您可以同时修复标题和列。

:::demo 结合上面两个例子同时修复列和标题。

table/fixed-column-and-header

:::

## 具有固定标题（和列）的流体高度表

当数据动态更改时，您可能希望表格具有最大高度而不是固定高度，并在需要时显示滚动条。

:::demo 通过设置`el-table`的属性`max-height`，可以修复表头。仅当行的高度超过最大高度值时，表主体才会滚动。

table/fixed-header-with-fluid-header

:::

## 分组表头

当数据结构比较复杂时，可以使用组头来显示数据层次结构。

:::demo 只需要在el-table-column中放置el-table-column，就可以实现组头。

table/grouping-header

:::

## 具有固定组标题的表

支持固定组头

:::demo 组头的属性`fixed`由最外层的`el-table-column`决定

table/fixed-column-and-group-header

:::

## 单选

支持单行选择。

:::demo 表支持单行选择。您可以通过添加 `highlight-current-row` 属性来激活它。当行选择发生变化时，会触发一个名为 `current-change` 的事件，其参数是此变化前后的行：`currentRow` 和 `oldCurrentRow`。如果需要显示行索引，可以添加一个新的`el-table-column`，并将其`type`属性赋给`index`，你会看到索引从1开始。

table/single-select

:::

## 多选

您还可以选择多行。

^(2.8.3)之后，`toggleRowSelection`支持第三个参数`ignoreSelectable`来决定是否忽略可选属性。

:::demo 激活多重选择很简单：只需添加一个 `el-table-column`，并将其 `type` 设置为 `selection`。

table/multi-select

:::

## 排序

对数据进行排序以快速查找或比较数据。

:::demo 在某一列中设置属性`sortable`，以根据该列对数据进行排序。它接受 `Boolean`，默认值为 `false`。设置表属性 `default-sort` 以确定默认排序列和顺序。要应用您自己的排序规则，请使用 `sort-method` 或 `sort-by`。如果需要后端远程排序，请将`sortable`设置为`custom`，并监听Table上的`sort-change`事件。在事件处理程序中，您可以访问排序列和排序顺序，以便可以从 API 获取排序后的表数据。在此示例中，我们使用另一个名为 `formatter` 的属性来格式化某些列的值。它接受一个具有两个参数的函数：`row` 和 `column`。您可以根据自己的需要来处理。

table/sort

:::

## 过滤器

过滤表以查找所需的数据。

:::demo 在 `el-table-column` 中设置属性 `filters` 和 `filter-method` 使该列可过滤。 `filters`是一个数组，`filter-method`是一个决定显示哪些行的函数。它具有三个参数：`value`、`row` 和`column`。

table/filter

:::

## 自定义列模板

自定义表格列，以便它可以与其他组件集成。

:::demo 您可以通过[slot](https://v3.vuejs.org/guide/component-slots.html)访问以下数据：行、列、$index和store（表的状态管理）。

table/custom-column

:::

## 带有自定义标题的表格

自定义表头，使其更加自定义。

:::demo 您可以通过标题[插槽](https://v3.vuejs.org/guide/component-slots.html) 自定义标题的外观。

table/custom-header

:::

## 可扩展行

当行内容过长，不想显示水平滚动条时，可以使用可展开行功能。

在^(2.9.7)之后，添加了`preserve-expanded-content`来控制折叠时是否保留DOM中展开的行内容。

:::demo 通过添加 type="expand" 和槽来激活可扩展行。 el-table-column 的模板将呈现为展开行的内容，并且您可以访问与在自定义列模板中使用 `slot` 时相同的属性。

table/expandable-row

:::

## 树数据和惰性模式

:::demo 您可以显示树形结构数据。当行包含 `children` 字段时，它被视为嵌套数据。为了渲染嵌套数据，需要 `row-key` 属性。此外，子行数据可以异步加载。将 Table 的 `lazy` 属性设置为 true 并设置函数 `load`。在行中指定 `hasChildren` 属性以确定哪一行包含子项。 `children` 和 `hasChildren` 都可以通过 `tree-props` 进行配置。

table/tree-and-lazy

:::

## 可选树 ^(2.8.0)

:::demo 当`treeProps.checkStrictly`为true时，父子节点的选择状态不再关联，即当父节点被选择时，其子节点将不会被选择；当 `treeProps.checkStrictly` 为 false 时，父子节点的选择状态将与子节点的选择状态关联，即当父节点被选择时，其所有子节点都会被选择。

table/check-strictly

:::

## 摘要行

对于数字表格，您可以在表页脚添加额外的行来显示每列的总和。

:::demo 您可以通过将 `show-summary` 设置为 `true` 来添加汇总行。默认情况下，对于汇总行，第一列不汇总任何内容，但始终显示“Sum”（您可以使用 `sum-text` 配置显示的文本），而其他列则对该列中的每个数字进行汇总并显示它们。您当然可以定义自己的求和行为。为此，向 `summary-method` 传递一个方法，该方法返回一个数组，返回数组的每个元素将显示在汇总行的列中，它可以是 VNode 或字符串。本例的第二个表是详细的演示。

table/summary

:::

## 行跨度和列跨度

配置 rowspan 和 colspan 允许您合并单元格

:::demo 使用 `span-method` 属性配置 rowspan 和 colspan。它接受一个方法，并向该方法传递一个对象，包括当前行 `row`、当前列 `column`、当前行索引 `rowIndex` 和当前列索引 `columnIndex`。该方法应返回两个数字的数组，第一个数字是 `rowspan`，第二个数字是 `colspan`。它还可以返回带有 `rowspan` 和 `colspan` 属性的对象。

table/rowspan-and-colspan

:::

## 自定义索引

您可以自定义 `type=index` 列中的行索引。

:::demo 要自定义行索引，请将 `el-table-column` 上的 `index` 属性与 `type=index` 一起使用。如果它被分配给一个数字，则所有索引都将具有该数字的偏移量。它还接受以每个索引（从`0`开始）作为参数的方法，返回值将显示为索引。

table/custom-index

:::

## 表格布局

[table-layout](https://developer.mozilla.org/en-US/docs/Web/CSS/table-layout) 属性设置用于布局表格单元格、行和列的算法。

:::demo

table/table-layout

:::

## 工具提示格式化程序 ^(2.9.4)

您可以使用 `tooltip-formatter` 自定义工具提示内容。

:::demo

table/tooltip-formatter

:::

## 表 API

### 表属性

| 名称                        | 描述                                                                                                                                                                                           | 类型                                                                                                                                                               | 默认                                                                                                                  |
| --------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------- | --- |
| 数据                        | 表格数据                                                                                                                                                                                       | ^[数组]`any[]`                                                                                                                                                     | []                                                                                                                    |
| 高度                        | 桌子的高度。默认情况下，其高度为 `auto`。如果它的值为数字，则高度以像素为单位；如果它的值为字符串，则该值将被分配给元素的style.height，高度受外部样式影响                                      | ^[字符串] / ^[数字]                                                                                                                                                | —                                                                                                                     |
| 最大高度                    | 表格的最大高度。合法值为数字或以 px 为单位的高度                                                                                                                                               | ^[字符串] / ^[数字]                                                                                                                                                | —                                                                                                                     |
| 条纹                        | 表格是否带状                                                                                                                                                                                   | ^[布尔值]                                                                                                                                                          | 假                                                                                                                    |
| 边框                        | 表格是否有垂直边框                                                                                                                                                                             | ^[布尔值]                                                                                                                                                          | 假                                                                                                                    |
| 尺寸                        | 桌子尺寸                                                                                                                                                                                       | ^[枚举]`'' \| 'large' \| 'default' \| 'small'`                                                                                                                     | —                                                                                                                     |
| 适合                        | 列宽是否自动适合其容器                                                                                                                                                                         | ^[布尔值]                                                                                                                                                          | 真实                                                                                                                  |
| 显示标题                    | 表头是否可见                                                                                                                                                                                   | ^[布尔值]                                                                                                                                                          | 真实                                                                                                                  |
| 突出显示当前行              | 当前行是否突出显示                                                                                                                                                                             | ^[布尔值]                                                                                                                                                          | 假                                                                                                                    |
| 当前行键                    | 当前行的键，仅一组属性                                                                                                                                                                         | ^[字符串] / ^[数字]                                                                                                                                                | —                                                                                                                     |
| 行类名称                    | 返回一行的自定义类名的函数，或为每行分配类名的字符串                                                                                                                                           | ^[功能]`(data: { row: any, rowIndex: number }) => string` / ^[字符串]                                                                                              | —                                                                                                                     |
| 行式                        | 返回一行的自定义样式的函数，或为每行分配自定义样式的对象                                                                                                                                       | ^[函数]`(data: { row: any, rowIndex: number }) => CSSProperties` / ^[对象]`CSSProperties`                                                                          | —                                                                                                                     |
| 细胞类别名称                | 返回单元格的自定义类名称的函数，或为每个单元格分配类名称的字符串                                                                                                                               | ^[功能]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => string` / ^[字符串]                                              | —                                                                                                                     |
| 细胞式                      | 返回单元格自定义样式的函数，或为每个单元格分配自定义样式的对象                                                                                                                                 | ^[函数]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => CSSProperties` / ^[对象]`CSSProperties`                          | —                                                                                                                     |
| 标题行类名称                | 返回表头中一行的自定义类名称的函数，或为表头中的每一行分配类名称的字符串                                                                                                                       | ^[功能]`(data: { row: any, rowIndex: number }) => string` / ^[字符串]                                                                                              | —                                                                                                                     |
| 标题行样式                  | 返回表头中的行的自定义样式的函数，或为表头中的每一行分配自定义样式的对象                                                                                                                       | ^[函数]`(data: { row: any, rowIndex: number }) => CSSProperties` / ^[对象]`CSSProperties`                                                                          | —                                                                                                                     |
| 标题单元格类名称            | 返回表头中单元格的自定义类名称的函数，或为表头中每个单元格分配类名称的字符串                                                                                                                   | ^[功能]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => string` / ^[字符串]                                              | —                                                                                                                     |
| 标题单元格样式              | 返回表头中单元格的自定义样式的函数，或为表头中每个单元格分配自定义样式的对象                                                                                                                   | ^[函数]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => CSSProperties` / ^[对象]`CSSProperties`                          | —                                                                                                                     |
| 行键                        | 行数据的key，用于优化渲染。如果 `reserve-selection` 打开或显示树数据，则需要。当类型为String时，支持多级访问，例如： `user.info.id`，但不支持 `user.info[0].id`，在这种情况下应使用 `Function` | ^[函数]`(row: any) => string` / ^[字符串]                                                                                                                          | —                                                                                                                     |
| 空文本                      | 数据为空时显示的文本。您可以使用 `#empty`                                                                                                                                                      | 自定义此区域。 ^[字符串]                                                                                                                                           | 没有数据                                                                                                              |
| 默认展开全部                | 是否默认展开所有行，当表有列 type="expand" 或包含树结构数据时有效                                                                                                                              | ^[布尔值]                                                                                                                                                          | 假                                                                                                                    |
| 展开行键                    | 通过该 prop 设置展开的行，prop 的值是展开行的键，在使用该 prop 之前应设置 row-key。                                                                                                            | ^[数组]`Array<string>`                                                                                                                                             | —                                                                                                                     |
| 默认排序                    | 设置默认的排序列和顺序。属性 `prop` 用于设置默认排序列，属性 `order` 用于设置默认排序顺序                                                                                                      | ^[对象]`Sort`                                                                                                                                                      | 如果设置了 `prop`，并且未设置 `order`，则 `order` 默认为升序                                                          |
| 工具提示效果                | 溢出工具提示的`effect`                                                                                                                                                                         | ^[枚举]`'dark' \| 'light'`                                                                                                                                         | 黑暗                                                                                                                  |
| 工具提示选项 ^(2.2.28)      | 溢出工具提示的选项，[请参阅以下工具提示组件](tooltip.html#attributes)                                                                                                                          | ^[对象]`Pick<ElTooltipProps, 'effect' \| 'enterable' \| 'hideAfter' \| 'offset' \| 'placement' \| 'popperClass' \| 'popperOptions' \| 'showAfter' \| 'showArrow'>` | ^[对象]`{ enterable: true, placement: 'top', showArrow: true, hideAfter: 200, popperOptions: { strategy: 'fixed' } }` |
| 附加过滤器面板至 ^(2.8.4)   | 过滤器面板附加到哪个元素                                                                                                                                                                       | ^[字符串]                                                                                                                                                          | —                                                                                                                     |
| 展会摘要                    | 是否显示汇总行                                                                                                                                                                                 | ^[布尔值]                                                                                                                                                          | 假                                                                                                                    |
| 总和文本                    | 摘要行第一列的显示文本                                                                                                                                                                         | ^[字符串]                                                                                                                                                          | 总和                                                                                                                  |
| 总结法                      | 自定义汇总方法                                                                                                                                                                                 | ^[功能]`(data: { columns: any[], data: any[] }) => (VNode \| string)[]`                                                                                            | —                                                                                                                     |
| 跨度方法                    | 返回 rowspan 和 colspan 的方法                                                                                                                                                                 | ^[功能]`(data: { row: any, column: TableColumnCtx<T>, rowIndex: number, columnIndex: number }) => number[] \| { rowspan: number, colspan: number } \| void`        | —                                                                                                                     |
| 选择不确定                  | 当仅选择某些行（但不是全部）时，控制多选表中主复选框的行为。如果为 true，则将选择所有行，否则取消选择                                                                                          | ^[布尔值]                                                                                                                                                          | 真实                                                                                                                  |
| 缩进                        | 树数据的水平缩进                                                                                                                                                                               | ^[数字]                                                                                                                                                            | 16                                                                                                                    | 16  |
| 懒惰                        | 是否延迟加载数据                                                                                                                                                                               | ^[布尔值]                                                                                                                                                          | 假                                                                                                                    |
| 负载                        | 加载子行数据的方法，仅在 `lazy` 为 true 时有效                                                                                                                                                 | ^[功能]`(row: any, treeNode: TreeNode, resolve: (data: any[]) => void) => void`                                                                                    | —                                                                                                                     |
| 树道具                      | 用于渲染嵌套数据的配置                                                                                                                                                                         | ^[对象]`{ hasChildren?: string, children?: string, checkStrictly?: boolean }`                                                                                      | ^[对象]`{ hasChildren: 'hasChildren', children: 'children', checkStrictly: false }`                                   |
| 表格布局                    | 设置用于布局表格单元格、行和列的算法                                                                                                                                                           | ^[枚举]`'fixed' \| 'auto'`                                                                                                                                         | 固定                                                                                                                  |
| 滚动条始终开启              | 始终显示滚动条                                                                                                                                                                                 | ^[布尔值]                                                                                                                                                          | 假                                                                                                                    |
| 显示溢出工具提示            | 当鼠标悬停在单元格上时是否隐藏额外内容并在工具提示中显示它们。它将影响所有表格列，请参阅表格[工具提示选项](#table-attributes)                                                                  | ^[布尔] / [`object`](#table-attributes) ^(2.3.7)                                                                                                                   | —                                                                                                                     |
| 灵活^(2.2.1)                | 确保主轴最小尺寸不跟随内容                                                                                                                                                                     | ^[布尔值]                                                                                                                                                          | 假                                                                                                                    |
| 滚动条选项卡索引 ^(2.8.3)   | 正文滚动条的换行容器^[字符串] / ^[数字]                                                                                                                                                        | —                                                                                                                                                                  |
| 允许拖动最后一列 ^(2.9.2)   | 是否允许拖动最后一列                                                                                                                                                                           | ^[布尔值]                                                                                                                                                          | 真实                                                                                                                  |
| 工具提示格式化程序 ^(2.9.4) | 使用 `show-overflow-tooltip` 时自定义工具提示内容                                                                                                                                              | ^[功能]`(data: { row: any, column: TableColumnCtx<T>, cellValue: any }) => VNode \| string`                                                                        | —                                                                                                                     |
| 保留扩展内容 ^(2.9.7)       | whether to preserve expanded row content in DOM when collapsed                                                                                                                                 | ^[boolean]                                                                                                                                                         | false                                                                                                                 |
| native-scrollbar ^(2.10.5)  | whether to use native scrollbars                                                                                                                                                               | ^[boolean]                                                                                                                                                         | false                                                                                                                 |
| row-expandable ^(2.13.2)    | enable expandable rows, works when the table has a column type="expand"                                                                                                                        | ^[Function]`(row: any, index: number) => boolean`                                                                                                                  | —                                                                                                                     |

### Table Events

| 名称               | Description                                                                                                                                  | Type                                                                                                    |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| select             | triggers when user clicks the checkbox in a row                                                                                              | ^[Function]`<T = any>(selection: T[], row: T) => void`                                                  |
| select-all         | triggers when user clicks the checkbox in table header                                                                                       | ^[Function]`(selection: any[]) => void`                                                                 |
| selection-change   | triggers when selection changes                                                                                                              | ^[Function]`(newSelection: any[]) => void`                                                              |
| cell-mouse-enter   | triggers when hovering into a cell                                                                                                           | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| cell-mouse-leave   | triggers when hovering out of a cell                                                                                                         | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| cell-click         | triggers when clicking a cell                                                                                                                | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| cell-dblclick      | triggers when double clicking a cell                                                                                                         | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| cell-contextmenu   | triggers when user right clicks on a cell                                                                                                    | ^[Function]`(row: any, column: TableColumnCtx<T>, cell: HTMLTableCellElement, event: Event) => void`    |
| row-click          | triggers when clicking a row                                                                                                                 | ^[Function]`(row: any, column: TableColumnCtx<T>, event: Event) => void`                                |
| row-contextmenu    | triggers when user right clicks on a row                                                                                                     | ^[Function]`(row: any, column: TableColumnCtx<T>, event: Event) => void`                                |
| row-dblclick       | triggers when double clicking a row                                                                                                          | ^[Function]`(row: any, column: TableColumnCtx<T>, event: Event) => void`                                |
| header-click       | triggers when clicking a column header                                                                                                       | ^[Function]`(column: TableColumnCtx<T>, event: Event) => void`                                          |
| header-contextmenu | triggers when user right clicks on a column header                                                                                           | ^[Function]`(column: TableColumnCtx<T>, event: Event) => void`                                          |
| sort-change        | triggers when Table's sorting changes                                                                                                        | ^[Function]`(data: {column: TableColumnCtx<T>, prop: string, order: any }) => void`                     |
| filter-change      | triggers when the table's filter changes                                                                                                     | ^[Function]`(newFilters: any) => void`                                                                  |
| current-change     | triggers when current row changes                                                                                                            | ^[Function]`(currentRow: any, oldCurrentRow: any) => void`                                              |
| header-dragend     | triggers after changing a column's width by dragging the column header's border                                                              | ^[Function]`(newWidth: number, oldWidth: number, column: TableColumnCtx<T>, event: MouseEvent) => void` |
| expand-change      | triggers when user expands or collapses a row (for expandable table, second param is expandedRows; for tree Table, second param is expanded) | ^[Function]`(row: any, expandedRows: any[]) => void & (row: any, expanded: boolean) => void`            |
| scroll ^(2.9.0)    | Invoked after scrolled                                                                                                                       | ^[Function]`({ scrollLeft: number, scrollTop: number }) => void`                                        |

### Table Slots

| 名称   | Description                                                                                                                                                                                   | Subtags      |
| ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------ |
| 默认   | customize default content                                                                                                                                                                     | Table-column |
| append | Contents to be inserted after the last row. You may need this slot if you want to implement infinite scroll for the table. This slot will be displayed above the summary row if there is one. | —            |
| empty  | you can customize content when data is empty.                                                                                                                                                 | —            |

### Table Exposes

| Method                     | Description                                                                                                                                                       | 类型                                                                         |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- |
| clearSelection             | used in multiple selection Table, clear user selection                                                                                                            | ^[Function]`() => void`                                                      |
| getSelectionRows           | returns the currently selected rows                                                                                                                               | ^[Function]`() => any[]`                                                     |
| toggleRowSelection         | used in multiple selection Table, toggle if a certain row is selected. With the second parameter, you can directly set if this row is selected                    | ^[Function]`(row: any, selected?: boolean, ignoreSelectable = true) => void` |
| toggleAllSelection         | used in multiple selection Table, toggle select all and deselect all                                                                                              | ^[Function]`() => void`                                                      |
| toggleRowExpansion         | used in expandable Table or tree Table, toggle if a certain row is expanded. With the second parameter, you can directly set if this row is expanded or collapsed | ^[Function]`(row: any, expanded?: boolean) => void`                          |
| setCurrentRow              | used in single selection Table, set a certain row selected. If called without any parameter, it will clear selection                                              | ^[Function]`(row: any) => void`                                              |
| clearSort                  | clear sorting, restore data to the original order                                                                                                                 | ^[Function]`() => void`                                                      |
| clearFilter                | clear filters of the columns whose `columnKey` are passed in. If no params, clear all filters                                                                     | ^[Function]`(columnKeys?: string[]) => void`                                 |
| doLayout                   | refresh the layout of Table. When the visibility of Table changes, you may need to call this method to get a correct layout                                       | ^[Function]`() => void`                                                      |
| sort                       | sort Table manually. Property `prop` is used to set sort column, property `order` is used to set sort order                                                       | ^[Function]`(prop: string, order: string) => void`                           |
| scrollTo                   | scrolls to a particular set of coordinates                                                                                                                        | ^[Function]`(options: number \| ScrollToOptions, yCoord?: number) => void`   |
| setScrollTop               | set vertical scroll position                                                                                                                                      | ^[Function]`(top?: number) => void`                                          |
| setScrollLeft              | set horizontal scroll position                                                                                                                                    | ^[Function]`(left?: number) => void`                                         |
| columns ^(2.7.6)           | Get table columns context.                                                                                                                                        | ^[array]`TableColumnCtx<T>[]`                                                |
| updateKeyChildren ^(2.8.4) | used in lazy Table, must set `rowKey`, update key children                                                                                                        | ^[Function]`(key: string, data: T[]) => void`                                |

## Table-column API

### Table-column Attributes

| 名称                       | Description                                                                                                                                                                                                        | 类型                                                                                                                                                                        | Default                           |
| -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------- |
| 类型                       | type of the column. If set to `selection`, the column will display checkbox. If set to `index`, the column will display index of the row (staring from 1). If set to `expand`, the column will display expand icon | ^[enum]`'default' \| 'selection' \| 'index' \| 'expand'`                                                                                                                    | default                           |
| index                      | customize indices for each row, works on columns with `type=index`                                                                                                                                                 | ^[number] / ^[Function]`(index: number) => number`                                                                                                                          | —                                 |
| 标签                       | column label                                                                                                                                                                                                       | ^[字符串]                                                                                                                                                                   | —                                 |
| column-key                 | column's key. If you need to use the filter-change event, you need this attribute to identify which column is being filtered                                                                                       | ^[字符串]                                                                                                                                                                   | —                                 |
| prop                       | field name. You can also use its alias: `property`                                                                                                                                                                 | ^[字符串]                                                                                                                                                                   | —                                 |
| 宽度                       | column width                                                                                                                                                                                                       | ^[字符串] / ^[数字]                                                                                                                                                         | ''                                |
| min-width                  | column minimum width. Columns with `width` has a fixed width, while columns with `min-width` has a width that is distributed in proportion                                                                         | ^[字符串] / ^[数字]                                                                                                                                                         | ''                                |
| fixed                      | whether column is fixed at left / right. Will be fixed at left if `true`                                                                                                                                           | ^[enum]`'left' \| 'right'` / ^[boolean]                                                                                                                                     | false                             |
| render-header              | render function for table header of this column                                                                                                                                                                    | ^[Function]`(data: { column: TableColumnCtx<T>, $index: number }) => void`                                                                                                  | —                                 |
| sortable                   | whether column can be sorted. Remote sorting can be done by setting this attribute to 'custom' and listening to the `sort-change` event of Table                                                                   | ^[boolean] / ^[string]                                                                                                                                                      | false                             |
| sort-method                | sorting method, works when `sortable` is `true`. Should return a number, just like Array.sort                                                                                                                      | ^[Function]`<T = any>(a: T, b: T) => number`                                                                                                                                | —                                 |
| sort-by                    | specify which property to sort by, works when `sortable` is `true` and `sort-method` is `undefined`. If set to an Array, the column will sequentially sort by the next property if the previous one is equal       | ^[Function]`(row: any, index: number) => string` / ^[string] / ^[array]`string[]`                                                                                           | —                                 |
| sort-orders                | the order of the sorting strategies used when sorting the data, works when `sortable` is `true`. Accepts an array, as the user clicks on the header, the column is sorted in order of the elements in the array    | ^[object]`('ascending' \| 'descending' \| null)[]`                                                                                                                          | ['ascending', 'descending', null] |
| resizable                  | whether column width can be resized, works when `border` of `el-table` is `true`                                                                                                                                   | ^[布尔值]                                                                                                                                                                   | true                              |
| formatter                  | function that formats cell content                                                                                                                                                                                 | ^[function]`(row: any, column: TableColumnCtx<T>, cellValue: any, index: number) => VNode \| string`                                                                        | —                                 |
| show-overflow-tooltip      | whether to hide extra content and show them in a tooltip when hovering on the cell                                                                                                                                 | ^[boolean] / [`object`](#table-attributes) ^(2.2.28)                                                                                                                        | undefined                         |
| align                      | alignment                                                                                                                                                                                                          | ^[enum]`'left' \| 'center' \| 'right'`                                                                                                                                      | left                              |
| header-align               | alignment of the table header. If omitted, the value of the above `align` attribute will be applied                                                                                                                | ^[enum]`'left' \| 'center' \| 'right'`                                                                                                                                      | left                              |
| class-name                 | class name of cells in the column                                                                                                                                                                                  | ^[字符串]                                                                                                                                                                   | —                                 |
| label-class-name           | class name of the label of this column                                                                                                                                                                             | ^[字符串]                                                                                                                                                                   | —                                 |
| selectable                 | function that determines if a certain row can be selected, works when `type` is 'selection'                                                                                                                        | ^[Function]`(row: any, index: number) => boolean`                                                                                                                           | —                                 |
| reserve-selection          | whether to reserve selection after data refreshing, works when `type` is 'selection'. Note that `row-key` is required for this to work                                                                             | ^[布尔值]                                                                                                                                                                   | false                             |
| filters                    | an array of data filtering options. For each element in this array, `text` and `value` are required                                                                                                                | ^[array]`Array<{text: string, value: string}>`                                                                                                                              | —                                 |
| filter-placement           | placement for the filter dropdown                                                                                                                                                                                  | ^[enum]`'top' \| 'top-start' \| 'top-end' \| 'bottom' \| 'bottom-start' \| 'bottom-end' \| 'left' \| 'left-start' \| 'left-end' \| 'right' \| 'right-start' \| 'right-end'` | —                                 |
| filter-class-name ^(2.5.0) | className for the filter dropdown                                                                                                                                                                                  | ^[字符串]                                                                                                                                                                   | —                                 |
| filter-multiple            | whether data filtering supports multiple options                                                                                                                                                                   | ^[布尔值]                                                                                                                                                                   | true                              |
| filter-method              | data filtering method. If `filter-multiple` is on, this method will be called multiple times for each row, and a row will display if one of the calls returns `true`                                               | ^[function]`(value: any, row: any, column: TableColumnCtx<T>) => void`                                                                                                      | —                                 |
| filtered-value             | filter value for selected data, might be useful when table header is rendered with `render-header`                                                                                                                 | ^[array]`string[]`                                                                                                                                                          | —                                 |
| tooltip-formatter ^(2.9.4) | customize tooltip content when using `show-overflow-tooltip`                                                                                                                                                       | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, cellValue: any }) => VNode \| string`                                                                             | —                                 |

### Table-column Slots

| 名称                 | Description                                                                                      | 类型                                                               |
| -------------------- | ------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ |
| default              | Custom content for table columns                                                                 | ^[object]`{ row: any, column: TableColumnCtx<T>, $index: number }` |
| header               | Custom content for table header                                                                  | ^[object]`{ column: TableColumnCtx<T>, $index: number }`           |
| filter-icon ^(2.7.8) | Custom content for filter icon                                                                   | ^[object]`{ filterOpened: boolean }`                               |
| expand ^(2.10.0)     | Custom content for expand columns. The `expandable` property is supported starting from v2.13.2. | ^[object]`{ expanded: boolean, expandable: boolean }`              |

## 类型声明

<details>
  <summary>Show declarations</summary>

```ts
interface Sort {
  prop: string
  order: 'ascending' | 'descending'
  init?: any
  silent?: any
}

interface TreeNode {
  expanded?: boolean
  loading?: boolean
  noLazyChildren?: boolean
  indent?: number
  level?: number
  display?: boolean
}

type DefaultRow = Record<PropertyKey, any>

type TableColumnCtx<T extends DefaultRow = DefaultRow> = {
  id: string
  realWidth: number | null
  type: string
  label: string
  className: string
  labelClassName: string
  property: string
  prop: string
  width?: string | number
  minWidth: string | number
  renderHeader: (data: CI<T>) => VNode
  sortable: boolean | string
  sortMethod: (a: T, b: T) => number
  sortBy: string | ((row: T, index: number, array?: T[]) => string) | string[]
  resizable: boolean
  columnKey: string
  rawColumnKey: string
  align: string
  headerAlign: string
  showOverflowTooltip?: boolean | TableOverflowTooltipOptions
  tooltipFormatter?: TableOverflowTooltipFormatter<T>
  fixed: boolean | string
  formatter: (
    row: T,
    column: TableColumnCtx<T>,
    cellValue: any,
    index: number
  ) => VNode | string
  selectable: (row: T, index: number) => boolean
  reserveSelection: boolean
  filterMethod: FilterMethods<T>
  filteredValue: string[]
  filters: Filters
  filterPlacement: string
  filterMultiple: boolean
  filterClassName: string
  index: number | ((index: number) => number)
  sortOrders: (TableSortOrder | null)[]
  renderCell: (data: any) => VNode | VNode[]
  colSpan: number
  rowSpan: number
  children?: TableColumnCtx<T>[]
  level: number
  filterable: boolean | FilterMethods<T> | Filters
  order: TableSortOrder | null
  isColumnGroup: boolean
  isSubColumn: boolean
  columns: TableColumnCtx<T>[]
  getColumnIndex: () => number
  no: number
  filterOpened?: boolean
  renderFilterIcon?: (scope: any) => VNode
  renderExpand?: (scope: any) => VNode
}
```

</details>

## 常见问题解答

#### How to use image preview in the table?

```vue{4}
<template>
  <el-table-column width="180">
    <template #default="scope">
      <el-image preview-teleported :preview-src-list="srcList" />
    </template>
  </el-table-column>
</template>
```

#### Why column is not rendered when use DOM templates?

Typical issue: [#5046](https://github.com/element-plus/element-plus/issues/5046) [#5862](https://github.com/element-plus/element-plus/issues/5862) [#6919](https://github.com/element-plus/element-plus/issues/6919)

This is because the HTML spec only allows a few specific elements to omit closing tags, the most common being `<input>` and `<img>`. For all other elements, if you omit the closing tag, the native HTML parser will think you never terminated the opening tag

For more details please refer to [vue docs](https://vuejs.org/guide/essentials/component-basics.html#self-closing-tags)
