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
	getAllCompetitions () {},
	getAllCompetitionWithFilterSeason () {},
	getCompetitionByTeams () {},
	getCompetitionDetail () {},
	getCompetitionByLeagueTable () {},
	getCompetitionByFixtures () {},
	getCompetitionByFixturesWithFilterTimeFrame () {},
	getCompetitionByFixturesWithFilterMatchDay () {},
}

export default {
	state,
	getters,
	mutations,
	actions
}