<template>
	<span>
		<button @click="sub" type="button">-</button>
		<span>{{qu}}</span>
		<button @click="add" type="button">+</button>
	</span>
</template>

<script>
	export default {
		props: ["qu", "index"],
		methods: {
			sub() {
				this.$emit("sub", this.index)
			},
			add() {
				this.$emit("add", this.index)
			}
		}
	}
</script>

<style>
</style>
