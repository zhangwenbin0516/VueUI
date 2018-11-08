<template>
  <nav class="menu" v-if="menuLists">
    <ul class="menu_content">
      <li v-for="list in menuLists">
        <router-link :to="list.path">{{list.name}}</router-link>
        <ul class="child" v-if="list.children">
          <li v-for="name in list.children">
            <router-link :to="name.path">{{name.name}}</router-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>
<script>
  import 'themes/common/nav.less'
  export default {
    name: 'UiNav',
    props: {
      value: {
        type: null,
        default: true
      },
      menuLists: {
        type: [Array],
        default: true
      }
    },
    data() {
      return {}
    }
  }
</script>
