<template>
  <el-cascader :options="options" clearable />
</template>

<script lang="ts" setup>
import { cascaderDocOptions as options } from './options'
</script>
