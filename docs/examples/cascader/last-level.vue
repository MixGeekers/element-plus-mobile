<template>
  <el-cascader :options="options" :show-all-levels="false" />
</template>

<script lang="ts" setup>
import { cascaderDocOptions as options } from './options'
</script>
