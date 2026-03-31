# 移动端改造指导文档

## 一、改造方向

本项目 Fork 自 Element Plus，目标是将其从桌面端组件库改造为**移动端专用**的 Vue 3 组件库。改造遵循以下核心方向：

1. **移动端专用**：去掉桌面端特有的交互逻辑（hover、鼠标拖拽等），只保留移动端所需的触控交互。
2. **rem 单位体系**：全面将 px 切换为 rem，通过根字号实现不同屏幕的自适应缩放。
3. **触控可达性**：所有可交互元素确保最小 44px（2.75rem）的点击区域，符合 iOS HIG 推荐标准。
4. **移动端布局优先**：布局组件默认纵向堆叠，断点收缩到手机/平板范围。

## 二、基础设施概览

改造并非逐组件手动替换数值，而是先建立了一套基础设施，后续所有组件改造都复用这些能力。

### 2.1 rem 根基准

在 `packages/theme-chalk/src/var.scss` 的 `:root` 中设置了根字号：

```scss
:root {
  font-size: 16px;
  -webkit-text-size-adjust: 100%;
}
```

所有 rem 值都基于 `1rem = 16px` 换算。

### 2.2 Sass 工具函数 `to-rem()`

位置：`packages/theme-chalk/src/mixins/function.scss`

```scss
@function to-rem($value, $base: 16px) {
  @if meta.type-of($value) == 'number' and math.is-unitless($value) {
    $value: $value * 1px;
  }
  @if meta.type-of($value) == 'number' and math.unit($value) == 'px' {
    @return math.div($value, $base) * 1rem;
  }
  @return $value;
}
```

在 SCSS 中直接 `to-rem(12px)` 即可得到 `0.75rem`，用于样式文件中的静态值转换。

### 2.3 TypeScript 工具函数 `pxToRem()`

位置：`packages/utils/dom/style.ts`

```ts
export function pxToRem(value?: string | number, base = 16) {
  if (!value && value !== 0) return ''
  if (isNumber(value) || isStringNumber(value)) {
    return formatRemValue(Number(value) / base)
  }
  if (isString(value)) {
    const trimmed = value.trim()
    if (trimmed.endsWith('px')) {
      return formatRemValue(Number.parseFloat(trimmed) / base)
    }
    return value
  }
  debugWarn(SCOPE, 'binding value must be a string or number')
  return ''
}
```

用于组件 JS/TS 运行时需要动态计算尺寸的场景（如 `Icon` 的 `size` prop、`Row`/`Col` 的 `gutter` 等）。

### 2.4 触控 mixin

位置：`packages/theme-chalk/src/mixins/mixins.scss`

```scss
@mixin touch-feedback($touch-action: manipulation) {
  -webkit-tap-highlight-color: transparent;
  touch-action: $touch-action;
}

@mixin touch-target($min-size: 44px) {
  min-width: to-rem($min-size);
  min-height: to-rem($min-size);
}
```

- `touch-feedback`：为可交互元素去掉默认高亮、声明触控行为。
- `touch-target`：保证最小点击区域。

### 2.5 构建层 postcss-pxtorem 兜底

位置：`packages/theme-chalk/buildfile.ts`

构建时对已改造的组件 CSS 文件执行一次 `postcss-pxtorem` 自动转换，作为**兜底**——即使 SCSS 源码中有遗漏的 px 值，构建产物也会是 rem。转换范围通过白名单 `mobileRemTargets` 控制，不会误伤尚未改造的组件。

### 2.6 全局 CSS 变量 rem 化

在 `packages/theme-chalk/src/common/var.scss` 中，以下全局变量已经从 px 切换为 rem：

| 变量组                   | 示例                                |
| ------------------------ | ----------------------------------- |
| `$font-size`             | `'base': to-rem(14px)` → `0.875rem` |
| `$border-radius`         | `'base': to-rem(4px)` → `0.25rem`   |
| `$common-component-size` | `'default': to-rem(32px)` → `2rem`  |

**例外**：`$border-width` 保持 `1px` 不转换，因为发丝线在移动端用 px 渲染更清晰，且全局大量 Sass 算术依赖它做减法，强行转 rem 会导致单位不兼容。

## 三、逐组件改造大体

### 3.1 样式层改造（SCSS）

每个组件的改造从对应的 SCSS 文件入手，改造项目如下：

| 改造项        | 做法                                         | 示例                               |
| ------------- | -------------------------------------------- | ---------------------------------- |
| px 硬编码值   | 用 `to-rem()` 包裹                           | `margin-left: to-rem(12px)`        |
| `:hover` 伪类 | 移除或改为 `:active`                         | `&:active { ... }`                 |
| 触控区域不足  | 加 `@include touch-feedback` 和 `min-height` | Button / Link                      |
| 布局方向      | 移动端默认纵向                               | Container `flex-direction: column` |

### 3.2 组件逻辑层改造（Vue/TS）

| 场景                | 做法                                 | 涉及组件                            |
| ------------------- | ------------------------------------ | ----------------------------------- |
| 动态内联 px 值      | 用 `pxToRem()` 替换 `addUnit()`      | Icon / Row / Col / Space / Splitter |
| 鼠标事件 → 触控事件 | 增加 `touchstart/touchmove/touchend` | Scrollbar / Splitter                |
| 桌面端推断逻辑      | 简化为移动端默认行为                 | Container（去掉 slot 推断方向）     |
| 响应式断点缩减      | 移除 `lg` / `xl` prop                | Col                                 |

### 3.3 测试层更新

- 涉及 px 硬编码断言的测试（如 `'10px'` → `'0.625rem'`）需要同步修改。
- 新增 touch 事件测试（如 Scrollbar、Splitter 的 touch 拖拽用例）。
- 旧测试中的 `lg` / `xl` 引用需要移除。

### 3.4 文档层同步

- `docs/examples/` 中使用了 `lg` / `xl` 的示例需要改写。
- `docs/en-US/component/` 中的 API 文档需要更新默认值和支持的断点。
- 涉及横向布局的 Container 示例需要加上 `direction="horizontal"`。

## 四、断点体系

原 Element Plus 使用 5 档桌面优先断点，改造后收缩为 3 档移动优先断点：

| 断点 | 改造前      | 改造后                     |
| ---- | ----------- | -------------------------- |
| `xs` | `< 768px`   | `< 480px`                  |
| `sm` | `>= 768px`  | `>= 480px`                 |
| `md` | `>= 992px`  | `>= 768px`                 |
| `lg` | `>= 1200px` | **已移除**（Col 不再支持） |
| `xl` | `>= 1920px` | **已移除**（Col 不再支持） |

Col 组件的 `lg` / `xl` props 已从类型定义中删除。如果使用方仍传入这两个 prop，不会报错但不会生效。

## 五、交互状态映射

| 桌面端状态                            | 移动端替代                                       | 说明                           |
| ------------------------------------- | ------------------------------------------------ | ------------------------------ |
| `:hover`                              | `:active`                                        | 按压时短暂变色                 |
| `mouseenter` / `mouseleave`           | `touchstart` / scroll 事件                       | Scrollbar 滚动条显隐           |
| `mousedown` → `mousemove` → `mouseup` | 同时增加 `touchstart` → `touchmove` → `touchend` | Scrollbar / Splitter 拖拽      |
| hover 下划线                          | 始终可见（半透明）                               | Link 的 `hover-underline` 模式 |

## 六、边界约定

1. **`$border-width` 保持 px**：1px 发丝线不做 rem 转换，避免全局 Sass 算术崩溃。
2. **button padding 在 Sass Map 中保持 px**：因为 `radio-button` 等其他组件会引用 `$button-padding-*` 做减法运算，在 Sass 层用 px 算完后，到实际输出时再用 `to-rem()` 包裹。
3. **postcss-pxtorem 只作用于白名单组件**：通过 `mobileRemTargets` 集合控制，未改造的组件不受影响。
4. **组件逻辑中 `addUnit()` 与 `pxToRem()` 共存**：已改造的组件用 `pxToRem()`，未改造的组件继续用 `addUnit()`，不要全局替换。

## 七、新组件改造检查清单

后续改造新组件时，按此清单逐项检查：

- [ ] SCSS 文件中所有 px 硬编码值是否用 `to-rem()` 包裹
- [ ] `:hover` 伪类是否已替换为 `:active` 或移除
- [ ] 可交互元素是否加了 `@include touch-feedback`
- [ ] 可点击元素是否满足最小 44px 触控区域
- [ ] 组件 Vue/TS 中动态内联样式是否用 `pxToRem()` 而非 `addUnit()`
- [ ] 如有鼠标拖拽逻辑，是否同时补了 touch 事件链
- [ ] 相关单元测试中的 px 断言是否同步改为 rem
- [ ] `docs/examples/` 中的示例是否适配了移动端
- [ ] `docs/en-US/component/` 中 API 文档的默认值是否更新
- [ ] 组件名称是否已加入 `buildfile.ts` 的 `mobileRemTargets` 白名单
