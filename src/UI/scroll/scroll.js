"use strict"
const scroll = (Vue) => {
  Vue.directive('onscroll', {
    inserted: function(el, binding, vnode) {
      console.log(el)
    }
  })
}

export default scroll
