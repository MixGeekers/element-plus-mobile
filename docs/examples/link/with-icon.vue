<template>
  <div>
    <el-link :icon="Edit">Edit</el-link>
    <el-link>
      Check<el-icon class="el-icon--right"><icon-view /></el-icon>
    </el-link>
  </div>
</template>

<script setup lang="ts">
import Edit from '~icons/ep/edit'
import IconView from '~icons/ep/view'
</script>

<style scoped>
.el-link {
  margin-right: 8px;
}
</style>
