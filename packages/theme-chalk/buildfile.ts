import path from 'path'
import { copyFile, mkdir, writeFile } from 'fs/promises'
import { styleText } from 'util'
import { epOutput, execCommand } from '@element-plus/build-utils'
import consola from 'consola'
import { transform } from 'lightningcss'
import { glob } from 'tinyglobby'
import { compileAsync } from 'sass-embedded'
import { chunk } from 'lodash-unified'
import postcss from 'postcss'
import pxtorem from 'postcss-pxtorem'

const distFolder = path.resolve(__dirname, 'dist')
const distBundle = path.resolve(epOutput, 'theme-chalk')
const mobileRemTargets = new Set([
  'aside',
  'button',
  'button-group',
  'cascader',
  'cascader-panel',
  'checkbox',
  'checkbox-group',
  'col',
  'color-picker',
  'color-picker-panel',
  'container',
  'date-picker',
  'date-picker-panel',
  'footer',
  'form',
  'form-item',
  'header',
  'icon',
  'input',
  'input-number',
  'link',
  'main',
  'option',
  'radio',
  'radio-group',
  'rate',
  'row',
  'scrollbar',
  'segmented',
  'select',
  'select-dropdown',
  'select-dropdown-v2',
  'select-v2',
  'slider',
  'space',
  'splitter',
  'splitter-panel',
  'switch',
  'text',
  'time-picker',
  'time-select',
  'transfer',
  'upload',
])

async function convertPxToRem(filename: string, css: string) {
  if (!mobileRemTargets.has(filename)) return css

  const result = await postcss([
    pxtorem({
      rootValue: 16,
      propList: ['*'],
      minPixelValue: 0,
    }),
  ]).process(css, {
    from: `${filename}.css`,
  })

  return result.css
}

async function compress(filename: string, css: string) {
  const result = transform({
    filename,
    code: Buffer.from(css),
    minify: true,
    sourceMap: false,
    targets: {
      chrome: 85 << 16,
      firefox: 79 << 16,
      safari: (14 << 16) | (1 << 8),
      edge: 85 << 16,
    },
  })
  return result.code
}

const processfiles = async (scssFiles: string[]) => {
  const noElPrefixFile = /(index|base|display)/
  await mkdir(distFolder, { recursive: true })
  for (const scssFile of scssFiles) {
    const fullPath = path.resolve(__dirname, scssFile)
    const baseName = path.basename(scssFile, '.scss')

    const cssResult = await compileAsync(fullPath)
    const mobileCss = await convertPxToRem(baseName, cssResult.css)
    const compressed = await compress(baseName, mobileCss)

    const outputName = noElPrefixFile.test(baseName)
      ? `${baseName}.css`
      : `el-${baseName}.css`

    const outputPath = path.join(distFolder, outputName)
    await writeFile(outputPath, compressed)

    consola.success(
      `${styleText('cyan', outputName)}: ${styleText(
        'yellow',
        `${mobileCss.length / 1000}`
      )} KB -> ${styleText('green', `${compressed.length / 1000}`)} KB`
    )
  }
}

async function buildThemeChalk() {
  const scssFiles = await glob('src/*.scss', {
    cwd: __dirname,
    absolute: true,
  })
  const chunks = chunk(scssFiles, Math.ceil(scssFiles.length / 5))
  return Promise.all(chunks.map(processfiles))
}

async function buildDarkCssVars() {
  const darkFile = path.resolve(__dirname, 'src/dark/css-vars.scss')
  const cssResult = await compileAsync(darkFile)
  const compressed = await compress(darkFile, cssResult.css)

  const outputDir = path.join(distFolder, 'dark')
  await mkdir(outputDir, { recursive: true })
  await writeFile(path.join(outputDir, 'css-vars.css'), compressed)
}

async function copyThemeChalkBundle() {
  const files = await glob(['dist/**/*'], { cwd: __dirname })
  for (const file of files) {
    const source = path.resolve(__dirname, file)
    const dest = path.resolve(distBundle, path.relative('dist', file))
    await mkdir(path.dirname(dest), { recursive: true })
    await copyFile(source, dest)
  }
}

async function copyThemeChalkSource() {
  const destDir = path.resolve(distBundle, 'src')
  const files = await glob(['src/**/*'], { cwd: __dirname })

  for (const file of files) {
    const source = path.resolve(__dirname, file)
    const dest = path.resolve(destDir, path.relative('src', file))
    await mkdir(path.dirname(dest), { recursive: true })
    await copyFile(source, dest)
  }
}

const buildTheme = async () => {
  await execCommand(copyThemeChalkSource)
  await Promise.all([
    execCommand(buildThemeChalk),
    execCommand(buildDarkCssVars),
  ])
  await execCommand(copyThemeChalkBundle)
}

function main() {
  return execCommand(buildTheme)
}

main()
