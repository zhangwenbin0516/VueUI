<template>
  <div class="home">
    <ui-input
      v-model="value"
      type="text"
      :placeholder="placeholder"
      @getData="getData"
    />
    <ui-tree
      :checkbox=true
      :treeLists="lists"
      :show=true
      :keys="keys"
      @treeData="treeData"
    />
  </div>
</template>
<script>
  export default {
    name: 'home',
    data() {
      return {
        value: '',
        reg: {
          name: '您输入的手机号码错误',
          code: '/[0-9]{0-11}/'
        },
        placeholder: '请输入企业关键词',
        keys: [0, 1, 2, 4],
        lists: [
          {
            name: '测试',
            id: 0,
            value: 0,
            lists: [
              {
                name: '测试',
                id: 3,
                value: 0,
              },
              {
                name: '测试',
                id: 4,
                value: 0,
              }
            ]
          },
          {
            name: '测试',
            id: 2,
            value: 1
          }
        ]
      }
    },
    created() {
      this.$message({
        message: '这是一条信息',
        type: 'info',
        time: 1000
      });
    },
    methods: {
      getData(data) {

      },
      treeData(data) {
console.log(data)
      }
    }
  }
</script>
