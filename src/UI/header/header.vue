<template>
  <header class="header">
    <div class="header_content">
      <div class="header_content_logo">
        <span v-if="logoInfo.name">{{logoInfo.name}}</span>
        <img v-if="logoInfo.img" :src="logoInfo.img">
      </div>
      <ui-nav
        :menuLists="menus"
      />
      <ui-nav
        class="header_content_info"
        :menuLists="userInfos"
      />
    </div>
  </header>
</template>
<script>
  import "themes/common/header.less"
  import UiNav from "../menu/nav";
  export default {
    name: 'ui-header',
    components: {UiNav},
    props: {
      value: {
        type: null,
        default: true
      }
    },
    data() {
      return {
        logoInfo: {},
        menus: [],
        userInfos: []
      }
    },
    created() {
      this.logoInfo = this.$parent.logos || false;
      this.menus = this.$parent.menus || [];
      this.userInfos = this.$parent.userInfo || [];
    }
  }
</script>
