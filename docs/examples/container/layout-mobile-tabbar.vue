<template>
  <div class="container-demo">
    <el-container class="container-demo__frame">
      <el-header>
        <span class="container-demo__label">&lt;el-header&gt;</span>
        <p class="container-demo__title">页面头部</p>
        <p class="container-demo__text">适合放标题、筛选或搜索入口。</p>
      </el-header>

      <el-main>
        <span class="container-demo__label">&lt;el-main&gt;</span>
        <p class="container-demo__title">内容区域</p>
        <p class="container-demo__text">
          当页面存在一级导航时，建议只保留这里滚动。
        </p>
      </el-main>

      <el-footer>
        <span class="container-demo__label">&lt;el-footer&gt;</span>
        <p class="container-demo__title">底部导航</p>
        <div class="container-demo__tabbar">
          <span class="container-demo__tabbar-item is-active">首页</span>
          <span class="container-demo__tabbar-item">搜索</span>
          <span class="container-demo__tabbar-item">消息</span>
          <span class="container-demo__tabbar-item">我的</span>
        </div>
      </el-footer>
    </el-container>
  </div>
</template>
