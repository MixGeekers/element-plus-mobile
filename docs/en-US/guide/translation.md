---
title: Translation
lang: en-US
---

# Translation

## How The Docs Are Maintained

The docs site now uses a Chinese-first workflow.

- `docs/index.md`, `docs/guide/*`, `docs/component/*`, and `docs/resource/*` are the Chinese source files.
- `docs/en-US/*` is the English mirror used for the English site and search indexing.
- `.vitepress/crowdin/zh-CN/*` contains the source UI copy for the docs app.
- English and other locales are synchronized through Crowdin.

This keeps the default site experience in Chinese while still preserving a complete English build.

## How To Contribute Chinese Docs

If you want to improve the source documentation, submit a GitHub pull request directly.

1. Fork the repository and create a branch.
2. Update the Chinese markdown files or `.vitepress/crowdin/zh-CN` UI copy.
3. Open a PR and describe the affected pages.
4. After merge, translations can be synchronized on top of the updated Chinese source.

## How To Contribute English Or Other Translations

If you want to help with English or other translated locales, use Crowdin.

1. Create an account on [Crowdin](https://crowdin.com), preferably with GitHub sign-in.
2. Open the [Element Plus](https://crowdin.com/project/element-plus) project.
3. Choose the target language you want to help with.
4. Find the relevant file and submit the translation.

Once a translation is approved by a proofreader, it can be synchronized back into the docs workflow.

## How To Become A Proofreader

If you want to become a proofreader for a language, open a request in Crowdin Discussions:
[Crowdin Discussions](https://crowdin.com/project/element-plus/discussions)
