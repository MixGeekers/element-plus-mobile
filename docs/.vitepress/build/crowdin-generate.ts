import fs from 'fs'
import path from 'path'
import { styleText } from 'util'
import consola from 'consola'
import { docRoot, errorAndExit } from '@element-plus/build-utils'
import { defaultLang } from '../shared/lang'

// NB: this file is only for generating files that enables developers to develop the website.
const componentLocaleRoot = path.resolve(docRoot, '.vitepress/crowdin')

const exists = 'File already exists'

async function main() {
  const localeOutput = path.resolve(docRoot, '.vitepress/i18n')
  if (fs.existsSync(localeOutput)) {
    throw new Error(exists)
  }

  consola.trace(styleText('cyan', 'Starting for build doc for developing'))
  // all language should be identical since it is mirrored from crowdin.
  const dirs = await fs.promises.readdir(componentLocaleRoot, {
    withFileTypes: true,
  })
  const languages = dirs
    .filter((dir) => dir.isDirectory())
    .map((dir) => dir.name)
  const translatedLanguages = languages.filter((lang) => lang !== defaultLang)

  await fs.promises.mkdir(localeOutput)

  // build lang.json for telling `header>language-select` how many languages are there
  await fs.promises.writeFile(
    path.resolve(localeOutput, 'lang.json'),
    JSON.stringify(languages),
    'utf-8'
  )

  const sourceLocalePath = path.resolve(componentLocaleRoot, defaultLang)
  const languagePaths = translatedLanguages.map((lang) => {
    return {
      name: lang,
      pathname: path.resolve(componentLocaleRoot, lang),
    }
  })

  consola.debug(languagePaths)
  await traverseDir(sourceLocalePath, languagePaths, localeOutput)
}

async function traverseDir(
  dir: string,
  paths: { name: string; pathname: string }[],
  targetPath: string
) {
  const contents = await fs.promises.readdir(dir, { withFileTypes: true })

  await Promise.all(
    contents.map(async (c) => {
      if (c.isDirectory()) {
        await fs.promises.mkdir(path.resolve(targetPath, c.name), {
          recursive: true,
        })

        return traverseDir(
          path.resolve(dir, c.name),
          paths.map((p) => {
            return {
              ...p,
              pathname: path.resolve(p.pathname, c.name),
            }
          }),
          path.resolve(targetPath, c.name)
        )
      } else if (c.isFile()) {
        const content = require(path.resolve(dir, c.name))

        const contentToWrite = {
          [defaultLang]: content,
        }

        await Promise.all(
          paths.map(async (p) => {
            const content = require(path.resolve(p.pathname, c.name))

            contentToWrite[p.name] = content
          })
        )

        return fs.promises.writeFile(
          path.resolve(targetPath, c.name),
          JSON.stringify(contentToWrite, null, 2),
          {
            encoding: 'utf-8',
          }
        )
      }
    })
  )
}

main()
  .then(() => {
    consola.success(
      styleText('green', 'Locale for website development generated')
    )
  })
  .catch((err) => {
    if (err.message === exists) {
      // do nothing
    } else {
      errorAndExit(err)
    }
  })
