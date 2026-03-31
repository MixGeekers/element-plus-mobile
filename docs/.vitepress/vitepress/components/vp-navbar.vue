<script setup lang="ts">
import { computed } from 'vue'
import { useData, withBase } from 'vitepress'
import { version as epVersion } from 'element-plus-mobile'
import { getLangHome, useLang } from '../composables/lang'
import VPNavbarSearch from './navbar/vp-search.vue'
import VPNavbarMenu from './navbar/vp-menu.vue'
import VPNavbarThemeToggler from './navbar/vp-theme-toggler.vue'
import VPNavbarTranslation from './navbar/vp-translation.vue'
import VPNavbarSocialLinks from './navbar/vp-social-links.vue'
import VPNavbarHamburger from './navbar/vp-hamburger.vue'

defineProps<{
  fullScreen: boolean
}>()

defineEmits(['toggle'])

const { theme } = useData()
const lang = useLang()

const currentLink = computed(() =>
  getLangHome(lang.value || theme.value.langs[0])
)
</script>

<template>
  <div class="navbar-wrapper">
    <div class="header-container">
      <div class="logo-container">
        <a :href="withBase(currentLink)">
          <img
            class="logo"
            src="/images/element-plus-logo.svg"
            alt="Element Plus Logo"
          />
        </a>
        <el-tag round size="small" title="latest version">{{
          epVersion.replace('0.0.0-staging.', '')
        }}</el-tag>
      </div>
      <div class="content">
        <VPNavbarSearch class="search" :options="theme.agolia" multilang />
        <VPNavbarMenu class="menu" />
        <VPNavbarThemeToggler class="theme-toggler" />
        <VPNavbarTranslation class="translation" />
        <VPNavbarSocialLinks class="social-links" />
        <VPNavbarHamburger
          :active="fullScreen"
          class="hamburger"
          @click="$emit('toggle')"
        />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.logo-container {
  display: flex;
  align-items: center;
  height: var(--header-height);
  > a {
    height: 28px;
    width: 128px;
  }
  .logo {
    position: relative;
    height: 100%;
  }
}
.dark {
  .logo {
    filter: drop-shadow(2px 2px 6px #409eff);
  }
}
</style>
