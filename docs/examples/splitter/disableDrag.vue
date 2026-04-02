<template>
  <el-space alignment="start">
    <div class="splitter-control">
      允许拖拽：<el-switch v-model="resizable" />
    </div>
    <div class="splitter-demo">
      <el-splitter>
        <el-splitter-panel>
          <div class="demo-panel panel-primary">订单概览</div>
        </el-splitter-panel>
        <el-splitter-panel :resizable="resizable">
          <div class="demo-panel panel-secondary">
            {{ resizable ? '当前可拖拽' : '当前锁定拖拽' }}
          </div>
        </el-splitter-panel>
        <el-splitter-panel>
          <div class="demo-panel panel-neutral">确认提交</div>
        </el-splitter-panel>
      </el-splitter>
    </div>
  </el-space>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const resizable = ref(false)
</script>

<style scoped>
.splitter-control {
  margin-bottom: 0.25rem;
}

.splitter-demo {
  height: min(70vh, 28rem);
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
