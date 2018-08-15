export default {
  save(state, payload){
    const job = {
      name: payload.name
    }
    state.jobs.push(job);
  },
  jobs(state, payload){
    state.jobs = payload;
  }
}
