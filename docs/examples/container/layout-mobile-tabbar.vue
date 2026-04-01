<template>
  <div class="common-layout mobile-layout-demo">
    <div class="mobile-frame">
      <el-container>
        <el-header>
          <div class="mobile-region">
            <span class="mobile-region__title">Header</span>
            <span class="mobile-region__desc">
              顶部导航区，可放返回、搜索、筛选或页面切换入口。
            </span>
            <code class="mobile-region__code">&lt;el-header&gt;</code>
          </div>
        </el-header>

        <el-main>
          <div class="mobile-note-card">
            <div class="mobile-note-card__title">Main</div>
            <div class="mobile-note-card__desc">
              主内容区负责承载列表、内容流或搜索结果，建议只保留这里滚动。
            </div>
          </div>

          <div class="mobile-note-card">
            <div class="mobile-note-card__title">Use with Footer</div>
            <div class="mobile-note-card__desc">
              当页面包含一级导航时，可以把 Footer 组织成 Tab Bar。
            </div>
          </div>
        </el-main>

        <el-footer>
          <div class="mobile-region">
            <span class="mobile-region__title">Footer / Tab Bar</span>
            <span class="mobile-region__desc">
              底部一级导航，适合放 3 到 5 个核心入口。
            </span>
            <code class="mobile-region__code">&lt;el-footer&gt;</code>

            <div class="mobile-tabbar">
              <span class="mobile-tabbar__item is-active">Home</span>
              <span class="mobile-tabbar__item">Search</span>
              <span class="mobile-tabbar__item">Create</span>
              <span class="mobile-tabbar__item">Profile</span>
            </div>
          </div>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>
