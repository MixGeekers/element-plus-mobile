<template>
  <MobileFormDemo
    title="Accessibility"
    description="Single inputs inherit the form-item label automatically, while grouped fields still need their own accessible labels in a mobile layout."
    header-title="Profile Details"
    header-description="Compare one-input and grouped-input labeling patterns."
  >
    <div class="mobile-form-demo__panel">
      <strong>Single input labels</strong>
      <p>
        When a form item contains one input, the <code>Full Name</code> label is
        attached automatically.
      </p>
    </div>

    <el-form @submit.prevent>
      <el-form-item label="Full Name">
        <el-input
          v-model="formAccessibility.fullName"
          clearable
          placeholder="Full name"
        />
      </el-form-item>

      <div class="mobile-form-demo__panel">
        <strong>Grouped inputs</strong>
        <p>
          The <code>Your Information</code> label applies to the whole group, so
          each individual input still needs its own <code>aria-label</code>.
        </p>
      </div>

      <el-form-item label="Your Information">
        <div class="mobile-form-demo__stack">
          <el-input
            v-model="formAccessibility.firstName"
            aria-label="First Name"
            placeholder="First Name"
          />
          <el-input
            v-model="formAccessibility.lastName"
            aria-label="Last Name"
            placeholder="Last Name"
          />
        </div>
      </el-form-item>
    </el-form>
  </MobileFormDemo>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import MobileFormDemo from './components/mobile-demo-shell.vue'

const formAccessibility = reactive({
  fullName: '',
  firstName: '',
  lastName: '',
})
</script>
