import axios from 'axios'
// import { useQueryClient, useMutation } from '@tanstack/react-query'

axios.defaults.withCredentials = true;

export const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000'

export const fetchSession = ():Session => {
  axios.get(`${API_URL}/check-session`).then((res) => {
    console.log(res.status)
    if (res.status !== 200) {
      return null
    }
    return res.data.user
  }).catch(() => {
    return null
  })
 return null
}

export const useCheckSession = () => {

}