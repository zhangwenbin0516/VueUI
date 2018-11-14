<template>
  <div class="select">
    <ui-input
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      v-model="message"
    />
  </div>
</template>
<script>
  export default {
    name: 'ui-select',
    props: {
      value: {
        type: [Boolean, Number, String],
        default: () => ''
      },
      options: {
        type: Array,
        default: () => []
      },
      checked: {
        type: Boolean,
        default: () => false
      },
      placeholder: {
        type: String,
        default: () => '请选择'
      },
      disabled: {
        type: Boolean,
        default: () => false
      },
      readonly: {
        type: Boolean,
        default: () => false
      }
    },
    created() {
      this.message = this.value;
    }
  }
</script>
