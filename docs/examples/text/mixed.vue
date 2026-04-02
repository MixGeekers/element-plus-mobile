<template>
  <el-space>
    <el-text>
      <el-icon>
        <ElementPlus />
      </el-icon>
      组件库
    </el-text>
    <el-row>
      <el-text>评分</el-text>
      <el-rate class="ml-1" />
    </el-row>
    <el-text>
      文本也可以组合图标、
      <el-icon>
        <Bell />
      </el-icon>
      按钮等组件
      <el-button>立即查看</el-button>
    </el-text>
  </el-space>
</template>

<script lang="ts" setup>
import Bell from '~icons/ep/bell'
import ElementPlus from '~icons/ep/element-plus'
</script>
