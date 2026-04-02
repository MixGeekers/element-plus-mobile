<template>
  <DemoBlock>
    <div class="demo-block__section">
      <strong>单个输入项标签</strong>
      <p>
        当一个表单项只包含一个输入框时，<code>姓名</code>
        标签会自动绑定到该输入框。
      </p>
    </div>

    <el-form @submit.prevent>
      <el-form-item label="姓名">
        <el-input
          v-model="formAccessibility.fullName"
          clearable
          placeholder="请输入姓名"
        />
      </el-form-item>

      <div class="demo-block__section">
        <strong>分组输入项</strong>
        <p>
          <code>个人信息</code>
          标签作用于整组内容，因此每个输入框仍然需要单独提供
          <code>aria-label</code>。
        </p>
      </div>

      <el-form-item label="个人信息">
        <div class="demo-block__stack">
          <el-input
            v-model="formAccessibility.firstName"
            aria-label="名"
            placeholder="请输入名"
          />
          <el-input
            v-model="formAccessibility.lastName"
            aria-label="姓"
            placeholder="请输入姓"
          />
        </div>
      </el-form-item>
    </el-form>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { reactive } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const formAccessibility = reactive({
  fullName: '',
  firstName: '',
  lastName: '',
})
</script>
