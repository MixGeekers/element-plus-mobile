declare module 'postcss-pxtorem' {
  import type { AcceptedPlugin } from 'postcss'

  interface PostcssPxToRemOptions {
    rootValue?: number | ((input: { file?: string }) => number)
    unitPrecision?: number
    propList?: string[]
    selectorBlackList?: Array<string | RegExp>
    replace?: boolean
    mediaQuery?: boolean
    minPixelValue?: number
    exclude?: string | RegExp | Array<string | RegExp>
    transformUnit?: string
  }

  export default function pxtorem(
    options?: PostcssPxToRemOptions
  ): AcceptedPlugin
}
