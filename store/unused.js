import {
	unusedList,
	cartList,
	recommendList,
	myOrder
} from './data.js'

// 闲置状态管理
const unused = {
	state: () => ({
		unusedList, // 闲置列表
		unused: {}, // 闲置详情
		cartList, // 购物车列表
		recommendList, // 推荐列表
		myOrder // 我的订单
	}),
	mutations: {
		// 获取分类后的闲置列表
		getUnusedListBySort (state, sort) {
			let list = unusedList
			if (sort) {
				list = unusedList.filter(item => item.sort === sort)
			}
			state.unusedList = list
		},
		// 通过id获取对应闲置详情
		getUnusedById (state, _id) {
			state.unused = unusedList.find(item => item._id === _id)
		},
		// 购物车选择闲置
		checkUnused ({ cartList }, _id) {
			cartList.forEach(item => {
				if (item._id === _id) {
					item.isCheck = !item.isCheck
				}
			})
		},
		// 购物车全选
		selectAllUnused ({ cartList }, flag) {
			cartList.map(item => item.isCheck = flag)
		},
		// 获取分类后我的订单
		getMyOrderBySort (state, code) {
			let list = myOrder
			if (code) {
				list = myOrder.filter(item => item.state_code === Number(code))
			}
			state.myOrder = list
		}
	},
	getters: {
		// 购物车闲置总计
		totalPrice ({ cartList }) {
			return cartList.reduce((total, item) => {
				return item.isCheck ?  total + item.count * item.price : total
			}, 0)
		},
		// 购物车选中总数量
		totalCount ({ cartList }) {
			return cartList.reduce((total, item) => {
				return item.isCheck ?  total + item.count : total
			}, 0)
		},
		// 购物车全选
		isAll ({ cartList }) {
			return cartList.every(item => item.isCheck)
		}
	}
}

export default unused
