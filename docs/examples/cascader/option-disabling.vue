<template>
  <el-cascader :options="options" />
</template>

<script lang="ts" setup>
import { cascaderDocOptions } from './options'

const options = [
  { ...cascaderDocOptions[0], disabled: true },
  ...cascaderDocOptions.slice(1),
]
</script>
