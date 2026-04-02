---
title: 上传
lang: zh-CN
---

# 上传

通过单击或拖放上传文件。

文档示例中的上传入口和文件列表会采用纵向堆叠布局。

## 基本用法

:::demo 使用 `slot` 自定义上传按钮类型和文本。设置`limit`和`on-exceed`来限制允许的最大上传数量，并指定超过限制时的处理方法。另外，您可以中止删除 `before-remove` 挂钩中的文件。

upload/basic

:::

## 覆盖上一个文件

:::demo 设置 `limit` 和 `on-exceed` 在选择新文件时自动替换以前的文件。

upload/limit-cover

:::

## 用户头像

使用`before-upload`钩子来限制上传文件格式和大小。

:::demo

upload/avatar

:::

## 照片墙

使用 `list-type` 更改 fileList 样式。

:::demo

upload/photo-wall

:::

## 自定义缩略图

使用 `scoped-slot` 更改默认缩略图模板。

:::demo

upload/custom-thumbnail

:::

## 带缩略图的文件列表

:::demo

upload/file-list-with-thumbnail

:::

## 文件列表控制

使用`on-change`钩子函数控制上传文件列表。

:::demo

upload/file-list

:::

## 拖拽上传

您可以将文件拖到特定区域来上传。

:::demo

upload/drag-and-drop

:::

## 上传目录^(2.13.1)

通过 `directory` 属性启用文件夹上传。

:::demo 启用后只能选择文件夹，选择文件夹后，文件夹内的文件会被扁平化。

upload/directory

:::

## 手动上传

:::demo

upload/manual

:::

## API

### 属性

| 名称                        | 描述                                                                                                                                       | 类型                                                                                                                                 | 默认                                                                                                                |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| 行动^（必填）               | 请求网址。                                                                                                                                 | ^[字符串]                                                                                                                            | ＃                                                                                                                  |
| 标题                        | 请求标头。                                                                                                                                 | ^[对象]`Headers \| Record<string, any>`                                                                                              | —                                                                                                                   |
| 方法                        | 设置上传请求方式。                                                                                                                         | ^[字符串]                                                                                                                            | 帖子                                                                                                                |
| 多个                        | 是否允许上传多个文件。                                                                                                                     | ^[布尔值]                                                                                                                            | 假                                                                                                                  |
| 数据                        | 请求的附加选项。自 v2.3.13 起支持 `Awaitable` 数据和 `Function`。                                                                          | ^[对象]`Record<string, any> \| Awaitable<Record<string, any>>` / ^[功能]`(rawFile: UploadRawFile) => Awaitable<Record<string, any>>` | {}                                                                                                                  |
| 名称                        | 上传文件的键名。                                                                                                                           | ^[字符串]                                                                                                                            | 文件                                                                                                                |
| 带有凭证                    | 是否发送cookie。                                                                                                                           | ^[布尔值]                                                                                                                            | 假                                                                                                                  |
| 显示文件列表                | 是否显示上传的文件列表。                                                                                                                   | ^[布尔值]                                                                                                                            | 真实                                                                                                                |
| 拖                          | 是否激活拖放模式。                                                                                                                         | ^[布尔值]                                                                                                                            | 假                                                                                                                  |
| 接受                        | 接受的[文件类型](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-accept)，在 `thumbnail-mode === true` 时将不起作用。 | ^[字符串]                                                                                                                            | ''                                                                                                                  |
| 跨域                        | 本机属性 [crossorigin](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/crossorigin)。                                         | ^[枚举]`'' \| 'anonymous' \| 'use-credentials'`                                                                                      | —                                                                                                                   |
| 预览                        | 点击上传文件时的钩子函数。                                                                                                                 | ^[功能]`(uploadFile: UploadFile) => void`                                                                                            | —                                                                                                                   |
| 删除时                      | 删除文件时的钩子函数。                                                                                                                     | ^[功能]`(uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                                                  | —                                                                                                                   |
| 成功                        | 上传成功时的钩子函数。                                                                                                                     | ^[功能]`(response: any, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                                   | —                                                                                                                   |
| 错误                        | 发生某些错误时的钩子函数。                                                                                                                 | ^[功能]`(error: Error, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                                    | —                                                                                                                   |
| 进行中                      | 发生某些进展时的钩子函数。                                                                                                                 | ^[功能]`(evt: UploadProgressEvent, uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                        | —                                                                                                                   |
| 变化                        | 选择文件或上传文件成功或上传文件失败时的钩子函数。                                                                                         | ^[功能]`(uploadFile: UploadFile, uploadFiles: UploadFiles) => void`                                                                  | —                                                                                                                   |
| 超过                        | 超过限制时的钩子函数。                                                                                                                     | ^[功能]`(files: File[], uploadFiles: UploadUserFile[]) => void`                                                                      | —                                                                                                                   |
| 上传前                      | 上传前的钩子函数，以要上传的文件作为参数。如果返回`false`或者返回`Promise`然后被拒绝，上传将被中止。                                       | ^[功能]`(rawFile: UploadRawFile) => Awaitable<void \| undefined \| null \| boolean \| File \| Blob>`                                 | —                                                                                                                   |
| 删除前                      | 删除文件之前的钩子函数，以文件和文件列表作为参数。如果返回 `false` 或返回 `Promise` 然后被拒绝，删除将中止。                               | ^[功能]`(uploadFile: UploadFile, uploadFiles: UploadFiles) => Awaitable<boolean>`                                                    | —                                                                                                                   |
| 文件列表 / v-model:文件列表 | 默认上传的文件。                                                                                                                           | ^[数组]`UploadUserFile[]`                                                                                                            | []                                                                                                                  |
| 列表类型                    | 文件列表的类型。                                                                                                                           | ^[枚举]`'text' \| 'picture' \| 'picture-card'`                                                                                       | 文字                                                                                                                |
| 自动上传                    | 是否自动上传文件。                                                                                                                         | ^[布尔值]                                                                                                                            | 真实                                                                                                                |
| http 请求                   | 覆盖默认的 xhr 行为，允许您实现自己的上传文件请求。                                                                                        | ^[功能]`(options: UploadRequestOptions) => XMLHttpRequest \| Promise<unknown>`                                                       | ajaxUpload [参见](https://github.com/element-plus/element-plus/blob/dev/packages/components/upload/src/ajax.ts#L55) |
| 已禁用                      | 是否禁用上传。                                                                                                                             | ^[布尔值]                                                                                                                            | 假                                                                                                                  |
| 限制                        | 允许的最大上传数量。                                                                                                                       | ^[数字]                                                                                                                              | —                                                                                                                   |
| 目录 ^(2.13.1)              | 是否支持上传目录。启用后，只能选择文件夹，选择文件夹后，该文件夹内的文件将会被扁平化。                                                     | ^[布尔值]                                                                                                                            | 假                                                                                                                  |

### 老虎机

| 名称 | 描述                   | 类型                                         |
| ---- | ---------------------- | -------------------------------------------- |
| 默认 | 自定义默认内容。       | -                                            |
| 触发 | 触发文件对话框的内容。 | -                                            |
| 提示 | 提示内容。             | -                                            |
| 文件 | 缩略图模板的内容。     | ^[对象]`{ file: UploadFile, index: number }` |

### 暴露

| 名称     | 描述                                                                                 | 类型                                                                          |
| -------- | ------------------------------------------------------------------------------------ | ----------------------------------------------------------------------------- |
| 中止     | 取消上传请求。当指定`file`时，中止对应的待上传；当未指定文件时，中止所有挂起的上传。 | ^[功能]`(file?: UploadFile) => void`                                          |
| 提交     | 手动上传文件列表。                                                                   | ^[功能]`() => void`                                                           |
| 清除文件 | 清除文件列表（`before-upload` 挂钩不支持此方法）。                                   | ^[功能]`(status?: UploadStatus[]) => void`                                    |
| 处理开始 | 手动选择文件。                                                                       | ^[功能]`(rawFile: UploadRawFile) => void`                                     |
| 处理删除 | 手动删除该文件。 `file` 和 `rawFile` 已合并。 `rawFile` 将在 `v2.2.0` 中删除。       | ^[功能]`(file: UploadFile \| UploadRawFile, rawFile?: UploadRawFile) => void` |

## 类型声明

<details>
  <summary>显示声明</summary>

```ts
type UploadFiles = UploadFile[]

type UploadUserFile = Omit<UploadFile, 'status' | 'uid'> &
  Partial<Pick<UploadFile, 'status' | 'uid'>>

type UploadStatus = 'ready' | 'uploading' | 'success' | 'fail'

type Awaitable<T> = Promise<T> | T

type Mutable<T> = { -readonly [P in keyof T]: T[P] }

interface UploadFile {
  name: string
  percentage?: number
  status: UploadStatus
  size?: number
  response?: unknown
  uid: number
  url?: string
  raw?: UploadRawFile
}

interface UploadProgressEvent extends ProgressEvent {
  percent: number
}

interface UploadRawFile extends File {
  uid: number
  isDirectory?: boolean
}

interface UploadRequestOptions {
  action: string
  method: string
  data: Record<string, string | Blob | [string | Blob, string] | string[]>
  filename: string
  file: UploadRawFile
  headers: Headers | Record<string, string | number | null | undefined>
  onError: (evt: UploadAjaxError) => void
  onProgress: (evt: UploadProgressEvent) => void
  onSuccess: (response: any) => void
  withCredentials: boolean
}
```

</details>
