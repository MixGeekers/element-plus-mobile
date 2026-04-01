<template>
  <div>
    <el-button type="primary" :icon="Edit" />
    <el-button type="primary" :icon="Share" />
    <el-button type="primary" :icon="Delete" />
    <el-button type="primary" :icon="Search">Search</el-button>
    <el-button type="primary">
      Upload<el-icon class="el-icon--right"><Upload /></el-icon>
    </el-button>
  </div>
</template>

<script setup lang="ts">
import Delete from '~icons/ep/delete'
import Edit from '~icons/ep/edit'
import Search from '~icons/ep/search'
import Share from '~icons/ep/share'
import Upload from '~icons/ep/upload'
</script>
