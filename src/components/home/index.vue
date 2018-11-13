<template>
  <div class="home">
    <ui-input
      v-model="value"
      type="text"
      :placeholder="placeholder"
      :reg="reg"
      :maxlength="length"
      @getInput="getData"
    />
    <ui-textarea
      v-model="value1"
      :placeholder="placeholder"
      :reg="reg"
      :maxlength="length"
      @getTextarea="getData"
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
        value1: '',
        length: 200,
        reg: {
          name: '您输入的手机号码错误',
          code: '^1[34578]+[0-9]{4,8}$'
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

    },
    methods: {
      getData(data) {
console.log(data)
      },
      treeData(data) {
console.log(data)
      }
    }
  }
</script>
