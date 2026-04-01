# NPM Release Checklist

## 发布目标

- 包名：`element-plus-mobile`
- 首发版本：`0.1.0`
- 仓库：`https://github.com/MixGeekers/element-plus-mobile`
- npm 用户：`mixgeeker`
- 正式发布方式：`GitHub Actions`
- 目标认证方式：`Trusted Publishing`

## 已完成的代码准备

- [x] 主包名从 `element-plus` 调整为 `element-plus-mobile`
- [x] 主包 `package.json` 对外元数据已切到新仓库与新 issues
- [x] `scripts/publish.sh` 已收敛为只发布主包
- [x] `scripts/update-version.ts` 已只更新主包版本
- [x] `publish-npm.yml` 已切到 Node `22.14.0` + npm `11.6.1`
- [x] `typings/global.d.ts` 已切到 `element-plus-mobile`
- [x] docs / play 的 Vite alias 已兼容 `element-plus-mobile`
- [x] npm 产物 README 已切到主包专用 README

## 验证结果

- [x] `pnpm build` 通过
- [x] `pnpm pack` 成功生成 `element-plus-mobile-0.1.0.tgz`
- [x] 临时项目安装 tarball 成功
- [x] 临时项目 TypeScript 校验通过
- [x] `dist/index.css` 与 `theme-chalk/index.css` 在安装后均可访问
- [x] `pnpm test` 通过
- [x] `pnpm lint` 通过

## 需要提交到 Git 的内容

- [ ] 提交当前代码改动
- [ ] 推送到 `MixGeekers/element-plus-mobile`
- [ ] 确认默认发布 workflow 文件名保持为 `.github/workflows/publish-npm.yml`

## 首次发布的重要说明

`element-plus-mobile` 是一个**全新未发布包**。按 npm 官方 Trusted Publishing 约束，通常需要**包先存在于 npm registry**，之后才能在该包设置页绑定 Trusted Publisher。

这意味着：

- 如果 registry 上还没有 `element-plus-mobile`
- 那么**第一次发包**大概率不能直接只靠 Trusted Publishing 完成

## 推荐首发路径

### 第一步：先完成一次首发

二选一：

1. 本地手动首发
   - `TAG_VERSION=0.1.0`
   - `GIT_HEAD=<当前提交 sha>`
   - `pnpm update:version`
   - `pnpm gen:version`
   - `pnpm build`
   - `cd dist/element-plus`
   - `pnpm publish --access public`

2. 临时改成 `NPM_TOKEN` 版 GitHub Actions 做一次首发
   - 仅用于第一次发布
   - 首发完成后再切回 Trusted Publishing

### 第二步：在 npm 后台配置 Trusted Publishing

完成首发后，在 npm 包 `element-plus-mobile` 的设置页配置 Trusted Publisher：

- Provider：`GitHub Actions`
- Owner / Organization：`MixGeekers`
- Repository：`element-plus-mobile`
- Workflow filename：`publish-npm.yml`

## 首发当天建议操作顺序

1. 先提交并推送当前改动
2. 确认 npm 上 `element-plus-mobile` 名称仍可用
3. 完成第一次首发
4. 在 npm 后台绑定 Trusted Publisher
5. 从第二次版本开始，直接走 GitHub Release 自动发布

## 第二次及后续版本发布

当 Trusted Publishing 配置完成后，后续版本按以下方式发布：

1. 更新代码并合并到目标分支
2. 创建 Git tag，例如 `v0.1.1`
3. 在 GitHub 发布 Release
4. `publish-npm.yml` 自动执行：
   - `pnpm i --frozen-lockfile`
   - `pnpm lint`
   - `pnpm test`
   - `sh ./scripts/publish.sh`

补充说明：

- `publish-npm.yml` 当前监听的是 `release.published`
- 这意味着既支持直接发布 Release，也支持先保存 draft 再点击 Publish
- 发布链路会自动把 tag `v0.1.1` 规范化为 npm 版本 `0.1.1`

## 发布前人工确认项

- [ ] npm 账号 `mixgeeker` 已完成邮箱验证 / 2FA 配置
- [ ] GitHub 仓库 URL 正确：`https://github.com/MixGeekers/element-plus-mobile`
- [ ] issues URL 正确：`https://github.com/MixGeekers/element-plus-mobile/issues`
- [ ] 发布 tag 使用 `v0.1.0` 这种带 `v` 的格式
- [ ] 已确认 `.github/workflows/publish-npm.yml` 使用 `release.published`
- [ ] `element-plus-mobile` 首次发布后立即补配 Trusted Publisher
