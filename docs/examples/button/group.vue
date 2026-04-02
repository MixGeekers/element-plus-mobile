<template>
  <div class="group-example">
    <el-text size="small">默认纵向，适合操作列表。</el-text>
    <el-button-group>
      <el-button type="primary" :icon="House">进入首页</el-button>
      <el-button type="primary" :icon="Operation">筛选条件</el-button>
      <el-button type="primary" :icon="Notification">消息提醒</el-button>
    </el-button-group>

    <el-text size="small">如果是底部双按钮栏，可显式设置为横向。</el-text>
    <el-button-group direction="horizontal">
      <el-button :icon="ArrowLeft">稍后处理</el-button>
      <el-button type="primary">
        立即提交<el-icon class="el-icon--right"><ArrowRight /></el-icon>
      </el-button>
    </el-button-group>
  </div>
</template>

<script setup lang="ts">
import ArrowLeft from '~icons/ep/arrow-left'
import ArrowRight from '~icons/ep/arrow-right'
import House from '~icons/ep/house'
import Notification from '~icons/ep/notification'
import Operation from '~icons/ep/operation'
</script>

<style scoped>
.group-example {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}
</style>
