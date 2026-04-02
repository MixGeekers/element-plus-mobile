/// <reference types="vite/client" />

declare const __DOC_CLEAN_URLS__: boolean

declare module 'virtual:component-changelog-data' {
  const data: import('./utils/changelog-parser').ComponentChangelogs
  export default data
}
