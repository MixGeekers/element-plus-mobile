<template>
  <el-space direction="horizontal" wrap>
    <div v-for="i in 20" :key="i">
      <el-button text>筛选条件 {{ i }}</el-button>
    </div>
  </el-space>
</template>
