import axios from 'axios'

export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000'

const fetchSession = async () => {
  const { data } = await axios.get('/api/session')
  return data
}

export const useCheckSession = () => {

}