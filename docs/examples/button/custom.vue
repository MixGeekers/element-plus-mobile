<script lang="ts" setup>
import { isDark } from '~/composables/dark'

const brandColor = 'var(--el-color-primary)'
</script>

<template>
  <div>
    <el-button :color="brandColor" :dark="isDark">品牌按钮</el-button>
    <el-button :color="brandColor" :dark="isDark" plain>品牌朴素</el-button>

    <el-button :color="brandColor" :dark="isDark" disabled>禁用状态</el-button>
    <el-button :color="brandColor" :dark="isDark" disabled plain>
      禁用朴素
    </el-button>
  </div>
</template>
