<template>
  <el-space alignment="start">
    <div class="space-control">填充比例：<el-slider v-model="fillRatio" /></div>
    <el-space
      fill
      wrap
      direction="horizontal"
      :fill-ratio="fillRatio"
      class="fill-ratio-demo"
    >
      <div v-for="item in items" :key="item.title" class="ratio-card">
        <div class="ratio-card__title">{{ item.title }}</div>
        <div class="ratio-card__desc">{{ item.desc }}</div>
      </div>
    </el-space>
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const fillRatio = ref(30)
const items = [
  { title: '地址确认', desc: '先确认配送信息。' },
  { title: '支付方式', desc: '再确认支付渠道。' },
  { title: '订单提交', desc: '最后完成提交。' },
] as const
</script>

<style scoped>
.space-control,
.fill-ratio-demo {
  width: 100%;
}

.ratio-card {
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid var(--el-border-color-lighter);
  background: var(--el-fill-color-light);
}

.ratio-card__title {
  font-weight: 600;
  color: var(--el-text-color-primary);
}

.ratio-card__desc {
  margin-top: 0.5rem;
  color: var(--el-text-color-regular);
}
</style>
