import { computed } from 'vue'
import { useData } from 'vitepress'
import langs from '../../i18n/lang.json'
import {
  defaultLang,
  getLangFromRelativePath,
  getLocalePath,
  resolveRoutePath,
  withLangPath,
} from '../../shared/lang'

const languages = langs as string[]

export const useLang = () => {
  const { page } = useData()
  return computed(() => {
    return getLangFromRelativePath(page.value?.relativePath || '', languages)
  })
}

export const resolveLangRoutePath = (lang: string, relativePath = 'index.md') =>
  resolveRoutePath(lang, relativePath, languages)

export const resolveLangPath = (lang: string, pathname: string) =>
  withLangPath(lang, pathname)

export const getLangHome = (lang: string) => getLocalePath(lang)

export { defaultLang }
