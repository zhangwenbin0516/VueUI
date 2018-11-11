<template>
  <div class="trees">
    <div class="trees_list"
      v-for="(list, index) in treeLists"
      :class="list.all"
    >
      <div class="trees_name"
        :class="list.show"
      >
        <div
          class="checkbox"
          :class="[checkbox == true ? 'isCheckbox' : 'isBox']"
          @click="getCheckbox(list)"
        ></div>
        <div class="text">{{list.name}}</div>
      </div>
      <ui-tree
        :keys="keys"
        :checkbox="checkbox"
        :index="index"
        :treeLists="list.lists"
        @treeData="treeData"
      />
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ui-tree',
    props: {
      treeLists: {
        type: Array,
        default: () => []
      },
      keys: Array,
      checkbox: Boolean,
      value: Object
    },
    watch: {
      keys: {
        handler() {
          this.getLists(this.treeLists);
        }
      }
    },
    created() {
      this.getLists(this.treeLists);
    },
    methods: {
      getLists(data, val) {
        let self = this, num = 0;
        if (data) {
          data.forEach((key) => {
            if (self.keys.indexOf(key.id) > -1) {
              self.$set(key, 'show', 'show');
              num++;
            } else {
              self.$set(key, 'show', 'hide');
            }
            if (val) {
              if (val.lists.length <= num) {
                self.$set(val, 'all', 'all');
                self.$set(val, 'show', 'show');
              } else {
                self.$set(val, 'all', 'isAll');
                self.$set(val, 'show', 'hide');
              }
            }
            if (key.lists) {
              self.getLists(key.lists, key);
            }
          })
        }

      },
      getCheckbox(list) {
        if (this.keys.indexOf(list.id) > -1) {
          this.keys.splice(this.keys.indexOf(list.id), 1);
        } else {
          this.keys.push(list.id);
        }
        this.treeData();
      },
      treeData(data) {
        this.$set(this.$parent, 'keys', this.keys);
      }
    }
  }
</script>
