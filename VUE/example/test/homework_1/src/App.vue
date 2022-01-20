<!--
1. 在单文件组件中实现一个图片切换效果，图片与数字列表都要使用列表展示。
-->

<template>
  <div id="app">
    <h1>{{ message }}</h1>
    <hr />
    <button @click="changeImg_1">改变图片</button>
    <ul>
      <li v-for="(picture, index) of picture1" :key="index">
        <p>{{picture.num}}</p>
        <img :src="picture.url" alt="" />
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: "This is homework_1",
      picture1: [
        { url: require("./assets/img/1.jpg"), num: 1 },
      ],
    };
  },
  methods: {
    changeImg_1() {
      if (this.picture1[0].url == require("./assets/img/2.jpg")) {
        this.picture1[0].url = require("./assets/img/1.jpg");
        this.picture1[0].num = 1;
      } else {
        this.picture1[0].url = require("./assets/img/2.jpg");
        this.picture1[0].num = 2;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
