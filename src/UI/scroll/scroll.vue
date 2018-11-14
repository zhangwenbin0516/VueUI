<template>
  <div class="scrolls">
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
          if (key.className == 'options' && self.isEle) {
            self.isEle = false;
            self.getBind(key);
          }
        })
      },
      getBind(ele) {
        ele.onmouseenter = this.getMouseEnter;
        ele.onmouseleave = this.getMouseLeave;
      },
      getMouseEnter(e) {
        let el = e.target || e.srcElement;
        let version = window.navigator.userAgent;
        this.tp1 = el.offsetHeight;
        this.tp2 = this.$el.offsetHeight;
        this.tp = this.tp2 * this.tp2 / this.tp1;
        this.y = this.tp2 - this.tp;
        this.tp3 = this.tp1 - this.tp2;
        console.log(this.y,this.tp3)
        if ((this.y || this.tp3) == 0) {
          this.isShow = false;
          //return false;
        }
        if (/Firefox/.test(version)) {
          el.addEventListener('DOMMouseScroll', this.getScroll, false);
        } else {
          el.onmousewheel = this.getScroll;
        }
      },
      getMouseLeave(e) {
        let el = e.target || e.srcElement;
        let version = window.navigator.userAgent;
        if (/Firefox/.test(version)) {
          el.addEventListener('DOMMouseScroll', null, false);
        } else {
          el.onmousewheel = null;
        }
      },
      getScroll(e) {
        let num = 0;
        if (e.wheelDelta) {
          if (e.wheelDelta > 0) {
            num = -120;
          } else {
            num = 120;
          }
        } else if (e.details) {
          if (e.details > 0) {
            num = -120;
          } else {
            num = 120;
          }
        }
        this.nm = num * this.y / this.tp3;
        console.log(this.nm)
        this.top = this.top + this.nm;
      }
    }
  }
</script>
