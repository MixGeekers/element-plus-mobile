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

## Mobile layouts

These examples follow the same structural style as the layouts above and focus on the responsibilities of `Header`, `Main`, and `Footer` in mobile pages.
If your page should fill the viewport, use `full-screen` on the page root. If you need page-level sticky bars, add `fixed` to `Header` or `Footer` when appropriate.

:::demo The most basic mobile page shell: Header + Main + Footer.

container/layout-mobile-basic

:::

:::demo A bottom-navigation layout with a tab bar organized inside Footer.

container/layout-mobile-tabbar

:::

:::demo An immersive layout that keeps only Main for low-navigation scenarios.

container/layout-mobile-fullscreen

:::

## Container API

### Container Attributes

| Name        | Description                                             | Type                                | Default  |
| ----------- | ------------------------------------------------------- | ----------------------------------- | -------- |
| direction   | layout direction for child elements                     | ^[enum]`'horizontal' \| 'vertical'` | vertical |
| full-screen | whether the container takes up the full viewport height | ^[boolean]                          | false    |

### Container Slots

| Name    | Description               | Subtags                                    |
| ------- | ------------------------- | ------------------------------------------ |
| default | customize default content | Container / Header / Aside / Main / Footer |

## Header API

### Header Attributes

| Name   | Description                                          | Type       | Default |
| ------ | ---------------------------------------------------- | ---------- | ------- |
| height | height of the header                                 | ^[string]  | 3.5rem  |
| fixed  | whether to fix the header at the top of the viewport | ^[boolean] | false   |

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

| Name   | Description                                             | Type       | Default |
| ------ | ------------------------------------------------------- | ---------- | ------- |
| height | height of the footer                                    | ^[string]  | 3.5rem  |
| fixed  | whether to fix the footer at the bottom of the viewport | ^[boolean] | false   |

### Footer Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |
