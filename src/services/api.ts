import axios from 'axios'

const api = axios.create({ baseURL: 'https://cp-on-back-end.herokuapp.com' })

export default api
