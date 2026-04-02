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
const splitPathSuffix = (value = '') => {
  const hashIndex = value.indexOf('#')
  const queryIndex = value.indexOf('?')
  const suffixIndex =
    hashIndex === -1
      ? queryIndex
      : queryIndex === -1
        ? hashIndex
        : Math.min(hashIndex, queryIndex)

  if (suffixIndex === -1) {
    return {
      pathname: value,
      suffix: '',
    }
  }

  return {
    pathname: value.slice(0, suffixIndex),
    suffix: value.slice(suffixIndex),
  }
}

export const ensureLeadingSlash = (value = '') =>
  value.startsWith('/') ? value : `/${value}`

export const trimLeadingSlash = (value = '') => value.replace(/^\/+/, '')

export const trimTrailingSlash = (value = '') => value.replace(/\/+$/, '')

export const getLocaleKey = (lang: string) =>
  isDefaultLang(lang) ? 'root' : lang

export const isDocCleanUrls = () => {
  if (typeof __DOC_CLEAN_URLS__ !== 'undefined') {
    return __DOC_CLEAN_URLS__
  }

  return typeof process === 'undefined'
    ? true
    : process.env.DOC_CLEAN_URLS !== 'false'
}

export const normalizeContentPath = (
  pathname: string,
  cleanUrls = isDocCleanUrls()
) => {
  const normalized = ensureLeadingSlash(normalizeSlashes(pathname || '/'))
  const { pathname: pathOnly, suffix } = splitPathSuffix(normalized)

  if (cleanUrls || pathOnly === '/') {
    return `${pathOnly}${suffix}`
  }

  if (pathOnly.endsWith('/')) {
    return `${pathOnly}${suffix}`
  }

  if (pathOnly === '/index') {
    return `/${suffix}`
  }

  if (pathOnly.endsWith('/index')) {
    return `${pathOnly.slice(0, -'/index'.length)}/${suffix}`
  }

  if (/\.[^/]+$/.test(pathOnly)) {
    return `${pathOnly}${suffix}`
  }

  return `${pathOnly}.html${suffix}`
}

export const getLocalePath = (lang: string) =>
  isDefaultLang(lang) ? '/' : `/${lang}/`

export const withLangPath = (lang: string, pathname: string) => {
  const normalized = ensureLeadingSlash(normalizeSlashes(pathname || '/'))
  if (isDefaultLang(lang)) {
    return normalizeContentPath(normalized)
  }

  return normalizeContentPath(
    normalized === '/' ? `/${lang}/` : `/${lang}${normalized}`
  )
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

export const relativePathToRoutePath = (
  relativePath: string,
  cleanUrls = isDocCleanUrls()
) => {
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
    return normalizeContentPath(routePath ? `/${routePath}/` : '/', cleanUrls)
  }

  return normalizeContentPath(ensureLeadingSlash(withoutExt), cleanUrls)
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
