<template>
  <div class="demo-transfer-stack">
    <section class="demo-transfer-section">
      <p class="demo-transfer-title">
        Customize data items using render-content
      </p>
      <el-transfer
        v-model="leftValue"
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :render-content="renderFunc"
        :titles="['Source', 'Target']"
        :button-texts="['Back to source', 'Add to target']"
        :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}',
        }"
        :data="data"
        @change="handleChange"
      >
        <template #left-footer>
          <el-button class="transfer-footer" size="small">Operation</el-button>
        </template>
        <template #right-footer>
          <el-button class="transfer-footer" size="small">Operation</el-button>
        </template>
      </el-transfer>
    </section>

    <section class="demo-transfer-section">
      <p class="demo-transfer-title">Customize data items using scoped slot</p>
      <el-transfer
        v-model="rightValue"
        filterable
        :left-default-checked="[2, 3]"
        :right-default-checked="[1]"
        :titles="['Source', 'Target']"
        :button-texts="['Back to source', 'Add to target']"
        :format="{
          noChecked: '${total}',
          hasChecked: '${checked}/${total}',
        }"
        :data="data"
        @change="handleChange"
      >
        <template #default="{ option }">
          <span>{{ option.key }} - {{ option.label }}</span>
        </template>
        <template #left-footer>
          <el-button class="transfer-footer" size="small">Operation</el-button>
        </template>
        <template #right-footer>
          <el-button class="transfer-footer" size="small">Operation</el-button>
        </template>
      </el-transfer>
    </section>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import type {
  TransferDirection,
  TransferKey,
  renderContent,
} from 'element-plus-mobile'

interface Option {
  key: number
  label: string
  disabled: boolean
}

const generateData = (): Option[] => {
  const data: Option[] = []
  for (let i = 1; i <= 15; i++) {
    data.push({
      key: i,
      label: `Option ${i}`,
      disabled: i % 4 === 0,
    })
  }
  return data
}

const data = ref(generateData())
const rightValue = ref([1])
const leftValue = ref([1])

const renderFunc: renderContent = (h, option) => h('span', null, option.label)

const handleChange = (
  value: TransferKey[],
  direction: TransferDirection,
  movedKeys: TransferKey[]
) => {
  console.log(value, direction, movedKeys)
}
</script>

<style scoped>
.demo-transfer-stack {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.demo-transfer-section {
  max-width: 28rem;
  margin: 0 auto;
}

.demo-transfer-title {
  margin: 0 0 1rem;
  text-align: center;
}

.transfer-footer {
  width: 100%;
}
</style>
