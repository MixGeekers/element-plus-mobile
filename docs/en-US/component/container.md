---
title: Container
lang: en-US
---

# Container

Container components for scaffolding basic structure of the page:

`<el-container>`: wrapper container. It arranges children vertically by default for mobile layouts. Set `direction="horizontal"` when a side-by-side layout is needed.

`<el-header>`: container for headers.

`<el-aside>`: container for side sections (usually a side nav).

`<el-main>`: container for main sections.

`<el-footer>`: container for footers.

:::tip

These components use flex for layout, so please make sure your browser supports it. Besides, `<el-container>`'s direct child elements have to be one or more of the latter four components. And father element of the latter four components must be a `<el-container>`.

:::

## Common layouts

<style lang="scss">
@use '../../examples/container/common-layout.scss';
</style>

:::demo

container/layout-hm

:::

:::demo

container/layout-hmf

:::

:::demo

container/layout-am

:::

:::demo

container/layout-ham

:::

:::demo

container/layout-hamf

:::

:::demo

container/layout-ahm

:::

:::demo

container/layout-ahmf

:::

## Example

:::demo

container/example

:::

## Container API

### Container Attributes

| Name      | Description                         | Type                                | Default  |
| --------- | ----------------------------------- | ----------------------------------- | -------- |
| direction | layout direction for child elements | ^[enum]`'horizontal' \| 'vertical'` | vertical |

### Container Slots

| Name    | Description               | Subtags                                    |
| ------- | ------------------------- | ------------------------------------------ |
| default | customize default content | Container / Header / Aside / Main / Footer |

## Header API

### Header Attributes

| Name   | Description          | Type      | Default |
| ------ | -------------------- | --------- | ------- |
| height | height of the header | ^[string] | 3.5rem  |

### Header Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

## Aside API

### Aside Attributes

| Name  | Description               | Type      | Default |
| ----- | ------------------------- | --------- | ------- |
| width | width of the side section | ^[string] | 100%    |

### Aside Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

## Main API

### Main Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

## Footer API

### Footer Attributes

| Name   | Description          | Type      | Default |
| ------ | -------------------- | --------- | ------- |
| height | height of the footer | ^[string] | 3.5rem  |

### Footer Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
