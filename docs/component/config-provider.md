---
title: 配置提供者
lang: zh-CN
---

# 配置提供者

Config Provider 用于提供全局配置，使您的整个应用程序可以在任何地方访问这些配置。

## 国际化配置

通过Config Provider配置i18n相关属性，获得语言切换功能。

:::demo 使用两个属性提供 i18n 相关配置

config-provider/usage

:::

## 按钮配置

:::demo

config-provider/button

:::

## 链接配置 ^(2.9.11)

:::demo

config-provider/link

:::

## 卡配置 ^(2.10.5)

:::demo

config-provider/card

:::

## 对话框配置 ^(2.10.7)

:::demo

config-provider/dialog

:::

## 消息配置

:::demo

config-provider/message

:::

## 空值配置 ^(2.7.0)

<details>
  <summary>支持的组件列表</summary>

- 级联
- 颜色选择器^(2.10.3)
- 日期选择器
- 选择
- 选择V2
- 时间选择器
- 时间选择
- 树选择

</details>

设置 `empty-values` 以支持组件的空值。回退值是 `['', null, undefined]`。如果您认为空字符串有意义，请写`[undefined, null]`。

设置`value-on-clear`设置清零时的返回值。回退值是 `undefined`。日期部分为 `null`。如果要设置`undefined`，请使用`() => undefined`。

:::demo

config-provider/empty-values

:::

## 表配置 ^(2.13.3)

:::demo

config-provider/table

:::

## 实验特性

在本节中，您可以学习如何使用 Config Provider 来提供实验性功能。目前，我们还没有添加任何实验性功能，但在功能路线图中，我们将添加一些实验性功能。您可以使用此配置来管理您想要或不想要的功能。

 <!-- 待办事项 -->

## API

### Config Provider 属性

| 属性名                  | 说明                                                                                                                                           | 类型                                                                                                                                 | 默认值                                                                                 |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------------------- |
| locale                  | 语言环境对象，可参考 [语言列表](https://github.com/element-plus/element-plus/tree/dev/packages/locale/lang)                                    | ^[object]`{ name: string, el: TranslatePair }`                                                                                       | [zh](https://github.com/element-plus/element-plus/blob/dev/packages/locale/lang/en.ts) |
| size                    | 全局组件尺寸                                                                                                                                   | ^[enum]`'large' \| 'default' \| 'small'`                                                                                             | default                                                                                |
| zIndex                  | 全局初始 z-index                                                                                                                               | ^[number]                                                                                                                            | —                                                                                      |
| namespace               | 全局组件类名前缀，配合 [$namespace](https://github.com/element-plus/element-plus/blob/dev/packages/theme-chalk/src/mixins/config.scss#L1) 使用 | ^[string]                                                                                                                            | el                                                                                     |
| button                  | 按钮相关配置，见下表                                                                                                                           | ^[object]`{ autoInsertSpace?: boolean, type?: string, plain?: boolean, text?: boolean, round?: boolean, dashed?: boolean }`          | 见下表                                                                                 |
| link                    | 链接相关配置，见下表                                                                                                                           | ^[object]`{ type?: string, underline?: 'always' \| 'never' }`                                                                        | 见下表                                                                                 |
| dialog ^(2.10.7)        | 对话框相关配置，见下表                                                                                                                         | ^[object]`{ alignCenter?: boolean, draggable?: boolean, overflow?: boolean, transition?: DialogTransition }`                         | 见下表                                                                                 |
| message                 | 消息相关配置，见下表                                                                                                                           | ^[object]`{ max?: number }`                                                                                                          | 见下表                                                                                 |
| experimental-features   | 实验特性配置，当前所有功能默认关闭                                                                                                             | ^[object]                                                                                                                            | —                                                                                      |
| empty-values ^(2.7.0)   | 组件的全局空值                                                                                                                                 | ^[array]                                                                                                                             | —                                                                                      |
| value-on-clear ^(2.7.0) | 全局清空返回值                                                                                                                                 | ^[string] / ^[number] / ^[boolean] / ^[Function]                                                                                     | —                                                                                      |
| table ^(2.13.3)         | 表格相关配置，见下表                                                                                                                           | ^[object]`{ showOverflowTooltip?: boolean \| object, tooltipEffect?: string, tooltipOptions?: object, tooltipFormatter?: Function }` | 见下表                                                                                 |

### Button 属性

| 属性名           | 说明                                                                    | 类型                                                                                      | 默认值 |
| ---------------- | ----------------------------------------------------------------------- | ----------------------------------------------------------------------------------------- | ------ |
| type ^(2.9.11)   | 按钮类型，设置 `color` 时以后者为准                                     | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'text' (deprecated)` | —      |
| autoInsertSpace  | 自动在两个汉字之间插入空格（仅当文本长度为 2 且所有字符均为中文时生效） | ^[boolean]                                                                                | false  |
| plain ^(2.9.11)  | 是否为朴素按钮                                                          | ^[boolean]                                                                                | false  |
| text ^(2.11.0)   | 是否为文本按钮                                                          | ^[boolean]                                                                                | false  |
| round ^(2.9.11)  | 是否为圆角按钮                                                          | ^[boolean]                                                                                | false  |
| dashed ^(2.13.3) | 是否为虚线按钮                                                          | ^[boolean]                                                                                | false  |

### Link 属性

| 属性名              | 说明           | 类型                                                                            | 默认值  |
| ------------------- | -------------- | ------------------------------------------------------------------------------- | ------- |
| type ^(2.9.11)      | 链接类型       | ^[enum]`'primary' \| 'success' \| 'warning' \| 'danger' \| 'info' \| 'default'` | default |
| underline ^(2.9.11) | 下划线显示策略 | ^[enum]`'always' \| 'never'`                                                    | always  |

### Card 属性

| 属性名           | 说明             | 类型                              | 默认值 |
| ---------------- | ---------------- | --------------------------------- | ------ |
| shadow ^(2.10.5) | 何时显示卡片阴影 | ^[enum]`always \| never \| hover` | —      |

### Dialog 属性

| 属性名                | 说明                                              | 类型                                   | 默认值 |
| --------------------- | ------------------------------------------------- | -------------------------------------- | ------ |
| alignCenter ^(2.10.7) | 是否水平和垂直居中对齐对话框                      | ^[boolean]                             | false  |
| draggable ^(2.10.7)   | 是否启用对话框拖动                                | ^[boolean]                             | false  |
| overflow ^(2.10.7)    | 可拖动对话框是否允许超出视口                      | ^[boolean]                             | false  |
| transition ^(2.10.7)  | 对话框动画过渡配置，可传字符串或 Vue 过渡属性对象 | ^[string] / ^[object]`TransitionProps` | —      |

### Message 属性

| 属性名              | 说明                                              | 类型                                                                                       | 默认值 |
| ------------------- | ------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------ |
| max                 | 最多可同时显示的消息条数                          | ^[number]                                                                                  | —      |
| grouping ^(2.8.2)   | 是否合并相同内容的消息，不支持 VNode 消息类型     | ^[boolean]                                                                                 | —      |
| duration ^(2.8.2)   | 显示持续时间，单位为毫秒；设为 `0` 时不会自动关闭 | ^[number]                                                                                  | —      |
| showClose ^(2.8.2)  | 是否显示关闭按钮                                  | ^[boolean]                                                                                 | —      |
| offset ^(2.8.2)     | 距离视口顶部的偏移量                              | ^[number]                                                                                  | —      |
| plain ^(2.9.11)     | 是否使用简洁样式                                  | ^[boolean]                                                                                 | —      |
| placement ^(2.11.0) | 消息显示位置                                      | ^[enum]`'top' \| 'top-left' \| 'top-right' \| 'bottom' \| 'bottom-left' \| 'bottom-right'` | —      |

### Table 属性 ^(2.13.3)

| 属性名              | 说明                                                       | 类型                                                                                                                                                                 | 默认值                                                                                                                  |
| ------------------- | ---------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| showOverflowTooltip | 是否在内容溢出时通过工具提示展示完整内容，会影响所有表格列 | ^[boolean] / ^[object]                                                                                                                                               | —                                                                                                                       |
| tooltipEffect       | 溢出工具提示的 `effect`                                    | ^[enum]`'dark' \| 'light'`                                                                                                                                           | dark                                                                                                                    |
| tooltipOptions      | 溢出工具提示配置，参考 [Tooltip](tooltip.html#attributes)  | ^[object]`Pick<ElTooltipProps, 'effect' \| 'enterable' \| 'hideAfter' \| 'offset' \| 'placement' \| 'popperClass' \| 'popperOptions' \| 'showAfter' \| 'showArrow'>` | ^[object]`{ enterable: true, placement: 'top', showArrow: true, hideAfter: 200, popperOptions: { strategy: 'fixed' } }` |
| tooltipFormatter    | 使用 `show-overflow-tooltip` 时自定义工具提示内容          | ^[Function]`(data: { row: any, column: TableColumnCtx<T>, cellValue: any }) => VNode \| string`                                                                      | —                                                                                                                       |

### Config Provider 插槽

| 插槽名  | 说明           | 类型                                       |
| ------- | -------------- | ------------------------------------------ |
| default | 自定义默认内容 | `config`：提供的全局配置对象（从顶层继承） |
