<template>
  <div class="trees">
    <div class="trees_list"
      v-for="(list, index) in treeLists"
      :class="[list.all, list.display]"
    >
      <div class="trees_name"
           :class="[checkbox == true ? 'isCheckbox' : 'isBox', list.show]"
      >
        <div
          class="checkbox"
          @click="getCheckbox(list)"
        ></div>
        <div class="text">{{list.name}}</div>
      </div>
      <ui-tree
        :keys="keys"
        :checkbox="checkbox"
        :show="show"
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
      keys: {
        type: Array,
        default: () => []
      },
      checkbox: {
        type: Boolean,
        default: () => false
      },
      value: {
        type: Object,
        default: () => {{}}
      },
      show: {
        type: Boolean,
        default: () => false
      }
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
            self.$set(key, 'display', 'none');
            if(key.lists && self.show) {
              self.$set(key, 'display', 'block');
            } else if(key.lists && !self.show) {
              self.$set(key, 'display', 'none');
            }
            if (val) {
              self.$set(val, 'num', num);
              if (val.lists.length <= num) {
                self.$set(val, 'all', 'all');
                self.$set(val, 'show', 'show');
                if (self.keys.indexOf(val.id) < 0) {
                  self.keys.push(val.id);
                }
              } else if (val.lists.length > (num -1 )) {
                self.$set(val, 'all', 'isAll');
                self.$set(val, 'show', 'hide');
                if (num == 0) {
                  self.$set(val, 'all', '');
                }
              }

            }
            if (key.lists) {
              self.getLists(key.lists, key);
            }
          })
        }

      },
      getSort(data, id) {
        let self = this;
        data.forEach((key) => {
          if (id == 0) {
            if (self.keys.indexOf(key.id) > -1) {
              this.keys.splice(this.keys.indexOf(key.id), 1);
            }
          } else {
            if (self.keys.indexOf(key.id) < 0) {
              this.keys.push(key.id);
            }
          }
        })
      },
      getCheckbox(list) {
        if (list.lists) {
          let num = 0
          if (this.keys.indexOf(list.id) > -1) {
            this.keys.splice(this.keys.indexOf(list.id), 1);
          } else {
            this.keys.push(list.id);
            num = 1;
          }
          this.getSort(list.lists, num);
        } else {
          if (this.keys.indexOf(list.id) > -1) {
            this.keys.splice(this.keys.indexOf(list.id), 1);
            if (this.$attrs.index) {
              this.$parent.treeLists[this.$attrs.index].num--;
            }
          } else {
            this.keys.push(list.id);
            if (this.$attrs.index) {
              this.$parent.treeLists[this.$attrs.index].num--;
            }
          }
          if (this.$attrs.index) {
            if (this.$parent.treeLists[this.$attrs.index].num >= this.$parent.treeLists[this.$attrs.index].lists.length) {
              this.keys.push(this.$parent.treeLists[this.$attrs.index].id);
            } else {
              this.keys.splice(this.keys.indexOf(this.$parent.treeLists[this.$attrs.index].id), 1);
            }
          }
          this.treeData();

        }
      },
      treeData(data) {
        this.$set(this.$parent, 'keys', this.keys);
      }
    }
  }
</script>
