<template>
  <div class="m-4">
    <p>显示全部标签，默认模式</p>
    <el-cascader :options="options" :props="props" clearable />
  </div>
  <div class="m-4">
    <p>折叠标签</p>
    <el-cascader :options="options" :props="props" collapse-tags clearable />
  </div>
  <div class="m-4">
    <p>折叠标签并展示提示</p>
    <el-cascader
      :options="options"
      :props="props"
      collapse-tags
      collapse-tags-tooltip
      clearable
    />
  </div>
  <div class="m-4">
    <p>最大折叠标签数</p>
    <el-cascader
      :options="options"
      :props="props"
      collapse-tags
      collapse-tags-tooltip
      :max-collapse-tags="3"
      clearable
    />
  </div>
</template>

<script lang="ts" setup>
import { cascaderRegionOptions as options } from './options'

const props = { multiple: true }
</script>
