<template>
  <MobileFormDemo
    title="Size Control"
    description="Switch the inherited form size inside the same phone frame to compare touch targets without falling back to a desktop layout."
    header-title="Preference Setup"
    header-description="All fields below inherit the selected size."
  >
    <div class="mobile-form-demo__panel">
      <div class="mobile-form-demo__caption">Component size</div>
      <el-segmented v-model="size" :options="sizeOptions" block />
    </div>

    <el-form :model="sizeForm" :size="size" @submit.prevent>
      <el-form-item label="Activity name">
        <el-input
          v-model="sizeForm.name"
          clearable
          placeholder="Name the activity"
        />
      </el-form-item>

      <el-form-item label="Activity zone">
        <el-select
          v-model="sizeForm.region"
          clearable
          filterable
          placeholder="Choose a zone"
        >
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>

      <el-form-item label="Launch date">
        <el-date-picker
          v-model="sizeForm.date1"
          aria-label="Pick a date"
          placeholder="Pick a date"
          type="date"
        />
      </el-form-item>

      <el-form-item label="Launch time">
        <el-time-picker
          v-model="sizeForm.date2"
          aria-label="Pick a time"
          placeholder="Pick a time"
        />
      </el-form-item>

      <el-form-item label="Activity type">
        <el-checkbox-group v-model="sizeForm.type">
          <el-checkbox value="Online activities" name="type">
            Online activities
          </el-checkbox>
          <el-checkbox value="Promotion activities" name="type">
            Promotion activities
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="Resources">
        <el-radio-group v-model="sizeForm.resource">
          <el-radio value="Sponsor">Sponsor</el-radio>
          <el-radio value="Venue">Venue</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item>
        <div class="mobile-form-demo__actions">
          <el-button type="primary" @click="onSubmit">Create</el-button>
          <el-button>Cancel</el-button>
        </div>
      </el-form-item>
    </el-form>
  </MobileFormDemo>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import MobileFormDemo from './components/mobile-demo-shell.vue'

import type { ComponentSize } from 'element-plus-mobile'

const size = ref<ComponentSize>('default')
const sizeOptions: ComponentSize[] = ['large', 'default', 'small']

const sizeForm = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

function onSubmit() {
  console.log('submit!')
}
</script>
