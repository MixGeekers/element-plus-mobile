<template>
  <el-scrollbar>
    <div class="scrollbar-flex-content">
      <p v-for="item in quickActions" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </el-scrollbar>
</template>

<script setup lang="ts">
const quickActions = [
  '待付款',
  '待发货',
  '待收货',
  '退款中',
  '常用地址',
  '优惠券',
  '发票信息',
  '客服中心',
] as const
</script>

<style scoped>
.scrollbar-flex-content {
  display: flex;
  width: fit-content;
}

.scrollbar-demo-item {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 6.5rem;
  min-height: 3rem;
  margin: 0.625rem;
  text-align: center;
  border-radius: 0.75rem;
  background: var(--el-color-danger-light-9);
  color: var(--el-color-danger);
}
</style>
