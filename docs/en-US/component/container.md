---
title: Container
lang: en-US
---

# Container

Use container components to build mobile page shells.

`<el-container>` stacks children vertically by default, which matches the common `Header / Main / Footer` structure on mobile pages. Only set `direction="horizontal"` when you explicitly need side-by-side regions.

:::tip

These components use Flex layout. Direct children of `<el-container>` should be one or more of `Header / Aside / Main / Footer`.

:::

## Basic page shell

<style lang="scss">
@use '../../examples/container/common-layout.scss';
</style>

:::demo The most common mobile structure: top info, primary content, and bottom actions.

container/layout-mobile-basic

:::

## Bottom navigation

:::demo Use Footer as a tab bar when the page includes first-level navigation.

container/layout-mobile-tabbar

:::

## Immersive page

:::demo Keep only Main when the page should stay focused on content.

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
