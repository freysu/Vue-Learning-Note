<!--
2. 用组件化的开发方式制作晓舟报告移动端的首页，组件名称如下所示：
   - Search ------ 搜索框
   - Swiper ------ 轮播图
   - Container------ 主体内容
   - Menu ------ 底栏菜单
-->
<template>
  <div id="app">
    <Search></Search>
    <Swiper></Swiper>
    <Container></Container>
    <Menu></Menu>
  </div>
</template>

<script>
import Search from "./components/Search.vue";
import Swiper from "./components/Swiper.vue";
import Container from "./components/Container.vue";
import Menu from "./components/Menu.vue";
export default {
  name: "App",
  components: { Search, Swiper, Container, Menu },
  data() {
    return {};
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
*{
    margin:0;
    padding:0;
}
</style>
