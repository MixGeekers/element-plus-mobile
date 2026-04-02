<template>
  <el-cascader
    :options="options"
    clearable
    :clear-icon="CloseBold"
    placeholder="使用自定义清空图标"
  />
</template>

<script lang="ts" setup>
import { cascaderSubsetOptions as options } from './options'
import CloseBold from '~icons/ep/close-bold'
</script>
