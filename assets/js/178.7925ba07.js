(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{710:function(s,t,a){"use strict";a.r(t);var n=a(31),e=Object(n.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"全局组件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#全局组件"}},[s._v("#")]),s._v(" 全局组件")]),s._v(" "),a("ul",[a("li",[s._v("有时候开发需要一些特别的组件，它不牵扯业务逻辑，只是提供状态显示，或者消息提示，写成局部组件引用，用的地方比较多，每个组件都要引用，无形之中增加代码量，也不利于维护，所以就有必要定义一个全局组件，在需要的地方直接使用，参数通过"),a("code",[s._v("props")]),s._v("传递，事件通过"),a("code",[s._v("$emit")]),s._v("传递。")])]),s._v(" "),a("h3",{attrs:{id:"定义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#定义"}},[s._v("#")]),s._v(" 定义")]),s._v(" "),a("ul",[a("li",[s._v("定义组件需要创建一个公共的配置全局组件的"),a("code",[s._v("js")]),s._v("文件，在里面引入需要定义为全局组件的组件，然后暴露出来的一个函数，定义全局组件有两种方式，一个是对象方式，一个是函数方式，这里说的是函数方式，暴露出的函数接在调用的时候会把"),a("code",[s._v("vue")]),s._v("实例传递进去。")]),s._v(" "),a("li",[s._v("在配置文件"),a("code",[s._v("main.js")]),s._v("文件中引入配置好的"),a("code",[s._v("js")]),s._v("文件，使用"),a("code",[s._v("Vue.use()")]),s._v("全局api，这个"),a("code",[s._v("api")]),s._v("就是用来安装插件，如果插件是一个对象，必须提供"),a("code",[s._v("install")]),s._v(" 方法。如果插件是一个函数，它会被作为 "),a("code",[s._v("install")]),s._v(" 方法。"),a("code",[s._v("install")]),s._v(" 方法调用时，会将 "),a("code",[s._v("Vue")]),s._v("作为参数传入。")])]),s._v(" "),a("h3",{attrs:{id:"publiccomponent-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#publiccomponent-js"}},[s._v("#")]),s._v(" publicComponent.js")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//引入组件")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" NoticeMsg "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'../NoticeMsg.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" LoadingModal "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./LoadingModal.vue'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//暴露函数")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=>")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"notice-msg"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" NoticeMsg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n  Vue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("component")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"LoadingModal"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("LoadingModal"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])]),a("h3",{attrs:{id:"main-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#main-js"}},[s._v("#")]),s._v(" main.js")]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" componentsList "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./components/publicComponent.js'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//加载公共组件")]),s._v("\nVue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("componentsList"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Vue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  el"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'#app'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  router"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  i18n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  template"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'<App/>'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  components"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" App "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  store\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br")])])])}),[],!1,null,null,null);t.default=e.exports}}]);