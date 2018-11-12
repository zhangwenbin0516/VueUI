<template>
  <div class="message" :class="'message_' + type">
    <span></span>{{message}}
  </div>
</template>
<script>
  export default {
    name: 'message',
    data() {
      return {
        message: '',
        time: 3000,
        type: 'info',
        center: false
      }
    },
    mounted() {
      //this.close();
    },
    methods: {
      close() {
        let self = this;
        setTimeout(() => {
          document.body.removeChild(self.$el);
        }, this.time);
      }
    }
  }
</script>
