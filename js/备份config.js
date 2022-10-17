
module.exports={
    title:"xukeler的博客",
    description:"这是一个关于技术分享的博客",
    keywords:"blog,博客,技术,前端开发",
    markdown: {
      lineNumbers: true
    },
    plugins: [
      [
        'vuepress-plugin-comment',
        {
          choosen: 'valine', 
          // options选项中的所有参数，会传给Valine的配置
          options: {
            avatarForce:true,
            highlight:true,//代码高亮
            visitor:true,//文章访问量
            path:"<%- window.location.pathname %>",
            pageSize:5,//评论页数
            avatar:"monsterid",//头像
            verify:true,//验证码
            placeholder:"文明评论",
            el: '#valine-vuepress-comment',
            appId: '5BOijdtMJo1SXvSAm48pCitC-gzGzoHsz',
            appKey: 'sXnA8reqUrrI2qbaRI9i386s'
          }
        }
      ]
    ],
    head:[   // 配置头部get-ExecutionPolicy
      [
          ['link', {rel:'icon', href:"/favicon.ico"}],
          ['meta', {'name':'viewport', content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"}]
      ]
    ],
    themeConfig: {
        logo: '/logo.png',
        searchMaxSuggestions: 10,
        nav: [
            { text: '首页', link: '/' },
            { 
              text: '前端开发', 
              items: [
                { text: 'Vue', link:"/blog/web/vue/安卓Tv嵌入web开发" },
                { text: 'React', link:"/blog/web/react/React框架初步了解" },
                { text: 'Javascript', link:"/blog/web/javascript/iframe跨域通信" },                
                { text: 'Typescript', link:"/blog/web/typescript/TypeScript学习和使用" },                
                { text: '微信小程序', link:"/blog/web/wechat/微信小程序开发" },
                { text: '开发实现', link:"/blog/web/problem/web屏幕录制" },
              ],
            },
            { text: '后端开发', link: '/blog/server/server' },
            // { text: '爱好', link: '/blog/interest/music' },
            { 
              text: '其它', 
              link:"/blog/other/other",
            }
          ],
          sidebar:{
            "/blog/web/vue/":[
              {
                title:"Vue",
                collapsable:false,
                children:[
                  ["安卓Tv嵌入web开发","安卓Tv嵌入web开发"],
                  ["vue主题切换","vue主题切换"],
                  ["vue路由传参","vue路由传参"],
                  ["vue插槽的使用","vue插槽的使用"],
                  ["vue生成二维码","vue生成二维码"],
                  ["vue-axios使用","vue-axios使用"],
                  ["vue-render函数","vue-render函数"],
                  ["vuex辅助函数的使用","vuex辅助函数的使用"],
                  ["vuex刷新消失问题解决","vuex刷新消失问题解决"],
                  ["vue组件通信的多种方式","vue组件通信的多种方式"],
                  ["vue导航菜单切换样式设置","vue导航菜单切换样式设置"],
                  ["vuepress搭建个人技术博客","vuepress搭建个人技术博客"],
                  ["vue移动端px自动转换vw适配","vue移动端px自动转换vw适配"],
                  ["vue使用自定义指令实现懒加载","vue使用自定义指令实现懒加载"],
                  ["vue外部JS文件操作Vue的methods","vue外部JS文件操作Vue的methods"],
                  ["vue使用vue-i18n实现多国语言切换","vue使用vue-i18n实现多国语言切换"],
                  ["vue打包之后放到服务器刷新404问题","vue打包之后放到服务器刷新404问题"]
                ]
              },],
            "/blog/web/react/":[
              {
                title:"React",
                collapsable:false,
                children:[
                  ["React框架初步了解","React框架初步了解"],
                  ["搭建React开发环境","搭建React开发环境"],
                  ["vscode-jsx语法自动补全html标签","vscode-jsx语法自动补全html标签"],
                  ["react实现数据双向绑定","react实现数据双向绑定"],
                  ["react语法结构","react语法结构"],
                  ["react-router","react-router"]
                ]
              },
            ],
            "/blog/web/taro/":[
              {
                title:"taro",
                collapsable:false,
                children:[
                  ["taro","taro"],
                ]
              },  
            ],
            "/blog/web/javascript/":[
              {
                title:"Javascript",
                collapsable:false,
                children:[
                  ["iframe跨域通信","iframe跨域通信"],
                  ["面向对象继承","面向对象继承"],
                  ["深拷贝浅拷贝","深拷贝浅拷贝"],
                  ["闭包递归回调函数","闭包递归回调函数"], 
                  ["ES6 export和export default区别","ES6 export和export default区别"], 
                  ["正则表达式","正则表达式"],                             
                  ["数组处理","数组处理"],
                  ["点击空白处让指定元素隐藏","点击空白处让指定元素隐藏"],
                  ["数据类型判断","数据类型判断"],
                  ["ES6箭头函数","ES6箭头函数"],
                  ["ES6字符串新增方法","ES6字符串新增方法"],
                  ["ES6模板字符串","ES6模板字符串"],
                  ["ES6解构赋值交换变量的值","ES6解构赋值交换变量的值"],
                  ["ES6 Promise函数","ES6 Promise函数"],
                  ["JavaScript总结","JavaScript总结"]
                ]
              },  
            ],
            "/blog/web/problem/":[
              {
                title:"开发实现",
                collapsable:false,
                children:[
                  ["web屏幕录制","web屏幕录制"],
                  ["直播推流和聊天室","直播推流和聊天室"],
                  ["前端录音下载","前端录音下载"],
                  ["h5实现手势操作放大缩小拖动","h5实现手势操作放大缩小拖动"],
                  ["h5-video不能自动播放","h5-video不能自动播放"],
                  ["微信h5移除前进后退导航条","微信h5移除前进后退导航条"],
                  ["移动端rem适配","移动端rem适配"],
                  ["h5调试查看log","h5调试查看log"],
                  ["moke数据开发","moke数据开发"],
                  ["常用web-api","常用web-api"],
                  ["设备判断","设备判断"],
                  ["获取汉字拼音首字母","获取汉字拼音首字母"],
                  ["node.js版本管理nvm","node.js版本管理nvm"],
                  ["文件下载","文件下载"],
                  ["图片上传预览","图片上传预览"],
                  ["svn使用","svn使用"],
                  ["Git使用","Git使用"],
                  ["瀑布流","瀑布流"],
                  ['拖放Dom元素','拖放Dom元素'],
                  ["JQuery常用方法总结","JQuery常用方法总结"],
                  ["vsCode窗口设置","vsCode窗口设置"]
                ]
              }
            ],
            "/blog/web/wechat/":[
              {
                title:"微信小程序",
                collapsable:false,
                children:[
                  ["微信小程序开发","微信小程序开发"]
                ]
              }
            ],
            "/blog/web/typescript/":[
              {
                title:"Typescript",
                collapsable:false,
                children:[
                  ["TypeScript学习和使用","TypeScript学习和使用"]
                ]
              }
            ]            
          }
           
    },   

}