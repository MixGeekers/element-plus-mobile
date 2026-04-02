<template>
  <div class="link-example">
    <el-link :icon="Edit">编辑资料</el-link>
    <el-link>
      查看详情<el-icon class="el-icon--right"><icon-view /></el-icon>
    </el-link>
  </div>
</template>

<script setup lang="ts">
import Edit from '~icons/ep/edit'
import IconView from '~icons/ep/view'
</script>

<style scoped>
.link-example {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
</style>
