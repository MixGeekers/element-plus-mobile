<template>
  <el-space direction="horizontal" :size="size" :spacer="spacer">
    <div v-for="i in 2" :key="i">
      <el-button>操作 {{ i }}</el-button>
    </div>
  </el-space>
</template>

<script lang="ts" setup>
import { h, ref } from 'vue'
import { ElDivider } from 'element-plus-mobile'

const size = ref(10)
const spacer = h(ElDivider, { direction: 'vertical' })
</script>
