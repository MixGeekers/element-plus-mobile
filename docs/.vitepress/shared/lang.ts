export const defaultLang = 'zh-CN'
export const sourceLang = defaultLang

export const languageMap: Record<string, string> = {
  'zh-CN': '中文',
  'en-US': 'English',
  'es-ES': 'Español',
  'fr-FR': 'Français',
  'ja-JP': '日本語',
}

export const isDefaultLang = (lang: string) => lang === defaultLang

const normalizeSlashes = (value = '') => value.replace(/\\/g, '/')

export const ensureLeadingSlash = (value = '') =>
  value.startsWith('/') ? value : `/${value}`

export const trimLeadingSlash = (value = '') => value.replace(/^\/+/, '')

export const trimTrailingSlash = (value = '') => value.replace(/\/+$/, '')

export const getLocaleKey = (lang: string) =>
  isDefaultLang(lang) ? 'root' : lang

export const getLocalePath = (lang: string) =>
  isDefaultLang(lang) ? '/' : `/${lang}/`

export const withLangPath = (lang: string, pathname: string) => {
  const normalized = ensureLeadingSlash(normalizeSlashes(pathname || '/'))
  if (isDefaultLang(lang)) {
    return normalized
  }

  return normalized === '/' ? `/${lang}/` : `/${lang}${normalized}`
}

export const getLangFromRelativePath = (
  relativePath: string,
  languages: string[]
) => {
  const normalized = trimLeadingSlash(normalizeSlashes(relativePath))
  const prefixedLanguages = languages.filter((lang) => !isDefaultLang(lang))

  return (
    prefixedLanguages.find(
      (lang) => normalized === lang || normalized.startsWith(`${lang}/`)
    ) || defaultLang
  )
}

export const stripLangFromRelativePath = (
  relativePath: string,
  languages: string[]
) => {
  const normalized = trimLeadingSlash(normalizeSlashes(relativePath))
  const lang = getLangFromRelativePath(normalized, languages)

  if (isDefaultLang(lang)) {
    return normalized
  }

  return normalized.slice(lang.length).replace(/^\/+/, '')
}

export const relativePathToRoutePath = (relativePath: string) => {
  const normalized = trimLeadingSlash(normalizeSlashes(relativePath))

  if (!normalized || normalized === 'index.md') {
    return '/'
  }

  const withoutExt = normalized.replace(/\.md$/, '')
  if (withoutExt === 'index') {
    return '/'
  }

  if (withoutExt.endsWith('/index')) {
    const routePath = withoutExt.slice(0, -'/index'.length)
    return routePath ? `/${routePath}/` : '/'
  }

  return ensureLeadingSlash(withoutExt)
}

export const resolveRoutePath = (
  lang: string,
  relativePath: string,
  languages: string[]
) =>
  withLangPath(
    lang,
    relativePathToRoutePath(stripLangFromRelativePath(relativePath, languages))
  )
