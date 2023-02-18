/*
 * @Author: freysu 945806165@qq.com
 * @Date: 2022-11-18 15:56:26
 * @LastEditors: freysu 945806165@qq.com
 * @LastEditTime: 2022-11-18 17:24:40
 * @FilePath: \千锋\05-组件\05-swiper\module\vue-swiper.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
/*
 * @Author: freysu 945806165@qq.com
 * @Date: 2022-11-18 15:56:26
 * @LastEditors: freysu 945806165@qq.com
 * @LastEditTime: 2022-11-18 16:38:06
 * @FilePath: \千锋\05-组件\05-swiper\module\vue-swiper.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
Vue.component('swiperItem', {
  template: `<div class="swiper-slide"><slot></slot></div>`
})

Vue.component('swiper', {
  props: {
    loop: {
      type: Boolean,
      default: true
    }
  },
  template: `
    <div class="swiper frey">
        <div class="swiper-wrapper">
            <slot></slot>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
        <!-- 如果需要导航按钮 -->
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>`,
  mounted() {
    console.log('mounted')
    var mySwiper = new Swiper('.frey', {
      loop: this.loop, // 循环模式选项
      autoplay: {
        delay: 2500,
        disableOnInteraction: false
      },
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },

      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    })
    console.log('loop:', this.loop)
  },
  destroyed() {
    console.log('destroyed: ')
  }
})
