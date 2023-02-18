<!-- eslint-disable vue/no-deprecated-filter -->
<!--
 * @Author: freysu
 * @Date: 2022-11-20 17:53:29
 * @LastEditors: freysu
 * @LastEditTime: 2023-02-18 17:49:54
 * @Description: file content
-->
<template>
  <div>
    hello
    <!-- note 声明式导航 -->
    <!-- <ul>
      <li><a href="/#/films">电影</a></li>
      <li><a href="/#/cinemas">影院</a></li>
      <li><a href="/#/center">我的</a></li>
    </ul> -->
    <ul>
      <!-- note vue-router 声明式导航 -->
      <!-- <li>
        <router-link to="/films" active-class="frey-active">电影</router-link>
      </li>
      <li>
        <router-link to="/cinemas" active-class="frey-active">影院</router-link>
      </li>
      <li>
        <router-link to="/center" active-class="frey-active">我的</router-link>
      </li> -->

      <!-- note tag属性会渲染成指定的节点 最新版本已废弃 -->
      <!-- <router-link to="/films" active-class="frey-active" tag="li">电影</router-link>
      <router-link to="/cinemas" active-class="frey-active" tag="li">影院</router-link>
      <router-link to="/center" active-class="frey-active" tag="li">我的</router-link> -->

      <!-- note 应该使用custom属性 插槽 v-shot="{navigate,isActive}" 固定的 isActive => true||false -->
      <!-- <router-link v-shot="{navigate,isActive}" to="films" custom>
        <li :class="isActive?'frey-active':''" @click="navigate">films{{ isActive }}</li>
      </router-link>
      <router-link v-shot="{navigate,isActive}" to="cinemas" custom>
        <li :class="isActive?'frey-active':''" @click="navigate">cinemas</li>
      </router-link>
      <router-link v-shot="{navigate,isActive}" to="center" custom>
        <li :class="isActive?'frey-active':''" @click="navigate">center</li>
      </router-link> -->

      <!-- <li>
        <router-link v-slot="{ navigate, href, route }" to="/films" custom>
          <a :href="href" @click="navigate">{{ route.fullPath }}</a>
        </router-link>
      </li>
      <li>
        <router-link v-slot="{ navigate, href, route }" to="/cinemas" custom>
          <a :href="href" @click="navigate">{{ route.fullPath }}</a>
        </router-link>
      </li>
      <li>
        <router-link v-slot="{ navigate, href, route }" to="/center" custom>
          <a :href="href" @click="navigate">{{ route.fullPath }}</a>
        </router-link>
      </li> -->

      <li v-for="(hash, index) in hashList" :key="index">
        <router-link v-slot="{ navigate, href, route }" :to="hash" custom>
          <a :href="href" @click="navigate">{{ route.fullPath }}</a>
        </router-link>
      </li>
    </ul>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      hashList: ['/films', '/cinemas', '/center']
    }
  }
}
</script>
<!-- lang 支持scss语言 scoped属性 css局部生效 -->
<style lang="scss" scoped>
.frey-active {
  color: 'red';
}
</style>
