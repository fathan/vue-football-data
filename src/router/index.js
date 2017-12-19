import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home/Home'

import CompetitionDetail from '@/views/Competitions/CompetitionDetail'
import CompetitionFixtures from '@/views/Competitions/CompetitionFixtures'
import CompetitionLeagueTable from '@/views/Competitions/CompetitionLeagueTable'
import Competitions from '@/views/Competitions/Competitions'
import CompetitionTeams from '@/views/Competitions/CompetitionTeams'

import Fixtures from '@/views/Fixtures/Fixtures'
import FixtureDetail from '@/views/Fixtures/FixtureDetail'

import TeamDetail from '@/views/Teams/TeamDetail'
import TeamFixtures from '@/views/Teams/TeamFixtures'
import TeamPlayers from '@/views/Teams/TeamPlayers'

Vue.use(Router)

const routing = new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    }
  ]
})

export default routing
