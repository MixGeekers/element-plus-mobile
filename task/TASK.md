# Task List

## 全组件移动端化准备

当前任务阶段已从“按批次推进”切换为“全组件移动端化”。后续以 `packages/components` 下的全部组件目录为范围，逐项检查并推进移动端适配。

状态说明：

- `√`：当前已完成移动端化闭环，包含源码、样式、文档与验证
- 空白：尚未纳入完成范围，或仍需继续改造

## 当前完成状态

| 组件              | 状态 | 组件                | 状态 | 组件              | 状态 |
| ----------------- | ---- | ------------------- | ---- | ----------------- | ---- |
| affix             |      | alert               |      | anchor            |      |
| anchor-link       |      | aside               | √    | autocomplete      |      |
| avatar            |      | avatar-group        |      | backtop           |      |
| badge             |      | base                |      | breadcrumb        |      |
| breadcrumb-item   |      | button              | √    | button-group      | √    |
| calendar          |      | card                |      | carousel          |      |
| carousel-item     |      | cascader            | √    | cascader-panel    | √    |
| checkbox          | √    | checkbox-button     |      | checkbox-group    | √    |
| check-tag         |      | col                 | √    | collapse          |      |
| collapse-item     |      | collapse-transition |      | collection        |      |
| color-picker      | √    | color-picker-panel  | √    | config-provider   |      |
| container         | √    | countdown           |      | date-picker       | √    |
| date-picker-panel | √    | descriptions        |      | descriptions-item |      |
| dialog            |      | divider             |      | drawer            |      |
| dropdown          |      | dropdown-item       |      | dropdown-menu     |      |
| empty             |      | focus-trap          |      | footer            | √    |
| form              | √    | form-item           | √    | header            | √    |
| icon              | √    | image               |      | image-viewer      |      |
| infinite-scroll   |      | input               | √    | input-number      | √    |
| input-tag         |      | link                | √    | loading           |      |
| main              | √    | mention             |      | menu              |      |
| menu-item         |      | menu-item-group     |      | message           |      |
| message-box       |      | notification        |      | option            | √    |
| option-group      |      | overlay             |      | page-header       |      |
| pagination        |      | popconfirm          |      | popover           |      |
| popper            |      | progress            |      | radio             | √    |
| radio-button      |      | radio-group         | √    | rate              | √    |
| result            |      | roving-focus-group  |      | row               | √    |
| scrollbar         | √    | segmented           | √    | select            | √    |
| select-v2         | √    | skeleton            |      | skeleton-item     |      |
| slider            | √    | slot                |      | space             | √    |
| splitter          | √    | splitter-panel      | √    | statistic         |      |
| step              |      | steps               |      | sub-menu          |      |
| switch            | √    | table               |      | table-column      |      |
| table-v2          |      | tab-pane            |      | tabs              |      |
| tag               |      | teleport            |      | text              | √    |
| timeline          |      | timeline-item       |      | time-picker       | √    |
| time-select       | √    | tooltip             |      | tour              |      |
| tour-step         |      | transfer            | √    | tree              |      |
| tree-select       |      | tree-v2             |      | upload            | √    |
| virtual-list      |      | watermark           |      |                   |      |

## 下一阶段目标

- 以未打勾组件为主线，逐项推进移动端适配
- 检查并统一源码、样式、文档、测试四个层面的移动端行为
- 对已完成组件继续做回归检查，避免后续全量改造时出现规范回退
- 持续以 `task/MOBILE_ADAPTATION_GUIDE.md` 作为审查基准

_最后更新：2026-04-01_
