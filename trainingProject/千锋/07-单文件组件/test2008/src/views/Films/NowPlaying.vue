<!--
 * @Author: freysu
 * @Date: 2022-12-13 21:55:33
 * @LastEditors: freysu
 * @LastEditTime: 2022-12-13 23:22:25
 * @Description: file content
-->
<template>
  <div>
    nowplaying

    <ul>
      <li
        v-for="(data, index) in dataList"
        :key="data"
        @click="handleChangePage(data)"
      >
        <button>{{ data }}</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dataList: [`1111`, `222`, '3333']
    }
  },
  methods: {
    // 从后端获取列表接口进行页面布局，然后通过动态路由传递参数，获取id再向后端发请求详情页面的接口，布局页面
    handleChangePage(id) {
      // 编程式导航
      // location.href ="#/detail"
      // /detail/1111
      // 1. 通过路径跳转
      // this.$router.push('/detail/'+id) // 会判断是哪种模式

      // 2. 通过命名路由跳转
      this.$router.push({
        name: 'freyDetail',
        params: {
          id
        }
      }) // 会判断是哪种模式
    }
  }
}
</script>

<style scoped></style>
