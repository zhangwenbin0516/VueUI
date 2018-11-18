"use strict"
const config = {
  header: require('ui/header/header'),         //头部
  footer: require('ui/footer/footer'),         //尾部
  nav: require('ui/menu/nav'),                //主菜单
  input: require('ui/input/input'),           //输入框
  tree: require('ui/tree/tree'),              //树状图
  textarea: require('ui/textarea/textarea'),  //文本域
  select: require('ui/select/select'),        //下拉框
  option: require('ui/select/option'),        //下拉列表
  scroll: require('ui/scroll/scroll'),        //自定义滚动条
}

const Tools = {
  install: function (Vue) {
    for(let i in config) {
      if (config[i].name) { //注册全局组件
        Vue.component(config[i].name, config[i]);
      } else {
        Vue.component(config[i].default.name, config[i].default);
      }
      if (typeof config[i] == 'function') { //注册全局指令
        config[i](Vue);
      } else if (typeof config[i].default == 'function') {
        config[i].default(Vue);
      }
    }
  }
}

export default Tools
