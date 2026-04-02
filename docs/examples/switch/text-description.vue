<template>
  <DemoBlock>
    <div class="demo-block__stack">
      <div class="demo-block__section">
        <span class="demo-block__caption">外侧文字</span>
        <strong>将状态含义放在开关两侧，更适合较长文案</strong>
        <el-switch
          v-model="billingCycle"
          active-text="按月订阅"
          inactive-text="按年订阅"
        />
        <p>当需要完整描述状态时，优先把文字放在开关外侧，避免挤压主体。</p>
      </div>

      <div class="demo-block__section">
        <span class="demo-block__caption">行内提示</span>
        <strong>开关内部仅保留简短提示词</strong>
        <el-switch
          v-model="autoRenew"
          inline-prompt
          active-text="是"
          inactive-text="否"
        />
        <p>`inline-prompt` 适合一到两个字的简短状态，不建议塞入完整句子。</p>
      </div>

      <div class="demo-block__section">
        <span class="demo-block__caption">自定义宽度</span>
        <strong>需要更宽触控目标时可自定义宽度</strong>
        <el-switch
          v-model="wideControl"
          width="72"
          inline-prompt
          style="
            --el-switch-on-color: var(--el-color-success);
            --el-switch-off-color: var(--el-color-danger);
          "
          active-text="开"
          inactive-text="关"
        />
        <p>自定义宽度适合无障碍或高频操作场景，但文案仍应保持简短。</p>
      </div>
    </div>
  </DemoBlock>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import DemoBlock from '../components/demo-block.vue'

const billingCycle = ref(true)
const autoRenew = ref(true)
const wideControl = ref(true)
</script>
