<template>
  <MobileFormDemo
    title="Add / Delete Form Items"
    description="Dynamic fields are stacked for mobile, so added rows and actions stay readable without horizontal squeezing."
    header-title="Domain Whitelist"
    header-description="Add or remove validated domains from a compact touch-first form."
  >
    <div class="mobile-form-demo__panel">
      <strong>Dynamic validation</strong>
      <p>
        Each added domain keeps its own validation rule, and destructive actions
        stay separated from the final submit buttons.
      </p>
    </div>

    <el-form
      ref="formRef"
      :model="dynamicValidateForm"
      class="demo-dynamic"
      @submit.prevent
    >
      <el-form-item
        prop="email"
        label="Email"
        :rules="[
          {
            required: true,
            message: 'Please input email address',
            trigger: 'blur',
          },
          {
            type: 'email',
            message: 'Please input correct email address',
            trigger: ['blur', 'change'],
          },
        ]"
      >
        <el-input
          v-model="dynamicValidateForm.email"
          clearable
          placeholder="owner@example.com"
        />
      </el-form-item>

      <el-form-item
        v-for="(domain, index) in dynamicValidateForm.domains"
        :key="domain.key"
        :label="`Domain ${index + 1}`"
        :prop="'domains.' + index + '.value'"
        :rules="{
          required: true,
          message: 'domain can not be null',
          trigger: 'blur',
        }"
      >
        <div class="mobile-form-demo__stack">
          <el-input v-model="domain.value" placeholder="campaign.example.com" />
          <el-button plain @click.prevent="removeDomain(domain)">
            Delete domain
          </el-button>
        </div>
      </el-form-item>

      <el-form-item>
        <div class="mobile-form-demo__stack">
          <el-button @click="addDomain">New domain</el-button>
          <div class="mobile-form-demo__actions">
            <el-button type="primary" @click="submitForm(formRef)">
              Submit
            </el-button>
            <el-button @click="resetForm(formRef)">Reset</el-button>
          </div>
        </div>
      </el-form-item>
    </el-form>
  </MobileFormDemo>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import MobileFormDemo from './components/mobile-demo-shell.vue'

import type { FormInstance } from 'element-plus-mobile'

const formRef = ref<FormInstance>()
const dynamicValidateForm = reactive<{
  domains: DomainItem[]
  email: string
}>({
  domains: [
    {
      key: 1,
      value: '',
    },
  ],
  email: '',
})

interface DomainItem {
  key: number
  value: string
}

const removeDomain = (item: DomainItem) => {
  const index = dynamicValidateForm.domains.indexOf(item)
  if (index !== -1) {
    dynamicValidateForm.domains.splice(index, 1)
  }
}

const addDomain = () => {
  dynamicValidateForm.domains.push({
    key: Date.now(),
    value: '',
  })
}

const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
    }
  })
}

const resetForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
