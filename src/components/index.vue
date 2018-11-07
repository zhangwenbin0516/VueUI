<template>
  <div class="root">
    <ui-header />
    <div class="master">
      <router-view />
      <ui-footer />
    </div>
  </div>
</template>
<script>
  export default {
    name: 'root',
  }
</script>
