// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'babel-polyfill'
Vue.config.productionTip = false

import axios from './http'

Vue.prototype.$axios = axios


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  created() {
    this.$axios({
      url: '/api/dictionaryDetailController//web_datagrid2.form',
      type: 'post',
      data: {
        typeCode: ''//'enterpriseClassification'
      },
      success: function (res) {
        console.log(res, 'asddddd')
      },
      error: function(err) {
        console.log(err)
      }
    })
  }
})
