<template>
  <div id="app">
    {{ msg }}
    <div>
      <!-- v-model 双向绑定 -->
      <input type="text" v-model="info" />
      <button @click="handleClick">添加</button>
    </div>
    <ul>
      <todo-item v-for="item in list" :key="item">
        <!-- 旧语法：slot="name"  -->
        <!-- <span slot="item" style="font-size: 20px">{{ item }}</span> -->
        <!-- 2.6语法 要在template标签里使用，作用域插槽-->
        <template v-slot:item="itemProps">
          <span
            :style="{
              fontSize: '20px',
              color: itemProps.checked ? 'red' : 'blue',
            }"
          >
            {{ item }}
          </span>
        </template>
      </todo-item>
    </ul>
  </div>
</template>

<script>
import TodoItem from "./components/TodoItem.vue";
export default {
  name: "App",
  components: { TodoItem },
  data() {
    return {
      msg: "hello world",
      info: "",
      list: [],
    };
  },
  methods: {
    handleClick() {
      // console.log('this.info: ', this.info);
      this.list.push(this.info);
      this.info = "";
    },
  },
};
</script>

<style>
</style>
