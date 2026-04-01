<template>
  <el-switch
    v-model="value1"
    :active-action-icon="View"
    :inactive-action-icon="Hide"
  />
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Hide from '~icons/ep/hide'
import View from '~icons/ep/view'

const value1 = ref(true)
</script>
