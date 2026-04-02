<template>
  <p>基础文字按钮</p>
  <div class="mb-4">
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
    >
      {{ button.text }}
    </el-button>
  </div>

  <p>背景常显</p>
  <div class="mb-4">
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      bg
    >
      {{ button.text }}
    </el-button>
  </div>

  <p>禁用文字按钮</p>
  <div>
    <el-button
      v-for="button in buttons"
      :key="button.text"
      :type="button.type"
      text
      disabled
    >
      {{ button.text }}
    </el-button>
  </div>
</template>

<script setup lang="ts">
const buttons = [
  { type: '', text: '默认' },
  { type: 'primary', text: '主要' },
  { type: 'success', text: '成功' },
  { type: 'info', text: '信息' },
  { type: 'warning', text: '提醒' },
  { type: 'danger', text: '删除' },
] as const
</script>
