import { ensureArray, isArray } from '@element-plus/utils'

import type { Arrayable } from '@element-plus/utils'
import type { FormItemContext } from './types'
import type { FormItemProp } from './form-item'

export const filterFields = (
  fields: FormItemContext[],
  props: Arrayable<FormItemProp>
) => {
  const normalized = ensureArray(props).map((prop) =>
    isArray(prop) ? prop.join('.') : prop
  )
  return normalized.length > 0
    ? fields.filter(
        (field) => field.propString && normalized.includes(field.propString)
      )
    : fields
}
