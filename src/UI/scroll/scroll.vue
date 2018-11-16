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
            this.$ele = key;
            self.isEle = false;
            self.getBind(key);
          }
        })
      },
      getBind(ele) {
        ele.onmouseover = this.getMouseEnter;
        ele.onmouseout = this.getMouseLeave;
      },
      getMouseEnter(e) {
        let el = e.target || e.srcElement;
        if (/isScroll/.test(this.$ele.className)) {
          let version = window.navigator.userAgent;
          let tp1 = this.$ele.offsetHeight;
          let tp2 = this.$ele.parentNode.offsetHeight;
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
        }
      },
      getMouseLeave(e) {
        let el = e.target || e.srcElement;
        let version = window.navigator.userAgent;
        if (/Firefox/.test(version)) {
          this.$ele.ddEventListener('DOMMouseScroll', null, false);
        } else {
          this.$ele.onmousewheel = null;
        }
      },
      getScroll(e) {
        console.log(e)
      }
    }
  }
</script>
