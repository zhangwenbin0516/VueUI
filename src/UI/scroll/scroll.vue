<template>
  <div class="scrolls" v-show="isShow">
    <div class="top" :style="{top: top + 'px', height: tp + 'px'}"></div>
  </div>
</template>
<script>
  export default {
    name: 'ui-scroll',
    data() {
      return {
        ele: '',
        top: 0,
        tp: 0,
        isShow: false
      }
    },
    mounted() {
      this.ele = this.$el.parentNode;
      this.getElement(this);
    },
    methods: {
      getElement(self) {
        this.lists = this.ele.childNodes;
        this.isEle = true;
        this.lists.forEach((key) => {
          if (/isScroll/.test(key.className)  && self.isEle) {
            self.isEle = false;
            self.getBind(key);
          }
        })
      },
      getBind(ele) {
        ele.onmouseenter = this.getMouseEnter(ele);
        ele.onmouseleave = this.getMouseLeave(ele);
      },
      getMouseEnter(el) {
        let version = window.navigator.userAgent;
        this.pv = el;
        this.tp1 = el.offsetHeight;
        this.tp2 = el.parentNode.offsetHeight;
        this.tp = this.tp2 * this.tp2 / this.tp1;
        this.y = this.tp2 - this.tp;
        this.tp3 = this.tp1 - this.tp2;
        if (this.tp1 > this.tp2) {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
        if (/Firefox/.test(version)) {
          el.addEventListener('DOMMouseScroll', this.getScroll, false);
        } else {
          el.onmousewheel = this.getScroll;
        }
      },
      getMouseLeave(el) {
        let version = window.navigator.userAgent;
        this.isShow = false;
        this.pv = null;
        if (/Firefox/.test(version)) {
          el.addEventListener('DOMMouseScroll', null, false);
        } else {
          el.onmousewheel = null;
        }
      },
      getScroll(e) {
        let num = 120, top = 0, tp = 0;
        this.nm = num * this.y / this.tp3;
        if (this.nm >= this.y) {
          this.nm = this.y;
        }
        if (e.wheelDelta) {
          if (e.wheelDelta > 0) { //向上
            this.nm = 0 - this.nm;
            num = 0 - num;
            top = top + this.nm;
            tp = tp + num;
            if (top < 0) { top = 0;};
            if (tp < 0) { tp = 0;};
          } else {
            top = top + this.nm;
            tp = tp - 120;
          }

        } else if (e.detail) {
          if (e.detail < 0) { //向上
            this.nm = 0 - this.nm;
            num = 0 - num;
            top = top + this.nm;
            tp = tp + num;
            if (top < 0) { top = 0;};
            if (tp < 0) { tp = 0;};
          } else {
            top = top + this.nm;
            tp = tp - 120;
          }
        }
        console.log(tp)
        if (tp <= -this.tp3) {
          tp = 0 - this.tp3;
        }
        if (this.top >= 0 && this.top <= this.y) {
          this.top = top;
        }
        if (tp >= 0 && tp >= -this.tp3) {
          this.pv.style.top = tp + 'px';
        }
      }
    }
  }
</script>
