import { NextResponse } from "next/server";
import { GraphQLBigInt } from "graphql-scalars";
import { ApolloServer } from "@apollo/server";
import { PrismaClient } from "@prisma/client";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { startStandaloneServer } from '@apollo/server/standalone';
import { GraphQLError } from 'graphql';

const prisma = new PrismaClient();

// Define GraphQL schema
const typeDefs = `
  scalar BigInt
  
  type User {
    id: BigInt!
    name: String!
    email: String!
  }
  
  
 type Query {
    users: [User]
    user(id: ID!): User  
  }


 type Query {
    users: [User]
    user(id: ID!): User  
  }

  type Role {
    id: BigInt!
    name: String!
  }

  type Query {
    users: [User]
    user(id: ID!): User
    roles: [Role]
    role(id: ID!): Role
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`;

// Define resolvers
// GraphQL Resolvers using Prisma
const resolvers = {
    BigInt: GraphQLBigInt,  // ✅ Add support for BigInt
    Query: {
      users: async () => await prisma.user.findMany(),
      user: async (_, { id }) => await prisma.user.findUnique({ where: { id: Number(id) } }),
      roles: async () => {
        return await prisma.role.findMany();
      },
      role: async (_, { id }) => {
        return await prisma.role.findUnique({ where: { id: Number(id) } });
      },
    },
    // Mutation: {
    //   createUser: async (_, { name, email }) => {
    //     return await prisma.user.create({ data: { name, email } });
    //   },
    //   deleteUser: async (_, { id }) => {
    //     return await prisma.user.delete({ where: { id: Number(id) } });
    //   },
    // },
  };
  
  // Create Apollo Server
  const schema = makeExecutableSchema({ typeDefs, resolvers });
  // const apolloServer = new ApolloServer({ schema });

  let apolloServer;
  if (!apolloServer) {
    apolloServer = new ApolloServer({
      schema,
    });
  }
  
  export const config = {
    api: {
      bodyParser: false,
    },
  };

  

  const handler = startServerAndCreateNextHandler(apolloServer, {
    context: async (ctx)  => {

      
      const sub_domain = ctx.headers.get("sub_domain") || "";
  
      // Ensure proper database queries
      try {
        const domain = await prisma.domain.findMany({
          where: { subdomain_name: sub_domain },
          include:{
            events: true
          }
        });
        console.log(domain);
        
        return domain;
      } catch (error) {
        console.error("Database error:", error);
        throw new Error("Internal Server Error");
      }
  
    },
  });
  
  // Export a single handler for both GET and POST
  export { handler as GET, handler as POST };