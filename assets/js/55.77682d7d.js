(window.webpackJsonp=window.webpackJsonp||[]).push([[55],{592:function(e,t,a){"use strict";a.r(t);var v=a(31),_=Object(v.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h3",{attrs:{id:"多端小程序开发踩坑"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多端小程序开发踩坑"}},[e._v("#")]),e._v(" 多端小程序开发踩坑")]),e._v(" "),a("p",[e._v("我们公司的小程序是用"),a("code",[e._v("'uni-app")]),e._v("跨端开发的，五端一套代码(qq小程序，微信小程序，百度小程序，头条小程序，飞书小程序)，"),a("code",[e._v("uni-app")]),e._v("不支持飞书，但是飞书可以编译头条的代码，头条和飞书公用，多端一套代码就会产生很多问题，这些问题基本都是平台不兼容导致的，很让人头疼，反馈了官方也不解决。")]),e._v(" "),a("h4",{attrs:{id:"qq小程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#qq小程序"}},[e._v("#")]),e._v(" qq小程序")]),e._v(" "),a("ul",[a("li",[e._v("获取光标问题"),a("code",[e._v("textarea")]),e._v("组件的"),a("code",[e._v("blur")]),e._v("方法无法获取光标位置")]),e._v(" "),a("li",[e._v("获取接口返回的"),a("code",[e._v("cookie")]),e._v(",qq"),a("code",[e._v("Set-Cookie")]),e._v("是大写")]),e._v(" "),a("li",[e._v("层级穿透问题\n"),a("ul",[a("li",[e._v("在"),a("code",[e._v("qq")]),e._v("端存在一个非常严重的"),a("code",[e._v("bug")]),e._v(","),a("code",[e._v("textarea")]),e._v("的层级在最顶层，在一个可以滚动的页面，滚动时"),a("code",[e._v("textarea")]),e._v("里面的内容可以显示到固定定位元素的上面，改"),a("code",[e._v("z-index")]),e._v("也没有用。")]),e._v(" "),a("li",[e._v("建议"),a("code",[e._v("textarea")]),e._v("比较少就和"),a("code",[e._v("div")]),e._v("交替显示。")]),e._v(" "),a("li",[e._v("比较多建议用"),a("code",[e._v("webview")]),e._v("实现")])])])]),e._v(" "),a("h4",{attrs:{id:"百度小程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#百度小程序"}},[e._v("#")]),e._v(" 百度小程序")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("v-for")]),e._v("问题，百度端不支持在 "),a("code",[e._v("html")]),e._v(" 标签内的 "),a("code",[e._v("v-for=“item in number（5）")]),e._v("的遍历，必须是数组才行。")]),e._v(" "),a("li",[a("code",[e._v("webview")]),e._v(" 不支持长按保存图片。")]),e._v(" "),a("li",[e._v("获取接口返回的"),a("code",[e._v("cookie")]),e._v(",百度"),a("code",[e._v("Set-Cookie")]),e._v("是大写")]),e._v(" "),a("li",[e._v("数据绑定问题，百度端在"),a("code",[e._v("dom")]),e._v("上通过"),a("code",[e._v("data")]),e._v("绑定数据，属性名自动转换为小写，微信小程序支持大小写。")])]),e._v(" "),a("div",{staticClass:"language-html line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("\x3c!-- 在百度小程序获取就是key --\x3e")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("<")]),e._v("view")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("class")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("container"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),e._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[e._v("data-Key")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation attr-equals"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')]),e._v("123"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("</")]),e._v("view")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(">")])]),e._v("\n\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("h4",{attrs:{id:"飞书小程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#飞书小程序"}},[e._v("#")]),e._v(" 飞书小程序")]),e._v(" "),a("ul",[a("li",[e._v("飞书小程序的开发者工具调试经常出问题，所以要备份一个稳定版本。")]),e._v(" "),a("li",[e._v("飞书小程序的图片错位问题，必须给图片的容器设置一个宽度"),a("code",[e._v("width:100%")]),e._v("。")]),e._v(" "),a("li",[a("code",[e._v("webview")]),e._v(" 不支持长按保存图片。")]),e._v(" "),a("li",[e._v("获取接口返回的"),a("code",[e._v("cookie")]),e._v(",飞书没有"),a("code",[e._v("Set-Cookie")]),e._v("只有"),a("code",[e._v("cookies")])])]),e._v(" "),a("h4",{attrs:{id:"头条小程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#头条小程序"}},[e._v("#")]),e._v(" 头条小程序")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("webview")]),e._v(" 不支持长按保存图片。")]),e._v(" "),a("li",[e._v("获取接口返回的"),a("code",[e._v("cookie")]),e._v(",头条"),a("code",[e._v("set-cookie")]),e._v("是小写")])]),e._v(" "),a("h4",{attrs:{id:"微信小程序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#微信小程序"}},[e._v("#")]),e._v(" 微信小程序")]),e._v(" "),a("ul",[a("li",[e._v("获取接口返回的"),a("code",[e._v("cookie")]),e._v(",微信"),a("code",[e._v("Set-Cookie")]),e._v("是大写")])]),e._v(" "),a("h4",{attrs:{id:"ios端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ios端"}},[e._v("#")]),e._v(" ios端")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("textarea padding")]),e._v(" 问题,"),a("code",[e._v("ios")]),e._v("端 "),a("code",[e._v("textarea")]),e._v("会自带一个"),a("code",[e._v("padding")]),e._v("，二期无法去掉，安卓端没有")])]),e._v(" "),a("h4",{attrs:{id:"android端"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#android端"}},[e._v("#")]),e._v(" android端")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("replaceAll")]),e._v("方法,安卓"),a("code",[e._v("webview")]),e._v("不支持"),a("code",[e._v("js")]),e._v(" "),a("code",[e._v("replaceAll")]),e._v("这个方法，"),a("code",[e._v("ios")]),e._v("支持")])]),e._v(" "),a("h4",{attrs:{id:"webview刷新问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#webview刷新问题"}},[e._v("#")]),e._v(" webview刷新问题")]),e._v(" "),a("p",[a("code",[e._v("webview")]),e._v("的"),a("code",[e._v("ur")]),e._v("l每一次刷新，都会在嵌入"),a("code",[e._v("webview")]),e._v("的"),a("code",[e._v("h5")]),e._v("的"),a("code",[e._v("history")]),e._v("历史记录加一层，导致点击小程序原生返回实际是"),a("code",[e._v("h5")]),e._v("的后退")]),e._v(" "),a("h4",{attrs:{id:"开发者工具问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#开发者工具问题"}},[e._v("#")]),e._v(" 开发者工具问题")]),e._v(" "),a("p",[e._v("除了微信的开发者工具，其它端的开发者工具不要随便升级，升级后可能就用不了，例如百度端，飞书端")]),e._v(" "),a("auth")],1)}),[],!1,null,null,null);t.default=_.exports}}]);