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
  export default {
    name: 'root',
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
      setTimeout(() => {
        this.getSize();
      },100);
    },
    methods: {
      getUrl() {
        if (this.$route.path == '/') {
          this.$router.push({ path: '/home'});
        }
      },
      getSize() {
        try {
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
        } catch (e) {
          
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
