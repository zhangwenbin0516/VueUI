<template>
  <div class="home">
    <div class="blank"></div>
    <ui-input
      v-model="value"
      type="text"
      :placeholder="placeholder"
      :maxlength="length"
      @getInput="getData"
    />
    <div class="blank"></div>
    <ui-textarea
      v-model="value1"
      :placeholder="placeholder"
      :maxlength="length"
      @getTextarea="getData"
    />
    <div class="blank"></div>
    <ui-tree
      :checkbox=true
      :treeLists="lists"
      :show=true
      :keys="keys"
      @treeData="treeData"
    />
    <div class="blank"></div>
    <ui-select
      :options="options"
      v-model="value2"
      :checked=true
      :placeholder="placeholder"
      @getOption="getData"
    />
  </div>
</template>
<script>
  import UiSelect from "../../UI/select/select";
  export default {
    name: 'home',
    components: {UiSelect},
    data() {
      return {
        value: '',
        value1: '',
        value2: '123',
        length: 200,
        options: [
          {
            id: 0,
            name: '测试1',
            value: 'ceshi1'
          },
          {
            id: 0,
            name: '测试2',
            value: 'ceshi2'
          },
          {
            id: 0,
            name: '测试3',
            value: 'ceshi'
          },
          {
            id: 0,
            name: '测试4',
            value: 'ceshi'
          },
          {
            id: 0,
            name: '测试5',
            value: 'ceshi'
          },
          {
            id: 0,
            name: '测试6',
            value: 'ceshi'
          },
          {
            id: 0,
            name: '测试7',
            value: 'ceshi',
            options: [
              {
                id: 0,
                name: '测试6',
                value: 'ceshi'
              },
              {
                id: 0,
                name: '测试7',
                value: 'ceshi'
              }
            ]
          },
          {
            id: 0,
            name: '测试8',
            value: 'ceshi'
          },
          {
            id: 0,
            name: '测试9',
            value: 'ceshi'
          },
          {
            id: 0,
            name: '测试10',
            value: 'ceshi'
          }
        ],
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
