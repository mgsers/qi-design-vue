(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{634:function(n,e,t){"use strict";t.r(e),e.default='# Install and Usage\n\n## Package Manager <span style="font-size: 16px; opacity: 0.75;">Recommand</span>\n\nIt is easier to maintain the project through the package manager and build tools. Take the NPM package manager as an example: install and save the component library through the command **npm install --save @ qiqi1996/qi-design-vue** rely. Then, use the following code to import and register the component library in the entry file of the project.\n\n```\nimport Vue from "vue";\nimport QiDesignVue from "@qiqi1996/qi-design-vue";\n\nVue.use(QiDesignVue);\n```\n\n## Directly Use\n\n<q-button :href="`./qi-design-vue@${VERSION}.zip`" icon="download" type="primary" size="large">Download qi-design-vue@{{VERSION}}.zip</q-button>\n\nAfter the download is complete, unzip it into the project and include it as follows:\n\n```\n&lt;!-- Introduce the component library through HTML --&gt;\n&lt;link rel=&quot;stylesheet&quot; href=&quot;path/to/qi-deisgn-vue.css&quot;&gt;\n&lt;script src=&quot;vue.js&quot;&gt;&lt;/script&gt;\n&lt;script src=&quot;path/to/qi-design-vue.js&quot;&gt;&lt;/script&gt;\n```\n\n```javascript\n// If you using a build tool, you can also include it in the entry file\nimport Vue from "vue";\nimport QiDesignVue from "path/to/qi-design-vue.js";\nimport path/to/qi-design-vue.css";\n```\n\n```javascript\n// Finally, register in Vue to use\nVue.use(QiDesignVue);\n\nvar vm = new Vue({\n    el: "#app"\n    ...\n});\n```\n'}}]);