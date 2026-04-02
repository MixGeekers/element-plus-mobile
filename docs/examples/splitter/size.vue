<template>
  <div class="splitter-demo">
    <el-splitter
      @resize-start="handleResizeStart"
      @resize-end="handleResizeEnd"
      @resize="handleResize"
    >
      <el-splitter-panel>
        <div class="demo-panel panel-primary">订单摘要</div>
      </el-splitter-panel>
      <el-splitter-panel v-model:size="size" :max="200" :min="50">
        <div class="demo-panel panel-secondary">{{ size }}px 内容区</div>
      </el-splitter-panel>
      <el-splitter-panel>
        <div class="demo-panel panel-neutral">附加说明</div>
      </el-splitter-panel>
    </el-splitter>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const size = ref(100)

const handleResizeStart = (index: number, sizes: number[]) => {
  console.log('resizeStart', index, sizes)
}

const handleResize = (index: number, sizes: number[]) => {
  console.log('resize', index, sizes)
}

const handleResizeEnd = (index: number, sizes: number[]) => {
  console.log('resizeEnd', index, sizes)
}
</script>

<style scoped>
.splitter-demo {
  height: min(70vh, 28rem);
  overflow: hidden;
  border-radius: 1rem;
  border: 1px solid var(--el-border-color-lighter);
  background: var(--el-bg-color);
}

.demo-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 1rem;
  font-weight: 600;
}

.panel-primary {
  background: var(--el-fill-color-light);
}

.panel-secondary {
  background: var(--el-color-primary-light-9);
}

.panel-neutral {
  background: var(--el-fill-color);
}
</style>
