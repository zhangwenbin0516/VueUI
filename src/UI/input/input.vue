<template>
  <div class="input" :class="isColor">
    <input
      :type="type"
      :placeholder="placeholder"
      v-model="message"
      :maxlength="maxlength"
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
        type: [Number],
        default: () => {return ''}
      },
      type: {
        type: String,
        default: () => {return 'text'}
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
      }
    }
  }
</script>
