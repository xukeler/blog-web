(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{578:function(e,s,t){"use strict";t.r(s);var n=t(31),a=Object(n.a)({},(function(){var e=this,s=e.$createElement,t=e._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h3",{attrs:{id:"去除windows桌面快捷方式icon"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#去除windows桌面快捷方式icon"}},[e._v("#")]),e._v(" 去除windows桌面快捷方式icon")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("windows")]),e._v("系统的桌面的一些快捷方式"),t("code",[e._v("icon")]),e._v("下方都有一个小箭头，这个箭头就表明这个"),t("code",[e._v("icon")]),e._v("是快捷方式，有这个箭头看着很别扭，能不能去掉呢。")]),e._v(" "),t("li",[e._v("研究了一下，找到一个解决方法，以管理员身份运行一段代码就可以去掉，去掉之后桌面确实美观很多。")]),e._v(" "),t("li",[e._v("新建后缀"),t("code",[e._v(".bat")]),e._v("的文件，把代码复制进去，以管理员身份运行。")])]),e._v(" "),t("div",{staticClass:"language-bat line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[e._v("@echo off\ncolor 2\nreg delete HKCR\\lnkfile /v IsShortcut /f\nreg delete HKCR\\piffile /v IsShortcut /f\nreg delete HKCR\\InternetShortcut /v IsShortcut /f\ntaskkill /f /im explorer.exe && explorer\n\n")])]),e._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[e._v("1")]),t("br"),t("span",{staticClass:"line-number"},[e._v("2")]),t("br"),t("span",{staticClass:"line-number"},[e._v("3")]),t("br"),t("span",{staticClass:"line-number"},[e._v("4")]),t("br"),t("span",{staticClass:"line-number"},[e._v("5")]),t("br"),t("span",{staticClass:"line-number"},[e._v("6")]),t("br"),t("span",{staticClass:"line-number"},[e._v("7")]),t("br")])])])}),[],!1,null,null,null);s.default=a.exports}}]);