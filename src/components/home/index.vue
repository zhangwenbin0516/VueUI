<template>
  <div class="home">
    <ui-input
      v-model="value"
      type="text"
      reg=""
      placeholder="请输入关键词"
      @input="getData"
    />
    <ui-tree
      :checkbox=true
      :treeLists="lists"
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
        keys: [],
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
    methods: {
      getData(data) {

      },
      treeData(data) {
console.log(data)
      }
    }
  }
</script>
