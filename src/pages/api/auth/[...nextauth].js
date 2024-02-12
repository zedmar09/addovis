import NextAuth from 'next-auth/next'
import CredentialsProvider from 'next-auth/providers/credentials'
import axios from 'src/http-request/axios'

const authOptions = {
  providers: [
    CredentialsProvider({
      async authorize(credentials, req) {
        const { username, password } = credentials

        const res = await axios.post(`auth/login/`, {
          username: username,
          password: password
        })
        const user = res.data

        if (user) {
          return user
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    async jwt({ token, user, account, expirationDate }) {
      const expires = Date.now() + 60 * 60 * 1000 // 1 hour in milliseconds
      const newExpirationDate = expirationDate || expires

      return {
        ...token,
        ...user,
        ...account,
        expires: newExpirationDate
      }
    },
    async session({ session, token }) {
      session.user = token

      // Check if the session is still valid by comparing the expiration time
      const isValid = Date.now() < token.expires

      if (!isValid) {
        // If the session is expired, clear the session to initiate logout
        return null
      }

      return session
    }
  }
}

export default NextAuth(authOptions)
