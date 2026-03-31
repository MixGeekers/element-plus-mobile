---
title: 提交示例
lang: zh-CN
---

# 提交示例

## 为什么本章存在

更多信息请参考[常规提交](https://www.conventionalcommits.org/)。

良好的提交消息使我们能够：

1. 了解贡献者想要做什么2.自动生成变更日志

### 提交消息的写入规则

```md
# (If applied, this commit will...) <subject> (Max 72 characters)

# |<---- Using a Maximum Of 72 Characters ---->|

# Explain why this change is being made

# |<---- Try To Limit Each Line to a Maximum Of 72 Characters ---->|

# Provide links or keys to any relevant tickets, articles or other resources

# Use issues and merge requests' full URLs instead of short references,

# as they are displayed as plain text outside of GitLab

# --- COMMIT END ---

# --------------------

# Remember to

# Capitalize the subject line

# Use the imperative mood in the subject line

# Do not end the subject line with a period

# Subject must contain at least 3 words

# Separate subject from body with a blank line

# Commits that change 30 or more lines across at least 3 files should

# describe these changes in the commit body

# Do not use Emojis

# Use the body to explain what and why vs. how

# Can use multiple lines with "-" for bullet points in body

# For more information: https://chris.beams.io/posts/git-commit/

# --------------------
```

### 提交消息模板

以下是模板提交消息供您参考。

```md
feat(components): [button] I did something with button

Blank between subject and body is expected.(period is expected)
Describes your change in one line or multi-line.
Capitalize your first letter when starting a new line
Please do not exceeds 72 characters per line, because that would be harder to comprehend.

- You can also add bullet list symbol for better layout
```

对于主题标头，格式为：

```
[type](scope): [messages]
```

您可以在 [commitlint.config.js](https://github.com/element-plus/element-plus/blob/c2ee36a7fc72b17742d43ecdff4e2912c416141d/commitlint.config.js#L57) 中查看 **type** 和 **scope** 的允许值，

### 有用的链接

[保持 git 提交历史记录干净](https://about.gitlab.com/blog/2018/06/07/keeping-git-commit-history-clean/)
