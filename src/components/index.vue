<template>
  <div class="root">
    <ui-header />
    <div class="master">
      <router-view
        class="master_content"
        :style="{height: height}"
      />
      <ui-footer />
    </div>
  </div>
</template>
<script>
  import UiFooter from "../UI/footer/footer";
  export default {
    name: 'root',
    components: {UiFooter},
    data() {
      return {
        height: 'auto',
        logos: {
          name: '',
          img: require('img/logo.png')
        },
        menus: [
          {
            name: '主页',
            path: '/home',
            children: [
              {
                name: '主页',
                path: '/home',
              }
            ]
          }
        ],
        userInfo: [
          {
            name: '主页',
            path: '/home',
          }
        ]
      }
    },
    created() {
      this.getUrl();
    },
    mounted() {
      this.getSize();
    },
    methods: {
      getUrl() {
        if (this.$route.path == '/') {
          this.$router.push({ path: '/home'});
        }
      },
      getSize() {
        let ele = this.$el.querySelector('.master');
        let header = this.$el.querySelector('header');
        let footer = this.$el.querySelector('footer');
        let master = this.$el.querySelector('.master_content');
        let space = ele.offsetHeight - header.offsetHeight - footer.offsetHeight;
        let cons = master.offsetHeight;
        if (cons > space) {
          this.height = 'auto';
        } else {
          this.height = space + 'px';
        }
      }
    },
    watch: {
      $route() {
        this.getUrl();
        this.getSize();
      }
    }
  }
</script>
