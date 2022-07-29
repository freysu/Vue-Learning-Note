<template>
  <li class="item">
    <input type="checkbox" v-model="checked" />
    <!-- 插槽 传递状态 作用域插槽-->
    <slot name="item" v-bind="{ checked }"></slot>
  </li>
</template>

<script>
export default {
  name: "TodoItem",
  data() {
    return {
      checked: false,
    };
  },
  props: ["item"],
};
</script>

<style scoped>
.item {
  color: red;
}
</style>