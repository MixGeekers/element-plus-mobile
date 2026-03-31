import fs from 'fs/promises'
import path from 'path'
import { glob } from 'tinyglobby'
import { docRoot, errorAndExit } from '@element-plus/build-utils'

const zhPatterns = [
  'index.md',
  'guide/**/*.md',
  'component/**/*.md',
  'resource/**/*.md',
]
const enPattern = 'en-US/**/*.md'

const flattenKeys = (value: unknown, prefix = ''): string[] => {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) =>
      flattenKeys(item, `${prefix}[${index}]`)
    )
  }

  if (value && typeof value === 'object') {
    return Object.entries(value as Record<string, unknown>).flatMap(
      ([key, child]) => flattenKeys(child, prefix ? `${prefix}.${key}` : key)
    )
  }

  return [prefix]
}

const getFrontmatterLang = async (file: string) => {
  const content = (await fs.readFile(path.resolve(docRoot, file), 'utf8'))
    .replace(/^\uFEFF/, '')
    .replace(/\r\n/g, '\n')

  if (!content.startsWith('---\n')) {
    return ''
  }

  const end = content.indexOf('\n---\n', 4)
  if (end === -1) {
    return ''
  }

  const frontmatter = content.slice(4, end)
  const langLine = frontmatter
    .split('\n')
    .find((line) => line.startsWith('lang:'))

  return langLine?.slice('lang:'.length).trim() ?? ''
}

async function main() {
  const zhDocs = await glob(zhPatterns, {
    cwd: docRoot,
    absolute: false,
  })
  const enDocs = await glob(enPattern, {
    cwd: docRoot,
    absolute: false,
  })

  const zhSet = new Set(zhDocs)
  const enSet = new Set(enDocs.map((file) => file.replace(/^en-US\//, '')))

  const missingInZh = [...enSet].filter((file) => !zhSet.has(file))
  const missingInEn = [...zhSet].filter(
    (file) => file !== 'index.md' && !enSet.has(file)
  )

  if (missingInZh.length || missingInEn.length) {
    throw new Error(
      [
        missingInZh.length
          ? `Missing zh-CN docs: ${missingInZh.join(', ')}`
          : '',
        missingInEn.length
          ? `Missing en-US docs: ${missingInEn.join(', ')}`
          : '',
      ]
        .filter(Boolean)
        .join('\n')
    )
  }

  await Promise.all(
    zhDocs.map(async (file) => {
      const lang = await getFrontmatterLang(file)
      if (lang !== 'zh-CN') {
        throw new Error(`Expected zh-CN frontmatter in ${file}, got "${lang}"`)
      }
    })
  )

  await Promise.all(
    enDocs.map(async (file) => {
      const lang = await getFrontmatterLang(file)
      if (lang !== 'en-US') {
        throw new Error(`Expected en-US frontmatter in ${file}, got "${lang}"`)
      }
    })
  )

  const localeJsons = await glob('.vitepress/crowdin/{zh-CN,en-US}/**/*.json', {
    cwd: docRoot,
    absolute: false,
  })

  const grouped = localeJsons.reduce<Record<string, string[]>>((acc, file) => {
    const relative = file.replace(/^\.vitepress\/crowdin\/(zh-CN|en-US)\//, '')
    acc[relative] ||= []
    acc[relative].push(file)
    return acc
  }, {})

  for (const [relative, files] of Object.entries(grouped)) {
    if (files.length !== 2) {
      throw new Error(`Expected zh-CN and en-US locale files for ${relative}`)
    }

    const [zhPath, enPath] = files.sort()
    const [zhJson, enJson] = await Promise.all([
      fs.readFile(path.resolve(docRoot, zhPath), 'utf8'),
      fs.readFile(path.resolve(docRoot, enPath), 'utf8'),
    ])

    const zhKeys = flattenKeys(JSON.parse(zhJson)).sort()
    const enKeys = flattenKeys(JSON.parse(enJson)).sort()

    if (JSON.stringify(zhKeys) !== JSON.stringify(enKeys)) {
      throw new Error(`Locale key mismatch in ${relative}`)
    }
  }
}

main().catch((error) => errorAndExit(error))
