<template>
  <!-- 网页模板，编写Html文件 -->
  <!-- 写多个标签时，要把他们放在一个div里  The template root requires exactly one element-->
  <!-- <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div> -->
  <div id="app">
    <h1 :title="message">{{ message }}</h1>
    <button @click="showHi">showHi</button>
  </div>
</template>

<script>
// js代码
// import HelloWorld from "./components/HelloWorld.vue";

// export default {
//   name: "App",
//   components: {
//     HelloWorld,
//   },
// };

//以上是模板自带的，以下是学习内容
export default {
  // 如果是从vue.js文件中引入的话，data的值就是个对象
  // 因为现在是基于Node开发的，所以要写成函数，数据函数返回值的对象。
  data() {
    return {
      message: "test",
    };
  },
  methods: {
    showHi() {
      alert("h1");
    },
  },
};
</script>

<style>
/* css代码 */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
