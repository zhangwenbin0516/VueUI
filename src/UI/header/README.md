#显示header头部信息，主要包含以下三部分：

##logo信息

###数据模型

logos: {
          name: "测试",
          img: require('img/logo.png')
        },
        
##
##菜单信息

###组件引入 <ui-nav />

###数据模型

menus: [
          {
            name: '主页',
            path: '/home',
            children: [
              {
                name: '主页',
                path: '/home',
              }
            ]
          }
        ],

##
##用户信息

###数据类型

userInfo: [
          {
            name: '主页',
            path: '/home',
            children: [
              {
                name: '主页',
                path: '/home',
              }
            ]
          }
        ],
