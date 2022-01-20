<template>
  <div id="app">
    <h1>计数器</h1>
    <hr />
    <button @click="sub">-</button>
    <span> {{ number }} </span>
    <button @click="add">+</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: "0",
    };
  },
  methods: {
    add() {
      this.number++;
    },
    sub() {
      if (this.number > 0) {
        this.number--;
      }
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
