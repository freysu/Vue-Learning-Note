<template>
  <div class="container">
    <div class="btn-up">
      <a href="#"><img src="../assets/img/btn-up.png" alt="返回顶部" /></a>
    </div>

    <div class="star-shouce">
      <div class="list">
        <div class="list-title">
          <p class="list_title_p">
            精选手册<a class="seemore" href="#">查看更多 ></a>
          </p>
        </div>
      </div>

      <div>
        <ul>
          <li v-for="(list, index) of shouceLists" :key="index">
            <div class="list-block">
              <img :src="list.url" alt="" />
              <div class="list-dsc">
                <p class="title">{{ list.title }}</p>
                <p class="time">{{ list.time }}</p>
              </div>
              <a href="#" class="enter">进入</a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="star-blog">
      <div class="list-title">
        <p class="list_title_p">
          精选博客<a class="seemore" href="#">查看更多 ></a>
        </p>
      </div>
      <div>
        <ul>
          <li v-for="(list, index) of blogLists" :key="index">
            <div class="list-block">
              <img :src="list.url" alt="" />
              <div class="list-dsc">
                <p class="title">{{ list.title }}</p>
                <p class="time">{{ list.time }}</p>
              </div>
              <a href="#" class="enter">进入</a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <div class="star-video">
      <div class="list-title">
        <p class="list_title_p">
          精选视频<a class="seemore" href="#">查看更多 ></a>
        </p>
      </div>
      <div>
        <ul>
          <li v-for="(list, index) of videoLists" :key="index">
            <div class="list-block">
              <img :src="list.url" alt="" />
              <div class="list-dsc">
                <p class="title">{{ list.title }}</p>
                <p class="time">{{ list.time }}</p>
              </div>
              <a href="#" class="enter">进入</a>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <footer>
      <p class="company-name">
        <a href="#">晓舟报告</a>
        丨
        <a href="#">团队介绍</a>
      </p>
      <p class="copyright">晓舟报告官方网站©2019 冀ICP备 18023262号-4</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: "Container",
  data() {
    return {
      shouceLists: [
        {
          title: "前端学习手册",
          time: "2019.12.23",
          url: require("../assets/img/fe.png"),
        },
        {
          title: "JAVA开发学习手册",
          time: "2019.12.23",
          url: require("../assets/img/java.png"),
        },
      ],
      blogLists: [
        {
          title: "编程学习的五大误区",
          time: "2019.12.23",
          url: require("../assets/img/studycode.png"),
        },
      ],
      videoLists: [
        {
          title: "视频",
          time: "2019.12.23",
          url: require("../assets/img/git.png"),
        },
      ],
    };
  },
};
</script>

<style>
.container .btn-up img {
  position: fixed;
  bottom: 3.2rem;
  right: 0.75rem;
  width: 1.45rem;
  height: 1.45rem;
}

.list{
  float:left;
  width:100%;
}

/* 列表标题 */
.list_title {
  float: left;
  width: 957px;
  height: 50px;
  border: 1px solid blue;
  padding-right: 20px;
  padding-left: 25px;
  /* margin-top:10px; */
  margin-bottom: 10px;
  text-align: center;
  line-height: 50px;
  box-sizing: border-box;
}
.list_title .list_title_p {
  float: left;
}
.list_title .list_title_pmore {
  font-size: 16px;
  color: #808080;
}
/* 查看更多 */
.list_title a {
  float: right;
  text-decoration: none;
  color: #808080;
}

li {
  list-style: none;
}

.list-block {
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
  /* margin-left: 1rem; */
  margin-right: 1rem;
}

.list-block img {
  width: 5rem;
  height: 3.125rem;
}

.list-block .list-dsc {
  display: flex;
  flex-direction: column;
  margin-top: 0.25rem;
  margin-left: -0.625rem;
  justify-content: flex-start;
}

.list-block .title {
  font-size: 0.7rem;
  margin-bottom: 0.75rem;
}

.list-block .time {
  font-size: 0.6rem;
  color: #b2b2b2;
}

.enter {
  align-self: center;
  text-decoration: none;
  background-color: #00ccff;
  line-height: 1.05rem;
  text-align: center;
  color: white;
  width: 2.375rem;
  height: 1.05rem;
  border-radius: 0.525rem;
  margin-right: 0.75rem;
  font-size: 0.6rem;
}

footer {
  position: absolute;
  bottom: 0;
  margin-top: 0.75rem;
  margin-bottom: 2.5rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

footer .company-name a {
  color: blue;
  text-decoration: none;
}

footer .copyright {
  font-size: 0.55rem;
  color: #b2b2b2;
}

.container {
  position: relative;
  height: 40.35rem;
  width: 100%;
}
</style>