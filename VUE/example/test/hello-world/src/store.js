// 共享数据
export default {
	//状态
	state: {
		fruits: [{
			name: "苹果",
			price: 3.14,
			qu: 2
		}, {
			name: "鸭梨",
			price: 3.44,
			qu: 3
		}, {
			name: "香蕉",
			price: 3.2,
			qu: 4
		}, ]
	},
	reset() {
		this.state.fruits.map(v => {
			v.qu = 0;
		})
	},
	sub(i) {
		this.state.fruits[i].qu--
	},
	add(i) {
		this.state.fruits[i].qu++
	}
}
