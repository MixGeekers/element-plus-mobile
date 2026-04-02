<template>
  <el-scrollbar height="25rem" @end-reached="loadMore">
    <p v-for="item in num" :key="item" class="scrollbar-demo-item">
      推荐内容 {{ item }}
    </p>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { ScrollbarDirection } from 'element-plus-mobile'

const num = ref(30)

const loadMore = (direction: ScrollbarDirection) => {
  if (direction === 'bottom') {
    num.value += 5
  }
}
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
