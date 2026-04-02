<template>
  <div class="splitter-demo">
    <el-splitter lazy>
      <el-splitter-panel collapsible min="50">
        <div class="demo-panel panel-primary">订单信息</div>
      </el-splitter-panel>
      <el-splitter-panel collapsible>
        <div class="demo-panel panel-secondary">配送时段</div>
      </el-splitter-panel>
      <el-splitter-panel collapsible>
        <div class="demo-panel panel-neutral">发票备注</div>
      </el-splitter-panel>
    </el-splitter>
  </div>
</template>

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
