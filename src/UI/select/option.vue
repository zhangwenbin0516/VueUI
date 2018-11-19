<template>
  <div class="options" v-if="options && options.length > 0">
    <ul>
      <li v-for="option in options">
        <div class="name">{{option.name}}</div>
        <ui-option
          :options="option.options"
          @getOption="getOption"
        />
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'ui-option',
    props: {
      value: {
        type: Object,
        default: () => {{}}
      },
      options: {
        type: Array,
        default: () => []
      }
    },
    created() {

    },
    methods: {
      getOption(val) {

      }
    }
  }
</script>
