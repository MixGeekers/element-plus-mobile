<template>
  <div class="link-example">
    <el-link href="https://element-plus.org" target="_blank">官方站点</el-link>
    <el-link type="primary">主要链接</el-link>
    <el-link type="success">成功状态</el-link>
    <el-link type="warning">提醒事项</el-link>
    <el-link type="danger">危险操作</el-link>
    <el-link type="info">补充说明</el-link>
  </div>
</template>

<style scoped>
.link-example {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
</style>
