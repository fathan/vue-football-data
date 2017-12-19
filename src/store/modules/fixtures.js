import axios from 'axios'
import { ENV } from './config'
import * as mutationType from './../mutation_types'

const api = axios.create({
	baseURL: ENV.API_URL
})

const state = {}
const getters = {}
const mutations = {}
const actions = {
	// METHODS FOR GLOBAL
	// METHODS FOR CALL API
	getFixtures () {},
	getFixturesWithFilterLeague () {},
	getFixturesWithFilterTimeFrame () {},
	getFixturesDetail () {},
	getFixturesDetailWithFilterHead2head () {}
}

export default {
	state,
	getters,
	mutations,
	actions
}