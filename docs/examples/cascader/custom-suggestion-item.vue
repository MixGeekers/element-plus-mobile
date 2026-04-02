<template>
  <el-cascader :options="options" filterable placeholder="试试搜索：指南">
    <template #suggestion-item="{ item }">
      <span>🔍 {{ item.pathLabels.join(' > ') }}</span>
    </template>
  </el-cascader>
</template>

<script lang="ts" setup>
import { cascaderDocOptions as options } from './options'
</script>
