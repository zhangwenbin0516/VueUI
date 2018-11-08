<template>
  <div class="trees">
    <div class="trees_list"
      v-for="list in treeLists"
    >
      <div class="trees_name">
        <input class="checkbox" type="checkbox" />
        <div class="trees_text">
          {{list.name}}
        </div>
      </div>
      <ui-tree
        :treeLists="list.lists"
        :keys="keys"
      />
    </div>
  </div>
</template>
<script>
  export default {
    name: 'ui-tree',
    props: {
      value: {
        type: [Boolean, Number, String],
        default: true
      },
      treeLists: {
        type: null,
        default: true
      }
    },
    data() {
      return {
        keys: [],
        checkbox: false
      }
    },
    created() {
      this.keys = this.$attrs.keys || [];
      this.checkbox = this.$attrs.v || false;
    }
  }
</script>
