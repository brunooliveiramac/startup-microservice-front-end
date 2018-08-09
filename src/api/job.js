import Axios from 'axios'


const job = {
  getJobs () {
    return Axios.get('/job')
  }
}

export default job
