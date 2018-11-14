<template>
  <div class="input"
       :class="[isColor, clear ? 'close' : '']"
       @mouseenter="getMouseEnter($event)"
       @mouseleave="getMouseLeave($event)"
  >
    <input
      :type="type"
      :placeholder="placeholder"
      v-model="message"
      :maxlength="maxlength"
      :disabled="disabled"
      :readonly="readonly"
      @input="getData"
      @blur="getBlur"
      @focus="getFocus"
      @keyup="getEnter"
    />
  </div>
</template>
<script>
  export default {
    name: 'ui-input',
    props: {
      value: {
        type: [Number, String],
        default: () => {return ''}
      },
      maxlength: {
        type: [Number, String],
        default: () => {return ''}
      },
      disabled: {
        type: Boolean,
        default: () => false
      },
      readonly: {
        type: Boolean,
        default: () => false
      },
      type: {
        type: String,
        default: () => {return 'text'}
      },
      clear: {
        type: Boolean,
        default: () => false
      },
      reg: {
        type: [Boolean, Object],
        default: () => {return false}
      },
      placeholder: {
        type: String,
        default: () => {return '请输入关键词'}
      }
    },
    data() {
      return {
        message: '',
        isColor: ''
      }
    },
    created() {
      this.message = this.value;
    },
    methods: {
      getData() {
        this.$emit('input', this.message);
      },
      getBlur() {
        if (this.reg && this.reg.code) {
          let reg = new RegExp(this.reg.code);
          if (!reg.test(this.message)) {
            this.$message(this.reg.name, 'warning');
            this.isColor = 'red';
          }
        }
      },
      getFocus() {
        this.isColor = '';
      },
      getEnter(e) {
        if (e.keyCode == 13) {
          this.$emit('getInput', this.message);
        }
      },
      getMouseEnter(e) {
        let el = e.target || e.srcElement;
        let w = el.offsetWidth;
        let h = el.offsetHeight;
        let self = this;
        el.onclick = function(e) {
          let x = e.offsetX;
          let y = e.offsetY;
          let xRt = w -8;
          let xLt = xRt - 20;
          let yTp = (h - 20) / 2;
          let yBm = yTp + 20;
          if (x > xLt && x < xRt) {
            if (y > yTp && y < yBm && self.clear) {
              self.message = '';
            }
          }
        }
      },
      getMouseLeave(e) {
        let el = e.target || e.srcElement;
        el.onclick = null;
      }
    }
  }
</script>
