<template>
  <div class="link-example">
    <el-link disabled>默认链接</el-link>
    <el-link type="primary" disabled>主要链接</el-link>
    <el-link type="success" disabled>成功状态</el-link>
    <el-link type="warning" disabled>提醒事项</el-link>
    <el-link type="danger" disabled>危险操作</el-link>
    <el-link type="info" disabled>补充说明</el-link>
  </div>
</template>

<style scoped>
.link-example {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}
</style>
