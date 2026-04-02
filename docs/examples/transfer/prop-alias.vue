<template>
  <div class="demo-transfer-shell">
    <el-transfer
      v-model="value"
      :props="{
        key: 'value',
        label: 'desc',
      }"
      :data="data"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

interface Option {
  value: number
  desc: string
  disabled: boolean
}

const generateData = () => {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      value: i,
      desc: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data = ref<Option[]>(generateData())
const value = ref([])
</script>

<style scoped>
.demo-transfer-shell {
  max-width: 28rem;
  margin: 0 auto;
}
</style>
