# Element Plus Mobile 移动端改造规范

> 本文档基于已完成的两批组件移动端改造经验总结而成，作为后续组件改造与代码审查的统一参照。

---

## 目录

1. [核心原则](#1-核心原则)
2. [尺寸与单位](#2-尺寸与单位)
3. [颜色与主题](#3-颜色与主题)
4. [触控适配](#4-触控适配)
5. [布局模式](#5-布局模式)
6. [底部弹层（Bottom Sheet）](#6-底部弹层bottom-sheet)
7. [滚动与分页](#7-滚动与分页)
8. [安全区适配](#8-安全区适配)
9. [SCSS 结构约定](#9-scss-结构约定)
10. [组件 API 改造原则](#10-组件-api-改造原则)
11. [测试改造要点](#11-测试改造要点)
12. [文档与示例](#12-文档与示例)
13. [检查清单](#13-检查清单)
14. [已知遗留问题](#14-已知遗留问题)

---

## 1. 核心原则

- **Mobile-only，非响应式**：本项目是面向移动端的独立分支，不做桌面/移动双模适配。所有组件默认以手机竖屏为目标。
- **保持 Element Plus 视觉风格**：扁平、简洁、克制。不引入圆角卡片、渐变背景等其他设计语言。
- **最小化 API 破坏**：尽量保留原有 props / emits / slots / expose 接口，仅移除明确不适用于移动端的（如 `placement`、`popperOptions`、`teleported` 等桌面浮层相关配置）。
- **CSS 变量优先**：所有颜色、尺寸通过 `getCssVar()` 引用设计令牌，确保主题可定制。
- **示例只服务于 API 演示**：文档示例应直接展示组件用法，不得引入设备壳、营销式文案、渐变舞台或与组件功能无关的大段局部样式。

---

## 2. 尺寸与单位

### 2.1 `to-rem()` 函数

定义在 `packages/theme-chalk/src/mixins/function.scss`：

```scss
@function to-rem($value, $base: 16px) {
  // 无单位数字按 px 处理
  // px 值除以 $base 返回 rem
  // 非 px 值（如 calc、var）原样返回
}
```

**规则：**

| 场景                                       | 单位              | 说明                    |
| ------------------------------------------ | ----------------- | ----------------------- |
| 组件内部尺寸（高度、内边距、圆角、字号等） | `to-rem(Npx)`     | 跟随根字号缩放          |
| 边框宽度（1px hairline）                   | `1px`             | 保持物理像素细线        |
| 纯视觉装饰线（分割线、描边等）             | `1px`             | 同上                    |
| 百分比布局                                 | `%` / `vw` / `vh` | 原样保留                |
| CSS 变量引用                               | `getCssVar(...)`  | 由变量定义层统一 rem 化 |

### 2.2 设计令牌

组件级变量在 `packages/theme-chalk/src/common/var.scss` 的对应 `$component` map 中维护，值统一使用 `to-rem()`。

```scss
// ✅ 正确
$transfer: map.merge(
  (
    'item-height': to-rem(48px),
    'border-radius': getCssVar('border-radius-base'),
  ),
  $transfer
);

// ❌ 错误 — 硬编码 px
$transfer: map.merge(
  (
    'item-height': 48px,
  ),
  $transfer
);
```

---

## 3. 颜色与主题

### 3.1 禁止硬编码颜色

**组件 SCSS 中不得出现任何 hex 色值（`#xxxxxx`）、`rgb()`、`rgba()` 或 `linear-gradient()` 硬编码颜色。**

唯一允许硬编码颜色的位置是 `common/var.scss` 中的**设计令牌定义层**。

```scss
// ✅ 正确 — 通过 CSS 变量引用
background: getCssVar('bg-color', 'overlay');
color: getCssVar('text-color', 'regular');
border-color: getCssVar('transfer-border-color');

// ❌ 错误 — 硬编码
background: linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%);
background: #ffffff;
color: rgba(0, 0, 0, 0.8);
```

### 3.2 常用颜色令牌速查

| 语义                        | CSS 变量                                 |
| --------------------------- | ---------------------------------------- |
| 主背景                      | `getCssVar('bg-color', 'overlay')`       |
| 页面背景                    | `getCssVar('bg-color', 'page')`          |
| 轻填充（hover/active 反馈） | `getCssVar('fill-color', 'light')`       |
| 主文字                      | `getCssVar('text-color', 'primary')`     |
| 常规文字                    | `getCssVar('text-color', 'regular')`     |
| 次要文字                    | `getCssVar('text-color', 'secondary')`   |
| 占位文字                    | `getCssVar('text-color', 'placeholder')` |
| 禁用文字                    | `getCssVar('disabled-text-color')`       |
| 边框                        | `getCssVar('border-color-lighter')`      |
| 主色                        | `getCssVar('color-primary')`             |
| 主色浅层（hover 背景）      | `getCssVar('color-primary-light-9')`     |

### 3.3 box-shadow

底部弹层阴影统一使用：

```scss
box-shadow: getCssVar('box-shadow', 'light');
```

若需要上方投影（如底部弹层），可自行定义但必须基于 `rgba` 函数且保持一致：

```scss
box-shadow: 0 to-rem(-12px) to-rem(32px) rgba(0, 0, 0, 0.18);
```

> **注意**：这是当前项目中已有的底部弹层共用阴影值。后续应考虑将其提取为 CSS 变量。

---

## 4. 触控适配

### 4.1 触控反馈

使用 `touch-feedback` mixin 消除移动端点击高亮：

```scss
@include touch-feedback;
// 输出:
//   -webkit-tap-highlight-color: transparent;
//   touch-action: manipulation;
```

所有可点击元素（按钮、列表项、选项、链接等）**必须**添加。

### 4.2 触控目标尺寸

使用 `touch-target` mixin 确保最小点击区域：

```scss
@include touch-target(48px);
// 输出:
//   min-width: to-rem(48px);  // 3rem
//   min-height: to-rem(48px); // 3rem
```

**最低标准：**

| 元素类型                     | 最小触控尺寸   |
| ---------------------------- | -------------- |
| 列表项、选项、表单控件       | 48px (3rem)    |
| 独立图标按钮、复选框、单选框 | 44px (2.75rem) |
| 工具栏辅助操作               | 32px (2rem)    |

### 4.3 hover → active 切换

移动端无 hover 态，交互反馈使用 `:active` 或 `fill-color` 背景变化：

```scss
// ✅ 移动端
&:not(.is-disabled):active {
  background: getCssVar('fill-color', 'light');
}

// ❌ 桌面残留
&:hover {
  background: getCssVar('color-primary-light-9');
  border-color: getCssVar('color-primary-light-7');
}
```

---

## 5. 布局模式

### 5.1 默认纵向布局

容器、表单等组件默认使用纵向堆叠：

```scss
display: flex;
flex-direction: column;
width: 100%;
```

### 5.2 列表项样式：扁平行

列表项（选项、穿梭框项、级联节点等）统一采用**扁平行**样式，而非卡片：

```scss
// ✅ 扁平行 — Element Plus 风格
min-height: getCssVar('transfer-item-height'); // to-rem(48px)
padding: 0 to-rem(15px);
transition: background-color getCssVar('transition-duration');

// ❌ 卡片式 — 非 Element Plus 风格
margin-bottom: to-rem(10px);
padding: to-rem(12px) to-rem(16px);
border: 1px solid getCssVar('border-color-lighter');
border-radius: to-rem(16px);
```

### 5.3 圆角

使用设计令牌中的标准值，不自行发明：

| 场景                       | 值                                                  |
| -------------------------- | --------------------------------------------------- |
| 通用组件（输入框、面板等） | `getCssVar('border-radius-base')` → `to-rem(4px)`   |
| 圆角按钮                   | `getCssVar('border-radius-round')` → `to-rem(20px)` |
| 底部弹层顶部               | `to-rem(20px) to-rem(20px) 0 0`                     |
| 圆形                       | `50%` 或 `getCssVar('border-radius-circle')`        |

**禁止**使用 `999px` 或 `9999px` 做"胶囊"效果（除非设计令牌 `border-radius-round` 本身如此定义）。

---

## 6. 底部弹层（Bottom Sheet）

### 6.1 实现方式

底部弹层不依赖新的 Portal/Teleport API，而是**复用 `el-tooltip` / `el-popper` 组件 + CSS 覆盖**将浮层改为贴底全宽。

### 6.2 标准 CSS 模式

```scss
@include e(popper) {
  position: fixed !important;
  inset: auto 0 0 0 !important;
  width: 100vw !important;
  max-width: 100vw !important;
  min-width: 0 !important;
  margin: 0 !important;
  border: none;
  border-radius: to-rem(24px) to-rem(24px) 0 0;
  box-shadow: 0 to-rem(-12px) to-rem(32px) rgba(0, 0, 0, 0.18);
  overflow: hidden;
  transform: none !important;

  .#{$namespace}-popper__arrow {
    display: none;
  }
}
```

### 6.3 已使用此模式的组件

| 组件                    | SCSS 文件                 | 选择器                              |
| ----------------------- | ------------------------- | ----------------------------------- |
| Cascader                | `cascader.scss`           | `.el-cascader__dropdown`            |
| DatePicker / TimePicker | `date-picker/picker.scss` | `.el-picker__popper`                |
| ColorPicker             | `color-picker.scss`       | `.el-color-picker__panel.el-popper` |
| Select / Select-v2      | `select.scss`             | `.el-select__popper`                |

### 6.4 内容区高度限制

弹层内部的滚动区域统一限制最大高度：

```scss
max-height: min(50vh, to-rem(420px)); // select-dropdown
max-height: min(45vh, to-rem(360px)); // cascader-menu
max-height: min(75vh, to-rem(720px)); // date-picker sheet
```

---

## 7. 滚动与分页

### 7.1 scroll-snap 横向分页

适用于多面板/多步骤场景（级联选择、穿梭框）。

**容器：**

```scss
display: flex;
overflow-x: auto;
scroll-snap-type: x mandatory;
scroll-behavior: smooth;
-webkit-overflow-scrolling: touch;

&::-webkit-scrollbar {
  display: none; // 隐藏滚动条，用 tab/indicator 指示
}
```

**子面板：**

```scss
flex: 0 0 100%;
min-width: 0; // 防止内容撑开
scroll-snap-align: start;
```

### 7.2 已使用此模式的组件

| 组件           | 方向 | 场景         |
| -------------- | ---- | ------------ |
| Cascader Panel | 横向 | 多级菜单     |
| Transfer       | 横向 | 左右面板切换 |
| Time Spinner   | 纵向 | 时间滚轮     |

### 7.3 配套的 Tab / Indicator

scroll-snap 面板通常搭配 Tab 栏 + 滑动指示器：

```scss
// tab 指示器
position: absolute;
bottom: 0;
left: 0;
width: 50%; // N 个 tab 则 100/N %
height: getCssVar('...-tab-indicator-height');
background: getCssVar('color-primary');
transition: transform getCssVar('transition-duration');
```

Vue composable 中通过 `scrollend` / `scroll` 事件同步 `activePanel` 状态。

---

## 8. 安全区适配

### 8.1 `env(safe-area-inset-*)`

贴边元素必须加安全区内边距，避免被刘海/圆角/Home Indicator 遮挡：

```scss
// 底部操作栏
padding-bottom: calc(env(safe-area-inset-bottom) + #{to-rem(12px)});

// 底部弹层内容区
padding: to-rem(12px) calc(env(safe-area-inset-right) + #{to-rem(16px)})
  calc(env(safe-area-inset-bottom) + #{to-rem(16px)})
  calc(env(safe-area-inset-left) + #{to-rem(16px)});
```

### 8.2 需要添加安全区的位置

| 位置                                                     | 安全区方向                                                                  |
| -------------------------------------------------------- | --------------------------------------------------------------------------- |
| 固定底栏（Header/Footer）                                | `safe-area-inset-top` / `safe-area-inset-bottom`                            |
| 底部弹层 padding                                         | `safe-area-inset-bottom` + `safe-area-inset-left` + `safe-area-inset-right` |
| 底部操作栏（transfer action-bar、select mobile-actions） | `safe-area-inset-bottom`                                                    |
| form-item 滚动偏移                                       | `scroll-margin-top` 避开顶部安全区                                          |

---

## 9. SCSS 结构约定

### 9.1 文件组织

每个组件的 SCSS 文件保持如下结构：

```scss
// 1. 引入依赖
@use 'mixins/mixins' as *;
@use 'mixins/utils' as *;
@use 'mixins/var' as *;
@use 'common/var' as *;

// 2. 注册 CSS 变量
@include b(component) {
  @include set-component-css-var('component', $component);
}

// 3. 组件样式（已经是移动端默认）
@include b(component) {
  // ...
}
```

> **不再保留桌面端第一段 + 移动端覆盖第二段的结构。** 本项目是纯移动端，所有样式直接写为移动端最终形态。

### 9.2 BEM 命名

严格遵循 Element Plus 的 BEM 约定：

- Block：`@include b(transfer) {}` → `.el-transfer`
- Element：`@include e(tab) {}` → `.el-transfer__tab`
- Modifier：`@include m(large) {}` → `.el-transfer--large`
- State：`@include when(active) {}` → `.el-transfer__tab.is-active`

### 9.3 审查要点

- [ ] 文件内无 hex 色值（`common/var.scss` 除外）
- [ ] 文件内无 `linear-gradient()` 硬编码
- [ ] 所有 px 尺寸已用 `to-rem()` 包裹（`1px` 边框除外）
- [ ] 可点击元素有 `@include touch-feedback`
- [ ] 列表项/选项有 `@include touch-target(48px)` 或等效 min-height
- [ ] 贴边元素有 safe-area 处理
- [ ] 圆角使用标准设计令牌，无 `999px`

---

## 10. 组件 API 改造原则

### 10.1 移除的桌面端 API

以下类型的 props 在移动端无意义，改造时应移除：

| 类别     | 示例                                                            |
| -------- | --------------------------------------------------------------- |
| 浮层定位 | `placement`、`fallbackPlacements`、`offset`、`popperOptions`    |
| 弹出容器 | `teleported`、`appendToBody`、`popperAppendToBody`              |
| 浮层箭头 | `showArrow`、`arrowOffset`                                      |
| 宽度适配 | `fitInputWidth`、`popperClass`（视情况）                        |
| 桌面交互 | `hoverThreshold`（cascader 已改为 0）、`expandTrigger: 'hover'` |

### 10.2 保留的 API

- 数据模型相关（`v-model`、`data`、`props`、`format`）
- 事件（`change`、`checked-change`、`left-check-change`、`right-check-change`）
- 插槽（`default`、`left-footer`、`right-footer`、`empty` 等）
- `expose` 方法（`clearQuery`、`leftPanel`、`rightPanel` 等）

### 10.3 新增的移动端交互

| 模式                     | 实现组件       | 说明                                               |
| ------------------------ | -------------- | -------------------------------------------------- |
| 底部操作栏（确认/取消）  | Select-v2 多选 | `confirmMobileSelection` / `cancelMobileSelection` |
| 底部操作栏（移动选中项） | Transfer       | 选中后出现底栏，点击按钮执行转移                   |
| 标签页切换               | Transfer       | `useTab` composable + scroll-snap                  |
| 草稿选择模型             | Select-v2 多选 | 展开时进入草稿态，确认后同步到 model               |

---

## 11. 测试改造要点

### 11.1 DOM 选择器更新

移动端改造通常会改变 DOM 结构，测试中的选择器需要同步更新：

```typescript
// ❌ 旧（桌面端 transfer 结构）
wrapper.find('.el-transfer-panel__header .el-checkbox__label')

// ✅ 新（移动端 tab 结构）
wrapper.find('.el-transfer__tab.is-active .el-transfer__tab-title')
```

### 11.2 交互测试

- 移除桌面/移动分支断言（如 `if (isMobile) ... else ...`）
- 移除 hover 事件测试，改为 click/touch 测试
- 测试底部操作栏的显示/隐藏及点击行为
- 测试 scroll-snap 面板切换（若通过 JS API 调用 `scrollToPanel`）

### 11.3 类型安全

确保 `defineExpose` 暴露的方法参数类型与实际调用处匹配：

```typescript
// 如果 el-checkbox change 事件 emit CheckboxValueType
// 则接收函数参数不能写 boolean
function handleAllCheckedChange(val: CheckboxValueType): void {
  // ...
}
```

---

## 12. 文档与示例

### 12.1 示例容器

所有文档示例使用简单限宽容器：

```vue
<template>
  <div class="demo-block">
    <el-component ... />
  </div>
</template>

<style scoped>
.demo-block {
  max-width: 28rem;
  margin: 0 auto;
}
</style>
```

### 12.2 示例风格禁令

- 禁止设备预览壳、状态栏、模拟手机边框、渐变舞台、发光背景等包装结构。
- 禁止为了“好看”额外添加卡片容器、说明面板、胶囊标签或复杂故事化内容。
- 示例局部样式只允许用于宽度、间距和必要的辅助对齐；不得重写组件视觉风格。
- 示例中的文字应直接描述当前行为，不使用“移动端优先”“mobile-first”“preview shell”等专题化措辞。

### 12.3 文档语言

- `docs/component/*.md` — 中文
- `docs/en-US/component/*.md` — 英文
- 两份文档结构保持同步

### 12.4 API 表格

文档中的 API 描述应反映移动端行为：

```markdown
<!-- ✅ 反映实际行为 -->

| button-texts | 自定义底部操作栏按钮文本 | ...

<!-- ❌ 沿用桌面描述 -->

| button-texts | 自定义左右穿梭按钮文本 | ...
```

---

## 13. 检查清单

对每个待改造组件，按以下清单逐项确认：

### 样式层

- [ ] `common/var.scss` 中组件变量已 rem 化
- [ ] 组件 SCSS 中无硬编码颜色
- [ ] 组件 SCSS 中无 `999px` 胶囊圆角
- [ ] 列表项/选项为扁平行样式，非卡片
- [ ] 可点击元素有 `touch-feedback` + `touch-target`
- [ ] `:hover` 改为 `:active` 或移除
- [ ] 贴底/贴边元素有 safe-area 处理
- [ ] 浮层改为 bottom sheet（fixed + inset）
- [ ] 滚动区域有 `-webkit-overflow-scrolling: touch`
- [ ] 隐藏自定义滚动条（`::-webkit-scrollbar { display: none }`）

### 组件层

- [ ] 移除桌面端专属 props（placement、teleported 等）
- [ ] 保留数据模型、事件、插槽的向后兼容
- [ ] 新增的 composable 放在 `src/composables/` 并从 `index.ts` 导出
- [ ] `defineExpose` 暴露的类型与调用处匹配
- [ ] 无新增 TypeScript 编译错误

### 测试层

- [ ] 选择器匹配新 DOM 结构
- [ ] 交互测试覆盖触控流程
- [ ] 所有既有测试通过

### 文档层

- [ ] 中英文文档同步更新
- [ ] 示例在 28rem 容器内展示
- [ ] 示例中无设备壳、装饰性渐变和与组件功能无关的样式包装
- [ ] 文案直接描述当前行为，无“mobile-first / 移动端优先 / preview shell”等措辞
- [ ] 示例与组件在暗色模式下均使用设计令牌，不依赖浅色硬编码
- [ ] API 描述反映移动端行为

---

## 14. 已知遗留问题

以下问题在已完成的批次中已被识别，后续改造中应留意并逐步解决：

| 问题                                    | 涉及文件                                       | 说明                                                            |
| --------------------------------------- | ---------------------------------------------- | --------------------------------------------------------------- |
| 底部弹层阴影值仍未抽成令牌              | `cascader.scss`、`select.scss`、`picker.scss`  | 仍应继续统一为可复用的 CSS 变量                                 |
| 色谱类功能渐变仍存在                    | `color-picker.scss`、`color-picker-panel.scss` | 这些渐变用于表达色相/透明度，不属于装饰背景，但审查时应避免误删 |
| CheckboxButton / RadioButton 移动端样式 | 未细化                                         | 按钮式复选/单选的触控表现仍可优化                               |
| 仓库级 `vue-tsc` 存量类型错误           | 多个组件                                       | 非改造引入，但应逐步清理                                        |

---

_最后更新：2026-04-01_
