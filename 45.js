(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{624:function(e,t,n){"use strict";n.r(t),t.default='# 文档编写规范\n\n## 文档构成\n\n所有文档相关代码均放置在 `document` 目录中。对于文档的内容维护，通常只需要关注其中的 `pages` 目录即可（有关其他文件的说明，请参阅 [文档工程说明](/developer/document-project)）但即便如此，仍然需要了解一部分的工程内容和概念，以知晓文档的编写流程。\n\n## 路由\n\n### 基础\n\n文档路由是基于 Vue Router 的，且其所需要的 routes 配置是由框架自动生成的，生成的配置会放置在路由所在目录的 route.js 中（例如：document/pages/routes.js）。每次启动开发环境、增删和更改文档时，都会触发这一操作，因此通常不需要我们手动配置。但自动生成只是填充了程序的内在，对于界面上外在的表现（如：顺序、分类、导航呈现方式）等，仍需要手动配置。\n\n### 顶级路由\n\n在文档页面顶部，类似下方的 “选项卡” 元素即为顶级路由切换器。因此，例如 简介（pages/index/index.vue）、组件使用（pages/usage/index.vue） 等等页面即为顶级路由。\n\n<q-panel style="padding: 16px;" secondary>\n    <q-tab>\n        <q-tab-item text="简介" value="1"></q-tab-item>\n        <q-tab-item text="组件使用" value="2"></q-tab-item>\n        <q-divider type="vertical" style="height: 16px; display: inline-block; vertical-align: middle;"></q-divider>\n        <q-tab-item text="写给设计师" value="3"></q-tab-item>\n        <q-tab-item text="写给开发者" value="4"></q-tab-item>\n        <q-divider type="vertical" style="height: 16px; display: inline-block; vertical-align: middle;"></q-divider>\n        <q-tab-item text="设计资源" value="5"></q-tab-item>\n        <q-tab-item text="更新日志" value="6"></q-tab-item>\n    </q-tab>\n</q-panel>\n\n### 二级路由\n\n### \n\n## 国际化\n\n\n\n### 新增语言'}}]);