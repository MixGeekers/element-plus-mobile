<template>
  <div class="m-4">
    <p>支持搜索，单选模式</p>
    <el-cascader placeholder="试试搜索：指南" :options="options" filterable />
  </div>
  <div class="m-4">
    <p>支持搜索，多选模式</p>
    <el-cascader
      placeholder="试试搜索：指南"
      :options="options"
      :props="props"
      filterable
    />
  </div>
</template>

<script lang="ts" setup>
import { cascaderDocOptions as options } from './options'

const props = {
  multiple: true,
}
</script>
