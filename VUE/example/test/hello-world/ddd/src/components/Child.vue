<template>
	<div>
		<h1>{{message}}</h1>
		<button @click="sendData()" type="button"></button>
	</div>
</template>

<script>
	// 子级向父级传递数据：用自定义事件
	export default {
		name: "child",
		data() {
			return {
				message: "hello.vue",
				childData: "I'm child"
			}
		},
		methods: {
			sendData() {
				this.$emit("myevent", this.childData)
			}
		}
	}
</script>

<style>
</style>
