<template>
  <el-cascader
    :options="options"
    clearable
    :clear-icon="CloseBold"
    placeholder="Custom clear icon"
  />
</template>

<script lang="ts" setup>
import CloseBold from '~icons/ep/close-bold'

const options = [
  {
    value: 'guide',
    label: 'Guide',
    children: [
      {
        value: 'disciplines',
        label: 'Disciplines',
      },
    ],
  },
]
</script>
