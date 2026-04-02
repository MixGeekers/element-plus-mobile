<template>
  <div class="flex flex-col items-center">
    <el-switch v-model="disabled" active-text="禁用" inactive-text="启用" />
    <el-date-picker-panel v-model="value" :disabled="disabled" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref()
const disabled = ref(true)
</script>
