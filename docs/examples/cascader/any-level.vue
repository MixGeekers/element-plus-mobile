<template>
  <div class="m-4">
    <p>任意层级可选，单选模式</p>
    <el-cascader :options="options" :props="props1" clearable />
  </div>
  <div class="m-4">
    <p>任意层级可选，多选模式</p>
    <el-cascader :options="options" :props="props2" clearable />
  </div>
</template>

<script lang="ts" setup>
import { cascaderDocOptions as options } from './options'

const props1 = {
  checkStrictly: true,
}

const props2 = {
  multiple: true,
  checkStrictly: true,
}
</script>
