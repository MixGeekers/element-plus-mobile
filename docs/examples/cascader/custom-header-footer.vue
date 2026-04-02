<template>
  <div class="cascader-custom-header-footer">
    <div>
      <p>自定义头部内容</p>
      <el-cascader
        v-model="value"
        popper-class="cascader-custom-header"
        :options="options"
        :props="props"
        clearable
      >
        <template #header>
          <el-checkbox
            v-model="checkAll"
            :indeterminate="indeterminate"
            @change="handleCheckAll"
          >
            全选
          </el-checkbox>
        </template>
      </el-cascader>
    </div>
    <div>
      <p>自定义底部内容</p>
      <el-cascader v-model="value" :options="options" :props="props" clearable>
        <template #footer>
          <el-button link size="small" @click="handleClear"> 清空 </el-button>
        </template>
      </el-cascader>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
import { cascaderSubsetOptions } from './options'

import type { CascaderOption, CheckboxValueType } from 'element-plus-mobile'

const props = { multiple: true }
const checkAll = ref(false)
const indeterminate = ref(false)
const value = ref<string[][]>([])
const options = ref(cascaderSubsetOptions.slice(0, 1))

const getAllValuePaths = computed(() => {
  const result: string[][] = []
  const queue: { node: CascaderOption; path: string[] }[] = options.value.map(
    (node) => ({ node, path: [node.value as string] })
  )

  while (queue.length > 0) {
    const { node, path } = queue.shift()!
    if (node.children?.length) {
      node.children.forEach((child) => {
        queue.push({ node: child, path: [...path, child.value as string] })
      })
    } else {
      result.push(path)
    }
  }
  return result
})

watch(value, (val) => {
  if (val.length === 0) {
    checkAll.value = false
    indeterminate.value = false
  } else if (val.length === getAllValuePaths.value.length) {
    checkAll.value = true
    indeterminate.value = false
  } else {
    indeterminate.value = true
  }
})

const handleCheckAll = (val: CheckboxValueType) => {
  indeterminate.value = false
  value.value = val ? getAllValuePaths.value : []
}

const handleClear = () => {
  value.value = []
}
</script>

<style scoped>
.cascader-custom-header-footer {
  display: flex;
}

.cascader-custom-header-footer > div {
  flex: 1;
  text-align: center;
}

.cascader-custom-header-footer > div:not(:last-child) {
  border-right: 1px solid var(--el-border-color);
}

.cascader-custom-header .el-checkbox {
  display: flex;
  height: unset;
}
</style>
