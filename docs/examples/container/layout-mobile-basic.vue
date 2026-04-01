<template>
  <div class="common-layout mobile-layout-demo">
    <div class="mobile-frame">
      <el-container>
        <el-header>
          <div class="mobile-region">
            <span class="mobile-region__title">Header</span>
            <span class="mobile-region__desc">
              顶部区域，适合放页面标题、返回按钮或筛选操作。
            </span>
            <code class="mobile-region__code">&lt;el-header&gt;</code>
          </div>
        </el-header>

        <el-main>
          <div class="mobile-note-card">
            <div class="mobile-note-card__title">Main</div>
            <div class="mobile-note-card__desc">
              主内容区，推荐作为页面唯一滚动区域，放列表、表单或详情内容。
            </div>
          </div>

          <div class="mobile-note-card">
            <div class="mobile-note-card__title">How to use</div>
            <div class="mobile-note-card__desc">
              页面根节点可使用
              <code class="mobile-region__code"
                >&lt;el-container full-screen&gt;</code
              >
              来占满视口高度。
            </div>
          </div>
        </el-main>

        <el-footer>
          <div class="mobile-region">
            <span class="mobile-region__title">Footer</span>
            <span class="mobile-region__desc">
              底部区域，适合放主要操作或一级导航。
            </span>
            <code class="mobile-region__code">&lt;el-footer&gt;</code>
          </div>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>
