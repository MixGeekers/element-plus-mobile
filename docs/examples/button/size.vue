<template>
  <div class="flex flex-wrap items-center mb-4">
    <el-button size="large">大号</el-button>
    <el-button>默认</el-button>
    <el-button size="small">小号</el-button>
    <el-button size="large" :icon="Search">搜索</el-button>
    <el-button :icon="Search">搜索</el-button>
    <el-button size="small" :icon="Search">搜索</el-button>
  </div>
  <div class="flex flex-wrap items-center mb-4">
    <el-button size="large" round>大号</el-button>
    <el-button round>默认</el-button>
    <el-button size="small" round>小号</el-button>
    <el-button size="large" :icon="Search" round>搜索</el-button>
    <el-button :icon="Search" round>搜索</el-button>
    <el-button size="small" :icon="Search" round>搜索</el-button>
  </div>
  <div class="flex flex-wrap items-center">
    <el-button :icon="Search" size="large" circle />
    <el-button :icon="Search" circle />
    <el-button :icon="Search" size="small" circle />
  </div>
</template>

<script setup lang="ts">
import Search from '~icons/ep/search'
</script>
