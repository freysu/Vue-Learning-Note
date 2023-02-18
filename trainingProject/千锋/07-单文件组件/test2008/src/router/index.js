/*
 * @Author: freysu
 * @Date: 2022-11-20 17:53:29
 * @LastEditors: freysu
 * @LastEditTime: 2022-12-18 01:21:38
 * @Description: file content
 */
import Vue from 'vue'
import VueRouter from 'vue-router'
import Films from '@/views/Films.vue'
import NowPlaying from '@/views/Films/NowPlaying.vue'
import ComingSoon from '@/views/Films/ComingSoon.vue'
import Detail from '@/views/Detail.vue'
import Cinemas from '@/views/Cinemas.vue'
import Search from '@/views/Search.vue'
// import Center from '@/views/Center.vue'
import Order from '@/views/Order.vue'
import Login from '@/views/Login'

// vue-router 监听路径的改变
// 浏览器提供了监听路径改变的方法 onhashchange
Vue.use(VueRouter) // 注册路由插件, 两个全局组件： router-view、router-link

const routes = [
  // 同级关系
  {
    path: '/films',
    name: 'Films', // 命名路由
    component: Films,
    // 嵌套路由，层级关系
    children: [
      {
        path: '/films/nowPlaying',
        name: 'nowPlaying',
        component: NowPlaying
      },
      {
        path: '/films/comingSoon',
        name: 'comingSoon',
        component: ComingSoon
      },
      {
        path: '/films',
        redirect: '/films/nowPlaying'
      }
    ]
  },
  {
    path: '/detail/:id', // 动态二级路由  /detail/2255
    // path: '/detail/:myid/xxx', // 动态二级路由 /detail/2255/XXX
    name: 'freyDetail',
    component: Detail
  },
  {
    path: '/center',
    name: 'Center',
    // component: Center,
    // 懒加载，结合了Vue的异步组件和Webpack的代码分割功能
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    component: () => import('@/views/Order'),
    // meta 路由源信息
    meta: { isFreyRequired: true }
    // // 路由独享拦截，局部拦截
    // beforeEnter: (to, from, next) => {
    //   console.log('Center-beforeEnter:', { to, from })
    //   if (to.meta.isFreyRequired) {
    //     // 判断 本地存储中是否token
    //     if (localStorage.getItem('token')) {
    //       next()
    //     } else {
    //       // next('/login')
    //       // query XXX可以记录从哪来的
    //       next({ path: '/login', query: { redirect: to.fullPath }})
    //     }
    //   } else next()
    //   // reject the navigation
    //   // return false
    // }
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    meta: { isFreyRequired: true }
  },
  {
    path: '/cinemas',
    name: 'Cinemas',
    component: Cinemas
  },
  {
    // 平行关系，可能看起来是层级关系，会替换当前页面
    path: '/cinemas/search',
    name: 'Search',
    component: Search
  },
  // {
  //   path: '/',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '*', // 星号 通配符
    redirect: '/films' // 重定向
  }
]

/**
 * mode:'history',
 * history模式，需要后台配置支持,可以去掉 #,充分利用了window.pushState API 来完成URL跳转而无须重新加载页面，此时的url就像正常的url
 * 因为应用是SPA，如果后台没有正确的配置，当用户直接访问 / xxx / yyyy 就会返回404
 * 所以要在服务端添加一个覆盖所有情况的候选资源，如果URL匹配不到任何静态资源，则应该返回同一个index.html页面(APP依赖的页面)
 *
 */
const router = new VueRouter({
  mode: 'history',
  routes
})

// // 路由全局拦截 全局前置守卫
// /**
//  * to: 目标
//  * from: 来自
//  * next: 下一步处理函数
//  */
// router.beforeEach((to, from, next) => {
//   console.log('beforeEach:', { to, from })
//   if (to.meta.isFreyRequired) {
//     // 判断 本地存储中是否token
//     if (localStorage.getItem('token')) {
//       next()
//     } else {
//       // next('/login')
//       // query XXX可以记录从哪来的
//       next({ path: '/login', query: { redirect: to.fullPath }})
//     }
//   } else next()
// })

// const routes = [
//   {
//     path: '/',
//     name: 'home',
//     component: HomeView
//   },
//   {
//     path: '/about',
//     name: 'about',
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
//   }
// ]

// const router = new VueRouter({
//   mode: 'history',
//   base: process.env.BASE_URL,
//   routes
// })

export default router
