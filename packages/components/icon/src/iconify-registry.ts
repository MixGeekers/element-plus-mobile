import { addCollection, addIcon } from '@iconify/vue'
import { stringifyIconifyIconName } from '@element-plus/utils'

import type {
  IconifyCollection,
  IconifyIcon,
  IconifyIconName,
} from '@element-plus/utils'

type AddCollectionInput = Parameters<typeof addCollection>[0]
type AddIconInput = Parameters<typeof addIcon>[1]

const resolveIconifyName = (value: string | IconifyIconName) =>
  typeof value === 'string' ? value : stringifyIconifyIconName(value)

export const registerIconifyCollection = (
  collection: IconifyCollection,
  provider?: string
) => addCollection(collection as AddCollectionInput, provider)

export const registerIconifyIcon = (
  name: string | IconifyIconName,
  data: IconifyIcon | null
) => addIcon(resolveIconifyName(name), data as AddIconInput)
