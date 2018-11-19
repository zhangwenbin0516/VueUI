<template>
  <div class="options" v-if="options && options.length > 0">
    <ul>
      <li v-for="(option, index) in options">
        <div class="row">
          <div class="checkbox"
               v-if="checked"
               :class="[option.tab == true ? 'tab' : '', option.tags == true ? 'tag' : '']"
               @click="getData(option)"
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
        type: [Number, String],
        default: () => ''
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
        num: 0,
        optionData: {}
      }
    },
    methods: {
      getOption(val) {
        this.$emit('getOption', val);
      },
      getData(val) {
        if (this.checked) {
          if (val.tab == true) {
            this.$set(val, 'tab', false);
            this.num--;
            delete this.optionData[val.value];
          } else {
            this.$set(val, 'tab', true);
            this.num++;
            this.optionData[val.value] = val;
          }
          let self = this;
          if (val.options) {
            val.options.forEach((key) => {
              self.$set(key, 'tab', val.tab);
            })
          }
          if (this.num >= this.options.length && this.index != '') {
            this.$set(this.$parent.options[this.index], 'tab', true);
            this.$set(this.$parent.options[this.index], 'tags', false);
          } else if (this.num < this.options.length && this.index != '') {
            this.$set(this.$parent.options[this.index], 'tab', false);
            if (this.num > 0) {
              this.$set(this.$parent.options[this.index], 'tags', true);
            } else {
              this.$set(this.$parent.options[this.index], 'tags', false);
            }
          }
        } else {
          this.optionData = {};
          this.optionData[val.value] = val;
        }
        this.$emit('getOption', this.optionData);
      }
    }
  }
</script>
