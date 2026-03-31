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
