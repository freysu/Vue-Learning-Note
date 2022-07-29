<template>
	<div>
		<!-- <h1>计算属性与侦听器</h1>
		<p>总价：{{totalPrice}}(计算属性的结果)</p>
		<p>总价：{{totalPrice1}}(侦听器侦听quantity的结果)</p>
		<p>单价：{{price}}</p>
		<p>
			数量：
			<button @click="sub">-</button>
			{{quantity}}
			<button @click="add">+</button>
		</p>
		<p>折扣：{{discount}}</p> -->
		<!-- <p>名字:{{name}}</p>
		<p>{{title}}</p>
		<p>{{message}}</p> -->
		<control></control>
		<carts></carts>
		<!-- <brother></brother>
		<sister></sister> -->
	</div>
</template>

<script>
	import Carts from './components/Carts.vue';
	import Control from "./components/Control.vue"
	// import Sister from './components/Sister.vue';
	// import Brother from './components/Brother.vue';
	export default {
		components: {
			Carts,
			Control,
			// Sister,
			// Brother,
		},
		// data属性和computed属性定义的值都可以直接绑定在表达式中。如果某些值需要通过计算才能得到，那使用计算属性就再合适不过了。
		data() {
			return {
				// title: "hello world",
				// firstName: "张",
				// lastName: "三",
				// price: 99,
				// quantity: 1,
				// discount: 0.5,
				// totalPrice1: 0,
			}
		},
		// 计算属性与侦听器对比
		// 一个值的改变，会影响多个值（或处理多件事），使用侦听器。（为了观察一个值）
		// 多个值的改变，为了得到一个结果，使用计算属性。（为了得到一个值）
		// 一般计算属性的性能会比侦听器的高。
		// 实际开发中，大部分问题都可以用computed解决。
		// computed: {
		// 	message() {
		// 		return "hello computed"
		// 	},
		// 	name() {
		// 		return this.firstName + this.lastName
		// 	},
		// 	totalPrice() {
		// 		return this.price * this.quantity * this.discount
		// 	}
		// },
		// watch: {
		// 	// quantity 变化之后的结果
		// 	quantity(val) {
		// 		this.totalPrice1 = this.price * val * this.discount
		// 	},
		// },
		// methods: {
		// 	sub() {
		// 		if (this.quantity > 0) {
		// 			this.quantity--
		// 		}
		// 	},
		// 	add() {
		// 		this.quantity++
		// 	}
		// }
	}
</script>

<style>

</style>
