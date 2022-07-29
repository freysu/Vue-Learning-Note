<template>
	<div>
		<h1>购物车</h1>
		<ul>
			<li v-for="(fruit,index) of this.state.fruits" :key="index">
				{{fruit.name}} 单价：{{fruit.price}}
				<carts-counter :qu="fruit.qu" :index="index" @add="add" @sub="sub"></carts-counter>
			</li>
		</ul>
		<h1>总价为：{{totalPrice}}</h1>
	</div>
</template>

<script>
	import CartsCounter from './CartsCounter.vue';
	import store from "../store.js";
	export default {
		components: {
			CartsCounter
		},
		data() {
			return {
				state: store.state
			}
		},
		methods: {
			add(index) {
				store.add(index)
			},
			sub(index) {
				if (this.state.fruits[index].qu > 0) {
					store.sub(index)
				}
			}
		},
		computed: {
			totalPrice() {
				let total = 0;
				this.state.fruits.map(v => {
					total += v.price * v.qu;
					// total = total + v.price * v.qu;
				})
				return total.toFixed(2) // .toFixed(Number) 保留Number位小数
			}
		}
	}
</script>

<style>
</style>
