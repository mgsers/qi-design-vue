(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{408:function(e,t,n){"use strict";n.r(t);var i=n(4),o={border:"none"},u={watch:{"store.i18n.locale":{handler:function(){this.resetMenuContent()}}},data:function(){return{store:i.a,hover:o,menuOpen:"",menuOpenButton:!1,menuOpenSwitch:!1,menuFile:[],menuEdit:[],menuHelp:[],menuTest:[{text:"Menu Item 1",icon:"document"},{text:"Menu Item 2",icon:"folder",children:[{text:"Submenu Item 1"},{text:"Submenu Item 2"},{text:"Submenu Item 3"}]},{text:"Menu Item 3",icon:"document"}]}},computed:{workspaceStyle:function(){return this.menuOpen?{opacity:.25,pointerEvents:"none"}:{}}},methods:{resetMenuContent:function(){this.$createElement;this.menuFile=[{text:this.$t("menu-file-new"),value:"menu-file-new",icon:"document",note:"Ctrl + N"},{text:this.$t("menu-file-open"),value:"menu-file-open",note:"Ctrl + O"},{text:this.$t("menu-file-openrecent"),value:"menu-file-openrecent",note:"3",children:[{text:"index.vue",value:"index.vue"},{text:"button.vue",value:"button.vue"},{is:"q-divider"},{icon:"trash",text:this.$t("menu-file-openrecent-clear"),value:"menu-file-openrecent-clear"}]},{is:"q-divider"},{text:this.$t("menu-file-exit")}],this.menuEdit=[{text:this.$t("menu-edit-undo"),note:"Ctrl + Z"},{text:this.$t("menu-edit-redo"),note:"Ctrl + Y"},{is:"q-divider"},{text:this.$t("menu-edit-copy"),note:"Ctrl + C"},{text:this.$t("menu-edit-cut"),note:"Ctrl + X"},{text:this.$t("menu-edit-paste"),note:"Ctrl + V"}],this.menuHelp=[{is:{render:function(){var e=arguments[0];return e("q-button",{attrs:{type:"primary"},style:"margin: 8px"},["Test Button"])}}}]},doMenuOpen:function(e){this.resetMenuContent(),this.menuOpen===e?this.menuOpen="":this.menuOpen=e,this.menuOpenButton=!1,this.menuOpenSwitch=!1},switchMenuOpen:function(e){this.menuOpen&&(this.menuOpen=e)},toggle:function(e){this.$set(this,e,!this[e])},handleMenuSelected:function(e){console.log(e)}}},l=(n(606),n(0)),s=n(607),a=Object(l.a)(u,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("window",{staticStyle:{width:"500px"},attrs:{title:e.$t("title"),source:"menu"}},[n("q-menu",{attrs:{data:e.menuFile,value:"file",size:"small"},on:{select:e.handleMenuSelected},model:{value:e.menuOpen,callback:function(t){e.menuOpen=t},expression:"menuOpen"}},[n("q-hover",{staticClass:"menu-item",attrs:{hover:e.hover},on:{click:function(t){return e.doMenuOpen("file")}},nativeOn:{mouseenter:function(t){return e.switchMenuOpen("file")}}},[e._v(e._s(e.$t("menu-file")))])],1),e._v(" "),n("q-menu",{attrs:{data:e.menuEdit,value:"edit",size:"small"},on:{select:e.handleMenuSelected},model:{value:e.menuOpen,callback:function(t){e.menuOpen=t},expression:"menuOpen"}},[n("q-hover",{staticClass:"menu-item",attrs:{hover:e.hover},on:{click:function(t){return e.doMenuOpen("edit")}},nativeOn:{mouseenter:function(t){return e.switchMenuOpen("edit")}}},[e._v(e._s(e.$t("menu-edit")))])],1),e._v(" "),n("q-menu",{attrs:{data:e.menuHelp,value:"help",size:"small"},on:{select:e.handleMenuSelected},model:{value:e.menuOpen,callback:function(t){e.menuOpen=t},expression:"menuOpen"}},[n("q-hover",{staticClass:"menu-item",attrs:{hover:e.hover},on:{click:function(t){return e.doMenuOpen("help")}},nativeOn:{mouseenter:function(t){return e.switchMenuOpen("help")}}},[e._v(e._s(e.$t("menu-help")))])],1),e._v(" "),n("q-divider",{staticStyle:{width:"calc(100% + 32px)","margin-left":"-16px"}}),e._v(" "),n("div",{staticClass:"workspace",style:e.workspaceStyle},[n("q-title",{attrs:{level:1}},[e._v("Hello :)")]),e._v(" "),n("q-text",{staticClass:"description"},[e._v(e._s(e.$t("description")))]),e._v(" "),n("div",{staticClass:"more-example"},[n("q-menu",{attrs:{data:e.menuTest},model:{value:e.menuOpenButton,callback:function(t){e.menuOpenButton=t},expression:"menuOpenButton"}},[n("q-button",{attrs:{icon:"down"},on:{click:function(t){return e.toggle("menuOpenButton")}}},[e._v("Button")])],1),e._v(" "),n("q-menu",{attrs:{data:e.menuTest},model:{value:e.menuOpenSwitch,callback:function(t){e.menuOpenSwitch=t},expression:"menuOpenSwitch"}},[n("q-switch",{attrs:{icon:"down"},model:{value:e.menuOpenSwitch,callback:function(t){e.menuOpenSwitch=t},expression:"menuOpenSwitch"}})],1)],1)],1)],1)}),[],!1,null,"1db76414",null);"function"==typeof s.default&&Object(s.default)(a);var r={components:{example:a.exports}},c=n(608),m=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("document",[n("q-title",{attrs:{level:1,colorful:""}},[e._v(e._s(e.$t("title"))+" "),n("strong",{directives:[{name:"show",rawName:"v-show",value:"en"!=e.$i18n.locale,expression:"$i18n.locale!='en'"}]},[e._v(e._s(e.$t("id")))])]),e._v(" "),n("q-title",{attrs:{level:2}},[e._v(e._s(e.$t("common.usage.preview")))]),e._v(" "),n("example"),e._v(" "),n("q-title",{attrs:{level:2}},[e._v(e._s(e.$t("common.usage.usage")))]),e._v(" "),n("q-footnote",[e._v('请点击上方窗口的 "查看源码"')]),e._v(" "),n("q-title",{attrs:{level:2}},[e._v(e._s(e.$t("common.usage.property")))]),e._v(" "),n("property-block",[n("property-item",{attrs:{name:"data",definition:"菜单数据",values:"Object（详见 Data 详解）"}}),e._v(" "),n("property-item",{attrs:{name:"open",definition:"是否打开菜单（v-model）",defaults:"false",values:"Boolean | String"}}),e._v(" "),n("property-item",{attrs:{name:"size",definition:"菜单大小",defaults:"normal",values:["small","normal"]}}),e._v(" "),n("property-item",{attrs:{name:"full",definition:"菜单宽度是否与被包裹的元素等宽",values:"Boolean"}})],1),e._v(" "),n("q-title",{attrs:{level:2}},[e._v(e._s(e.$t("common.usage.property"))+" : Data")]),e._v(" "),n("codeblock",{attrs:{lang:"javascript"}},[e._v('\n        {\n            text: String\n            // 菜单标题\n\n            value: String\n            // 菜单标识值\n\n            icon: String\n            // 菜单 Icon\n            \n            note: String\n            // 菜单附注\n\n            is: Vue Components\n            // 使用 <component :is="is"></component> 呈现内容\n\n            children: [ {} ...]\n            // 子菜单，数组成员与本对象的结构一致\n\n        }\n    ')]),e._v(" "),n("q-title",{attrs:{level:2}},[e._v(e._s(e.$t("common.usage.events")))]),e._v(" "),n("event-block",[n("event-item",{attrs:{name:"select",definition:"当菜单项被点击选择",values:"data - 该参数内容等同于当前被选择的菜单项的 data { text, value, icon ... } 对象"}})],1)],1)}),[],!1,null,null,null);"function"==typeof c.default&&Object(c.default)(m);t.default=m.exports},472:function(e,t,n){},473:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"title":"Fake Application","menu-file":"File","menu-edit":"Edit","menu-help":"Help","menu-file-new":"New","menu-file-open":"Open","menu-file-openrecent":"Open Recent","menu-file-openrecent-clear":"Clear History","menu-file-exit":"Exit","menu-edit-undo":"Undo","menu-edit-redo":"Redo","menu-edit-copy":"Copy","menu-edit-cut":"Cut","menu-edit-paste":"Paste","description":"Here is the effect you can achieve with the Menu component. I added some code to implement the so-called \\"menu bar\\" for most applications (but the Menu component is not the overall menu bar). Because I hope it can be attached to most elements, for example:"},"zh":{"title":"假装这是一个应用","menu-file":"文件","menu-edit":"编辑","menu-help":"帮助","menu-file-new":"新建","menu-file-open":"打开","menu-file-openrecent":"最近打开","menu-file-openrecent-clear":"清除历史记录","menu-file-exit":"退出","menu-edit-undo":"撤销","menu-edit-redo":"重做","menu-edit-copy":"复制","menu-edit-cut":"剪切","menu-edit-paste":"粘贴","description":"此处为您呈现了 Menu 组件可以实现的效果，我们增加了些许代码来实现大部分应用所谓的”菜单栏“（但是 Menu 组件并不是整体的菜单栏）。因为我希望它可以依附于大部分元素上，例如："}}'),delete e.options._Ctor}},474:function(e,t){e.exports=function(e){e.options.__i18n=e.options.__i18n||[],e.options.__i18n.push('{"en":{"title":"Menu","id":""},"zh":{"title":"菜单","id":"Menu"}}'),delete e.options._Ctor}},606:function(e,t,n){"use strict";var i=n(472);n.n(i).a},607:function(e,t,n){"use strict";var i=n(473),o=n.n(i);t.default=o.a},608:function(e,t,n){"use strict";var i=n(474),o=n.n(i);t.default=o.a}}]);