<template>
  <el-space>
    <div v-for="section in sections" :key="section.title" class="space-card">
      <div class="space-card__title">{{ section.title }}</div>
      <div class="space-card__desc">{{ section.desc }}</div>
    </div>
  </el-space>
</template>

<script setup lang="ts">
const sections = [
  { title: '支付方式', desc: '银行卡、余额与优惠券自动组合。' },
  { title: '配送信息', desc: '仅在主内容区滚动查看详情。' },
] as const
</script>

<style scoped>
.space-card {
  padding: 1rem;
  border-radius: 1rem;
  background: var(--el-fill-color-light);
  border: 1px solid var(--el-border-color-lighter);
}

.space-card__title {
  font-weight: 600;
}

.space-card__desc {
  margin-top: 0.5rem;
  color: var(--el-text-color-regular);
}
</style>
