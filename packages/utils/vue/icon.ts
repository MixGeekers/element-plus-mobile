import {
  CircleCheck,
  CircleClose,
  CircleCloseFilled,
  Close,
  InfoFilled,
  Loading,
  SuccessFilled,
  WarningFilled,
} from '@element-plus/icons-vue'
import { definePropType } from './props'

import type { Component } from 'vue'

export interface IconifyIcon {
  body: string
  left?: number
  top?: number
  width?: number | string
  height?: number | string
  rotate?: number
  hFlip?: boolean
  vFlip?: boolean
}

export interface IconifyIconName {
  provider: string
  prefix: string
  name: string
}

export type IconifyIconSource = IconifyIcon | IconifyIconName
export type IconPropType = string | Component | IconifyIconSource

const iconifyIconNameRE = /^(?:@[\w.-]+:)?[\w.-]+:[\w.-]+$/

const isObjectLike = (value: unknown): value is Record<string, unknown> =>
  value !== null && typeof value === 'object'

export const isIconifyIconName = (value: unknown): value is string =>
  typeof value === 'string' && iconifyIconNameRE.test(value)

export const isIconifyIconData = (value: unknown): value is IconifyIcon =>
  isObjectLike(value) && typeof value.body === 'string'

export const isIconifyIconNameObject = (
  value: unknown
): value is IconifyIconName =>
  isObjectLike(value) &&
  typeof value.provider === 'string' &&
  typeof value.prefix === 'string' &&
  typeof value.name === 'string'

export const isIconifyIconSource = (
  value: unknown
): value is string | IconifyIconSource =>
  isIconifyIconName(value) ||
  isIconifyIconData(value) ||
  isIconifyIconNameObject(value)

export const iconPropType = definePropType<IconPropType>([
  String,
  Object,
  Function,
])

export const CloseComponents = {
  Close,
}

export const TypeComponents = {
  Close,
  SuccessFilled,
  InfoFilled,
  WarningFilled,
  CircleCloseFilled,
}

export const TypeComponentsMap = {
  primary: InfoFilled,
  success: SuccessFilled,
  warning: WarningFilled,
  error: CircleCloseFilled,
  info: InfoFilled,
}

export const ValidateComponentsMap = {
  validating: Loading,
  success: CircleCheck,
  error: CircleClose,
}

// All icon components have the same type, so we can pick any one of them to get the type
export type IconComponent = typeof Loading
