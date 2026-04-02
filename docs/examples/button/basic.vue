<template>
  <div class="button-example">
    <div class="button-row">
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要操作</el-button>
      <el-button type="success">提交成功</el-button>
      <el-button type="info">补充信息</el-button>
      <el-button type="warning">提醒用户</el-button>
      <el-button type="danger">删除内容</el-button>
    </div>

    <div class="button-row">
      <el-button plain>朴素按钮</el-button>
      <el-button type="primary" plain>主要操作</el-button>
      <el-button type="success" plain>提交成功</el-button>
      <el-button type="info" plain>补充信息</el-button>
      <el-button type="warning" plain>提醒用户</el-button>
      <el-button type="danger" plain>删除内容</el-button>
    </div>

    <div class="button-row">
      <el-button round>圆角按钮</el-button>
      <el-button type="primary" round>主要操作</el-button>
      <el-button type="success" round>提交成功</el-button>
      <el-button type="info" round>补充信息</el-button>
      <el-button type="warning" round>提醒用户</el-button>
      <el-button type="danger" round>删除内容</el-button>
    </div>

    <div class="button-row">
      <el-button dashed>虚线按钮</el-button>
      <el-button type="primary" dashed>主要操作</el-button>
      <el-button type="success" dashed>提交成功</el-button>
      <el-button type="info" dashed>补充信息</el-button>
      <el-button type="warning" dashed>提醒用户</el-button>
      <el-button type="danger" dashed>删除内容</el-button>
    </div>

    <div class="button-row">
      <el-button :icon="Search" circle />
      <el-button type="primary" :icon="Edit" circle />
      <el-button type="success" :icon="Check" circle />
      <el-button type="info" :icon="Message" circle />
      <el-button type="warning" :icon="Star" circle />
      <el-button type="danger" :icon="Delete" circle />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Check from '~icons/ep/check'
import Delete from '~icons/ep/delete'
import Edit from '~icons/ep/edit'
import Message from '~icons/ep/message'
import Search from '~icons/ep/search'
import Star from '~icons/ep/star'
</script>

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
