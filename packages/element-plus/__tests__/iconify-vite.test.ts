import os from 'node:os'
import path from 'node:path'
import { mkdtemp, rm, writeFile } from 'node:fs/promises'
import { afterEach, describe, expect, test } from 'vitest'
import { ElementPlusIconify } from '../vite/iconify'

const VIRTUAL_ICONIFY_MODULE_ID =
  'virtual:element-plus-mobile/iconify-local-first'

const tempDirs: string[] = []

const createProject = async (packageJson: Record<string, unknown>) => {
  const root = await mkdtemp(path.join(os.tmpdir(), 'epm-iconify-'))
  tempDirs.push(root)

  await writeFile(
    path.join(root, 'package.json'),
    JSON.stringify(packageJson, null, 2),
    'utf8'
  )

  return root
}

const getPlugin = () => ElementPlusIconify()

afterEach(async () => {
  await Promise.all(
    tempDirs
      .splice(0, tempDirs.length)
      .map((dir) => rm(dir, { recursive: true, force: true }))
  )
})

describe('ElementPlusIconify', () => {
  test('injects local-first bootstrap import into main entry', async () => {
    const root = await createProject({
      dependencies: {
        '@iconify-json/mdi': '^1.2.3',
      },
    })
    const plugin = getPlugin()

    await plugin.configResolved?.({
      root,
    } as any)

    const result = plugin.transform?.(
      "createApp(App).mount('#app')",
      path.join(root, 'src/main.ts')
    )

    expect(result).toMatchObject({
      map: null,
    })
    expect((result as { code: string }).code).toContain(
      `import '${VIRTUAL_ICONIFY_MODULE_ID}'`
    )
  })

  test('discovers installed iconify collections from package.json', async () => {
    const root = await createProject({
      dependencies: {
        '@iconify-json/mdi': '^1.2.3',
        vue: '^3.5.0',
      },
      devDependencies: {
        '@iconify-json/ph': '^1.2.3',
      },
    })
    const plugin = ElementPlusIconify({
      exclude: ['ph'],
    })

    await plugin.configResolved?.({
      root,
    } as any)

    const virtualId = plugin.resolveId?.(VIRTUAL_ICONIFY_MODULE_ID)
    const code = plugin.load?.(virtualId as string)

    expect(code).toContain(
      `import { icons as icons0 } from '@iconify-json/mdi'`
    )
    expect(code).toContain('registerIconifyCollection(icons0)')
    expect(code).not.toContain('@iconify-json/ph')
  })
})
