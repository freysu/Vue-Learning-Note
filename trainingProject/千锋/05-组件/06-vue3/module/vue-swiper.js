/*
 * @Author: freysu
 * @Date: 2022-11-18 17:55:26
 * @LastEditors: freysu
 * @LastEditTime: 2022-11-20 15:28:41
 * @Description: file content
 */
Vue.component('SwiperItem', {
  template: `<div class="swiper-slide"><slot></slot></div>`
})

Vue.component('Swiper', {
  props: {
    loop: {
      type: Boolean,
      default: true
    }
  },
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
  unmounted() {
    console.log('destroyed: ')
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
    </div>`
})
