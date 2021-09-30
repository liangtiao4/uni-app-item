import Vue from 'vue'
import Vuex from 'vuex'
import unused from './unused.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	modules: {
		u: unused
	}
})

export default store
