<template>
  <el-steps style="max-width: 600px" :active="1">
    <el-step title="Step 1" :icon="Edit" />
    <el-step title="Step 2" :icon="Upload" />
    <el-step title="Step 3" :icon="Picture" />
  </el-steps>
</template>

<script lang="ts" setup>
import Edit from '~icons/ep/edit'
import Picture from '~icons/ep/picture'
import Upload from '~icons/ep/upload'
</script>
