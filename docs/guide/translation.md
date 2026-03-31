---
title: 翻译
lang: zh-CN
---

# 翻译

## 维护方式

当前文档站采用“中文主源，其他语言翻译”的维护方式。

- `docs/index.md`、`docs/guide/*`、`docs/component/*`、`docs/resource/*` 维护中文正文。
- `docs/en-US/*` 保留英文镜像，用于英文站点构建与搜索索引。
- `.vitepress/crowdin/zh-CN/*` 维护站点 UI 文案，`en-US` 等语言通过 Crowdin 同步。

这样做可以让默认访问体验保持中文，同时减少多语言内容在仓库中的重复维护成本。

## 如何贡献中文文档

如果你想改进中文正文或站点中文文案，请直接提交仓库 PR。

1. Fork 仓库并创建分支。
2. 修改中文文档或 `.vitepress/crowdin/zh-CN` 下的中文文案。
3. 提交 PR，并在说明中写清楚影响页面。
4. 合并后，英文和其他语言会再通过翻译流程同步。

## 如何贡献英文或其他语言翻译

如果你想帮助完善英文或其他语言，请使用 Crowdin。

1. 在 [Crowdin](https://crowdin.com) 创建账号，建议使用 GitHub 登录。
2. 打开 [Element Plus](https://crowdin.com/project/element-plus) 项目。
3. 选择你想参与的目标语言。
4. 找到对应文件并提交翻译。

翻译在校对通过后即可进入同步流程。

## 如何成为校对者

如果你希望成为某个语言的校对者，可以在 Crowdin 的讨论区发起申请：
[Crowdin Discussions](https://crowdin.com/project/element-plus/discussions)
