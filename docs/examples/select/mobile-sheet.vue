<template>
  <div class="mobile-select-doc-demo">
    <div class="mobile-select-doc-demo__copy">
      <div class="mobile-select-doc-demo__title">
        Select Mobile Sheet Preview
      </div>
      <p class="mobile-select-doc-demo__desc">
        Open the multi-select to inspect draft selection, cancel / confirm
        actions, and the bottom-sheet dropdown directly in mobile mode.
      </p>
    </div>

    <div class="mobile-select-doc-demo__stage">
      <div class="mobile-device">
        <div class="mobile-device__status">
          <span>9:41</span>
          <span>Mobile</span>
        </div>

        <div class="mobile-device__header">
          <strong>Region filters</strong>
          <span
            >Committed values only update after confirmation in mobile
            mode.</span
          >
        </div>

        <div class="mobile-device__body">
          <div class="mobile-select-doc-demo__summary">
            <label>Single value</label>
            <strong>{{ region || 'Not selected' }}</strong>
          </div>

          <el-select
            v-model="region"
            mobile
            clearable
            filterable
            placeholder="Choose a region"
          >
            <el-option
              v-for="item in regionOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>

          <div class="mobile-select-doc-demo__summary">
            <label>Committed teams</label>
            <strong>
              {{
                owners.length ? owners.join(', ') : 'No committed values yet'
              }}
            </strong>
          </div>

          <el-select
            v-model="owners"
            mobile
            clearable
            collapse-tags
            collapse-tags-tooltip
            filterable
            multiple
            placeholder="Assign owners"
          >
            <el-option
              v-for="item in ownerOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const region = ref('')
const owners = ref<string[]>([])

const regionOptions = [
  { label: 'North America', value: 'north-america' },
  { label: 'Europe', value: 'europe' },
  { label: 'Japan', value: 'japan' },
  { label: 'South East Asia', value: 'sea' },
]

const ownerOptions = [
  { label: 'Growth', value: 'Growth' },
  { label: 'Creative', value: 'Creative' },
  { label: 'Local Ops', value: 'Local Ops' },
  { label: 'CRM', value: 'CRM' },
  { label: 'Brand', value: 'Brand' },
  { label: 'Performance', value: 'Performance' },
]
</script>

<style scoped lang="scss">
.mobile-select-doc-demo {
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
      radial-gradient(circle at top, rgb(16 185 129 / 0.12), transparent 40%),
      linear-gradient(180deg, #f8fafc 0%, #ecfeff 100%);
  }

  &__summary {
    display: grid;
    gap: 0.25rem;
    padding: 0.875rem 1rem;
    border-radius: 1rem;
    background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%);
    border: 1px solid rgb(148 163 184 / 0.14);

    label {
      font-size: 0.75rem;
      letter-spacing: 0.04em;
      text-transform: uppercase;
      color: #64748b;
    }

    strong {
      font-size: 0.875rem;
      line-height: 1.5;
      color: #0f172a;
    }
  }
}

.mobile-device {
  width: min(100%, 24rem);
  border-radius: 2rem;
  overflow: hidden;
  border: 1px solid rgb(15 23 42 / 0.08);
  background: #ffffff;
  box-shadow:
    0 1.5rem 3rem rgb(15 23 42 / 0.12),
    0 0.5rem 1rem rgb(15 23 42 / 0.08);

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
    display: grid;
    gap: 0.3rem;
    padding: 0 1rem 1rem;
    border-bottom: 1px solid rgb(148 163 184 / 0.16);

    strong {
      font-size: 1rem;
      color: #0f172a;
    }

    span {
      font-size: 0.8125rem;
      line-height: 1.5;
      color: #64748b;
    }
  }

  &__body {
    display: grid;
    gap: 0.875rem;
    padding: 1rem;
    background: linear-gradient(
      180deg,
      rgb(248 250 252 / 0.7),
      rgb(255 255 255 / 1)
    );
  }
}

.mobile-select-doc-demo {
  :deep(.el-select) {
    width: 100%;
  }

  :deep(.el-select__wrapper) {
    min-height: 2.75rem;
    padding: 0.375rem 0.875rem;
    gap: 0.5rem;
  }

  :deep(.el-select__selection) {
    gap: 0.5rem;
  }

  :deep(.el-select__selected-item) {
    align-items: center;
    min-height: 2rem;
  }

  :deep(.el-select__input) {
    height: 2rem;
    font-size: 1rem;
  }
}
</style>
