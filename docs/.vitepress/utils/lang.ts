import fs from 'fs'
import path from 'path'
import { docRoot } from '@element-plus/build-utils'
import {
  defaultLang,
  getLangFromRelativePath,
  isDefaultLang,
} from '../shared/lang'

const crowdinRoot = path.resolve(__dirname, '../crowdin')

const crowdinLanguages = fs
  .readdirSync(crowdinRoot, { withFileTypes: true })
  .filter((entry) => entry.isDirectory())
  .map((entry) => entry.name)

export const languages = Array.from(new Set([defaultLang, ...crowdinLanguages]))

export const ensureLang = (lang: string) =>
  isDefaultLang(lang) ? '' : `/${lang}`

export const getLang = (id: string) =>
  getLangFromRelativePath(path.relative(docRoot, id), languages)
