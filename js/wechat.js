

window.onload = function() {
    themeDefaultContent = $(
      '#app > .theme-container>.page > .theme-default-content'
    );
    console.log(themeDefaultContent)
    themeDefaultContent.attr('id', 'container');
    btw = new BTWPlugin(); // 注意btw需要是个全局变量,把const去掉
    btw.init({
        id: 'container',
        blogId: '28428-1638327607470-155',
        name: 'xukeler博客',
        qrcode: 'https://www.xukeler.cn/qrcode.jpg',
        keyword: '验证码',
    });
  };