/// <reference types="node" />

import path from 'path'
import { readFile } from 'fs/promises'

const ICONIFY_JSON_PACKAGE_RE = /^@iconify-json\/([\w.-]+)$/
const VIRTUAL_ICONIFY_MODULE_ID =
  'virtual:element-plus-mobile/iconify-local-first'
const RESOLVED_VIRTUAL_ICONIFY_MODULE_ID = `\0${VIRTUAL_ICONIFY_MODULE_ID}`
const DEFAULT_ENTRY_PATTERNS = [/(^|[/\\])main\.[cm]?[jt]sx?$/]
const DEPENDENCY_FIELDS = [
  'dependencies',
  'devDependencies',
  'optionalDependencies',
  'peerDependencies',
] as const

type DependencyField = (typeof DEPENDENCY_FIELDS)[number]

interface PackageJsonLike {
  dependencies?: Record<string, string>
  devDependencies?: Record<string, string>
  optionalDependencies?: Record<string, string>
  peerDependencies?: Record<string, string>
}

interface IconifyCollectionMeta {
  packageName: string
  prefix: string
}

interface ConfigResolvedLike {
  root: string
}

interface HotUpdateContextLike {
  file: string
  server: {
    config: ConfigResolvedLike
    moduleGraph: {
      getModuleById(id: string): unknown
      invalidateModule(module: unknown): void
    }
    ws: {
      send(payload: { type: 'full-reload' }): void
    }
  }
}

export interface ElementPlusIconifyOptions {
  /**
   * @description project root used to discover installed `@iconify-json/*` packages
   */
  root?: string
  /**
   * @description whitelist of prefixes or package names to keep from discovered collections
   */
  include?: string[]
  /**
   * @description prefixes or package names to exclude from discovered collections
   */
  exclude?: string[]
  /**
   * @description entry file patterns that should receive the injected local-first bootstrap import
   */
  entryPatterns?: RegExp[]
}

const normalizePath = (value: string) => value.replace(/\\/g, '/')

const matchesCollection = (rule: string, packageName: string, prefix: string) =>
  rule === packageName || rule === prefix

const resolveProjectRoot = (baseRoot: string, customRoot?: string) =>
  customRoot ? path.resolve(baseRoot, customRoot) : baseRoot

const getDiscoveredCollections = (
  packageJson: PackageJsonLike,
  include: string[],
  exclude: string[]
): IconifyCollectionMeta[] => {
  const discovered = new Map<string, IconifyCollectionMeta>()
  const includeRules = new Set(include)
  const excludeRules = new Set(exclude)

  for (const field of DEPENDENCY_FIELDS) {
    const dependencies = packageJson[field as DependencyField]
    if (!dependencies) continue

    for (const packageName of Object.keys(dependencies)) {
      const match = packageName.match(ICONIFY_JSON_PACKAGE_RE)
      if (!match) continue

      const prefix = match[1]
      const collection = {
        packageName,
        prefix,
      }

      if (
        [...excludeRules].some((rule) =>
          matchesCollection(rule, packageName, prefix)
        )
      ) {
        continue
      }

      discovered.set(prefix, collection)
    }
  }

  const collections = [...discovered.values()]
  if (!includeRules.size) {
    return collections.sort((a, b) => a.prefix.localeCompare(b.prefix))
  }

  return collections
    .filter(({ packageName, prefix }) =>
      [...includeRules].some((rule) =>
        matchesCollection(rule, packageName, prefix)
      )
    )
    .sort((a, b) => a.prefix.localeCompare(b.prefix))
}

const generateVirtualModule = (collections: IconifyCollectionMeta[]) => {
  if (!collections.length) {
    return 'export {}'
  }

  const lines = [
    `import { registerIconifyCollection } from 'element-plus-mobile'`,
  ]

  collections.forEach(({ packageName }, index) => {
    lines.push(`import { icons as icons${index} } from '${packageName}'`)
  })

  lines.push('')

  collections.forEach((_, index) => {
    lines.push(`registerIconifyCollection(icons${index})`)
  })

  return lines.join('\n')
}

const shouldInjectBootstrapImport = (id: string, entryPatterns: RegExp[]) => {
  const normalizedId = normalizePath(id)
  if (normalizedId.includes('/node_modules/')) return false

  return entryPatterns.some((pattern) => pattern.test(normalizedId))
}

const loadPackageJsonCollections = async (
  packageJsonPath: string,
  options: ElementPlusIconifyOptions
) => {
  try {
    const content = await readFile(packageJsonPath, 'utf8')
    const packageJson = JSON.parse(content) as PackageJsonLike
    return getDiscoveredCollections(
      packageJson,
      options.include ?? [],
      options.exclude ?? []
    )
  } catch (error) {
    if ((error as { code?: string }).code === 'ENOENT') {
      return []
    }

    throw error
  }
}

export const ElementPlusIconify = (options: ElementPlusIconifyOptions = {}) => {
  const entryPatterns = options.entryPatterns?.length
    ? options.entryPatterns
    : DEFAULT_ENTRY_PATTERNS

  let packageJsonPath = ''
  let collections: IconifyCollectionMeta[] = []

  const refreshCollections = async (baseRoot: string) => {
    const projectRoot = resolveProjectRoot(baseRoot, options.root)
    packageJsonPath = path.resolve(projectRoot, 'package.json')
    collections = await loadPackageJsonCollections(packageJsonPath, options)
  }

  return {
    name: 'element-plus-mobile:iconify-local-first',
    enforce: 'pre',
    async configResolved(config: ConfigResolvedLike) {
      await refreshCollections(config.root)
    },
    resolveId(id: string) {
      if (id === VIRTUAL_ICONIFY_MODULE_ID) {
        return RESOLVED_VIRTUAL_ICONIFY_MODULE_ID
      }
    },
    load(id: string) {
      if (id === RESOLVED_VIRTUAL_ICONIFY_MODULE_ID) {
        return generateVirtualModule(collections)
      }
    },
    transform(code: string, id: string) {
      if (
        !shouldInjectBootstrapImport(id, entryPatterns) ||
        code.includes(VIRTUAL_ICONIFY_MODULE_ID)
      ) {
        return
      }

      return {
        code: `import '${VIRTUAL_ICONIFY_MODULE_ID}'\n${code}`,
        map: null,
      }
    },
    async handleHotUpdate(ctx: HotUpdateContextLike) {
      if (normalizePath(ctx.file) !== normalizePath(packageJsonPath)) {
        return
      }

      await refreshCollections(ctx.server.config.root)

      const module = ctx.server.moduleGraph.getModuleById(
        RESOLVED_VIRTUAL_ICONIFY_MODULE_ID
      )

      if (module) {
        ctx.server.moduleGraph.invalidateModule(module)
      }

      ctx.server.ws.send({
        type: 'full-reload',
      })
    },
  }
}

export default ElementPlusIconify
