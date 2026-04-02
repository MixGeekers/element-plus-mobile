<template>
  <div class="demo-block">
    <slot />
  </div>
</template>

<style lang="scss">
.demo-block {
  display: grid;
  gap: 0.75rem;
  width: 100%;
  max-width: 28rem;
  margin: 0 auto;
}

.demo-block__stack {
  display: grid;
  gap: 0.75rem;
  width: 100%;
}

.demo-block__section {
  display: grid;
  gap: 0.5rem;
  width: 100%;

  strong {
    font-size: 0.875rem;
    color: var(--el-text-color-primary);
  }

  p {
    margin: 0;
    font-size: 0.8125rem;
    line-height: 1.5;
    color: var(--el-text-color-secondary);
  }
}

.demo-block__caption {
  font-size: 0.75rem;
  line-height: 1.5;
  color: var(--el-text-color-secondary);
}

.demo-block__actions {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0.75rem;
  width: 100%;
}

.demo-block .el-form,
.demo-block .el-upload,
.demo-block .el-upload-list,
.demo-block .el-input,
.demo-block .el-input-number,
.demo-block .el-select,
.demo-block .el-select-v2,
.demo-block .el-date-editor,
.demo-block .el-time-select,
.demo-block .el-cascader,
.demo-block .el-slider {
  width: 100%;
}

.demo-block .el-input-number .el-input,
.demo-block .el-date-picker-panel,
.demo-block .el-color-picker-panel,
.demo-block .el-cascader-panel,
.demo-block .el-color-picker-panel__content,
.demo-block .el-date-picker-panel__content,
.demo-block .el-upload-dragger {
  width: 100%;
}

.demo-block .el-form {
  display: grid;
  gap: 1rem;
}

.demo-block .el-form-item {
  margin-bottom: 0;
}

.demo-block .el-form-item__content {
  width: 100%;
}

.demo-block .el-checkbox-group,
.demo-block .el-radio-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  width: 100%;
}

.demo-block .el-checkbox,
.demo-block .el-radio,
.demo-block .el-radio.is-bordered,
.demo-block .el-button {
  margin-right: 0;
  margin-left: 0;
}

.demo-block .el-color-picker {
  flex-shrink: 0;
}

.demo-block .el-upload {
  display: block;
}

@media (max-width: 640px) {
  .demo-block__actions {
    grid-template-columns: 1fr;
  }
}
</style>
