(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{672:function(s,e,t){"use strict";t.r(e);var a=t(31),n=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"移动端rem适配"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#移动端rem适配"}},[s._v("#")]),s._v(" 移动端rem适配")]),s._v(" "),t("p",[s._v("1.最近项目的开发需要"),t("code",[s._v("h5")]),s._v("的支持，"),t("code",[s._v("h5")]),s._v("项目是和"),t("code",[s._v("web")]),s._v("整合到一起，在一个地址发布，通过不同的路由来跳转到不同的页面。所以开发"),t("code",[s._v("h5")]),s._v("的页面需要适配，但是由于和"),t("code",[s._v("web")]),s._v("混合在一起，没有用"),t("code",[s._v("vw")]),s._v("适配，而是考虑使用"),t("code",[s._v("rem")]),s._v("来适配。\n2."),t("code",[s._v("rem")]),s._v("是一个相对单位，相对于"),t("code",[s._v("html")]),s._v("字体大小来确定，适配也比较简单且麻烦，给根节点"),t("code",[s._v("html")]),s._v("设置字体大小，"),t("code",[s._v("h5")]),s._v("和"),t("code",[s._v("px")]),s._v("相关的都改用"),t("code",[s._v("rem")]),s._v("，浏览器一般默认"),t("code",[s._v("1rem")]),s._v("等于"),t("code",[s._v("16px")]),s._v("，如果给"),t("code",[s._v("html")]),s._v("设置字体大小，那么"),t("code",[s._v("1rem")]),s._v("就等于"),t("code",[s._v("html")]),s._v("设置的字体值。通常设计稿为"),t("code",[s._v("750*1334")]),s._v("，所以以100比例（方便换算）来换算，给"),t("code",[s._v("html")]),s._v("设置"),t("code",[s._v("100px")]),s._v("，在"),t("code",[s._v("h5")]),s._v("页面都使用像素值除以100加上"),t("code",[s._v("rem")]),s._v("单位即可适配。")]),s._v(" "),t("blockquote",[t("p",[s._v("会有一个问题，在横屏的时候宽度不变。")])]),s._v(" "),t("h3",{attrs:{id:"development"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#development"}},[s._v("#")]),s._v(" Development")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("100px"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("//设置根节点字体大小，\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("div")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  width：7.5rem；//750px/100\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br")])]),t("p",[s._v("3.还有一种是给"),t("code",[s._v("html")]),s._v("设置"),t("code",[s._v("vw")]),s._v("的单位来进行适配，"),t("code",[s._v("vw")]),s._v("是视窗的宽度，"),t("code",[s._v("100vw")]),s._v("就等于浏览器的宽度。也能进行100比例的适配。（建议使用）")]),s._v(" "),t("div",{staticClass:"language-css line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-css"}},[t("code",[t("span",{pre:!0,attrs:{class:"token selector"}},[s._v("html")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v("font-size")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("13.333vw"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("//省略过\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("p",[s._v("那么"),t("code",[s._v("13.333vw")]),s._v("是怎么得到，有一个换算公式")]),s._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("100vw/750（设计稿宽度）*100（换算比例）=13.333333333333334vw；\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])])])}),[],!1,null,null,null);e.default=n.exports}}]);