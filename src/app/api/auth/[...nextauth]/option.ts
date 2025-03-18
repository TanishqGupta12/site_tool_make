import NextAuth, { AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaClient, User } from "@prisma/client";
import { compare } from "bcryptjs";

const prisma = new PrismaClient();

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email", placeholder: "you@example.com" },
        password: { label: "Password", type: "password" },
        current_event: { label: "current_event_id", type: "hidden" },
      },
      async authorize(credentials: any): Promise<any> {
        console.log(credentials);
        
        if (!credentials?.email || !credentials?.password || !credentials?.current_event_id) {
          throw new Error("Email, password, and current_event_id are required!");
        }

        try {
         
          const user = await prisma.user.findFirst({
            where: {
              email: credentials.email,
              current_event_id: credentials.current_event_id,
            },
          });

         
          if (!user) {
            throw new Error('User not found');
          }

          // Compare the password with the encrypted password
          const isValidPassword = await compare(credentials.password, user.encrypted_password);

          
          if (isValidPassword) {
            return {
              user,
            };
          } else {
            throw new Error('Invalid password');
          }
        } catch (error) {
          throw new Error(error.message);
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    // async redirect({ url, baseUrl }) {
    //   return baseUrl;
    // },
    async jwt({ token, user }) {
      if (user) token.user = user; 
      return token;
    },
    async session({ session, token }) {
      session.user = token.user; 
      return session;
    },
  },
  pages: {
    signIn: "/login",
    signOut: "/signout",
    // error: "/error", 
    verifyRequest: "/verify-request",
    newUser: "/signup", 
  },
  session: {
    strategy: 'jwt',
  },
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };