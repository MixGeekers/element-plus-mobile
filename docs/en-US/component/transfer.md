---
title: Transfer
lang: en-US
---

# Transfer

## Basic usage

::::demo Data is passed to Transfer via the `data` attribute. The data should be an array of objects, and each object should provide `key`, `label`, and `disabled` fields. The mobile version uses a tabbed layout, full-width lists, and a bottom action bar. Items in the target list stay in sync with the array bound to `v-model`. If you do not want the target list to be empty initially, initialize `v-model` with an array of keys.

transfer/basic

::::

## Filterable

You can search and filter data items.

::::demo Set `filterable` to `true` to show the search input for the current tab. By default, an item is included in the result when its `label` contains the search keyword. You can also provide a custom `filter-method`; it receives the search keyword and the current item whenever the keyword changes, and items that return `true` are displayed in the filtered list.

transfer/filterable

::::

## Customizable

You can customize tab titles, bottom action button texts, item rendering, summary text, and panel footers.

::::demo Use `titles`, `button-texts`, `render-content`, and `format` to customize tab titles, the bottom action button text, item rendering, and the summary text shown in tabs and the toolbar. You can also use the scoped slot to customize item content. Two named slots are available for panel footers: `left-footer` and `right-footer`. If you want some items to be checked initially, use `left-default-checked` and `right-default-checked`. This example also demonstrates the `change` event. Note that this demo cannot run in JSFiddle because it does not support JSX syntax. In a real project, `render-content` works as long as the related dependencies are configured correctly.

transfer/customizable

::::

## Custom empty content ^(2.9.0)

You can customize the content when the list is empty or when no filtering results are found.

::::demo Use `left-empty` and `right-empty` slots to customize the empty content for each panel.

transfer/empty-content

::::

## Prop aliases

By default, Transfer looks for `key`, `label`, and `disabled` in each data item. If your data uses different field names, use the `props` attribute to define aliases.

::::demo In this example, the data items do not have `key` or `label` fields. They use `value` and `desc` instead, so aliases are provided for `key` and `label`.

transfer/prop-alias

::::

## Transfer API

### Transfer Attributes

| Name                        | Description                                                                                                                                                                                                                                                 | Type                                                               | Default  |
| --------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------ | -------- |
| model-value / v-model       | binding value                                                                                                                                                                                                                                               | ^[array]`Array<string \| number>`                                  | []       |
| data                        | data source                                                                                                                                                                                                                                                 | ^[array]`Record<string, any>[]`                                    | []       |
| filterable                  | whether Transfer is filterable                                                                                                                                                                                                                              | ^[boolean]                                                         | false    |
| filter-placeholder          | placeholder for the filter input                                                                                                                                                                                                                            | ^[string]                                                          | -        |
| filter-method               | custom filter method                                                                                                                                                                                                                                        | ^[Function]`(query: string, item: Record<string, any>) => boolean` | -        |
| target-order                | order strategy for elements in the target list. If set to `original`, elements keep the same order as the data source. If set to `push`, newly added elements are appended to the bottom. If set to `unshift`, newly added elements are inserted at the top | ^[enum]`'original' \| 'push' \| 'unshift'`                         | original |
| titles                      | custom tab titles                                                                                                                                                                                                                                           | ^[array]`[string, string]`                                         | []       |
| button-texts                | custom texts for the bottom action buttons                                                                                                                                                                                                                  | ^[array]`[string, string]`                                         | []       |
| render-content              | custom render function for data items                                                                                                                                                                                                                       | ^[object]`renderContent`                                           | -        |
| format                      | summary text shown in tabs and the toolbar                                                                                                                                                                                                                  | ^[object]`TransferFormat`                                          | {}       |
| [props](#type-declarations) | prop aliases for the data source                                                                                                                                                                                                                            | ^[object]`TransferPropsAlias`                                      | -        |
| left-default-checked        | key array of initially checked data items in the left list                                                                                                                                                                                                  | ^[array]`Array<string \| number>`                                  | []       |
| right-default-checked       | key array of initially checked data items in the right list                                                                                                                                                                                                 | ^[array]`Array<string \| number>`                                  | []       |
| validate-event              | whether to trigger form validation                                                                                                                                                                                                                          | ^[boolean]                                                         | true     |

### Transfer Events

| Name               | Description                                                                        | Type                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| change             | triggers when data items change in the right list                                  | ^[Function]`(value: TransferKey[], direction: TransferDirection, movedKeys: TransferKey[]) => void` |
| left-check-change  | triggers when the end user changes the checked state of any item in the left list  | ^[Function]`(value: TransferKey[], movedKeys?: TransferKey[]) => void`                              |
| right-check-change | triggers when the end user changes the checked state of any item in the right list | ^[Function]`(value: TransferKey[], movedKeys?: TransferKey[]) => void`                              |

### Transfer Slots

| Name                 | Description                                                               | Type                                    |
| -------------------- | ------------------------------------------------------------------------- | --------------------------------------- |
| default              | custom content for data items                                             | ^[object]`{ option: TransferDataItem }` |
| left-footer          | content of the left panel footer                                          | -                                       |
| right-footer         | content of the right panel footer                                         | -                                       |
| left-empty ^(2.9.0)  | content shown when the left panel is empty or no data matches the filter  | -                                       |
| right-empty ^(2.9.0) | content shown when the right panel is empty or no data matches the filter | -                                       |

### Transfer Exposes

| Name       | Description                                 | Type                                            |
| ---------- | ------------------------------------------- | ----------------------------------------------- |
| clearQuery | clear the filter keyword of a certain panel | ^[Function]`(which: TransferDirection) => void` |
| leftPanel  | left panel ref                              | ^[object]`Ref<TransferPanelInstance>`           |
| rightPanel | right panel ref                             | ^[object]`Ref<TransferPanelInstance>`           |

## Transfer Panel API

### Transfer Panel Exposes

| Name  | Description    | Type      |
| ----- | -------------- | --------- |
| query | filter keyword | ^[string] |

## Type Declarations

<details>
  <summary>Show declarations</summary>

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
