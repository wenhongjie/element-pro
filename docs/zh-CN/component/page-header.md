---
title: Page Header 页头
lang: zh-CN
---

# Page Header 页头

如果页面的路径比较简单，推荐使用页头组件而非面包屑组件。

## 基础用法

:::demo

page-header/basic

:::

## 自定义图标

:::demo

page-header/custom-icon

:::

## 属性

| 属性    | 说明     | 类型               | 可选值 | 默认值 |
| ------- | -------- | ------------------ | ------ | ------ |
| icon    | 图标组件 | string / Component | —      | Back   |
| title   | 标题     | string             | —      | Back   |
| content | 内容     | string             | —      | —      |

## 事件

| 事件名 | 说明             | 参数 |
| ------ | ---------------- | ---- |
| back   | 点击左侧区域触发 | —    |

## 插槽

| 名称    | 说明       |
| ------- | ---------- |
| icon    | 自定义图标 |
| title   | 标题内容   |
| content | 内容       |
