<template>
  <div class="mobile-form-demo">
    <div
      v-if="title || description || $slots.copy"
      class="mobile-form-demo__copy"
    >
      <slot name="copy">
        <div v-if="title" class="mobile-form-demo__title">{{ title }}</div>
        <p v-if="description" class="mobile-form-demo__desc">
          {{ description }}
        </p>
      </slot>
    </div>

    <div class="mobile-form-demo__stage">
      <div class="mobile-form-demo__device">
        <div class="mobile-form-demo__status">
          <span>9:41</span>
          <span>{{ statusText }}</span>
        </div>

        <div class="mobile-form-demo__header">
          <div class="mobile-form-demo__header-copy">
            <strong>{{ headerTitle || title }}</strong>
            <span v-if="headerDescription">{{ headerDescription }}</span>
          </div>

          <slot name="header-extra">
            <el-tag v-if="badge" size="small" type="primary">
              {{ badge }}
            </el-tag>
          </slot>
        </div>

        <div class="mobile-form-demo__body">
          <slot />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
interface MobileFormDemoProps {
  title?: string
  description?: string
  headerTitle?: string
  headerDescription?: string
  badge?: string
  statusText?: string
}

withDefaults(defineProps<MobileFormDemoProps>(), {
  badge: 'Mobile UX',
  statusText: 'Mobile',
})
</script>

<style lang="scss">
.mobile-form-demo {
  display: grid;
  gap: 1rem;

  &__copy {
    max-width: 38rem;
  }

  &__title {
    font-size: 1rem;
    font-weight: 600;
    color: var(--el-text-color-primary);
  }

  &__desc {
    margin: 0.35rem 0 0;
    font-size: 0.875rem;
    line-height: 1.5;
    color: var(--el-text-color-secondary);
  }

  &__stage {
    display: flex;
    justify-content: center;
    padding: 1.25rem;
    border-radius: 1.5rem;
    background:
      radial-gradient(circle at top, rgb(14 165 233 / 0.12), transparent 42%),
      linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%);
  }

  &__device {
    width: min(100%, 24rem);
    border-radius: 2rem;
    overflow: hidden;
    border: 1px solid rgb(15 23 42 / 0.08);
    background: #ffffff;
    box-shadow:
      0 1.5rem 3rem rgb(15 23 42 / 0.12),
      0 0.5rem 1rem rgb(15 23 42 / 0.08);
  }

  &__status {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.75rem 1rem 0.5rem;
    font-size: 0.75rem;
    color: #475569;
    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
  }

  &__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    gap: 0.75rem;
    padding: 0 1rem 1rem;
    border-bottom: 1px solid rgb(148 163 184 / 0.16);
  }

  &__header-copy {
    display: grid;
    gap: 0.25rem;
    min-width: 0;

    strong {
      display: block;
      font-size: 1rem;
      color: #0f172a;
    }

    span {
      display: block;
      font-size: 0.8125rem;
      line-height: 1.5;
      color: #64748b;
    }
  }

  &__body {
    display: grid;
    gap: 1rem;
    padding: 1rem;
    background: linear-gradient(
      180deg,
      rgb(248 250 252 / 0.7),
      rgb(255 255 255 / 1)
    );
  }

  &__panel {
    display: grid;
    gap: 0.35rem;
    padding: 0.875rem 1rem;
    border-radius: 1rem;
    border: 1px solid rgb(148 163 184 / 0.14);
    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);

    strong {
      font-size: 0.875rem;
      color: #0f172a;
    }

    p {
      margin: 0;
      font-size: 0.8125rem;
      line-height: 1.55;
      color: #64748b;
    }
  }

  &__caption {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    color: #64748b;
  }

  &__stack {
    display: grid;
    gap: 0.75rem;
    width: 100%;
  }

  &__actions {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 0.75rem;
    width: 100%;
  }
}

.mobile-form-demo .el-form {
  display: grid;
  gap: 1rem;
}

.mobile-form-demo .el-form-item {
  margin-bottom: 0;
}

.mobile-form-demo .el-form-item__content {
  width: 100%;
}

.mobile-form-demo .el-input,
.mobile-form-demo .el-input-number,
.mobile-form-demo .el-select,
.mobile-form-demo .el-select-v2,
.mobile-form-demo .el-date-editor,
.mobile-form-demo .el-segmented,
.mobile-form-demo .el-slider {
  width: 100%;
}

.mobile-form-demo .el-input-number .el-input {
  width: 100%;
}

.mobile-form-demo .el-checkbox-group,
.mobile-form-demo .el-radio-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
  width: 100%;
}

.mobile-form-demo .el-checkbox,
.mobile-form-demo .el-radio,
.mobile-form-demo .el-radio.is-bordered {
  margin-right: 0;
}

.mobile-form-demo .el-button {
  margin: 0;
}

.mobile-form-demo .el-tag {
  flex-shrink: 0;
}

@media (max-width: 640px) {
  .mobile-form-demo__stage {
    padding: 0.75rem;
  }

  .mobile-form-demo__actions {
    grid-template-columns: 1fr;
  }
}
</style>
