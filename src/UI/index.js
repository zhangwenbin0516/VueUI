"use strict"
const config = {
  header: require('ui/header/header'),      //头部
  footer: require('ui/footer/footer'),      //尾部
  nav: require('ui/menu/nav'),              //主菜单
  input: require('ui/input/input'),         //输入框
  tree: require('ui/tree/tree'),            //树状图
}

const Tools = {
  install: function (Vue) {
    for(let i in config) {
      if (config[i].name) {
        Vue.component(config[i].name, config[i]);
      } else {
        Vue.component(config[i].default.name, config[i].default);
      }
    }
  }
}

export default Tools
