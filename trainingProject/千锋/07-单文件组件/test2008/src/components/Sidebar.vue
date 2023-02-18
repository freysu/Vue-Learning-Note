<!--
 * @Author: freysu
 * @Date: 2022-11-28 23:14:08
 * @LastEditors: freysu
 * @LastEditTime: 2022-12-06 01:03:58
 * @Description: file content
-->
<template>
  <div>
    <ul>
      <li v-for="film in filmList" :key="film.filmId">{{ film.name }}</li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      filmList: []
    }
  },
  mounted() {
    var url = ''
    var debug = true
    if (debug) {
      url = '/json/maoyan.json'
    } else {
      // url = '/api/mmdb/movie/v3/list/hot.json?ct=%E6%B7%B1%E5%9C%B3&ci=30&channelId=4'
      url = '/frey/api/mmdb/movie/v3/list/hot.json?ct=%E6%B7%B1%E5%9C%B3&ci=30&channelId=4'
    }
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((res) => {
    //     console.log(res.data.films)
    //     this.filmList = res.data.films
    //   })
    axios.get(url).then(res => {
      console.log(res.data.data)
      this.filmList = debug ? res.data.data.films : res.data.data
    })
  }
}
</script>

<style lang="scss" scoped >
/* css 写法*/
/*ul li{
    background-color: yellow;
    width:300px;
  }*/
$width: 300px;
ul {
  li {
    background-color: yellow;
    width: $width;
  }
}
</style>
