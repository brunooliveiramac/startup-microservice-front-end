import Axios from 'axios'

const job = {
  getJobs () {
    return Axios.get('/jobs')
  }
}

export default job
