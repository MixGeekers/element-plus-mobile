<template>
  <div class="text-truncated-demo">
    <el-text class="text-truncated-demo__item" truncated>
      当前标题过长时，会在一行内自动省略。
    </el-text>
    <el-row class="text-truncated-demo__item">
      <el-text truncated>父容器宽度收窄后，文本也会自动省略。</el-text>
    </el-row>
    <el-text line-clamp="2">
      多行文本可以通过
      <code>line-clamp</code> 限制显示行数，适合卡片摘要、订单说明或活动介绍。
    </el-text>
  </div>
</template>

<style scoped>
.text-truncated-demo {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.text-truncated-demo__item {
  max-width: 9.375rem;
}
</style>
