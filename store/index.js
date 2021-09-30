import Vue from 'vue'
import Vuex from 'vuex'
import { unusedList, cartList, recommendList } from './data.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		unusedList,
		unused: {},
		cartList,
		recommendList
	},
	mutations: {
		getUnusedListBySort (state, sort) {
			let list = unusedList
			if (sort) {
				list = unusedList.filter(item => item.sort === sort)
			}
			state.unusedList = list
		},
		getUnusedById (state, _id) {
			state.unused = unusedList.find(item => item._id === _id)
		}
	}
})

export default store
