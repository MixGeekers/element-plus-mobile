<template>
  <div class="button-example">
    <div class="button-row">
      <el-button disabled>默认按钮</el-button>
      <el-button type="primary" disabled>主要操作</el-button>
      <el-button type="success" disabled>提交成功</el-button>
      <el-button type="info" disabled>补充信息</el-button>
      <el-button type="warning" disabled>提醒用户</el-button>
      <el-button type="danger" disabled>删除内容</el-button>
    </div>

    <div class="button-row">
      <el-button plain disabled>朴素按钮</el-button>
      <el-button type="primary" plain disabled>主要操作</el-button>
      <el-button type="success" plain disabled>提交成功</el-button>
      <el-button type="info" plain disabled>补充信息</el-button>
      <el-button type="warning" plain disabled>提醒用户</el-button>
      <el-button type="danger" plain disabled>删除内容</el-button>
    </div>
  </div>
</template>

<style scoped>
.button-example {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.button-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
}

.button-row > * {
  margin: 0;
}
</style>
