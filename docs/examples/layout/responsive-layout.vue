<template>
  <el-row :gutter="16">
    <el-col :xs="12" :sm="8" :md="6">
      <div class="grid-content ep-bg-purple" />
    </el-col>
    <el-col :xs="12" :sm="16" :md="12">
      <div class="grid-content ep-bg-purple-light" />
    </el-col>
    <el-col :xs="12" :sm="16" :md="12">
      <div class="grid-content ep-bg-purple" />
    </el-col>
    <el-col :xs="12" :sm="8" :md="6">
      <div class="grid-content ep-bg-purple-light" />
    </el-col>
  </el-row>
</template>

<style>
.el-col {
  border-radius: 0.25rem;
}

.grid-content {
  border-radius: 0.25rem;
  min-height: 2.75rem;
}
</style>
