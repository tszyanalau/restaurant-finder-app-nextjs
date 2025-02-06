import axios from 'axios'

const apiClient = axios.create({
  baseURL: process.env.GMAP_API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    'X-Goog-Api-Key': process.env.NEXT_PUBLIC_GOOGLE_API_KEY,
  },
  timeout: parseInt(process.env.API_TIMEOUT as string),
})

export default apiClient
