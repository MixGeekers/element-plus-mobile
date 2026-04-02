<template>
  <el-space alignment="start">
    <div class="splitter-control">
      允许折叠：<el-switch v-model="isCollapsible" />
    </div>
    <div class="splitter-demo">
      <el-splitter>
        <el-splitter-panel :collapsible="isCollapsible" min="50">
          <div class="demo-panel panel-primary">收货信息</div>
        </el-splitter-panel>
        <el-splitter-panel :collapsible="isCollapsible">
          <div class="demo-panel panel-secondary">配送方式</div>
        </el-splitter-panel>
        <el-splitter-panel>
          <div class="demo-panel panel-neutral">订单备注</div>
        </el-splitter-panel>
      </el-splitter>
    </div>
  </el-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isCollapsible = ref(true)
</script>

<style scoped>
.splitter-control {
  margin-bottom: 0.25rem;
}

.splitter-demo {
  height: min(70vh, 30rem);
  width: 100%;
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
