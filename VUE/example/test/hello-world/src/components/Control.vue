<template>
	<div>
		<button type="button" @click="resetData">重置按钮</button>
	</div>
</template>

<script>
	import store from '../store.js';
	export default {
		methods: {
			resetData() {
				store.reset()
			}
		}
	}
</script>

<style>
</style>
