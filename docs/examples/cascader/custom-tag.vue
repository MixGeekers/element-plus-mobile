<template>
  <div class="m-4">
    <p>使用插槽可以更灵活地控制标签展示。</p>
    <el-cascader :options="options" :props="props" clearable>
      <template #tag="{ data }">
        <el-tag
          v-for="(item, index) in getTags(data)"
          :key="item"
          :color="index % 2 === 0 ? 'var(--el-color-warning-light-7)' : ''"
        >
          {{ item }}
        </el-tag>
      </template>
    </el-cascader>
    <p>仅显示顶层标签</p>
    <el-cascader :options="options" :props="props" clearable>
      <template #tag="{ data }">
        <el-tag v-for="item in getTopLevelTags(data)" :key="item">
          {{ item }}
        </el-tag>
      </template>
    </el-cascader>
  </div>
</template>

<script lang="ts" setup>
import { cascaderRegionOptions as options } from './options'

import type { Tag } from 'element-plus-mobile'

const props = { multiple: true }

const getTags = (data: Tag[]) => {
  return data.map((item) => item.text)
}

const getTopLevelTags = (data: Tag[]) => {
  const set: Set<string> = new Set()
  for (const datum of data) {
    let parent = datum.node?.parent
    while (parent && parent.level !== 1) {
      parent = parent.parent
    }
    const label = parent?.data?.label
    if (label) set.add(label)
  }
  return [...set]
}
</script>
