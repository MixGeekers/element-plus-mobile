---
title: 颜色
lang: zh-CN
---

# 颜色

Element Plus 使用一组特定的调色板来指定颜色，以为您构建的产品提供一致的外观和感觉。

<style lang="scss">
.demo-color-box {
  position: relative;
  border-radius: 4px;
  padding: 20px;
  margin: 8px 0;
  height: 112px;
  box-sizing: border-box;
  color: var(--el-color-white);
  font-size: 14px;

  .bg-color-sub {
    width: 100%;
    height: 40px;
    left: 0;
    bottom: 0;
    position: absolute;

    .bg-blue-sub-item {
      height: 100%;
      display: inline-block;

      &:first-child {
        border-radius: 0 0 0 var(--el-border-radius-base);
      }
    }

    .bg-secondary-sub-item {
      height: 100%;
      display: inline-block;
      &:first-child {
        border-radius: 0 0 0 var(--el-border-radius-base);
      }
    }
  }

  .value {
    margin-top: 2px;
  }
}

.demo-color-box-lite {
  color: var(--el-text-color-primary);
}
</style>

## 主色

Element Plus的主色调是明亮友好的蓝色。

<!-- 请勿触摸 -->
<ClientOnly>
  <MainColor />
</ClientOnly>

## 辅助颜色

除了主色外，不同场景还需要使用不同的场景颜色（例如危险颜色表示危险操作）

<!-- 请勿触摸 -->
<ClientOnly>
  <SecondaryColors />
</ClientOnly>

## 中性色

中性色适用于文本、背景和边框颜色。您可以使用不同的中性颜色来表示层次结构。

<!-- 请勿触摸 -->
<ClientOnly>
  <NeutralColor />
</ClientOnly>
