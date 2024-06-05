// 参考
// https://nextjs.org/docs/pages/building-your-application/routing/dynamic-routes#catch-all-segments

import { PrismaAdapter } from '@next-auth/prisma-adapter'
import NextAuth from 'next-auth'
import EmailProvider from 'next-auth/providers/email'

import { prisma } from '@/libs/prisma'

const EMAIL_SERVER: string | undefined = process.env.EMAIL_SERVER
const EMAIL_FROM: string | undefined = process.env.EMAIL_FROM
const NEXTAUTH_SECRET: string | undefined = process.env.NEXTAUTH_SECRET

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    EmailProvider({
      server: EMAIL_SERVER,
      from: EMAIL_FROM,
    }),
  ],
  secret: NEXTAUTH_SECRET,
})
