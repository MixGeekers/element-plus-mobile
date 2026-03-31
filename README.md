<p align="center">
  <img width="300px" src="https://user-images.githubusercontent.com/10731096/95823103-9ce15780-0d5f-11eb-8010-1bd1b5910d4f.png">
</p>

<p align="center">
  <a href="https://github.com/MixGeekers/element-plus-mobile">
    <img src="https://img.shields.io/badge/node-%20%3E%3D%2020-47c219" />
  </a>
  <a href="https://github.com/MixGeekers/element-plus-mobile">
    <img src="https://img.shields.io/badge/vue-%5E3.0-42b883" />
  </a>
  <a href="https://github.com/MixGeekers/element-plus-mobile/blob/main/LICENSE">
    <img src="https://img.shields.io/badge/license-MIT-blue" />
  </a>
</p>

<p align="center">Element Plus Mobile —— 基于 Element Plus 二次开发的移动端 Vue 3 组件库</p>

## 项目简介

本项目 Fork 自 [Element Plus](https://github.com/element-plus/element-plus)，目标是在其基础上构建一套**适配移动端（H5）场景**的 UI 组件库。

主要差异和目标：

- 针对触控交互进行组件适配与重新设计
- 样式风格向移动端靠拢（更大的点击区域、适配小屏幕的布局）
- 保留 Element Plus 的 TypeScript + Vue 3 Composition API 技术栈

## 技术栈

- Vue 3 Composition API
- TypeScript
- Vite
- pnpm Workspace（Monorepo）

## 本地开发

### 环境要求

- Node.js >= 20
- pnpm >= 10

### 安装依赖

```bash
pnpm install
```

### 安装主包

```bash
npm install element-plus-mobile
```

### 启动开发预览

```bash
pnpm dev
```

### 构建组件库

```bash
pnpm build
```

### 运行单元测试

```bash
pnpm test
```

## 仓库结构

详见 [STRUCTURE.zh-CN.md](./STRUCTURE.zh-CN.md)，核心目录如下：

```
packages/
  components/     # 组件源码
  theme-chalk/    # 样式（CSS/SCSS）
  utils/          # 工具函数
  locale/         # 国际化
play/             # 本地组件调试环境
docs/             # 组件文档（VitePress）
internal/         # 构建工具脚本
```

## 开发规范

参与组件开发前请阅读以下文档：

- [CONTRIBUTING.md](./CONTRIBUTING.md) — 贡献指南
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) — 行为准则
- [STRUCTURE.zh-CN.md](./STRUCTURE.zh-CN.md) — 项目结构说明

## 与上游同步

本项目基于 Element Plus `dev` 分支 Fork。如需同步上游变更：

```bash
git remote add upstream https://github.com/element-plus/element-plus.git
git fetch upstream
git merge upstream/dev
```

> 合并前请注意处理移动端适配相关的代码冲突。

## 许可证

本项目基于 Element Plus，遵循 [MIT License](https://github.com/MixGeekers/element-plus-mobile/blob/main/LICENSE)。
