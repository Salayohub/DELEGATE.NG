// file: lib/auth.ts
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';


export const authOptions = {
providers: [
GoogleProvider({
clientId: process.env.GOOGLE_CLIENT_ID || '',
clientSecret: process.env.GOOGLE_CLIENT_SECRET || ''
})
// add Email provider or Credentials provider for email/password
],
secret: process.env.NEXTAUTH_SECRET
};


export default NextAuth(authOptions as any);