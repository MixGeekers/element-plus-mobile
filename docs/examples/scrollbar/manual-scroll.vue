<template>
  <el-scrollbar ref="scrollbarRef" height="25rem" always @scroll="scroll">
    <div ref="innerRef">
      <p v-for="item in steps" :key="item" class="scrollbar-demo-item">
        {{ item }}
      </p>
    </div>
  </el-scrollbar>

  <el-slider
    v-model="value"
    :max="max"
    :format-tooltip="formatTooltip"
    @input="inputSlider"
  />
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'

import type { ScrollbarInstance } from 'element-plus-mobile'

type Arrayable<T> = T | T[]

const max = ref(0)
const value = ref(0)
const innerRef = ref<HTMLDivElement>()
const scrollbarRef = ref<ScrollbarInstance>()

onMounted(() => {
  max.value = Math.max(
    (innerRef.value?.clientHeight ?? 0) -
      (scrollbarRef.value?.wrapRef?.clientHeight ?? 0),
    0
  )
})

const inputSlider = (value: Arrayable<number>) => {
  scrollbarRef.value!.setScrollTop(value as number)
}
const scroll = ({ scrollTop }: { scrollTop: number }) => {
  value.value = scrollTop
}
const formatTooltip = (value: number) => `滚动偏移 ${value}`

const steps = Array.from(
  { length: 18 },
  (_, index) => `配送进度 ${index + 1}：等待仓库确认出库`
)
</script>

<style scoped>
.scrollbar-demo-item {
  display: flex;
  align-items: center;
  min-height: 3rem;
  margin: 0.625rem;
  padding: 0 1rem;
  border-radius: 0.75rem;
  background: var(--el-color-primary-light-9);
  color: var(--el-color-primary);
}
.el-slider {
  margin-top: 1.25rem;
}
</style>
