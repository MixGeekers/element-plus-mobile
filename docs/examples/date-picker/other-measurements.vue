<template>
  <div class="demo-date-picker">
    <div class="container">
      <div class="block">
        <span class="demonstration">周</span>
        <el-date-picker
          v-model="value1"
          type="week"
          format="[第] ww [周]"
          placeholder="请选择周"
        />
      </div>
      <div class="block">
        <span class="demonstration">多日</span>
        <el-date-picker
          v-model="value2"
          type="dates"
          placeholder="请选择一个或多个日期"
        />
      </div>
    </div>
    <div class="container">
      <div class="block">
        <span class="demonstration">单年</span>
        <el-date-picker v-model="value3" type="year" placeholder="请选择年份" />
      </div>
      <div class="block">
        <span class="demonstration">多年</span>
        <el-date-picker
          v-model="value4"
          type="years"
          placeholder="请选择一个或多个年份"
        />
      </div>
    </div>
    <div class="container">
      <div class="block">
        <span class="demonstration">单月</span>
        <el-date-picker
          v-model="value5"
          type="month"
          placeholder="请选择月份"
        />
      </div>
      <div class="block">
        <span class="demonstration">多月</span>
        <el-date-picker
          v-model="value6"
          type="months"
          placeholder="请选择一个或多个月份"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const value4 = ref('')
const value5 = ref('')
const value6 = ref('')
</script>

<style scoped>
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}

.demo-date-picker .container {
  flex: 1;
  min-width: 300px;
  border-right: solid 1px var(--el-border-color);
}

.demo-date-picker .container:last-child {
  border-right: none;
}

.demo-date-picker .block {
  padding: 1.5rem 0;
  text-align: center;
}

.demo-date-picker .container .block:last-child {
  border-top: solid 1px var(--el-border-color);
}

.demo-date-picker .demonstration {
  display: block;
  color: var(--el-text-color-secondary);
  font-size: 14px;
  margin-bottom: 1rem;
}

@media screen and (max-width: 768px) {
  .demo-date-picker .container {
    flex: 0 0 100%;
    min-width: auto;
    border-right: none;
    border-bottom: solid 1px var(--el-border-color);
  }

  .demo-date-picker .container:last-child {
    border-bottom: none;
  }

  .demo-date-picker .block {
    padding: 1rem 0;
  }

  .demo-date-picker .container .block:last-child {
    border-top: solid 1px var(--el-border-color);
  }
}
</style>
