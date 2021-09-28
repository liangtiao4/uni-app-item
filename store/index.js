import Vue from 'vue'
import Vuex from 'vuex'
import { unusedList } from './data.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	state: {
		unusedList
	},
	mutations: {
		setUnusedList (state, sort) {
			let list = unusedList
			if (sort) {
				list = unusedList.filter(item => item.sort === sort)
			}
			state.unusedList = list
		}
	}
})

export default store
