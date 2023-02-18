<!--
 * @Author: freysu
 * @Date: 2022-12-14 15:30:05
 * @LastEditors: freysu
 * @LastEditTime: 2022-12-14 16:54:41
 * @Description: file content
-->
<template>
  <div>
    Login
    <button @click="handleLogin">Login</button>
  </div>
</template>

<script>
export default {
  data() {
    return {}
  },
  methods: {
    handleLogin() {
      setTimeout(() => {
        localStorage.setItem('token', '后端返回的token字段')
        // this.$router.back() // 返回上一页
        // 1. 获取 query字段
        console.log()
        // 2. 跳转到当时想要跳的页面去
        this.$router.push(this.$route.query.redirect)
      }, 0)
    }
  }
}
</script>
