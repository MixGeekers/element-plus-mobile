<template>
  <el-space alignment="start" :size="30">
    <el-radio-group v-model="size">
      <el-radio value="large">宽松</el-radio>
      <el-radio value="default">标准</el-radio>
      <el-radio value="small">紧凑</el-radio>
    </el-radio-group>

    <el-space direction="horizontal" wrap :size="size">
      <el-tag v-for="tag in tags" :key="tag" class="space-chip">
        {{ tag }}
      </el-tag>
    </el-space>
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type { ComponentSize } from 'element-plus-mobile'

const size = ref<ComponentSize>('default')
const tags = ['待付款', '待发货', '配送中', '待评价', '售后中'] as const
</script>

<style scoped>
.space-chip {
  min-height: 2.25rem;
  padding-inline: 0.875rem;
}
</style>
