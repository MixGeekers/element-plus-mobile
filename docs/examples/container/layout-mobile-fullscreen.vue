<template>
  <div class="common-layout mobile-layout-demo">
    <div class="mobile-frame">
      <el-container>
        <el-main>
          <div class="mobile-note-card">
            <div class="mobile-note-card__title">Main Only</div>
            <div class="mobile-note-card__desc">
              沉浸式页面可以只保留 Main，不使用 Header 和 Footer。
            </div>
          </div>

          <div class="mobile-note-card">
            <div class="mobile-note-card__title">Container</div>
            <div class="mobile-note-card__desc">
              在页面根节点上使用
              <code class="mobile-region__code"
                >&lt;el-container full-screen&gt;</code
              >
              让内容占满整个视口。
            </div>
          </div>

          <div class="mobile-note-card">
            <div class="mobile-note-card__title">Use case</div>
            <div class="mobile-note-card__desc">
              适合欢迎页、图片浏览、视频播放或阅读页等弱导航场景。
            </div>
          </div>
        </el-main>
      </el-container>
    </div>
  </div>
</template>
