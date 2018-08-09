import jobService from '../api/job'


export default {
  save({ commit }, payload) {
    //HTTP CALLS, ASSYNC CODE
    //COMMIT WHEN PROMISSE FINISHES
    commit('save', payload);
  },
  getJobs: function ({ commit, state }) {
    return jobService.getJobs().then((response) => {
      let jobs = response.data
      return jobs
    }).catch(() => {
      console.log('Error')
    })
  }




}