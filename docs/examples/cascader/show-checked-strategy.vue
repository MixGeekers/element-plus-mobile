<template>
  <div class="m-4">
    <p>策略：`child`，默认展示所有选中的子节点</p>
    <el-cascader
      v-model="value1"
      :options="options"
      :props="props"
      show-checked-strategy="child"
      clearable
      @change="handleChange1"
    />
  </div>

  <div class="m-4">
    <p>策略：`parent`，当子节点全部选中时仅展示父节点</p>
    <el-cascader
      v-model="value2"
      :options="options"
      :props="props"
      show-checked-strategy="parent"
      clearable
      @change="handleChange2"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { cascaderSubsetOptions as options } from './options'

const value1 = ref([])
const value2 = ref([])
const props = {
  multiple: true,
}

const handleChange1 = (value) => {
  console.log('子节点策略：', value)
}

const handleChange2 = (value) => {
  console.log('父节点策略：', value)
}
</script>
