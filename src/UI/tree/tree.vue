<template>
  <div class="trees">
    <div class="trees_list"
      v-for="(list, index) in treeLists"
       :class="box + ' ' + list.all"
    >
      <div class="trees_name">
        <div class="checkbox"
              @click="getClick(list)"
             :class="[list.show == 1 ? 'show' : 'hide']"
        >
        </div>
        <div class="trees_text">
          {{list.name}}
        </div>
      </div>
      <ui-tree
        v-if="list.lists"
        :treeLists="list.lists"
        :index="index"
        :keys="keys"
        :checkbox="checkbox"
        @getTrees="getTrees"
      />
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ui-tree',
    props: {
      checkbox: {
        type: Boolean,
        default: () => false
      },
      value: {
        type: Object,
        default: () => {return {}}
      },
      keys: {
        type: Array,
        default: () => []
      },
      treeLists: {
        type: Array,
        default: () => []
      }
    },
    created() {
       this.box = this.checkbox == true ? 'isCheckbox' : 'isBox';
       this.getLists(this.treeLists);
    },
    methods: {
      getClick(val) {
        if (this.keys.indexOf(val.id) > -1) {
          this.keys.splice(this.keys.indexOf(val.id), 1);
        } else {
          this.keys.push(val.id);
        }
        this.getTrees(val, this.$attrs.index)
      },
      getTrees(data, id) {
        console.log(data, id)
        if (typeof id == 'number') {
          if (this.$parent.getTrees) {
            this.$parent.getTrees(this.keys);
          }
        } else {
          this.keys = data;
          this.getLists(this.treeLists);
        }
      },
      getLists(data, val) {
        let self = this;

        data.forEach((key) => {
          if (self.keys.indexOf(key.id) > -1) {
            key.show = 1;
            if (val) {
              if (val.num) {
                val.num++;
              } else {
                val.num = 1;
              }
              if (val.num == val.lists.length) {
                val.all = 'all';
              } else {
                val.all = 'isAll';
              }
            }
          } else {
            key.show = 0;
          }
          if (key.lists) {
            self.getLists(key.lists, key);
          }
        })
      }
    }
  }
</script>
