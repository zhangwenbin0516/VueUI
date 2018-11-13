<template>
  <div class="textarea" :class="isColor">
    <textarea
      v-model="message"
      :maxlength="maxlength"
      :placeholder="placeholder"
      @input="getData"
      @blur="getBlur"
      @focus="getFocus"
      @keyup="getEnter"
      :style="{width: size.x + 'px', height: size.y + 'px'}"
    />
    <div class="textarea_size" v-if="maxlength != ''">
      {{message.length}}/{{maxlength}}
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ui-textarea',
    props: {
      value: {
        type: [Number, String],
        default: () => {return ''}
      },
      maxlength: {
        type: [Number],
        default: () => {return ''}
      },
      reg: {
        type: [Boolean, Object],
        default: () => {return false}
      },
      placeholder: {
        type: String,
        default: () => {return '请输入内容'}
      }
    },
    data() {
      return {
        message: '',
        isColor: '',
        size: {
          x: 0,
          y: 0
        }
      }
    },
    created() {
      this.message = this.value;
    },
    mounted() {
      this.$set(this.size, 'x', (this.$el.offsetWidth - 20));
      this.$set(this.size, 'y', (this.$el.offsetHeight - 42));
    },
    methods: {
      getData() {
        this.$emit('input', this.message);
      },
      getBlur() {
        if (this.reg && this.reg.code) {
          let reg = new RegExp(this.reg.code);
          if (!reg.test(this.message)) {
            this.$message(this.reg.name, 'warning');
            this.isColor = 'red';
          }
        }
      },
      getFocus() {
        this.isColor = '';
      },
      getEnter(e) {
        if (e.keyCode == 13) {
          this.$emit('getInput', this.message);
        }
      }
    }
  }
</script>
