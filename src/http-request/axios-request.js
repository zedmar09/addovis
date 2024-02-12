import axios from 'axios'
import { getSession } from 'next-auth/react'

const axiosRequest = () => {
  const instance = axios.create({
    baseURL: `${process.env.NEXT_PUBLIC_SERVER_URL}/addovis`,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'insomnia/8.5.1',
      'X-Platform': 'WEB'
    }
  })

  instance.interceptors.request.use(async request => {
    const session = await getSession()

    if (session?.user?.token) {
      request.headers['Authorization'] = `Bearer ${session.user.token}`
    }

    return request
  })

  instance.interceptors.response.use(
    response => {
      return response
    },
    error => {
      console.log(`error`, error)

      return Promise.reject(error)
    }
  )

  return instance
}

export default axiosRequest()
