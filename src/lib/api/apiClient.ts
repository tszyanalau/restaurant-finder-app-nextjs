import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': process.env.GOOGLE_API_KEY,
  },
  timeout: 5000,
})

export default apiClient
