(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{648:function(t,e,n){"use strict";n.r(e),e.default='# Toast Message\n\n## {{ $t("common.usage.preview") }}\n\n<example></example>\n\n## {{ $t("common.usage.usage") }}\n\n### Popup message\n\nIn the Vue scope, the toast message can be popped up through the global method `toast(message, options)`:\n\n```\n// Pop up a toast message that lasts for the global default duration\nthis.$qidesign.toast("message");\n\n// Pop up a toast message lasting 3000ms\nthis.$qidesign.toast("message", { duration: 3000 } );\n\n// Pop up a toast message that automatically determines the duration based on the length of the message content\nthis.$qidesign.toast("message", { duration: "auto" } );\n```\n\n### Colors and themes\n\nIn `options`, pass the current scope of the component through the `scope` attribute to inherit the color and theme:\n\n```\nthis.$qidesign.toast("message", { scope: this });\n```\n\nYou can also directly control the theme and color of Toast Message through the `theme` and` color` attributes. This method has the highest priority. For the colors and themes, see [Theme Component](/#/usage/theme)。\n\n```\nthis.$qidesign.toast("message", { theme: "dark", color: "spring" });\n```\n\nIf the color and theme related attributes are not set, the global default settings will be used.\n\n### Global settings\n\nIn addition, you can modify the default duration, color and theme of Toast Messages through global settings:\n\n```\nimport { settings } from "@qiqi1996/qi-design-vue";\n\nsettings.defaults.toast_duration = 3000;\n// The default lasts 3000ms\n\nsettings.defaults.toast_duration = "auto";\n// By default, the duration is automatically determined according to the length of the toast message content\n\nsettings.defaults.toast_theme = "dark";\n// Default theme\n\nsettings.defaults.toast_color = "poe";\n// Default color\n```\n\n{{ $t("common.usage.usage-tips") }}\n\n\x3c!-- ## {{ $t("common.usage.property") }} --\x3e'}}]);