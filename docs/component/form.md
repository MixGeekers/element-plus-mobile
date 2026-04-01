---
title: 表单
lang: zh-CN
---

# 表单

表格由`input`、`radio`、`select`、`checkbox`等组成。通过表单，您可以收集、验证和提交数据。

:::tip

该组件已升级为弹性布局，以取代旧的浮动布局。

:::

## 基本形式

包括`input`、`select`、`radio`、`checkbox`等各种输入项。

:::demo 在每个 `form` 组件中，您需要一个 `form-item` 字段作为输入项的容器。

form/basic-form

:::

## 移动端表单预览

表单在窄屏下会自动切换为更适合触控的布局，包括标签置顶、错误信息回流到文档流，以及更大的输入热区。也可以通过 `mobile` 属性在预览或嵌入场景中显式启用这套布局。

:::demo 这个示例默认以移动端形态展示第二批表单组件；展开 `Select / SelectV2` 还可以继续检查底部弹层与多选确认交互。

form/mobile-adaptation

:::

:::tip

[W3C](https://www.w3.org/MarkUp/html-spec/html-spec_8.html#SEC8.2) 规定

> <i>当表单中只有一个单行文本输入字段时，用户代理应接受该字段中的 Enter 作为提交表单的请求。</i>

为了防止这种行为，您可以在 `<el-form>` 上添加 `@submit.prevent`。

:::

## 内联表格

当垂直空间有限且形式比较简单时，可以排成一行。

:::demo 将 `inline` 属性设置为 `true`，表单将内联。

form/inline-form

:::

## 对齐

根据您的设计，有多种不同的方法来对齐标签元素。

您可以单独设置 `el-form-item` 的 `label-position` ^(2.7.7)。如果该值为空，则使用`el-form`的`label-position`。

:::demo `label-position` 属性决定标签如何对齐，可以是 `top` 或 `left`。当设置为 `top` 时，标签将放置在表单字段的顶部。

form/alignment

:::

## 验证

表单组件允许您验证数据，帮助您发现并纠正错误。

:::demo 只需为`Form`组件添加`rules`属性，通过验证规则，并将`FormItem`的`prop`属性设置为需要验证的特定密钥即可。请参阅[异步验证器](https://github.com/yiminghe/async-validator)了解更多信息。

form/validation

:::

## 自定义验证规则

本示例展示了如何自定义自己的验证规则来完成双因素密码验证。

:::demo 这里我们使用 `status-icon` 将验证结果反映为图标。

form/custom-validation

:::

:::tip

必须调用自定义验证回调函数。在 [async-validator](https://github.com/yiminghe/async-validator) 中查看更多高级用法。

:::

## 添加/删除表单项

:::demo 除了在表单组件上一次性传递所有验证规则外，您还可以在单个表单字段上动态传递验证规则或删除规则。

form/form-items

:::

## 号码验证

:::demo Number Validate 需要在输入 `v-model` 绑定上添加 `.number` 修饰符，用于将字符串值转换为 Vue 提供的数字。

form/number-validate

:::

:::tip

当 `el-form-item` 嵌套在另一个 `el-form-item` 中时，其标签宽度将为 `0`。如果需要，您可以在该 `el-form-item` 上设置 `label-width`。

:::

## 尺寸控制

表单中的所有组件都从该表单继承其 `size` 属性。同样，FormItem也有一个`size`属性。

:::demo 如果您不希望该组件从 From 或 FormItem 继承其大小，您仍然可以微调每个组件的 `size`。

form/size-control

:::

## 辅助功能

当 `el-form-item` 内只有一个输入（或相关控件，例如选择或复选框）时，表单项的标签将自动附加到该输入。但是，如果 `el-form-item` 内部有多个输入，则表单项将被分配 [group](https://www.w3.org/TR/wai-aria/#group) 的 [WAI-ARIA](https://www.w3.org/WAI/standards-guidelines/aria/) 角色。在这种情况下，您有责任为各个输入分配辅助标签。

:::demo

form/accessibility

:::

## 表单API

### 表单属性

| 名称                    | 描述                                                                                                                                                 | 类型                                           | 默认 |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------- | ---- |
| 型号                    | 表单组件的数据。                                                                                                                                     | ^[对象]`Record<string, any>`                   | —    |
| 规则                    | 表单的验证规则。                                                                                                                                     | ^[对象]`FormRules`                             | —    |
| 内联                    | 表单是否内联。                                                                                                                                       | ^[布尔值]                                      | 假   |
| 移动端                  | 是否在不依赖视口宽度的情况下强制使用移动端表单布局。                                                                                                 | ^[布尔值]                                      | 假   |
| 标签位置                | 标签的位置。如果设置为 `'left'` 或 `'right'`，则还需要 `label-width` 属性。                                                                          | ^[枚举]`'left' \| 'right' \| 'top'`            | 对   |
| 标签宽度                | 标签宽度，例如`'50px'`。它的所有直接子表单项都将继承该值。支持 `auto`。                                                                              | ^[字符串] / ^[数字]                            | ''   |
| 标签后缀                | 标签的后缀。                                                                                                                                         | ^[字符串]                                      | ''   |
| 隐藏所需星号            | 是否隐藏必填字段的标签旁边应有一个红色星号（星号）。                                                                                                 | ^[布尔值]                                      | 假   |
| 需要星号位置            | 星号的位置。                                                                                                                                         | ^[枚举]`'left' \| 'right'`                     | 左   |
| 显示消息                | 是否显示错误信息。                                                                                                                                   | ^[布尔值]                                      | 真实 |
| 内联消息                | 是否在表单项内显示错误消息。                                                                                                                         | ^[布尔值]                                      | 假   |
| 状态图标                | 是否显示指示验证结果的图标。                                                                                                                         | ^[布尔值]                                      | 假   |
| 规则更改时验证          | 当 `rules` 属性更改时是否触发验证。                                                                                                                  | ^[布尔值]                                      | 真实 |
| 尺寸                    | 控制此表单中组件的大小。                                                                                                                             | ^[枚举]`'' \| 'large' \| 'default' \| 'small'` | —    |
| 已禁用                  | 是否禁用此表单中的所有组件。在 ^(2.12.0) 之前，如果设置为 `true`，它将覆盖内部组件的 `disabled` 属性。在^(2.12.0)之后，内部组件的配置优先。          | ^[布尔值]                                      | 假   |
| 滚动至错误              | 当验证失败时，滚动到第一个错误表单条目。                                                                                                             | ^[布尔值]                                      | 假   |
| 滚动到视图选项 ^(2.3.2) | 当验证失败时，它会根据scrollIntoView选项滚动到第一个错误项。 [滚动到视图](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView)。 | ^[对象]`ScrollIntoViewOptions` / ^[布尔值]     | 真实 |

### 表单事件

| 名称 | 描述             | 类型                                                                     |
| ---- | ---------------- | ------------------------------------------------------------------------ |
| 验证 | 验证表单项后触发 | ^[功能]`(prop: FormItemProp, isValid: boolean, message: string) => void` |

### 表格槽位

| 名称 | 描述           | 子标签 |
| ---- | -------------- | ------ |
| 默认 | 自定义默认内容 | 表单项 |

### 表单暴露

| 名称                 | 描述                                                                | 类型                                                                                                                          |
| -------------------- | ------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------- |
| 验证                 | 验证整个表格。接收回调或返回`Promise`。                             | ^[功能]`(callback?: FormValidateCallback) => Promise<void>`                                                                   |
| 验证字段             | 验证指定字段。                                                      | ^[功能]`(props?: Arrayable<FormItemProp> \| undefined, callback?: FormValidateCallback \| undefined) => FormValidationResult` |
| 重置字段             | 重置指定字段并删除验证结果。                                        | ^[功能]`(props?: Arrayable<FormItemProp> \| undefined) => void`                                                               |
| 滚动到字段           | 滚动到指定字段。                                                    | ^[功能]`(prop: FormItemProp) => void`                                                                                         |
| 清除验证             | 清除所有或指定字段的验证消息。                                      | ^[功能]`(props?: Arrayable<FormItemProp> \| undefined) => void`                                                               |
| 字段 ^(2.7.3)        | 获取所有字段上下文。                                                | ^[数组]`FormItemContext[]`                                                                                                    |
| getField ^(2.10.2)   | 获取字段上下文。                                                    | ^[功能]`(prop: FormItemProp) => FormItemContext \| undefined`                                                                 |
| 设置初始值 ^(2.13.1) | 设置表单字段的初始值。当调用 `resetFields` 时，字段将重置为这些值。 | ^[功能]`(initModel: Record<string, any>) => void`                                                                             |

## 表单项 API

### 表单项属性

| 名称              | 描述                                                                                                                             | 类型                                                | 默认 |
| ----------------- | -------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------- | ---- |
| 支柱              | `model` 的密钥。它可以是属性的路径（例如 `a.b.0` 或 `['a', 'b', '0']`）。在使用`validate`和`resetFields`方法时，该属性是必需的。 | ^[字符串] / ^[字符串[]]                             | —    |
| 标签              | 标签文本。                                                                                                                       | ^[字符串]                                           | —    |
| 标签位置 ^(2.7.7) | 项目标签的位置。如果设置为 `'left'` 或 `'right'`，则还需要 `label-width` 属性。默认扩展 `form` 的 `label-position`。             | ^[枚举]`'left' \| 'right' \| 'top'`                 | ''   |
| 标签宽度          | 标签宽度，例如`'50px'`。支持 `'auto'`。                                                                                          | ^[字符串] / ^[数字]                                 | —    |
| 必填              | 该字段是否为必填字段，如果省略，将由验证规则确定。                                                                               | ^[布尔值]                                           | —    |
| 规则              | 形式的验证规则见[下表](#formitemrule)，更高级的用法见[async-validator](https://github.com/yiminghe/async-validator)。            | ^[对象]`Arrayable<FormItemRule>`                    | —    |
| 错误              | 字段错误消息，设置其值，字段将验证错误并立即显示此消息。                                                                         | ^[字符串]                                           | —    |
| 显示消息          | 是否显示错误信息。                                                                                                               | ^[布尔值]                                           | 真实 |
| 内联消息          | 内联样式验证消息。                                                                                                               | ^[布尔值]                                           | 假   |
| 尺寸              | 控制此表单项中组件的大小。                                                                                                       | ^[枚举]`'' \| 'large' \| 'default' \| 'small'`      | —    |
| 对于              | 与原生标签中的相同。                                                                                                             | ^[字符串]                                           | —    |
| 验证状态          | formItem 的验证状态。                                                                                                            | ^[枚举]`'' \| 'error' \| 'validating' \| 'success'` | —    |

#### 表单项规则

|名称 |描述 |类型 |默认 |
| -------- | ------------------------------------------- | ------------------------ | | -------- |
|触发|验证器如何被触发。 | ^[枚举]`'blur' \| 'change'` | — |

:::tip

如果您不想根据输入事件触发验证器，请在相应的输入类型组件（`<el-input>`、`<el-radio>`、`<el-select>`，...）上将 `validate-event` 属性设置为 `false`。

:::

### 表单项槽

| 名称 | 描述                         | 类型                       |
| ---- | ---------------------------- | -------------------------- |
| 默认 | 表单项的内容。               | —                          |
| 标签 | 要在标签上显示的自定义内容。 | ^[对象]`{ label: string }` |
| 错误 | 显示验证消息的自定义内容。   | ^[对象]`{ error: string }` |

### FormItem 公开

| 名称                 | 描述                                                             | 类型                                                                                             |
| -------------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| 尺寸                 | 表格项目尺寸。                                                   | ^[对象]`ComputedRef<'' \| 'large' \| 'default' \| 'small'>`                                      |
| 验证消息             | 验证消息。                                                       | ^[对象]`Ref<string>`                                                                             |
| 验证状态             | 验证状态。                                                       | ^[对象]`Ref<'' \| 'error' \| 'validating' \| 'success'>`                                         |
| 验证                 | 验证表单项。                                                     | ^[功能]`(trigger: string, callback?: FormValidateCallback \| undefined) => FormValidationResult` |
| 重置字段             | 重置当前字段并删除验证结果。                                     | ^[功能]`() => void`                                                                              |
| 清除验证             | 删除字段的验证状态。                                             | ^[功能]`() => void`                                                                              |
| 设置初始值 ^(2.13.1) | 设置该字段的初始值。当调用 `resetField` 时，该字段将重置为该值。 | ^[功能]`(value: any) => void`                                                                    |

## 类型声明

<details>
  <summary>显示声明</summary>

```ts
type Arrayable<T> = T | T[]

type FormValidationResult = Promise<boolean>

// ValidateFieldsError: see [async-validator](https://github.com/yiminghe/async-validator/blob/master/src/interface.ts)
type FormValidateCallback = (
  isValid: boolean,
  invalidFields?: ValidateFieldsError
) => Promise<void> | void

// RuleItem: see [async-validator](https://github.com/yiminghe/async-validator/blob/master/src/interface.ts)
interface FormItemRule extends RuleItem {
  trigger?: Arrayable<string>
}

type Primitive = null | undefined | string | number | boolean | symbol | bigint
type BrowserNativeObject = Date | FileList | File | Blob | RegExp
type IsTuple<T extends ReadonlyArray<any>> = number extends T['length']
  ? false
  : true
type ArrayMethodKey = keyof any[]
type TupleKey<T extends ReadonlyArray<any>> = Exclude<keyof T, ArrayMethodKey>
type ArrayKey = number
type PathImpl<K extends string | number, V> = V extends
  | Primitive
  | BrowserNativeObject
  ? `${K}`
  : `${K}` | `${K}.${Path<V>}`
type Path<T> =
  T extends ReadonlyArray<infer V>
    ? IsTuple<T> extends true
      ? {
          [K in TupleKey<T>]-?: PathImpl<Exclude<K, symbol>, T[K]>
        }[TupleKey<T>]
      : PathImpl<ArrayKey, V>
    : {
        [K in keyof T]-?: PathImpl<Exclude<K, symbol>, T[K]>
      }[keyof T]
type FieldPath<T> = T extends object ? Path<T> : never
// MaybeRef: see [@vueuse/core](https://github.com/vueuse/vueuse/blob/main/packages/shared/utils/types.ts)
// UnwrapRef: see [vue](https://github.com/vuejs/core/blob/main/packages/reactivity/src/ref.ts)
type FormRules<T extends MaybeRef<Record<string, any> | string> = string> =
  Partial<
    Record<
      UnwrapRef<T> extends string ? UnwrapRef<T> : FieldPath<UnwrapRef<T>>,
      Arrayable<FormItemRule>
    >
  >

type FormItemValidateState = (typeof formItemValidateStates)[number]
type FormItemProps = ExtractPropTypes<typeof formItemProps>

type FormItemContext = FormItemProps & {
  $el: HTMLDivElement | undefined
  size: ComponentSize
  validateMessage: string
  validateState: FormItemValidateState
  isGroup: boolean
  labelId: string
  inputIds: string[]
  hasLabel: boolean
  fieldValue: any
  propString: string
  addInputId: (id: string) => void
  removeInputId: (id: string) => void
  validate: (
    trigger: string,
    callback?: FormValidateCallback
  ) => FormValidationResult
  resetField(): void
  clearValidate(): void
  setInitialValue: (value: any) => void
}
```

</details>
