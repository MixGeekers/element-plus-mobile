---
title: Scrollbar
lang: en-US
---

# Scrollbar

Use Scrollbar as a mobile-friendly replacement for the browser's native scrollbar.

The thumb appears while scrolling or dragging, instead of depending on hover-only desktop behavior.

## Basic usage

:::demo Use a fixed-height content area when the page needs a clearly bounded scroll region.

scrollbar/basic-usage

:::

## Horizontal scroll

:::demo Horizontal scrolling appears automatically when content is wider than the container.

scrollbar/horizontal-scroll

:::

## Max height

:::demo Keep natural height for short content and switch to scrolling only after the limit is reached.

scrollbar/max-height

:::

## Manual scroll

:::demo Control the scroll position with `setScrollTop` or `setScrollLeft`.

scrollbar/manual-scroll

:::

## Infinite scroll ^(2.10.0)

:::demo `end-reached` is useful for recommendation feeds and other infinite-loading lists.

scrollbar/infinite-scroll

:::

## API

### Attributes

| Name                              | Description                                                                                                                     | Type                                                                | Default |
| --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- | ------- |
| height                            | height of scrollbar                                                                                                             | ^[string] / ^[number]                                               | —       |
| max-height                        | max height of scrollbar                                                                                                         | ^[string] / ^[number]                                               | —       |
| native                            | whether to use the native scrollbar style                                                                                       | ^[boolean]                                                          | false   |
| wrap-style                        | style of wrap container                                                                                                         | ^[string] / ^[object]`CSSProperties \| CSSProperties[] \| string[]` | —       |
| wrap-class                        | class of wrap container                                                                                                         | ^[string]                                                           | —       |
| view-style                        | style of view                                                                                                                   | ^[string] / ^[object]`CSSProperties \| CSSProperties[] \| string[]` | —       |
| view-class                        | class of view                                                                                                                   | ^[string]                                                           | —       |
| noresize                          | do not respond to container size changes, if the container size does not change, it is better to set it to optimize performance | ^[boolean]                                                          | false   |
| tag                               | element tag of the view                                                                                                         | ^[string]                                                           | div     |
| always                            | always show scrollbar                                                                                                           | ^[boolean]                                                          | false   |
| min-size                          | minimum size of scrollbar                                                                                                       | ^[number]                                                           | 20      |
| id ^(2.4.0)                       | id of view                                                                                                                      | ^[string]                                                           | —       |
| role ^(2.4.0) ^(a11y)             | role of view                                                                                                                    | ^[string]                                                           | —       |
| aria-label ^(2.4.0) ^(a11y)       | aria-label of view                                                                                                              | ^[string]                                                           | —       |
| aria-orientation ^(2.4.0) ^(a11y) | aria-orientation of view                                                                                                        | ^[enum]`'horizontal' \| 'vertical'`                                 | —       |
| tabindex ^(2.8.3)                 | tabindex of wrap container                                                                                                      | ^[number] / ^[string]                                               | —       |
| distance ^(2.10.5)                | trigger end-reached event distance(px)                                                                                          | ^[number]                                                           | 0       |

### Events

| Name                  | Description                                           | Type                                                                     |
| --------------------- | ----------------------------------------------------- | ------------------------------------------------------------------------ |
| scroll                | triggers when scrolling, return distance of scrolling | ^[Function]`({ scrollLeft: number, scrollTop: number }) => void`         |
| end-reached ^(2.10.0) | triggers when the end of a scroll is triggered        | ^[Function]`(direction: 'top' \| 'bottom' \| 'left' \| 'right') => void` |

### Slots

| Name    | Description               |
| ------- | ------------------------- |
| default | customize default content |

### Exposes

| Name          | Description                                | Type                                                                       |
| ------------- | ------------------------------------------ | -------------------------------------------------------------------------- |
| handleScroll  | handle scroll event                        | ^[Function]`() => void`                                                    |
| scrollTo      | scrolls to a particular set of coordinates | ^[Function]`(options: ScrollToOptions \| number, yCoord?: number) => void` |
| setScrollTop  | Set distance to scroll top                 | ^[Function]`(scrollTop: number) => void`                                   |
| setScrollLeft | Set distance to scroll left                | ^[Function]`(scrollLeft: number) => void`                                  |
| update        | update scrollbar state manually            | ^[Function]`() => void`                                                    |
| wrapRef       | scrollbar wrap ref                         | ^[object]`Ref<HTMLDivElement>`                                             |
