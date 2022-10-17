(window.webpackJsonp=window.webpackJsonp||[]).push([[146],{683:function(s,t,a){"use strict";a.r(t);var e=a(31),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h3",{attrs:{id:"redux-devtools"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#redux-devtools"}},[s._v("#")]),s._v(" redux-devtools")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("redux-devtools")]),s._v("是谷歌浏览器调试"),a("code",[s._v("redux")]),s._v("的一个插件，使用需要在谷歌应用商店下载，下载需要科学上网。")]),s._v(" "),a("li",[s._v("安装之后并不能直接使用，需要在程序里面配置，配置需要下载"),a("code",[s._v("redux-devtools-extension")]),s._v("这个库，在"),a("code",[s._v("store.js")]),s._v("中引入，作为"),a("code",[s._v("createStore")]),s._v("的第二个参数传入，但是如果第二个参数已经传递了，已经传递的第二个参数作为引入"),a("code",[s._v("composeWithDevTools")]),s._v("的参数传入，配置好就能使用了，使用还是比较方便的。")]),s._v(" "),a("li",[s._v("安装后在扩展程序中能看到\n"),a("img",{attrs:{src:"/assets/images/react/redux-devtool-1.png",alt:"image.png"}})])]),s._v(" "),a("div",{staticClass:"language-js line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//下载")]),s._v("\nyarn add redux"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("devtools"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("extension\n\n\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// store.js配置")]),s._v("\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("createStore"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("applyMiddleware"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'redux'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" countReducer "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'./count-reducer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" thunk "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'redux-thunk'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("composeWithDevTools"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"redux-devtools-extension"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("export")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("createStore")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("countReducer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("composeWithDevTools")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("applyMiddleware")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("thunk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])]),a("ul",[a("li",[s._v("正常使用\n"),a("img",{attrs:{src:"/assets/images/react/redux-devtool-2.png",alt:"image.png"}})])])])}),[],!1,null,null,null);t.default=n.exports}}]);