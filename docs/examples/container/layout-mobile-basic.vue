<template>
  <div class="container-demo">
    <el-container class="container-demo__frame">
      <el-header>
        <span class="container-demo__label">&lt;el-header&gt;</span>
        <p class="container-demo__title">页面标题与操作</p>
        <p class="container-demo__text">放置返回、标题和筛选等顶部内容。</p>
      </el-header>

      <el-main>
        <span class="container-demo__label">&lt;el-main&gt;</span>
        <p class="container-demo__title">主要内容区</p>
        <p class="container-demo__text">
          列表、表单和详情内容通常放在这里，并作为页面的主要滚动区域。
        </p>
        <div class="container-demo__actions">
          <el-button type="primary">主要操作</el-button>
          <el-button>次要操作</el-button>
        </div>
      </el-main>

      <el-footer>
        <span class="container-demo__label">&lt;el-footer&gt;</span>
        <p class="container-demo__title">底部操作区</p>
        <p class="container-demo__text">适合放提交、保存或确认类操作。</p>
      </el-footer>
    </el-container>
  </div>
</template>
