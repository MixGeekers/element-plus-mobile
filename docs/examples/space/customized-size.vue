<template>
  <el-space alignment="start">
    <el-text size="small">拖动滑块调整按钮之间的间距。</el-text>
    <el-slider v-model="size" />
    <el-space direction="horizontal" wrap :size="size">
      <el-button v-for="action in actions" :key="action" plain>
        {{ action }}
      </el-button>
    </el-space>
  </el-space>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const size = ref(20)
const actions = ['发起退款', '催促发货', '联系商家', '再次购买'] as const
</script>
