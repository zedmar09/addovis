import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'axios'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Username and Password',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' }
      },
      async authorize(credentials) {
        const { username, password } = credentials

        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/addovis/auth/login`,
            {
              username,
              password
            },
            {
              headers: {
                'Content-Type': 'application/json',
                'User-Agent': 'insomnia/8.5.1',
                'X-Platform': 'WEB'
              }
            }
          )

          if (response.status === 200) {
            const user = response.data

            return user
          } else {
            return null
          }
        } catch (error) {
          console.error('Error authenticating with backend API:', error)

          return null
        }
      }
    })
  ]
})
