<template>
  <el-scrollbar height="25rem">
    <p v-for="item in activities" :key="item" class="scrollbar-demo-item">
      {{ item }}
    </p>
  </el-scrollbar>
</template>

<script setup lang="ts">
const activities = Array.from(
  { length: 16 },
  (_, index) => `物流进度 ${index + 1}：包裹节点已更新`
)
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  min-height: 3rem;
  margin: 0.625rem;
  padding: 0 1rem;
  border-radius: 0.75rem;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
</style>
