"use strict"
const config = {
  header: require('ui/header/header'),      //头部信息
  footer: require('ui/footer/footer'),      //尾部信息
  nav: require('ui/menu/nav'),              //主菜单信息
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
