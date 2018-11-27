import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

let city='上海';

/* eslint-disable no-new */
export default new Vuex.Store({
	state:{
		city:city
	},
	actions:{
		changecity(context,city){
			context.commit('changecity',city);
		}
	},
	mutations:{
		changecity(state,city){
			state.city=city;
		}
	}
	
})
