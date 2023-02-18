<!--
 * @Author: freysu
 * @Date: 2022-11-28 23:14:08
 * @LastEditors: freysu
 * @LastEditTime: 2022-12-05 22:28:33
 * @Description: file content
-->
<template>
  <div>
    <!-- 点击这个按钮会通过handleLeft这个函数来发出“event”事件 -->
    <button @click="handleLeft">left</button>
    {{ myname }}
    <button v-show="myright">right</button>
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    myname: {
      type: String,
      default: ''
    },
    myright: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    console.log('mounted NavBar')
  },
  methods: {
    handleLeft() {
      this.$emit('event') // 子传父
    }
  }
}
</script>

<style lang="scss" scoped>
div {
  background-color: orange;
}
</style>
