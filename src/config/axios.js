import axios from 'axios'

// the base url of the external API - must configure at .env level!
const apiPath = import.meta.env.VITE_APP_API_URL || 'http://localhost:8005'

console.log(import.meta.env.VITE_APP_API_URL)

// the axios instance with the auth settetd - must configure variables at .env level!
const axiosInstance = axios.create({
    baseURL: apiPath
})

export default axiosInstance