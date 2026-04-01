# Task List

## 第一批基础组件移动端改造

### 范围

- [x] Button
- [x] Container（含 Aside / Header / Footer / Main）
- [x] Icon
- [x] Row / Col
- [x] Link
- [x] Text
- [x] Scrollbar
- [x] Space
- [x] Splitter
- [ ] Border（本批不处理，属于设计规范）
- [ ] Color（本批不处理，属于设计规范）
- [ ] Typography（本批不处理，属于设计规范）

### 已完成改造项

- [x] 建立 rem 基础设施
- [x] 增加 `pxToRem()` 运行时工具
- [x] 增加 Sass `to-rem()` 方法
- [x] 增加移动端触控反馈 mixin
- [x] 接入 `postcss-pxtorem` 构建兜底
- [x] 将核心字号、圆角、组件尺寸变量改为 rem
- [x] 将桌面 hover 交互切换为移动端 active / touch 反馈
- [x] 提升 Button / Link 的触控区域
- [x] 将 Container 默认布局切换为纵向
- [x] 将 Layout 断点收缩为 `xs / sm / md`
- [x] 为 Scrollbar 增加 touch 拖拽支持
- [x] 放大 Splitter 拖拽条与折叠按钮的点击区域
- [x] 同步更新文档示例
- [x] 同步更新相关测试

### 关键验证

- [x] 定向单元测试通过（110 / 110）
- [x] `pnpm --filter @element-plus/theme-chalk build` 通过
- [x] 最近改动文件无新增 linter 报错

### 当前遗留说明

- [ ] `Border / Color / Typography` 仍未进入本批范围
- [ ] `Link` 相关旧测试仍会输出 underline 布尔值弃用告警，但测试通过
- [ ] `Splitter` 某条既有测试仍会输出 Vue runtime warning，但测试通过

### 下一步建议

- [ ] 开始第二批组件的移动端改造
- [ ] 评估是否需要补一套移动端 playground / demo 页面
- [ ] 统一梳理对外 API 的 breaking changes 说明

## 第二批表单核心组件移动端改造

### 范围

- [x] Form / FormItem
- [x] Input / Textarea
- [x] Select / SelectV2 / Option
- [x] InputNumber
- [x] Checkbox / CheckboxGroup
- [x] Radio / RadioGroup
- [x] Switch
- [x] Slider
- [x] Rate
- [x] Segmented

### 已完成改造项

- [x] Form 在窄屏下增加 `is-mobile` 运行时态并自动切换为移动端表单布局
- [x] FormItem 移动端强制标签置顶、取消桌面偏移量、错误信息回流到文档流
- [x] Select / SelectV2 增加移动端检测、移动端类名与移动端强制 teleported 行为
- [x] Select / SelectV2 多选引入草稿选择模型，提供确认 / 取消底部操作区
- [x] Select / SelectV2 选项选中态在移动端跟随草稿值同步更新
- [x] Select 下拉层改为更适合移动端的底部弹层样式，放大选项点击热区
- [x] Input / Textarea / InputNumber 提升触控尺寸并优化移动端输入字号
- [x] Checkbox / Radio / Switch / Slider / Rate / Segmented 提升触控热区与窄屏布局表现
- [x] CheckboxGroup / RadioGroup 调整为更适合移动端的换行与间距
- [x] 第二批表单组件样式尺寸统一改为 rem / rem-backed token，保留 `1px` hairline 与 focus ring
- [x] 补充 Form / Select / SelectV2 的移动端定向测试
- [x] 补充 Form / Select / SelectV2 的移动端文档示例，并提供桌面 / 移动预览切换
- [x] 同步通过 `theme-chalk` 构建验证

### 关键验证

- [x] `pnpm exec vitest run packages/components/form/__tests__/form.test.tsx` 通过（28 / 28）
- [x] `pnpm exec vitest run packages/components/select/__tests__/select.test.ts` 通过（130 / 130）
- [x] `pnpm exec vitest run packages/components/select-v2/__tests__/select.test.ts` 通过（104 / 104）
- [x] `pnpm --filter @element-plus/theme-chalk build` 通过

### 当前遗留说明

- [ ] `CheckboxButton / RadioButton` 的移动端专门样式仍可继续细化
- [ ] 日期、时间、级联等更复杂表单组件尚未纳入本批
- [ ] 需要补充移动端表单场景的文档 / demo 展示

### 下一步建议

- [ ] 继续推进日期、时间、级联、上传等高频表单组件的移动端改造
- [ ] 补一套移动端表单 playground / docs 示例，覆盖底部弹层与窄屏校验态
- [ ] 梳理本批移动端行为变化中的 breaking changes 说明
