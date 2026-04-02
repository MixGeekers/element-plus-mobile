<template>
  <el-space alignment="start">
    <div class="space-control">自动铺满：<el-switch v-model="fill" /></div>
    <el-space direction="horizontal" :fill="fill" wrap class="fill-demo">
      <div v-for="item in items" :key="item.title" class="fill-card">
        <div class="fill-card__title">{{ item.title }}</div>
        <div class="fill-card__desc">{{ item.desc }}</div>
      </div>
    </el-space>
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const fill = ref(true)
const items = [
  { title: '地址确认', desc: '核对收货信息后进入下一步。' },
  { title: '支付方式', desc: '支持银行卡、钱包与优惠券组合。' },
  { title: '提交订单', desc: '确认后直接发起支付。' },
] as const
</script>

<style scoped>
.space-control {
  margin-bottom: 0.25rem;
}

.fill-demo {
  width: 100%;
}

.fill-card {
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid var(--el-border-color-lighter);
  background: var(--el-fill-color-light);
}

.fill-card__title {
  font-weight: 600;
  color: var(--el-text-color-primary);
}

.fill-card__desc {
  margin-top: 0.5rem;
  color: var(--el-text-color-regular);
  line-height: 1.5;
}
</style>
