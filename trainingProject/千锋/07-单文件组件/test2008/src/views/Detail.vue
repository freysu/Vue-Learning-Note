<!--
 * @Author: freysu
 * @Date: 2022-12-13 22:30:59
 * @LastEditors: freysu
 * @LastEditTime: 2022-12-14 11:23:41
 * @Description: file content
-->
<template>
  <div>
    detail
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },

  created() {
    console.log(location.hash)
    // $route 当前匹配的路由 $router 路由对象
    console.log(this.$route.params.id)
    // 模拟请求
    setTimeout(() => {
      this.title = '星球大战'
    }, 2000)
  }
}
</script>
