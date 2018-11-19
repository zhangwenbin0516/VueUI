<template>
  <div class="options" v-if="options && options.length > 0">
    <ul>
      <li v-for="(option, index) in options">
        <div class="row">
          <div class="checkbox"
               v-if="checked"
               :class="[option.tab == true ? 'tab' : '', option.tags == true ? 'tag' : '']"
               @click="getChecked(option)"
          ></div>
          <div class="name" @click="getData(option)">{{option.name}}</div>
        </div>
        <ui-option
          :options="option.options"
          :checked="checked"
          :index="index"
          @getOption="getOption"
        />
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'ui-option',
    props: {
      value: {
        type: Object,
        default: () => {{}}
      },
      index: {
        type: Number,
        default: () => 0
      },
      checked: {
        type: Boolean,
        default: () => false
      },
      options: {
        type: Array,
        default: () => []
      },
    },
    data() {
      return {
        num: 0
      }
    },
    created() {
      let self = this;
      if (this.options) {
        self.options.forEach((key) => {
          if (key.tab == true) {
            //self.num++;
          } else {
            //key.tab = false;
          }
        })
        /*if (this.num >= this.options.length) {
          this.$set(this.$parent.options[this.index], 'tab', true);
          this.$set(this.$parent.options[this.index], 'tags', false);
        } else if (this.num > 0) {
          this.$set(this.$parent.options[this.index], 'tags', true);
          this.$set(this.$parent.options[this.index], 'tab', false);
        } else {
          this.$set(this.$parent.options[this.index], 'tags', false);
        }*/
      }
    },
    methods: {
      getOption(val) {

      },
      getLists() {

      },
      getChecked(val) {
        if (val.tab == true) {
          this.$set(val, 'tab', false);
          this.num--;
        } else {
          this.$set(val, 'tab', true);
          this.num++;
        }
        let self = this;
        if (val.options) {
          val.options.forEach((key) => {
            self.$set(key, 'tab', val.tab);
          })
        }
        if (this.num >= this.options.length) {
          this.$set(this.$parent.options[this.index], 'tab', true);
        } else {
          this.$set(this.$parent.options[this.index], 'tab', false);
        }
      },
      getData(val) {

      }
    }
  }
</script>
