import { withInstall } from '@element-plus/utils'
import Icon from './src/icon.vue'

import type { SFCWithInstall } from '@element-plus/utils'

export const ElIcon: SFCWithInstall<typeof Icon> = withInstall(Icon)
export default ElIcon

export * from './src/icon'
export * from './src/iconify-registry'
export type {
  IconifyCollection,
  IconifyIcon,
  IconifyIconName,
} from '@element-plus/utils'
