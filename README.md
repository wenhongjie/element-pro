<p align="center">Element Pro - 基于 element-pro 的增强版</p>

- 💪 使用 Vue 3 Composition API 开发
- 🔥 使用 TypeScript 开发

## 历史文档

没有

## 状态: 内部可用, 全力开发中

正处于全力开发和长期维护状态中

### 在线运行

#### Try it with code sandbox (element-pro 在 sandbox 上的)

[![Edit element-pro](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/element-pro-demo-dxtcr)

#### Try it with our built-in playground (element-plus 官方的)

[Playground](https://play.element-pro.org/)

## 文档

纯中文文档, 没有任何其他国家

## 破坏性改动列表

先看看 element-plus 的破坏性更改 [Breaking Change List](https://github.com/element-pro/element-pro/issues/162).

## 启动项目

命令

```bash
$ pnpm i
```

安装所有依赖

## 网站预览

命令

```bash
$ pnpm docs:dev
```

启动文档网站, 可以在这里看到所有的组件

## 本地开发

1. 命令

```shell
$ pnpm dev
```

启动本地开发环境

2. 引入你的组件到 `play/src/App.vue` 文件中

> App.vue 文件

```vue
<template>
  <ComponentYouAreDeveloping />
</template>

<script setup lang="ts">
// 确保你开发的组件在 @element-pro/components/index.ts 被导出
import { ComponentYouAreDeveloping } from '@element-pro/components'
</script>
```

开发你的组件

## 生成新的组件

通过命令快捷生成

```bash
$ pnpm gen component-name
```

注意你的组件名应该用中划线拼接小写单词来命名.
组件类型也必须加到 `typings/global.d.ts` 文件中

## 提交模板

命令检查

```bash
pnpm cz
```

示例

```
# [TYPE](SCOPE): [el-component-name] DESCRIPTION#[ISSUE]
# example: feat(components): [el-button] add type for form usage #1234
```

## Licence

必须是 MIT
Element Plus is open source software licensed as
[MIT](https://github.com/element-pro/element-pro/blob/master/LICENSE).

## 贡献者

人人都是贡献者
特别感谢 element-plus 的贡献者们
