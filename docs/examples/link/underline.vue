<template>
  <div class="link-example">
    <el-link>默认常显</el-link>
    <el-link underline="always">始终显示</el-link>
    <el-link type="primary" underline="never">仅保留文字色</el-link>
  </div>
</template>

<style scoped>
.link-example {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
</style>
