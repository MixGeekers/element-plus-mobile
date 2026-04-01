<template>
  <div class="mobile-select-v2-doc-demo">
    <div class="mobile-select-v2-doc-demo__copy">
      <div class="mobile-select-v2-doc-demo__title">
        SelectV2 Bottom-Sheet Flow
      </div>
      <p class="mobile-select-v2-doc-demo__desc">
        The virtualized list keeps the same default bottom-sheet flow while
        handling much larger option sets.
      </p>
    </div>

    <div class="mobile-select-v2-doc-demo__stage">
      <div class="mobile-device">
        <div class="mobile-device__status">
          <span>9:41</span>
          <span>Mobile</span>
        </div>

        <div class="mobile-device__header">
          <strong>Store targeting</strong>
          <span
            >Try the multi-select to verify confirm / cancel with virtualized
            options.</span
          >
        </div>

        <div class="mobile-device__body">
          <div class="mobile-select-v2-doc-demo__summary">
            <label>Committed segment</label>
            <strong>{{ segment || 'Not selected' }}</strong>
          </div>

          <el-select-v2
            v-model="segment"
            :options="segmentOptions"
            filterable
            placeholder="Choose one segment"
          />

          <div class="mobile-select-v2-doc-demo__summary">
            <label>Committed stores</label>
            <strong>
              {{
                stores.length
                  ? `${stores.length} stores committed`
                  : 'No committed stores yet'
              }}
            </strong>
          </div>

          <el-select-v2
            v-model="stores"
            :options="storeOptions"
            collapse-tags
            filterable
            multiple
            placeholder="Select stores"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const segment = ref('')
const stores = ref<string[]>([])

const segmentOptions = Array.from({ length: 40 }).map((_, index) => ({
  value: `Segment ${index + 1}`,
  label: `Segment ${index + 1}`,
}))

const storeOptions = Array.from({ length: 300 }).map((_, index) => ({
  value: `Store ${index + 1}`,
  label: `Store ${index + 1}`,
}))
</script>

<style scoped lang="scss">
.mobile-select-v2-doc-demo {
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
      radial-gradient(circle at top, rgb(99 102 241 / 0.14), transparent 42%),
      linear-gradient(180deg, #f8fafc 0%, #eef2ff 100%);
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

.mobile-select-v2-doc-demo {
  :deep(.el-select) {
    width: 100%;
  }
}
</style>
