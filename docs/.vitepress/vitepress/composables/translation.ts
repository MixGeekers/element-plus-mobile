import { computed } from 'vue'
import { useData, useRouter, withBase } from 'vitepress'
import { useStorage } from '@vueuse/core'
import { PREFERRED_LANG_KEY } from '../constant'
import langs from '../../i18n/lang.json'
import translationLocale from '../../i18n/component/translation.json'
import { defaultLang, languageMap } from '../../shared/lang'
import { resolveLangRoutePath, useLang } from './lang'

export const useTranslation = () => {
  const router = useRouter()
  const lang = useLang()
  const { page } = useData()

  const locale = computed(() => translationLocale[lang.value])
  const langsRef = computed(() => {
    const currentLang = lang.value
    const langsCopy = langs.slice(0)
    langsCopy.splice(langsCopy.indexOf(currentLang), 1)
    const defaultIndex = langsCopy.indexOf(defaultLang)

    if (currentLang !== defaultLang && defaultIndex > -1) {
      langsCopy.splice(defaultIndex, 1)
      langsCopy.unshift(defaultLang)
    }

    return langsCopy
  })

  const language = useStorage(PREFERRED_LANG_KEY, defaultLang)

  const getTargetUrl = (lang: string) => {
    return resolveLangRoutePath(lang, page.value?.relativePath || 'index.md')
  }

  const switchLang = (targetLang: string) => {
    if (lang.value === targetLang) return
    language.value = targetLang

    const goTo: string = getTargetUrl(targetLang)
    router.go(withBase(goTo))
  }

  return {
    locale,
    languageMap,
    langs: langsRef,
    lang,
    getTargetUrl,
    switchLang,
  }
}
