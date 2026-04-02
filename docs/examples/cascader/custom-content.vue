<template>
  <el-cascader :options="options">
    <template #default="{ node, data }">
      <span>{{ data.label }}</span>
      <span v-if="!node.isLeaf"> ({{ data.children.length }}) </span>
    </template>
  </el-cascader>
</template>

<script lang="ts" setup>
import { cascaderDocOptions as options } from './options'
</script>
