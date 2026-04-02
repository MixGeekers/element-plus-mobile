<template>
  <div class="flex flex-col items-center">
    <el-switch
      v-model="showPrefix"
      active-text="显示前缀"
      inactive-text="隐藏前缀"
    />
    <div class="flex flex-wrap">
      <div class="m-4">
        <p>`checkStrictly` 单选模式</p>
        <el-cascader
          v-model="value"
          :options="options"
          :props="props1"
          clearable
        />
      </div>
      <div class="m-4">
        <p>多选模式</p>
        <el-cascader
          v-model="value2"
          show-checked-strategy="parent"
          :options="options"
          :props="props2"
          clearable
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from 'vue'
import { cascaderSubsetOptions as options } from './options'

const value = ref()
const value2 = ref()
const showPrefix = ref(true)

const props1 = computed(() => ({
  showPrefix: showPrefix.value,
  checkStrictly: true,
  checkOnClickNode: true,
}))
const props2 = computed(() => ({
  showPrefix: showPrefix.value,
  multiple: true,
  checkOnClickNode: true,
}))
</script>
