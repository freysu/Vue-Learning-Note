<template>
  <nav class="nav-menu">
    <div class="nav-sub">
      <a href="./index.html">
        <img src="../assets/img/home.png" alt="首页" />
        首页
      </a>
    </div>
    <div class="nav-sub">
      <a href="#">
        <img src="../assets/img/shouce.png" alt="手册" />
        手册
      </a>
    </div>
    <div class="nav-sub">
      <a href="#">
        <img src="../assets/img/blog.png" alt="博客" />
        博客
      </a>
    </div>
    <div class="nav-sub">
      <a href="./video.html">
        <img src="../assets/img/video.png" alt="视频" />
        视频
      </a>
    </div>
    <div class="nav-sub">
      <a href="#">
        <img src="../assets/img/my.png" alt="我的" />
        我的
      </a>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
nav {
  display: flex;
  position: fixed;
  bottom: 0;
  height: 2.45rem;
  /* width: 18.75rem; */
  width: 100%;
  /* border: 1px solid green; */
  background-color: #f0f0f0;
  align-items: center;
  justify-items: center;
}

nav .nav-sub {
  flex: 1;
  text-align: center;
  font-size: 0.65rem;
}

nav .nav-sub a {
  text-decoration: none;
}

nav img {
  padding-top: 0.375rem;
  margin-left: 1.25rem;
  margin-right: 1.25rem;
  width: 1.275rem;
  height: 0.975rem;
}
</style>
