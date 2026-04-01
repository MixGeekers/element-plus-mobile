import { defineComponent, h } from 'vue'
import { Icon as IconifyIcon } from '@iconify/vue'

type BuiltinIconData = {
  body: string
  left?: number
  top?: number
  width?: number
  height?: number
  rotate?: number
  hFlip?: boolean
  vFlip?: boolean
}

const createBuiltinIcon = (name: string, icon: BuiltinIconData) =>
  defineComponent({
    name: `El${name}Icon`,
    inheritAttrs: false,
    setup(_, { attrs }) {
      return () => h(IconifyIcon, { ...attrs, icon })
    },
  })
const ArrowDownData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M831.9 340.9L512 652.7L192.1 340.9a30.6 30.6 0 0 0-42.7 0a29 29 0 0 0 0 41.6l340.3 331.7a32 32 0 0 0 44.6 0l340.3-331.7a29 29 0 0 0 0-41.7a30.6 30.6 0 0 0-42.7 0z"/>',
}
export const ArrowDown = createBuiltinIcon('ArrowDown', ArrowDownData)
const ArrowLeftData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M609.4 149.4L277.8 489.6a32 32 0 0 0 0 44.7l331.6 340.3a29 29 0 0 0 41.7 0a30.6 30.6 0 0 0 0-42.7l-311.8-320L651 192.1a30.6 30.6 0 0 0 0-42.7a29 29 0 0 0-41.7 0"/>',
}
export const ArrowLeft = createBuiltinIcon('ArrowLeft', ArrowLeftData)
const ArrowRightData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M340.9 149.3a30.6 30.6 0 0 0 0 42.8L652.7 512L341 831.9a30.6 30.6 0 0 0 0 42.7a29 29 0 0 0 41.7 0l331.6-340.3a32 32 0 0 0 0-44.6L382.6 149.4a29 29 0 0 0-41.7 0z"/>',
}
export const ArrowRight = createBuiltinIcon('ArrowRight', ArrowRightData)
const ArrowUpData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M488.8 344.3L149 701a32 32 0 0 0 0 44.2l.4.3a29.4 29.4 0 0 0 42.7 0l320-335.8l319.8 335.8a29.4 29.4 0 0 0 42.7 0l.4-.3a32 32 0 0 0 0-44.2L535.2 344.3a32 32 0 0 0-46.4 0"/>',
}
export const ArrowUp = createBuiltinIcon('ArrowUp', ArrowUpData)
const BackData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64"/><path fill="currentColor" d="m237.2 512l265.5 265.3a32 32 0 0 1-45.4 45.4l-288-288a32 32 0 0 1 0-45.4l288-288a32 32 0 1 1 45.4 45.4z"/>',
}
export const Back = createBuiltinIcon('Back', BackData)
const CalendarData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64m0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64"/>',
}
export const Calendar = createBuiltinIcon('Calendar', CalendarData)
const CaretBottomData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="m192 384l320 384l320-384z"/>',
}
export const CaretBottom = createBuiltinIcon('CaretBottom', CaretBottomData)
const CaretRightData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M384 192v640l384-320z"/>',
}
export const CaretRight = createBuiltinIcon('CaretRight', CaretRightData)
const CaretTopData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M512 320L192 704h640z"/>',
}
export const CaretTop = createBuiltinIcon('CaretTop', CaretTopData)
const CheckData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M406.7 707L195.8 496.2a32 32 0 1 0-45.2 45.2l256 256l512-512a32 32 0 0 0-45.3-45.2L406.6 706.9z"/>',
}
export const Check = createBuiltinIcon('Check', CheckData)
const CheckedData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M704 192h160v736H160V192h160v64h384zM311.6 537.3l-45.3 45.2l181 181l316.9-316.8l-45.4-45.2L447.4 673zM384 192V96h256v96z"/>',
}
export const Checked = createBuiltinIcon('Checked', CheckedData)
const CircleCheckData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M512 896a384 384 0 1 0 0-768a384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896a448 448 0 0 1 0 896"/><path fill="currentColor" d="M745.3 361.3a32 32 0 0 1 45.4 45.4l-288 288a32 32 0 0 1-45.4 0l-160-160a32 32 0 1 1 45.4-45.4L480 626.8z"/>',
}
export const CircleCheck = createBuiltinIcon('CircleCheck', CircleCheckData)
const CircleCheckFilledData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m-55.8 536.4l-99.5-99.6a38.4 38.4 0 1 0-54.4 54.3L429.1 682a38.3 38.3 0 0 0 54.3 0l262.4-262.5a38.4 38.4 0 1 0-54.3-54.3z"/>',
}
export const CircleCheckFilled = createBuiltinIcon(
  'CircleCheckFilled',
  CircleCheckFilledData
)
const CircleCloseData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="m466.8 512l-90.5-90.5a32 32 0 0 1 45.2-45.2l90.5 90.5l90.5-90.5a32 32 0 1 1 45.2 45.2L557.2 512l90.5 90.5a32 32 0 1 1-45.2 45.2L512 557.2l-90.5 90.5a32 32 0 0 1-45.2-45.2z"/><path fill="currentColor" d="M512 896a384 384 0 1 0 0-768a384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896a448 448 0 0 1 0 896"/>',
}
export const CircleClose = createBuiltinIcon('CircleClose', CircleCloseData)
const CircleCloseFilledData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m0 393.7L408 353.6a38.4 38.4 0 1 0-54.4 54.3l104 104.1l-104 104a38.4 38.4 0 1 0 54.3 54.4l104.1-104l104 104a38.4 38.4 0 1 0 54.4-54.3L566.4 512l104-104a38.4 38.4 0 1 0-54.3-54.4z"/>',
}
export const CircleCloseFilled = createBuiltinIcon(
  'CircleCloseFilled',
  CircleCloseFilledData
)
const ClockData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M512 896a384 384 0 1 0 0-768a384 384 0 0 0 0 768m0 64a448 448 0 1 1 0-896a448 448 0 0 1 0 896"/><path fill="currentColor" d="M480 256a32 32 0 0 1 32 32v256a32 32 0 0 1-64 0V288a32 32 0 0 1 32-32"/><path fill="currentColor" d="M480 512h256q32 0 32 32t-32 32H480q-32 0-32-32t32-32"/>',
}
export const Clock = createBuiltinIcon('Clock', ClockData)
const CloseData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M764.3 214.6L512 466.9L259.7 214.6a32 32 0 0 0-45.1 45.1L466.8 512L214.5 764.2a32 32 0 1 0 45.1 45.2L512 557.2l252.3 252.3a32 32 0 0 0 45.1-45.1L557.1 512l252.3-252.4a32 32 0 1 0-45.1-45.2z"/>',
}
export const Close = createBuiltinIcon('Close', CloseData)
const CloseBoldData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M195.2 195.2a64 64 0 0 1 90.5 0L512 421.5l226.3-226.3a64 64 0 0 1 90.5 90.5L602.5 512l226.3 226.3a64 64 0 0 1-90.5 90.5L512 602.5L285.7 828.8a64 64 0 0 1-90.5-90.5L421.5 512L195.2 285.7a64 64 0 0 1 0-90.5"/>',
}
export const CloseBold = createBuiltinIcon('CloseBold', CloseBoldData)
const CommentData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M736 504a56 56 0 1 1 0-112a56 56 0 0 1 0 112m-224 0a56 56 0 1 1 0-112a56 56 0 0 1 0 112m-224 0a56 56 0 1 1 0-112a56 56 0 0 1 0 112M128 128v640h192v160l224-160h352V128z"/>',
}
export const Comment = createBuiltinIcon('Comment', CommentData)
const DArrowLeftData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M529.4 149.4a29 29 0 0 1 41.7 0a30.6 30.6 0 0 1 0 42.7L259.3 511.9L571 832a30.6 30.6 0 0 1-.5 43.2a29 29 0 0 1-41.2-.5L197.8 534.3a32 32 0 0 1 0-44.7zm256 0a29 29 0 0 1 41.7 0a30.6 30.6 0 0 1 0 42.7L515.3 511.9L827 832a30.6 30.6 0 0 1-.5 43.2a29 29 0 0 1-41.2-.5L453.8 534.3a32 32 0 0 1 0-44.7z"/>',
}
export const DArrowLeft = createBuiltinIcon('DArrowLeft', DArrowLeftData)
const DArrowRightData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M452.9 149.3a29 29 0 0 1 41.7 0l331.6 340.4a32 32 0 0 1 0 44.6L494.6 874.6a29 29 0 0 1-41.7 0a30.6 30.6 0 0 1 0-42.7L764.7 512L453 192a30.6 30.6 0 0 1 0-42.7m-256 0a29 29 0 0 1 41.7 0l331.6 340.4a32 32 0 0 1 0 44.6L238.6 874.6a29 29 0 0 1-41.7 0a30.6 30.6 0 0 1 0-42.7L508.7 512L197 192a30.6 30.6 0 0 1 0-42.7"/>',
}
export const DArrowRight = createBuiltinIcon('DArrowRight', DArrowRightData)
const DeleteData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M160 256H96a32 32 0 0 1 0-64h256V96a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v96h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"/>',
}
export const Delete = createBuiltinIcon('Delete', DeleteData)
const DocumentData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M832 384H576V128H192v768h640zm-26.5-64L640 154.5V320zM160 64h480l256 256v608a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V96a32 32 0 0 1 32-32m160 448h384v64H320zm0-192h160v64H320zm0 384h384v64H320z"/>',
}
export const Document = createBuiltinIcon('Document', DocumentData)
const DownloadData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M160 832h704a32 32 0 1 1 0 64H160a32 32 0 1 1 0-64m384-253.7L780.3 342l45.2 45.2L508.8 704L192 387.2l45.2-45.2L480 584.7V128h64z"/>',
}
export const Download = createBuiltinIcon('Download', DownloadData)
const FolderData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M128 192v640h768V320H485.8L357.5 192zm-32-64h287.9l128.4 128H928a32 32 0 0 1 32 32v576a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32"/>',
}
export const Folder = createBuiltinIcon('Folder', FolderData)
const FolderOpenedData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M878 448H242l-96 384h636zm-46-64v-64H485.8L357.5 192H128v448l58-231.7a32 32 0 0 1 31-24.3zm-25 512H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h287.9l128.4 128H864a32 32 0 0 1 32 32v96h23a32 32 0 0 1 31 39.7l-112 448a32 32 0 0 1-31 24.3"/>',
}
export const FolderOpened = createBuiltinIcon('FolderOpened', FolderOpenedData)
const FullScreenData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="m160 96l192 .3a32 32 0 0 1 0 64l-192-.2V352a32 32 0 0 1-64 0V96zm0 832H96V672a32 32 0 1 1 64 0v192l192-.3a32 32 0 1 1 0 64zM864 96h64v256a32 32 0 1 1-64 0V160l-192 .3a32 32 0 1 1 0-64zm0 832l-192-.3a32 32 0 0 1 0-64l192 .2V672a32 32 0 1 1 64 0v256z"/>',
}
export const FullScreen = createBuiltinIcon('FullScreen', FullScreenData)
const HideData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M876.8 156.8c0-9.6-3.2-16-9.6-22.4s-12.8-9.6-22.4-9.6s-16 3.2-22.4 9.6L736 220.8c-64-32-137.6-51.2-224-60.8c-160 16-288 73.6-377.6 176S0 496 0 512s48 73.6 134.4 176c22.4 25.6 44.8 48 73.6 67.2l-86.4 89.6c-6.4 6.4-9.6 12.8-9.6 22.4s3.2 16 9.6 22.4s12.8 9.6 22.4 9.6s16-3.2 22.4-9.6l704-710.4c3.2-6.4 6.4-12.8 6.4-22.4m-646.4 528Q115.2 579.2 76.8 512q43.2-72 153.6-172.8C304 272 400 230.4 512 224c64 3.2 124.8 19.2 176 44.8l-54.4 54.4A218 218 0 0 0 512 288c-64 0-115.2 22.4-160 64s-64 96-64 160c0 48 12.8 89.6 35.2 124.8L256 707.2c-9.6-6.4-19.2-16-25.6-22.4m140.8-96Q352 555.2 352 512c0-44.8 16-83.2 48-112s67.2-48 112-48c28.8 0 54.4 6.4 73.6 19.2zM889.6 336c-12.8-16-28.8-28.8-41.6-41.6l-48 48c73.6 67.2 124.8 124.8 150.4 169.6q-43.2 72-153.6 172.8C723.2 752 624 793.6 512 800a478 478 0 0 1-140.8-28.8l-48 48A680 680 0 0 0 512 864c160-16 288-73.6 377.6-176S1024 528 1024 512s-48-73.6-134.4-176"/><path fill="currentColor" d="M512 672c-12.8 0-25.6-3.2-38.4-6.4l-51.2 51.2A215 215 0 0 0 512 736c64 0 115.2-22.4 160-64c41.6-41.6 64-96 64-160c0-32-6.4-64-19.2-89.6l-51.2 51.2c3.2 12.8 6.4 25.6 6.4 38.4c0 44.8-16 83.2-48 112s-67.2 48-112 48"/>',
}
export const Hide = createBuiltinIcon('Hide', HideData)
const InfoFilledData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m67.2 275c33.3 0 60.3-23 60.3-57.3s-27-57.3-60.3-57.3s-60.2 23-60.2 57.3s27 57.4 60.2 57.4m11.7 360.1c0-6.8 2.4-24.6 1-34.8L539.3 725c-10.9 11.4-24.5 19.4-30.9 17.3a13 13 0 0 1-8.2-14.7l87.6-277c7.2-35.2-12.5-67.2-54.3-71.3c-44 0-109 44.7-148.5 101.5c0 6.8-1.3 23.6 0 33.8l52.6-60.6c11-11.4 23.6-19.4 30-17.2a13 13 0 0 1 7.8 16.1l-87 275.7c-10 32.2 9 63.8 55.1 71c67.9 0 108-43.6 147.5-100.4z"/>',
}
export const InfoFilled = createBuiltinIcon('InfoFilled', InfoFilledData)
const LoadingData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M512 64a32 32 0 0 1 32 32v192a32 32 0 0 1-64 0V96a32 32 0 0 1 32-32m0 640a32 32 0 0 1 32 32v192a32 32 0 1 1-64 0V736a32 32 0 0 1 32-32m448-192a32 32 0 0 1-32 32H736a32 32 0 1 1 0-64h192a32 32 0 0 1 32 32m-640 0a32 32 0 0 1-32 32H96a32 32 0 0 1 0-64h192a32 32 0 0 1 32 32M195.2 195.2a32 32 0 0 1 45.2 0l136 135.8a32 32 0 0 1-45.3 45.3L195.2 240.4a32 32 0 0 1 0-45.2m452.5 452.5a32 32 0 0 1 45.3 0l135.8 135.9a32 32 0 0 1-45.2 45.2L647.7 693a32 32 0 0 1 0-45.3m181.1-452.4a32 32 0 0 1 0 45.1L693 376.4a32 32 0 0 1-45.3-45.3l135.9-135.8a32 32 0 0 1 45.2 0M376.3 647.7a32 32 0 0 1 0 45.3L240.4 828.8a32 32 0 0 1-45.2-45.2L331 647.7a32 32 0 0 1 45.3 0"/>',
}
export const Loading = createBuiltinIcon('Loading', LoadingData)
const MenuData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M160 448a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zM160 896a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32zm448 0a32 32 0 0 1-32-32V608a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32v256a32 32 0 0 1-32 32z"/>',
}
export const Menu = createBuiltinIcon('Menu', MenuData)
const MinusData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64"/>',
}
export const Minus = createBuiltinIcon('Minus', MinusData)
const MoreData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M176 416a112 112 0 1 0 0 224a112 112 0 0 0 0-224m0 64a48 48 0 1 1 0 96a48 48 0 0 1 0-96m336-64a112 112 0 1 1 0 224a112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96a48 48 0 0 0 0-96m336-64a112 112 0 1 1 0 224a112 112 0 0 1 0-224m0 64a48 48 0 1 0 0 96a48 48 0 0 0 0-96"/>',
}
export const More = createBuiltinIcon('More', MoreData)
const MoreFilledData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M176 416a112 112 0 1 1 0 224a112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224a112 112 0 0 1 0-224m336 0a112 112 0 1 1 0 224a112 112 0 0 1 0-224"/>',
}
export const MoreFilled = createBuiltinIcon('MoreFilled', MoreFilledData)
const PictureFilledData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M96 896a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h832a32 32 0 0 1 32 32v704a32 32 0 0 1-32 32zm315.5-228.5l-69-69a32 32 0 0 0-45.2 0L128 768.2h778.7L664.6 477.5a32 32 0 0 0-49.2 0l-156.6 188a32 32 0 0 1-47.3 2M256 384a96 96 0 1 0 192 0a96 96 0 0 0-192 0"/>',
}
export const PictureFilled = createBuiltinIcon(
  'PictureFilled',
  PictureFilledData
)
const PlusData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64z"/>',
}
export const Plus = createBuiltinIcon('Plus', PlusData)
const QuestionFilledData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m23.7 191.5q-77.9 0-123.2 44.3c-31 29.6-45.7 70.4-45.7 122.5H447c0-29.5 5.7-52.8 17.6-69c13.4-19.7 35.2-28.8 66.2-28.8q36.2-.2 56.3 19.7a77 77 0 0 1 19.7 54.9a78 78 0 0 1-19 50l-8.4 9.8c-45.8 40.9-73.2 70.4-82.4 89.5c-9.8 19-14 42.2-14 69v9.8h80.9v-9.9c0-16.9 3.5-31.6 10.6-45.7a109 109 0 0 1 28.1-35.2c33.8-29.6 54.2-48.6 60.6-55.6c16.9-22.6 26-51.4 26-86.6q0-64.4-42.2-101.4c-28.2-25.3-65.5-37.3-111.3-37.3m-12.6 406.2a54 54 0 0 0-38.7 14.8a49 49 0 0 0-15.5 38c0 15.5 4.9 28.2 15.5 38A55 55 0 0 0 523 768c15.5 0 28.1-5 38.7-14.8a52 52 0 0 0 16.2-38.7a52 52 0 0 0-15.5-38a56 56 0 0 0-39.4-14.8"/>',
}
export const QuestionFilled = createBuiltinIcon(
  'QuestionFilled',
  QuestionFilledData
)
const RefreshData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M771.8 794.9A384 384 0 0 1 128 512h64a320 320 0 0 0 555.7 216.4h-93a32 32 0 1 1 0-64h149a32 32 0 0 1 32 32v149a32 32 0 1 1-64 0zM276.3 295.6h93a32 32 0 0 1 0 64H220.2a32 32 0 0 1-32-32v-149a32 32 0 0 1 64 0V229a384 384 0 0 1 644 282.9h-64a320 320 0 0 0-555.8-216.4z"/>',
}
export const Refresh = createBuiltinIcon('Refresh', RefreshData)
const RefreshLeftData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M289 296.7h93a32 32 0 0 1 0 64H233a32 32 0 0 1-32-32v-149a32 32 0 0 1 64 0v50.6a384 384 0 0 1 643.8 282.9a384 384 0 0 1-384 384a384 384 0 0 1-384-384h64a320 320 0 1 0 640 0a320 320 0 0 0-555.6-216.5z"/>',
}
export const RefreshLeft = createBuiltinIcon('RefreshLeft', RefreshLeftData)
const RefreshRightData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M784.5 230.3v-50.6a32 32 0 1 1 64 0v149a32 32 0 0 1-32 32h-149a32 32 0 1 1 0-64h93a320 320 0 1 0-235.7 536.5a320 320 0 0 0 320-320h64a384 384 0 0 1-384 384a384 384 0 0 1-384-384a384 384 0 0 1 643.7-283"/>',
}
export const RefreshRight = createBuiltinIcon('RefreshRight', RefreshRightData)
const ScaleToOriginalData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M813.2 180.7a60 60 0 0 1 60.2 60.2v482a60 60 0 0 1-60.2 60.2H210.8a60 60 0 0 1-60.2-60.3V241a60 60 0 0 1 60.2-60.2zm0-60.2H210.8A120.5 120.5 0 0 0 90.4 240.9v482a120.5 120.5 0 0 0 120.4 120.4h602.4a120.5 120.5 0 0 0 120.4-120.5V241a120.5 120.5 0 0 0-120.4-120.4M692.7 301.2a30 30 0 0 0-30.1 30v301.3a30.1 30.1 0 0 0 60.2 0V331.3a30 30 0 0 0-30-30.1m-361.5 0a30 30 0 0 0-30.1 30v301.3a30.1 30.1 0 1 0 60.2 0V331.3a30 30 0 0 0-30.1-30.1M512 361.4a30 30 0 0 0-30.1 30.1v30.1a30.1 30.1 0 0 0 60.2 0v-30a30 30 0 0 0-30.1-30.2m0 150.6a30 30 0 0 0-30.1 30.1v30.1a30.1 30.1 0 0 0 60.2 0v-30A30 30 0 0 0 512 512"/>',
}
export const ScaleToOriginal = createBuiltinIcon(
  'ScaleToOriginal',
  ScaleToOriginalData
)
const SearchData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="m795.9 750.7l125 125a32 32 0 0 1-45.3 45.2l-125-125a416 416 0 1 1 45.3-45.2M480 832a352 352 0 1 0 0-704a352 352 0 0 0 0 704"/>',
}
export const Search = createBuiltinIcon('Search', SearchData)
const SortDownData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M576 96v709.6L333.3 562.8A32 32 0 1 0 288 608l297.4 297.3a32 32 0 0 0 54.6-22.6V96a32 32 0 0 0-64 0"/>',
}
export const SortDown = createBuiltinIcon('SortDown', SortDownData)
const SortUpData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M384 141.2V928a32 32 0 1 0 64 0V218.6l242.7 242.6A32 32 0 1 0 736 416L438.6 118.7a32 32 0 0 0-54.6 22.5"/>',
}
export const SortUp = createBuiltinIcon('SortUp', SortUpData)
const StarData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="m512 747.8l228.2 120a6.4 6.4 0 0 0 9.2-6.7L706 607l184.5-180a6.4 6.4 0 0 0-3.5-10.8L632 379L517.7 147.9a6.4 6.4 0 0 0-11.6 0l-114 231.2L137 416a6.4 6.4 0 0 0-3.5 11L318 607l-43.6 254a6.4 6.4 0 0 0 9.3 6.8zM313.6 924.5a70.4 70.4 0 0 1-102.1-74.3l37.8-220.9L89 473a70.4 70.4 0 0 1 39-120.1l221.8-32.3l99.2-201a70.4 70.4 0 0 1 126.2 0l99.2 201L896.2 353a70.4 70.4 0 0 1 39 120L774.7 629.5l38 220.9a70.4 70.4 0 0 1-102.2 74.2L512 820.1z"/>',
}
export const Star = createBuiltinIcon('Star', StarData)
const StarFilledData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M313.6 924.5a70 70 0 0 1-74.2-5.4a70 70 0 0 1-28-68.9l38-220.9L89 473a70.4 70.4 0 0 1 3.7-104.3A70 70 0 0 1 128 353l221.8-32.3l99.2-201a70.4 70.4 0 0 1 100.2-28.5a70 70 0 0 1 26 28.6l99.2 201L896.2 353a70.4 70.4 0 0 1 39 120L774.7 629.5l38 220.9a70.4 70.4 0 0 1-102.2 74.2L512 820.1z"/>',
}
export const StarFilled = createBuiltinIcon('StarFilled', StarFilledData)
const SuccessFilledData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m-55.8 536.4l-99.5-99.6a38.4 38.4 0 1 0-54.4 54.3L429.1 682a38.3 38.3 0 0 0 54.3 0l262.4-262.5a38.4 38.4 0 1 0-54.3-54.3z"/>',
}
export const SuccessFilled = createBuiltinIcon(
  'SuccessFilled',
  SuccessFilledData
)
const UploadFilledData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M544 864V672h128L512 480L352 672h128v192H320v-1.6c-5.4.3-10.5 1.6-16 1.6A240 240 0 0 1 64 624a239 239 0 0 1 212.6-237.2A240 240 0 0 1 512 192a240 240 0 0 1 235.5 194.8A239 239 0 0 1 959.9 624a240 240 0 0 1-240 240c-5.3 0-10.5-1.3-16-1.6v1.6z"/>',
}
export const UploadFilled = createBuiltinIcon('UploadFilled', UploadFilledData)
const UserData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M512 512a192 192 0 1 0 0-384a192 192 0 0 0 0 384m0 64a256 256 0 1 1 0-512a256 256 0 0 1 0 512m320 320v-96a96 96 0 0 0-96-96H288a96 96 0 0 0-96 96v96a32 32 0 1 1-64 0v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 1 1-64 0"/>',
}
export const User = createBuiltinIcon('User', UserData)
const UserFilledData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M288 320a224 224 0 1 0 448 0a224 224 0 1 0-448 0m544 608H160a32 32 0 0 1-32-32v-96a160 160 0 0 1 160-160h448a160 160 0 0 1 160 160v96a32 32 0 0 1-32 32z"/>',
}
export const UserFilled = createBuiltinIcon('UserFilled', UserFilledData)
const ViewData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M512 160c320 0 512 352 512 352S832 864 512 864S0 512 0 512s192-352 512-352m0 64c-225.3 0-384.1 208-436.8 288c52.6 79.9 211.5 288 436.8 288s384.1-208 436.8-288C896.2 432.1 737.3 224 512 224m0 64a224 224 0 1 1 0 448a224 224 0 0 1 0-448m0 64a160 160 0 0 0-160 160c0 88.2 71.7 160 160 160s160-71.8 160-160s-71.7-160-160-160"/>',
}
export const View = createBuiltinIcon('View', ViewData)
const WarningFilledData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="M512 64a448 448 0 1 1 0 896a448 448 0 0 1 0-896m0 192a58.4 58.4 0 0 0-58.2 63.7L477 576.1a35 35 0 0 0 69.8 0l23.3-256.4A58.4 58.4 0 0 0 512 256m0 512a51.2 51.2 0 1 0 0-102.4a51.2 51.2 0 0 0 0 102.4"/>',
}
export const WarningFilled = createBuiltinIcon(
  'WarningFilled',
  WarningFilledData
)
const ZoomInData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="m795.9 750.7l125 125a32 32 0 0 1-45.3 45.2l-125-125a416 416 0 1 1 45.3-45.2M480 832a352 352 0 1 0 0-704a352 352 0 0 0 0 704m-32-384v-96a32 32 0 0 1 64 0v96h96a32 32 0 0 1 0 64h-96v96a32 32 0 0 1-64 0v-96h-96a32 32 0 0 1 0-64z"/>',
}
export const ZoomIn = createBuiltinIcon('ZoomIn', ZoomInData)
const ZoomOutData: BuiltinIconData = {
  width: 1024,
  height: 1024,
  body: '<path fill="currentColor" d="m795.9 750.7l125 125a32 32 0 0 1-45.3 45.2l-125-125a416 416 0 1 1 45.3-45.2M480 832a352 352 0 1 0 0-704a352 352 0 0 0 0 704M352 448h256a32 32 0 0 1 0 64H352a32 32 0 0 1 0-64"/>',
}
export const ZoomOut = createBuiltinIcon('ZoomOut', ZoomOutData)
