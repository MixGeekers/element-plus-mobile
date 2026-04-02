<template>
  <el-space class="space-stack">
    <div v-for="card in cards" :key="card.title" class="space-card">
      <div class="space-card__header">
        <span>{{ card.title }}</span>
        <el-button text>{{ card.action }}</el-button>
      </div>
      <div v-for="item in card.items" :key="item" class="space-card__item">
        {{ item }}
      </div>
    </div>
  </el-space>
</template>

<script setup lang="ts">
const cards = [
  {
    title: '待办事项',
    action: '继续处理',
    items: ['补充收货信息', '确认支付方式', '提交订单'],
  },
  {
    title: '收货地址',
    action: '切换地址',
    items: ['公司前台', '手机 138 0000 0000', '工作日 9:00 - 18:00'],
  },
  {
    title: '发票信息',
    action: '编辑抬头',
    items: ['企业普通发票', '抬头已认证', '邮箱自动发送'],
  },
] as const
</script>

<style scoped>
.space-stack {
  width: 100%;
}

.space-card {
  padding: 1rem;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 1rem;
  background: var(--el-fill-color-light);
}

.space-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75rem;
  font-weight: 600;
  color: var(--el-text-color-primary);
}

.space-card__item {
  margin-top: 0.5rem;
  color: var(--el-text-color-regular);
  line-height: 1.5;
}
</style>
