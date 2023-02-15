# 重邮帮

## 目录规范

- `/src/components`：可重用组件
- `/src/pages`：页面
- `/src/pages/:page`：子页面
- `/src/routers`：路由配置

## 翻译对照

| English      | 中文     |
| ------------ | -------- |
| first-page   | 首页     |
| introduction | 峰会概况 |
| replay       | 成果回放 |
| result-show  | 成果展示 |
| round-table  | 圆桌讨论 |
| sign-up      | 报名页   |

## 公用组件

以下组件见于 `src/components`

| Component | Description    |
| --------- | -------------- |
| header    | 页面顶部导航栏 |
| footer    | 页脚           |

## 说明

1.修改首页、圆桌讨论页、报名页的页面内容时，只需修改文件顶部数据对象，无需改动标签。

2. 修改首页日历，需改动 calendarSetting 对象，如下：

```js
const calendarSetting = {
  year: 2023, // 日历年份
  month: 4, // 日历月份
  duration: [12, 16], // 日历高亮时间范围
}
```

## 相关文档

| 视觉图   | PRD        |
| -------- | ---------- |
| [UI](ui) | [PRD](prd) |

[venue-application-ui]: https://www.figma.com/file/EvpulpN6z2TaJmcwJVsurM/%E6%9E%81%E5%AE%A2%E5%B3%B0%E4%BC%9A%E5%AE%98%E7%BD%91?node-id=0%3A1&t=iIrtIgZ0Bs9dFNOG-0
[venue-application-prd]: https://redrock.feishu.cn/docx/XSpydcnl2oZBEyxAXB3c8Jpbnwg
