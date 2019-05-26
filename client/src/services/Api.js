// sets up connector used for hitting up the backend
import axios from 'axios'

// want file to give back a connector
export default () => {
  return axios.create({
    // points to backend URL
    baseURL: 'https://localhost:8081/'
  })
}
