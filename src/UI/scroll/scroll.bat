"use strict"
const scroll = (Vue) => {
  Vue.directive('onscroll', {
    inserted: function(el, binding, vnode) {
      let ele = {el: []};
      let first = el.firstChild;
      if (!/isScroll/.test(ele.first)) {
        first.className += ' isScroll';
      }
      let scroll = el.lastChild;
      if (!/scrolls/.test(scroll.className)) {
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
      tp.style.height = th + 'px';
      console.log(this)
      el.onmouseenter = function (e) {
        let el = e.target || e.srcElement;
        let version = window.navigator.userAgent;
        ele.el.push(el);
        console.log(ele.el)
        if (/Firefox/.test(version)) {
          el.addEventListener('DOMMouseScroll', mouseWheel, false);
        } else {
          el.onwheel = mouseWheel;
        }
      };
      el.onmouseleave = function (e) {
        let el = e.target || e.srcElement;
        let version = window.navigator.userAgent;
        ele.el = ele.el.splice((ele.el.length - 1), 1);
        console.log(ele.el)
        if (/Firefox/.test(version)) {
          el.addEventListener('DOMMouseScroll', null, false);
        } else {
          el.onwheel = null;
        }
      };
      const getElement = () => {
        console.log(ele.el)
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
