import { buildProps, definePropType, iconPropType } from '@element-plus/utils'

import type { ExtractPublicPropTypes } from 'vue'
import type Icon from './icon.vue'
import type { IconPropType } from '@element-plus/utils'

export interface IconProps {
  /**
   * @description icon content. Supports Vue components, globally registered component names, and Iconify names such as `mdi:home`
   */
  icon?: IconPropType
  /**
   * @description SVG icon size, size x size
   */
  size?: number | string
  /**
   * @description SVG tag's fill attribute
   */
  color?: string
}

/**
 * @deprecated Removed after 3.0.0, Use `IconProps` instead.
 */
export const iconProps = buildProps({
  /**
   * @description icon content. Supports Vue components, globally registered component names, and Iconify names such as `mdi:home`
   */
  icon: {
    type: iconPropType,
  },
  /**
   * @description SVG icon size, size x size
   */
  size: {
    type: definePropType<number | string>([Number, String]),
  },
  /**
   * @description SVG tag's fill attribute
   */
  color: {
    type: String,
  },
} as const)

/**
 * @deprecated Removed after 3.0.0, Use `IconProps` instead.
 */
export type IconPropsPublic = ExtractPublicPropTypes<typeof iconProps>
export type IconInstance = InstanceType<typeof Icon> & unknown
