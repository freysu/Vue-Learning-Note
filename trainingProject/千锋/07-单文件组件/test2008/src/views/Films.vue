<!--
 * @Author: freysu
 * @Date: 2022-12-13 19:40:58
 * @LastEditors: freysu
 * @LastEditTime: 2022-12-13 22:59:00
 * @Description: file content
-->
<template>
  <div>
    Films
    <div class="bigLunBo">大轮播</div>
    <div>二级的声明式导航</div>
    <router-view></router-view>
    <ul>
      <li v-for="(hash, index) in hashList1" :key="index">
        <router-link v-slot="{ navigate, href, route }" :to="hash" custom>
          <a :href="href" @click="navigate">{{ route.fullPath }}</a>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      hashList1: ['/films/NowPlaying', '/films/ComingSoon']
    }
  }
}
</script>

<style lang="scss" scoped>
.bigLunBo {
  background: yellow;
  height: 100px;
}
</style>
