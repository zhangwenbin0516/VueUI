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
      :treeLists="lists"
      :keys="keys"
    />
  </div>
</template>
<script>
  import UiTree from "../../UI/tree/tree";
  export default {
    name: 'home',
    components: {UiTree},
    data() {
      return {
        value: '',
        keys: [],
        lists: [
          {
            name: '测试',
            id: 0,
            value: 0,
            keys: [],
            lists: [
              {
                name: '测试',
                id: 0,
                value: 0,
              }
            ]
          },
          {
            name: '测试',
            id: 0,
            value: 0,
            lists: [
              {
                name: '测试',
                id: 0,
                value: 0,
              }
            ]
          }
        ]
      }
    },
    methods: {
      getData(data) {
console.log(this.value,data)
      }
    }
  }
</script>
