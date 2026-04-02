import consola from 'consola'
import { REPO_BRANCH, REPO_PATH } from '@element-plus/build-constants'
import { docsDirName } from '@element-plus/build-utils'
import {
  defaultLang,
  getLocaleKey,
  getLocalePath,
  languageMap,
} from '../shared/lang'
import { languages } from '../utils/lang'
import { features } from './features'
import { head } from './head'
import { nav } from './nav'
import { mdPlugin } from './plugins'
import { sidebars } from './sidebars'
import { getViteConfig } from './vite'

import type { UserConfig } from 'vitepress'

const docEnv = process.env.DOC_ENV
const docOutDir = process.env.DOC_OUT_DIR
const docCleanUrls = process.env.DOC_CLEAN_URLS !== 'false'
const docSiteUrl = process.env.DOC_SITE_URL || 'https://element-plus.org'

const buildTransformers = () => {
  const transformer = () => {
    return {
      props: [],
      needRuntime: true,
    }
  }

  const transformers = {}
  const directives = [
    'infinite-scroll',
    'loading',
    'popover',
    'click-outside',
    'repeat-click',
    'trap-focus',
    'mousewheel',
    'resize',
  ]
  directives.forEach((k) => {
    transformers[k] = transformer
  })

  return transformers
}

consola.debug(`DOC_ENV: ${docEnv}`)
consola.debug(`DOC_OUT_DIR: ${docOutDir || 'dist'}`)
consola.debug(`DOC_CLEAN_URLS: ${docCleanUrls}`)
consola.debug(`DOC_SITE_URL: ${docSiteUrl}`)

const locales = {}
languages.forEach((lang) => {
  locales[getLocaleKey(lang)] = {
    label: languageMap[lang] || lang,
    lang,
    link: getLocalePath(lang),
    description:
      lang === defaultLang
        ? '一个基于 Vue 3 的组件库，面向设计师和开发者'
        : 'A Vue 3 based component library for designers and developers',
  }
})

const setupConfig = (configEnv) => {
  const config: UserConfig<any> = {
    title: 'Element Plus',
    lang: defaultLang,
    description: '一个基于 Vue 3 的组件库，面向设计师和开发者',
    lastUpdated: true,
    head,
    ...(docOutDir ? { outDir: docOutDir } : {}),
    themeConfig: {
      repo: REPO_PATH,
      docsBranch: REPO_BRANCH,
      docsDir: docsDirName,

      editLinks: true,
      editLinkText: 'Edit this page on GitHub',

      logo: '/images/element-plus-logo.svg',
      logoSmall: '/images/element-plus-logo-small.svg',
      sidebars,
      nav,
      agolia: {
        apiKey: '99caf32e743ba77d78b095b763b8e380',
        appId: 'ZM3TI8AKL4',
      },
      features,
      langs: languages,
    },
    cleanUrls: docCleanUrls,
    sitemap: {
      hostname: docSiteUrl,
    },
    locales,
    vite: getViteConfig(configEnv),
    markdown: {
      config: (md) => mdPlugin(md),
    },
    vue: {
      template: {
        compilerOptions: {
          hoistStatic: false,
          directiveTransforms: buildTransformers(),
        },
      },
    },

    postRender(context) {
      // Inject the teleport markup
      if (context.teleports) {
        const body = Object.entries(context.teleports).reduce(
          (all, [key, value]) => {
            if (key.startsWith('#el-popper-container-')) {
              return `${all}<div id="${key.slice(1)}">${value}</div>`
            }
            return all
          },
          context.teleports.body || ''
        )

        context.teleports = { ...context.teleports, body }
      }

      return context
    },
  }

  return config
}

export default setupConfig
