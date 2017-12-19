import Vue from 'vue'
import Vuex from 'vuex'

import competitions from './modules/competitions'
import fixtures from './modules/fixtures'
import teams from './modules/teams'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		competitions,
		fixtures,
		teams
	}
})
