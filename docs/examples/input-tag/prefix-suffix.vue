<template>
  <el-input-tag v-model="input" clearable placeholder="Please input">
    <template #prefix>
      <el-icon><ElementPlus /></el-icon>
    </template>
    <template #suffix>
      <el-icon><Search /></el-icon>
    </template>
  </el-input-tag>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ElementPlus from '~icons/ep/element-plus'
import Search from '~icons/ep/search'

const input = ref<string[]>()
</script>
