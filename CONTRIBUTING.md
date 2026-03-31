# 贡献指南

## 提交 Issue

- 在创建 Issue 之前，请先搜索关键字，确认同类问题是否已经被报告。
- Issue 应通过 [Issue Template](https://issue.element-plus.org/) 提交，并尽量补充完整的复现信息，方便维护者定位和修复。
- 信息不足、无法复现的问题会被直接关闭。
- 功能需求请优先提交到 [RFCs](https://github.com/element-plus/rfcs/issues)，这样更方便统一管理。

以下内容面向希望参与 Element Plus 开发的贡献者。

## 环境要求

建议准备以下环境：

- Node.js >= 20.19.0
- pnpm >= 10.32.0
- Git > 2.20

仓库中的部分构建代码依赖 Node.js 20.19.0 及以上版本，请不要使用更低版本。

## 克隆仓库

1. 在仓库主页右上角点击 Fork。
2. 将项目下载到本地。
3. 进入项目目录并安装依赖。

```shell
cd $THE_PROJECT_PATH_YOU_DOWNLOADED
pnpm install
```

## 验证安装

安装完成后，可以执行以下命令确认环境是否正常：

```shell
pnpm test
pnpm format
```

## 开始开发

### 修改文档站点

如果你要修改 `https://element-plus.org` 对应的文档站点源码，可以执行：

```shell
pnpm docs:gen-locale
pnpm docs:dev
```

`docs:gen-locale` 会在本地生成文档站开发所需的语言文件。

### 修改组件代码

如果你要调试组件实现，而不是网站本身，可以运行本地演示环境：

```shell
pnpm dev
```

更多细节可参考 [LOCAL DEVELOPMENT GUIDE](https://element-plus.org/en-US/guide/dev-guide.html)。

### 编译源码

如果你要在本地编译最终发布产物，可以执行：

```shell
pnpm build
```

### 编译文档站点

如果你要构建文档站静态文件，可以执行：

```shell
pnpm docs:build
```

## Pull Request

完成开发后，请至少确认以下事项：

1. 测试覆盖了你的改动场景。
2. 如果修改了 API，同步更新相关文档。
3. 提交信息清晰完整。
4. 将本地改动推送到你的远端仓库，并向上游发起 Pull Request。
5. 在 PR 描述中补充改动背景和上下文，方便审阅。

## Commit 规范

仓库提供了提交信息生成工具，你可以直接运行：

```bash
pnpm cz
```

也可以手写提交信息，但必须遵循仓库约定。提交示例可参考：

- [commit template](https://element-plus.org/en-US/guide/commit-examples.html)

注意：
提交信息不符合规范的 PR 不会被接受。

以上就是贡献流程说明。
