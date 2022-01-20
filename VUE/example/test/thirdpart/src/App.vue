<template>
  <div id="app">
    <!-- 指令 -->
    <!-- v-if: 是不渲染dom，将这个元素设成注释 -->
    <h1 v-if="false">This is v-if</h1>
    <!-- v-show：渲染dom，然后将元素设置为 display: none -->
    <h1 v-show="false">This is v-show</h1>
    <p v-if="isLogin">Welcome, {{ name }}</p>
    <button v-if="!isLogin" @click="login">Log in</button>
    <button v-if="isLogin" @click="exit">Log out</button>
    <!-- 无序列表 -->
    <ul>
      <li v-for="(fruit, index) of fruits" :key="index">
        <p>Fruit Name:{{ fruit }}</p>
        <p>Fruit Index:{{ index }}</p>
      </li>
    </ul>
    <!-- 表格 -->
    <table>
      <thead>
        <th>Index</th>
        <th>Name</th>
        <th>Age</th>
      </thead>
      <tbody>
        <tr v-for="(student, index) of students" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.age }}</td>
        </tr>
      </tbody>
    </table>
    <Hello></Hello>
    <Menu-List></Menu-List>
  </div>
</template>

<script>
// import hello from "././components/Hello.vue"; // 引入Hello组件
import Hello from "././components/Hello.vue"; // 引入Hello组件
import MenuList from "././components/MenuList.vue";

export default {
  // *  注册组件
  // components: {
  //   Hello: hello,// * 标签 ：导入的名字; 在HTML标签是不区分大小写的，驼峰命名也没关系。
  //   MenuList: MenuList,
  // },
  components: { Hello, MenuList },// * ES6 当属性名和属性值相同时，可以直接去掉后面直接逗号分开。
  data() {
    return {
      name: "Rhonda Prosacco",
      isLogin: false,
      fruits: ["banana", "orange", "apple", "pear"],
      students: [
        { name: "Rhonda", age: "20" },
        { name: "Dedrick", age: "30" },
        { name: "Laila", age: "35" },
        { name: "Deontae", age: "25" },
      ],
    };
  },
  methods: {
    login() {
      this.isLogin = true;
    },
    exit() {
      this.isLogin = false;
    },
  },
};
</script>

<style>
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
