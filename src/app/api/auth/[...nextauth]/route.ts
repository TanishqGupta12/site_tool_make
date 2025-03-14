import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient, User } from "@prisma/client";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
        current_event: { label: "current_event_id", type: "hidden" },
      },
      async authorize(credentials: any): Promise<any> {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Email and password are required!");
        }

        const user = await prisma.user.findMany({where: { email: credentials?.email , current_event_id: credentials?.current_event_id  }});

        const isValidPassword =  compare(credentials.password, user?.encrypted_password);

        if (!isValidPassword) {
            throw new Error("Invalid email or password!");
          }
        return {
            CurrentUser: user,
          };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true
    },
    async redirect({ url, baseUrl }) {
      return baseUrl
    },
    async jwt({ token, user }) {
      if (user) token.user = user as User;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as User;
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: '/signout',
    error: '/error', // Error code passed in query string as ?error=
    verifyRequest: '/verify-request', // (used for check email message)
    newUser: '/signup'
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
