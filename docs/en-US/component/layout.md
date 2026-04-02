---
title: Layout
lang: en-US
---

# Layout

Use the 24-column grid to organize mobile content blocks.

:::tip

`Row / Col` already use Flex layout. You do not need to set `type="flex"`.
Mobile-first breakpoints are simplified to `xs / sm / md`, so start from narrow screens and scale up only when needed.

:::

## Basic layout

Create basic grid layout using columns.

:::demo With `row` and `col`, we can easily manipulate the layout using the `span` attribute.

layout/basic-layout

:::

## Column spacing

Column spacing is supported.

:::demo Row provides `gutter` attribute to specify spacings between columns, and its default value is 0.

layout/column-spacing

:::

## Hybrid layout

Form a more complex hybrid layout by combining the basic 1/24 columns.

:::demo

layout/hybrid-layout

:::

## Column offset

You can specify column offsets.

:::demo You can specify the number of column offset by setting the value of `offset` attribute of Col.

layout/column-offset

:::

## Alignment

Default use the flex layout to make flexible alignment of columns.

:::demo You can define the layout of child elements by setting `justify` attribute with start, center, end, space-between, space-around or space-evenly.

layout/alignment

:::

## Responsive Layout

Three breakpoints are preset:
`xs`, `sm`, and `md`.

- `xs`: `<480px`
- `sm`: `>=480px`
- `md`: `>=768px`

:::demo

layout/responsive-layout

:::

## Utility classes for hiding elements

To hide elements by breakpoint, import:

```js
import 'element-plus-mobile/theme-chalk/display.css'
```

Available classes:

- `hidden-xs-only` - hide only on `xs`
- `hidden-sm-only` - hide only on `sm`
- `hidden-sm-and-down` - hide on `sm` and narrower screens
- `hidden-sm-and-up` - hide on `sm` and wider screens
- `hidden-md-only` - hide only on `md`
- `hidden-md-and-down` - hide on `md` and narrower screens
- `hidden-md-and-up` - hide on `md` and wider screens

## Row API

### Row Attributes

| Name    | Description                         | Type                                                                                         | Default |
| ------- | ----------------------------------- | -------------------------------------------------------------------------------------------- | ------- |
| gutter  | grid spacing                        | ^[number]                                                                                    | 0       |
| justify | horizontal alignment of flex layout | ^[enum]`'start' \| 'end' \| 'center' \| 'space-around' \| 'space-between' \| 'space-evenly'` | start   |
| align   | vertical alignment of flex layout   | ^[enum]`'top' \| 'middle' \| 'bottom'`                                                       | —       |
| tag     | custom element tag                  | ^[string]                                                                                    | div     |

### Row Slots

| Name    | Description               | Subtags |
| ------- | ------------------------- | ------- |
| default | customize default content | Col     |

## Col API

### Col Attributes

| Name   | Description                                        | Type                                                                                  | Default |
| ------ | -------------------------------------------------- | ------------------------------------------------------------------------------------- | ------- |
| span   | number of column the grid spans                    | ^[number]                                                                             | 24      |
| offset | number of spacing on the left side of the grid     | ^[number]                                                                             | 0       |
| push   | number of columns that grid moves to the right     | ^[number]                                                                             | 0       |
| pull   | number of columns that grid moves to the left      | ^[number]                                                                             | 0       |
| xs     | `<480px` Responsive columns or column props object | ^[number] / ^[object]`{span?: number, offset?: number, pull?: number, push?: number}` | —       |
| sm     | `≥480px` Responsive columns or column props object | ^[number] / ^[object]`{span?: number, offset?: number, pull?: number, push?: number}` | —       |
| md     | `≥768px` Responsive columns or column props object | ^[number] / ^[object]`{span?: number, offset?: number, pull?: number, push?: number}` | —       |
| tag    | custom element tag                                 | ^[string]                                                                             | div     |

### Col Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

<style lang="scss">
@use '../../examples/layout/index.scss';
</style>
