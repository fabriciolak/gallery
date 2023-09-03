import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: 'https://api.unsplash.com/',
  params: {
    per_page: 8,
    q: 30,
  },
  headers: {
    'Accept-Version': 'v1',
    Authorization: `Client-ID ${process.env.UNSPLASH_API_ACCESS_KEY}`,
  },
})

const api = (axios: AxiosInstance) => {
  return {
    get: <T>(url: string, config: AxiosRequestConfig = {}) => {
      return axios.get<T>(url, config)
    },

    post: <T>(url: string, config: AxiosRequestConfig = {}) => {
      return axios.get<T>(url, config)
    },
  }
}

export default api(instance)
