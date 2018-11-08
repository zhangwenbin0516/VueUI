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
        default: false
      },
      type: {
        type: [Boolean, Number, String],
        default: true
      }
    },
    data() {
      return {
        placeholder: '',
        message: ''
      }
    },
    created() {
      this.placeholder = this.$attrs.placeholder || '请输入关键词';
      this.message = this.value || '';
    },
    mounted() {
      this.$el.removeAttribute('placeholder');
    },
    methods: {
      getData() {
        if (this.$parent.input) {
          this.$emit('input', this.message);

        }
      }
    }
  }
</script>
