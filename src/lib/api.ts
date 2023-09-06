import axios, { AxiosInstance, AxiosRequestConfig } from 'axios'

const instance = axios.create({
  baseURL: 'https://api.unsplash.com/',
  params: {
    q: 20,
    fit: 'fill',
    auto: 'format',
    w: '1600',
    h: '1200',
  },
  headers: {
    'Accept-Version': 'v1',
    Authorization: 'Client-ID x0dpo4K4IcX2uhqXVZum_JS8-8pBDz1vE95N_hvJH84',
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
