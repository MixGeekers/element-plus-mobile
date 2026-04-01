<template>
  <MobileFormDemo
    title="Basic Mobile Form"
    description="A compact activity setup example that uses the default touch-first spacing, top-aligned labels, and balanced actions."
    header-title="Weekend Workshop"
    header-description="Fill out a complete form from a phone-sized viewport."
  >
    <el-form :model="form" @submit.prevent>
      <el-form-item label="Activity name">
        <el-input
          v-model="form.name"
          clearable
          placeholder="Name the activity"
        />
      </el-form-item>

      <el-form-item label="Activity zone">
        <el-select
          v-model="form.region"
          clearable
          filterable
          placeholder="Choose one zone"
        >
          <el-option label="Zone one" value="shanghai" />
          <el-option label="Zone two" value="beijing" />
        </el-select>
      </el-form-item>

      <el-form-item label="Launch date">
        <el-date-picker
          v-model="form.date1"
          type="date"
          placeholder="Pick a date"
        />
      </el-form-item>

      <el-form-item label="Launch time">
        <el-time-picker v-model="form.date2" placeholder="Pick a time" />
      </el-form-item>

      <el-form-item label="Instant delivery">
        <el-switch v-model="form.delivery" />
      </el-form-item>

      <el-form-item label="Activity type">
        <el-checkbox-group v-model="form.type">
          <el-checkbox value="Online activities" name="type">
            Online activities
          </el-checkbox>
          <el-checkbox value="Promotion activities" name="type">
            Promotion activities
          </el-checkbox>
          <el-checkbox value="Offline activities" name="type">
            Offline activities
          </el-checkbox>
          <el-checkbox value="Simple brand exposure" name="type">
            Simple brand exposure
          </el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="Resources">
        <el-radio-group v-model="form.resource">
          <el-radio value="Sponsor">Sponsor</el-radio>
          <el-radio value="Venue">Venue</el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="Activity brief">
        <el-input
          v-model="form.desc"
          :rows="4"
          maxlength="120"
          placeholder="Describe what participants should expect"
          show-word-limit
          type="textarea"
        />
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
import { reactive } from 'vue'
import MobileFormDemo from './components/mobile-demo-shell.vue'

// do not use same name with ref
const form = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

const onSubmit = () => {
  console.log('submit!')
}
</script>
