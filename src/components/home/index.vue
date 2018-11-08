<template>
  <div class="home">
    <ui-input
      v-model="value"
      type="text"
      reg=""
      placeholder="请输入关键词"
      @input="getData"
    />
  </div>
</template>
<script>
  export default {
    name: 'home',
    data() {
      return {
        value: ''
      }
    },
    methods: {
      getData(data) {
console.log(this.value,data)
      }
    }
  }
</script>
