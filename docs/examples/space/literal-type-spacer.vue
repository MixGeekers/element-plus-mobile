<template>
  <el-space direction="horizontal" :size="size" spacer="|">
    <div v-for="i in 2" :key="i">
      <el-button>操作 {{ i }}</el-button>
    </div>
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref(10)
</script>
