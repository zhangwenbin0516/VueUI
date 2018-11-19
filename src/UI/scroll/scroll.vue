<template>
  <div class="scrolls" :style="{display: display}">
    <div class="top"
         :style="{top: top + 'px', height: height + 'px'}"
         @mousedown="MouseDown($event)"
    ></div>
  </div>
</template>
<script>
  export default {
    name: 'ui-scroll',
    mounted() {
      this.getReady();
    },
    data() {
      return {
        top: 0,
        display: '',
        factor: 1,
        height: 0,
        ele: [],
        mouseObj: {}
      }
    },
    methods: {
      getReady() {
        let parentEle = this.$el.parentNode;
        let childEle = parentEle.firstChild;
        if (!/parentScroll/.test(parentEle.className)) {
          parentEle.className += ' parentScroll';
        }
        if (!/childScroll/.test(childEle.className)) {
          childEle.className += ' childScroll';
        }
        let scrHeight = this.$el.offsetHeight;
        let childHeight = childEle.offsetHeight;
        if (childHeight > scrHeight) {
          this.display = 'block';
        } else {
          this.display = 'none';
        }
        let num = scrHeight * scrHeight / childHeight;
        this.height = num;
        if (num < 30) {
          this.factor = num / 30;
          this.height = 30;
        }
        childEle.onmouseover = this.getElement;
        let version = window.navigator.userAgent;
        if (/Firefox/.test(version)) {
          childEle.addEventListener('DOMMouseScroll', this.getScroll, false);
        } else {
          childEle.onwheel = this.getScroll;
        }
      },
      getElement(e) {
        this.lists = document.querySelectorAll('.parentScroll');
        let ele = this.ele;
        let pageX = e.pageX;
        let pageY = e.pageY;
        this.ele = [];
        let nm = 0;
        this.lists.forEach((key, i) => {
          if (document.documentElement.getBoundingClientRect) {
            ele[nm] = {};
            ele[nm].minX = key.getBoundingClientRect().left;
            ele[nm].minY = key.getBoundingClientRect().top;
            ele[nm].maxX = key.getBoundingClientRect().left + key.offsetWidth;
            ele[nm].maxY = key.getBoundingClientRect().top + key.offsetHeight;
            ele[nm].num = ele[i].minX + ele[i].minY;
            ele[nm].key = key;
            nm++;
          }
        });
        const arrSort = (val1, val2) => {
          let num1 = val1.num;
          let num2 = val2.num;
          if (num1 > num2) {
            return -1;
          } else if (num1 < num2) {
            return 1;
          } else {
            return 0;
          }
        };
        ele.sort(arrSort);
        let num = 0;
        function ranking() {
          if (ele[num].minX < pageX && ele[num].maxX > pageX) {
            if (ele[num].minY < pageY && ele[num].maxY > pageY) {
              window.$ele = ele[num].key;
            } else {
              num++;
              ranking();
            }
          } else {
            num++;
            ranking();
          }
        };
        ranking();
      },
      getData(top) {
        let el = window.$ele;
        let first = el.firstChild;
        let last = el.lastChild;
        let firstHeight = first.offsetHeight;
        let elHeight = el.offsetHeight;
        let firstTop = first.offsetTop || 0;
        let lastTop = last.querySelector('.top');
        let num = 0;
        num = firstTop + top;
        if (top < 0 && num <= (elHeight -firstHeight)) {
          num = elHeight - firstHeight;
        } else if (top > 0 && num >= 0) {
          num = 0;
        }
        first.style.top = num + 'px';
        lastTop.style.top = Math.abs(num * this.factor) + 'px';
      },
      getScroll(e) {
        if (e.detail > 0) { //向下滚动
          this.getData(-120);
        } else if (e.detail < 0) {  //向上滚动
          this.getData(120);
        }
        if (e.wheelDelta > 0) { //向上滚动
          this.getData(120);
        } else if (e.wheelDelta < 0) {  //向下滚动
          this.getData(-120);
        }
      },
      MouseDown(e) {
        let el = e.target || e.srcElement;
        this.mouseObj.start = e.clientY;
        this.mouseObj.el = el;
        this.mouseObj.topHeight = el.offsetHeight;
        this.mouseObj.parentHeight = el.parentNode.offsetHeight;
        this.mouseObj.ele = el.parentNode.parentNode.firstChild;
        this.mouseObj.eleHeight = this.mouseObj.ele.offsetHeight;
        this.mouseObj.mod = this.mouseObj.parentHeight - this.mouseObj.topHeight;
        this.mouseObj.MOD = this.mouseObj.eleHeight - this.mouseObj.parentHeight;
        this.mouseObj.Y = this.mouseObj.MOD / this.mouseObj.mod;
        this.mouseObj.top = el.offsetTop || 0;
        document.onmousemove = this.MouseMove;
        document.onmouseup = this.MouseUp;
      },
      MouseMove(e) {
        this.mouseObj.end = e.clientY;
        this.mouseObj.num = this.mouseObj.end - this.mouseObj.start;
        let num = this.mouseObj.top + this.mouseObj.num;
        if (num >= 0 && num <= this.mouseObj.mod) {
          this.mouseObj.el.style.top = num + 'px';
          this.mouseObj.ele.style.top = -(num * this.mouseObj.Y) + 'px';
        }
      },
      MouseUp(e) {
        document.onmousemove = null;
        document.onmouseup = null;
      }
    }
  }
</script>
