<!--
 * @Author: freysu
 * @Date: 2022-12-13 19:40:58
 * @LastEditors: freysu
 * @LastEditTime: 2022-12-14 16:19:58
 * @Description: file content
-->
<template>
  <div>Center</div>
</template>

<script>
export default {
  // 组件内的守卫 路由生命周期，例如
  beforeRouteEnter(to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不能获取组件实例`this`
    // 因为当守卫执行前，组件实例还没创建！
    console.log('Center.vue-beforeRouteEnter:', { to, from })
    if (to.meta.isFreyRequired) {
      // 判断 本地存储中是否token
      if (localStorage.getItem('token')) {
        next()
      } else {
        // next('/login')
        // query XXX可以记录从哪来的
        next({ path: '/login', query: { redirect: to.fullPath } })
      }
    } else next()
  }
}
</script>
