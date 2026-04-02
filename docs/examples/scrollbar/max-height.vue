<template>
  <div class="scrollbar-actions">
    <el-button @click="add">新增节点</el-button>
    <el-button @click="onDelete">删除节点</el-button>
  </div>
  <el-scrollbar max-height="25rem">
    <p v-for="item in count" :key="item" class="scrollbar-demo-item">
      配送步骤 {{ item }}
    </p>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const count = ref(3)

const add = () => {
  count.value++
}
const onDelete = () => {
  if (count.value > 0) {
    count.value--
  }
}
</script>

<style scoped>
.scrollbar-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 0.75rem;
}

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
