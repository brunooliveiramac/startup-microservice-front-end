import Vue from 'vue'
import Vuex from 'vuex'

import actions from './actions'
import mutations from './mutations'
import getters from './getters'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    jobs: [
      {
        "name": "Job Fera",
        "company": "Itau"
      },
      {
        "name": "Job Fera",
        "company": "Itau"
      }
    ],
    columns: [
      {"name": "Nome"},
      {"name": "Empresa"}
    ],
    job: {}
  },
  getters: getters,
  mutations: mutations,
  actions: actions
})