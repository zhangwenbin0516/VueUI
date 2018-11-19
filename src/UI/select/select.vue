<template>
  <div class="select">
    <ui-input
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      :clear="clear"
      v-model="message"
    />
    <div class="select_option parentScroll">
      <ui-option
        :options="options"
        @getOption="getOption"
      />
      <ui-scroll />
    </div>
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
      clear: {
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
    },
    methods: {
      getOption(val) {

      }
    }
  }
</script>
