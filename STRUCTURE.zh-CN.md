# 仓库结构说明

## 总览

当前远端仓库地址是 `MixGeekers/element-mobile`，但仓库内容本身仍然保留了 `element-plus` 的 monorepo 组织方式，所以目录命名、包名、文档链接大多还是 `element-plus`。

整个项目可以理解为四层：

1. `packages/`：组件库本体与运行时相关包。
2. `internal/`：构建、元数据、eslint 配置等内部工具链。
3. `docs/` 与 `play/`：文档站和本地演示环境。
4. `scripts/`、`breakings/`、`ssr-testing/`：辅助脚本、升级说明和测试支持。

## 关键目录

### `packages/`

- `packages/element-plus`：最终对外发布的 `element-plus` 包，负责导出入口、类型、安装器与产物声明。
- `packages/components`：所有组件注册与组件级入口聚合层。
- `packages/hooks`：通用组合式逻辑，例如浮层、弹层、命名空间、滚动锁等。
- `packages/directives`：指令层，例如点击外部、滚轮、重复点击。
- `packages/utils`：跨组件复用的工具函数、DOM 工具、Vue 工具与类型辅助。
- `packages/constants`：常量定义。
- `packages/locale`：语言包。
- `packages/theme-chalk`：样式主题与构建产物。
- `packages/test-utils`：测试辅助函数。

### `internal/`

- `internal/build`：主构建入口，负责打包流程。
- `internal/build-utils`：构建辅助工具。
- `internal/build-constants`：构建阶段共用常量。
- `internal/metadata`：生成文档和组件元数据。
- `internal/eslint-config`：仓库内部共用 ESLint 配置。

### `docs/`

这是 VitePress 文档站源码。

- `docs/en-US`：英文文档源文件。
- `docs/examples`：组件示例源码，文档页面会直接引用这些示例。
- `docs/.vitepress`：VitePress 配置、自定义主题、插件和文档构建脚本。
- `docs/.vitepress/crowdin`：文档国际化中间文件来源。
- `docs/.vitepress/build/crowdin-generate.ts`：本地开发时把 Crowdin 语言文件转换成站点可用格式。

这意味着当前仓库的“中文文档”并不是简单的 `docs/zh-CN` 静态目录，而是依赖生成链路。

### `play/`

本地组件调试 playground。改组件时通常先跑这个目录对应的开发服务。

### 其他目录

- `scripts/`：版本同步、语言同步、发布等脚本。
- `breakings/`：破坏性变更记录。
- `ssr-testing/`：SSR 相关测试配置。
- `typings/`：全局类型和测试类型补充声明。
- `.github/`：CI、发布、PR 和 Issue 工作流。

## 依赖关系

这个仓库是一个 `pnpm workspace` monorepo：

- `workspace:*` / `workspace:^` 表示仓库内部包之间的本地联动依赖。
- 根目录 `package.json` 负责统一脚本入口。
- `docs/`、`play/`、`internal/*`、`packages/*` 共同组成一个工作区。

我已经把原先大量使用的 `catalog:` 版本别名改成了明确版本号，这样看依赖时更直观，也更容易迁移到其他包管理器的等价写法；但仓库的脚本体系依然基于 `pnpm`，所以实际开发和构建仍建议使用 `pnpm`。

## 常用命令

```bash
pnpm install
pnpm dev
pnpm docs:dev
pnpm build
pnpm test
```

## 阅读顺序建议

如果你是第一次看这个仓库，建议按下面顺序阅读：

1. `README.md`
2. `STRUCTURE.zh-CN.md`
3. `package.json`
4. `packages/element-plus/`
5. `packages/components/`
6. `docs/.vitepress/`
