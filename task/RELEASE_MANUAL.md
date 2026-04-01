# Release Manual

## 适用范围

本文档用于 `element-plus-mobile` 在**已经完成首发**并且**已经配置好 npm Trusted Publishing** 之后的正式发版。

当前正式发版链路：

- GitHub 触发源：`Release published`
- 发布 workflow：`.github/workflows/publish-npm.yml`
- 实际发布脚本：`scripts/publish.sh`
- npm 包名：`element-plus-mobile`

## 发布前检查

发版前先确认以下事项：

1. 当前要发布的代码已经合并到目标分支
2. 本地没有遗漏的未提交改动
3. 需要进入本次版本的修复和功能都已完成
4. npm Trusted Publishing 仍然绑定到当前仓库和当前 workflow
5. GitHub Actions 没有被禁用

建议额外人工确认：

- npm 包页面为 `element-plus-mobile`
- GitHub 仓库为 `MixGeekers/element-plus-mobile`
- workflow 文件名仍为 `.github/workflows/publish-npm.yml`
- 发布版本号遵循 semver

## 版本号规则

发布时请使用 Git tag：

- `v0.1.1`
- `v0.2.0`
- `v1.0.0`

注意：

- Git tag 保留 `v` 前缀
- 发布脚本会自动将 `v0.1.1` 规范化为 npm 版本 `0.1.1`
- 不要把 npm 版本写成 `v0.1.1`

## 标准发版步骤

### 1. 更新并检查本地代码

```bash
git checkout dev
git pull origin dev
git status
```

确认工作区干净后，再开始发版。

### 2. 创建并推送 tag

把下面的版本号替换为本次实际版本：

```bash
git tag v0.1.1
git push origin v0.1.1
```

如果你习惯附带注释，也可以使用：

```bash
git tag -a v0.1.1 -m "release: v0.1.1"
git push origin v0.1.1
```

### 3. 在 GitHub 发布 Release

在 GitHub 仓库中：

1. 打开 `Releases`
2. 选择 `Draft a new release` 或基于刚推送的 tag 创建 Release
3. 选择 tag：`v0.1.1`
4. 填写标题，建议直接使用：`v0.1.1`
5. 补充本次更新说明
6. 点击 `Publish release`

注意：

- 当前 workflow 监听的是 `release.published`
- 所以你可以直接发布 Release，也可以先保存 draft，确认内容后再点击 Publish
- 真正触发 npm 发布的是“发布 Release”这个动作

## 发布后自动执行内容

Release 发布后，GitHub Actions 会自动执行：

1. `pnpm i --frozen-lockfile`
2. `pnpm lint`
3. `pnpm test`
4. `pnpm update:version`
5. `pnpm gen:version`
6. `pnpm build`
7. 进入 `dist/element-plus`
8. 执行 `pnpm publish --access public --no-git-checks`

如果 `lint` 或 `test` 失败，本次发布会中断，不会继续发到 npm。

## 发布后验证

Release 发布后，建议按下面顺序检查：

1. GitHub Actions 中 `Publish to NPM registry` workflow 通过
2. npm 包页面出现新版本
3. 用临时目录安装新版本验证

安装验证示例：

```bash
pnpm add element-plus-mobile@0.1.1
```

需要重点确认：

- 包可以正常安装
- `dist/index.css` 可访问
- `theme-chalk/index.css` 可访问
- 基础组件导入正常

## 常见失败排查

### 1. Release 发了，但 workflow 没跑

优先检查：

- 是否真的点击了 `Publish release`
- workflow 文件名是否还是 `publish-npm.yml`
- GitHub Actions 是否被禁用

### 2. workflow 跑了，但 npm 没发布成功

优先检查：

- npm Trusted Publishing 是否仍然有效
- npm 包权限是否正常
- 当前版本号是否已存在于 npm

### 3. 版本号异常

正确规则是：

- tag：`v0.1.1`
- npm version：`0.1.1`

如果看到 npm 版本带 `v`，说明发布链路的版本规范化出现了问题，应先停止继续发版并检查 `scripts/update-version.ts`。

## 回滚与补救建议

如果 Release 已发布但 npm 发布失败：

1. 先不要重复创建新版本号
2. 先查看 GitHub Actions 日志定位失败点
3. 修复问题后，重新创建一个新版本发版

建议不要复用已经失败过的同一个 semver 版本号。

## 推荐的发布说明模板

```md
## Highlights

- 修复若干组件问题
- 优化移动端交互与样式表现
- 更新发布链路稳定性

## Notes

- 本版本通过 GitHub Release 自动发布到 npm
```
