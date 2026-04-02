<template>
  <div>
    <div class="flex gap-4">
      <div class="flex flex-col basis-150px gap-1">
        <span>面板类型：</span>
        <el-select v-model="type">
          <el-option
            v-for="option in typeOptions"
            :key="option.value"
            :label="option.label"
            :value="option.value"
          />
        </el-select>
      </div>
    </div>
    <el-divider />
    <div class="flex justify-center">
      <el-date-picker-panel v-model="date" :type="type" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue'

import type { DatePickerType } from 'element-plus-mobile'

const date = ref()
const type = ref<DatePickerType>('date')

watch(type, () => {
  date.value = undefined
})

const typeOptions: Array<{ value: DatePickerType; label: string }> = [
  { value: 'year', label: '单年' },
  { value: 'years', label: '多年' },
  { value: 'month', label: '单月' },
  { value: 'months', label: '多月' },
  { value: 'date', label: '单日' },
  { value: 'dates', label: '多日' },
  { value: 'week', label: '周' },
  { value: 'datetime', label: '日期时间' },
  { value: 'datetimerange', label: '日期时间范围' },
  { value: 'daterange', label: '日期范围' },
  { value: 'monthrange', label: '月份范围' },
  { value: 'yearrange', label: '年份范围' },
]
</script>
