<template>
  <div class="alignment-container">
    <el-space direction="horizontal">
      <span>默认对齐</span>
      <el-button>立即支付</el-button>
      <div class="demo-card">
        <div class="demo-card__title">订单摘要</div>
        <div class="demo-card__desc">金额与优惠信息</div>
      </div>
    </el-space>
  </div>
  <div class="alignment-container">
    <el-space direction="horizontal" alignment="flex-start">
      <span>顶部对齐</span>
      <el-button>立即支付</el-button>
      <div class="demo-card">
        <div class="demo-card__title">订单摘要</div>
        <div class="demo-card__desc">金额与优惠信息</div>
      </div>
    </el-space>
  </div>
  <div class="alignment-container">
    <el-space direction="horizontal" alignment="flex-end">
      <span>底部对齐</span>
      <el-button>立即支付</el-button>
      <div class="demo-card">
        <div class="demo-card__title">订单摘要</div>
        <div class="demo-card__desc">金额与优惠信息</div>
      </div>
    </el-space>
  </div>
</template>

<style scoped>
.alignment-container {
  margin-bottom: 1rem;
  padding: 0.75rem;
  border-radius: 1rem;
  border: 1px solid var(--el-border-color-lighter);
  background: var(--el-fill-color-light);
}

.demo-card {
  padding: 0.75rem;
  border-radius: 0.75rem;
  border: 1px solid var(--el-border-color);
  background: var(--el-bg-color);
}

.demo-card__title {
  font-weight: 600;
}

.demo-card__desc {
  margin-top: 0.25rem;
  color: var(--el-text-color-secondary);
}
</style>
