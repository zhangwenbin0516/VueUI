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
            key.stopPropagation();
          }
        })
      },
      getBind(ele) {
        ele.onmouseenter = this.getMouseEnter;
        ele.onmouseleave = this.getMouseLeave;
        return false;
      },
      getMouseEnter(e) {
        let el = e.target || e.srcElement;
        let version = window.navigator.userAgent;
        let tp1 = el.offsetHeight;
        let tp2 = el.parentNode.offsetHeight;
        if (tp1 > tp2) {
          this.isShow = true;
        } else {
          this.isShow = false;
        }
        if (/Firefox/.test(version)) {
          el.addEventListener('DOMMouseScroll', this.getScroll, false);
        } else {
          el.onmousewheel = this.getScroll;
        }
        return false;
      },
      getMouseLeave(e) {
        let el = e.target || e.srcElement;
        let version = window.navigator.userAgent;
        this.isShow = false;
        if (/Firefox/.test(version)) {
          el.addEventListener('DOMMouseScroll', null, false);
        } else {
          el.onmousewheel = null;
        }
        return false;
      },
      getScroll(e) {
        let lists = this.$el.parentNode.childNodes;
        console.log(lists)
        lists.forEach((key) => {
          if (/isScroll/.test(key.className)) {
            let num = 120, top = 0, tp = 0;
            let box = this.$el.offsetHeight;
            console.log(box)
          }
        });
return false;
        this.nm = num * this.y / this.tp3;
        if (this.nm >= this.y) {
          this.nm = this.y;
        }
        console.log(this.tp3)
        if (this.tp3 <= 120) {
          num = this.tp3;
        }
        if (e.wheelDelta) {
          if (e.wheelDelta > 0) { //向上
            this.nm = 0 - this.nm;
            num = 0 - num;
            top = top + this.nm;

          } else {
            top = top + this.nm;

          }

        } else if (e.detail) {
          if (e.detail < 0) { //向上
            this.nm = 0 - this.nm;
            num = 0 - num;
            top = top + this.nm;

          } else {
            top = top + this.nm;

          }
        }
        if (this.top >= 0 && this.top <= this.y) {
          this.top = top;
        }

        if (tp <= 0 && tp >= -this.tp3) {
          //el.style.top = tp + 'px';
        }
      }
    }
  }
</script>
