<template>
  <div class="input">
    <input
      :type="type"
      :placeholder="placeholder"
      v-model="message"
      @input="getData"
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
        message: ''
      }
    },
    created() {
      this.message = this.value;
    },
    methods: {
      getData() {
        if (this.reg && !this.reg.code.test(this.message)) {
          this.message = this.value;

        } else {

        }
      }
    }
  }
</script>
