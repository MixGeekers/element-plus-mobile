<template>
  <el-button-group class="mb-4">
    <el-button type="primary" :icon="ArrowLeft">Previous Page</el-button>
    <el-button type="primary">
      Next Page<el-icon class="el-icon--right"><ArrowRight /></el-icon>
    </el-button>
  </el-button-group>
  <br />
  <el-radio-group v-model="direction" class="mb-2">
    <el-radio value="horizontal">Horizontal</el-radio>
    <el-radio value="vertical">Vertical</el-radio>
  </el-radio-group>
  <br />

  <el-button-group :direction="direction">
    <el-button type="primary" :icon="House" />
    <el-button type="primary" :icon="Operation" />
    <el-button type="primary" :icon="Notification" />
  </el-button-group>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ArrowLeft from '~icons/ep/arrow-left'
import ArrowRight from '~icons/ep/arrow-right'
import House from '~icons/ep/house'
import Notification from '~icons/ep/notification'
import Operation from '~icons/ep/operation'

const direction = ref<'horizontal' | 'vertical'>('horizontal')
</script>
