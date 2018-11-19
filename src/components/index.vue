<template>
  <div class="root">
    <ui-header />
    <div class="master parentScroll">
      <div class="childScroll">
        <router-view
          class="master_content"
        />
        <ui-footer />
      </div>
      <ui-scroll />
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
      this.getSize();
    },
    methods: {
      getUrl() {
        if (this.$route.path == '/') {
          this.$router.push({ path: '/home'});
        }
      },
      getSize() {
        let self = this;
        let masters = function() {
          try {
            let ele = self.$el.querySelector('.master');
            let cons = ele.offsetHeight;
            let str = self.$el.querySelector('.master_content');
            let foot = self.$el.querySelector('.footer').offsetHeight;
            str.style.minHeight = (cons - foot) + 'px';
          } catch (e) {
            setTimeout(() => {
              masters();
            }, 100)
          }
        }
        masters();
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
