"use strict"
const scroll = (Vue) => {
  Vue.directive('onscroll', {
    inserted: function(el, binding, vnode) {
      let ele = {};
      let first = el.firstChild;
      if (!/isScroll/.test(ele.first)) {
        first.className += ' isScroll';
      }
      let scroll = el.lastChild;
      if (!ele.scroll) {
        scroll = document.createElement('div');
        scroll.className = 'scrolls';
        scroll.innerHTML = '<div class="top"></div>';
        el.appendChild(scroll);
      }
      let tp = scroll.querySelector(".top");
      let h = scroll.offsetHeight;
      let ch = first.offsetHeight;
      let th = (h * h) / ch;
      if (ch <= h) {
        scroll.style.display = 'none';
      }
      console.log(el,th,h)
      tp.style.height = th + 'px';
      el.onmouseenter = function (e) {
        let el = e.target || e.srcElement;
        let version = window.navigator.userAgent;
        window.$ele = el;
        ele.el = window.$ele;
        if (/Firefox/.test(version)) {
          el.addEventListener('DOMMouseScroll', mouseWheel, false);
        } else {
          el.onwheel = mouseWheel;
        }
      };
      el.onmouseleave = function (e) {
        let el = e.target || e.srcElement;
        let version = window.navigator.userAgent;
        window.$ele = null;
        if (/Firefox/.test(version)) {
          el.addEventListener('DOMMouseScroll', null, false);
        } else {
          el.onwheel = null;
        }
      };
      const getElement = () => {
        ele.el = window.$ele;
        ele.first = ele.el.firstChild;
        ele.scroll = ele.el.lastChild;
        ele.tp = ele.scroll.querySelector(".top");
      };
      const mouseWheel = (e) => {
        if (e.detail > 0) { //向下
          ele.top = 120;
          getElement();
        } else {  //向上
          ele.top = -120;
          getElement();
        }
        if (e.wheelDelta > 0) { //向上
          ele.top = -120;
          getElement();
        } else { //向下
          ele.top = 120;
          getElement();
        }
      };
    }
  })
}

export default scroll
