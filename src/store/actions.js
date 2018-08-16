import jobService from '../api/job'


export default {
  save({ commit }, payload) {
    //HTTP CALLS, ASSYNC CODE
    //COMMIT WHEN PROMISSE FINISHES
    commit('save', payload);
  },
  getJobService: function ({ commit, dispatch, state }) {
    return jobService.getJobs().then((response) => {
      let jobs = response.data
      console.log('Call', jobs)
      commit('jobs', jobs)
    }).catch(() => {
      console.log('Error')
    })
  },
  getJobDetail: function ({ commit, dispatch, state }) {
      return jobService.getJobs().then((response) => {
          let jobs = response.data
          console.log('Call', jobs)
          commit('jobs', jobs)
      }).catch(() => {
          console.log('Error')
      })
  }
}
