import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios,axios)



const store = new Vuex.Store({
	state:{
		in_type:false
	},
	getters:{
		
	},
	mutations:{
		setInType(state,title){
			state.in_type = title
		}
	},
	actions:{
		
	}
})



export default store