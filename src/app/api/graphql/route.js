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
  const apolloServer = new ApolloServer({ schema });
  
  export const config = {
    api: {
      bodyParser: false,
    },
  };

  

    

  // const handler = startServerAndCreateNextHandler(apolloServer);

  // export async function GET(request) {
  //   return handler(request);
  // }
  
  // export async function POST(request) {
  //   return handler(request);
  // }


  export async function GET(request) {
    const { headers } = request;
  
    return startServerAndCreateNextHandler(apolloServer, {
      context: async () => {
        const event_id = headers.get('event_id') || '';
        const sub_domain = headers.get('sub_domain') || '';
        if (!event_id || !sub_domain ) {
          throw new GraphQLError('Unauthorized', {
            extensions: {
              code: 'UNAUTHENTICATED',
              http: { status: 401 },
            }
          });
        } else {
        let domain =  prisma.domain.findUnique({ where: { sub_domain: String(sub_domain) } }).first
        let event =  prisma.event.findUnique({ where: { domainId: String(domain?.id) } }).first
        }
        return { event_id };
      },
    })(request);
  }
  
  export async function POST(request) {
    const { headers } = request;
  
    return startServerAndCreateNextHandler(apolloServer, {
      context: async () => {
        const event_id = headers.get('event_id') || '';
        const sub_domain = headers.get('sub_domain') || '';
        if (!event_id || !sub_domain ) {
          throw new GraphQLError('Unauthorized', {
            extensions: {
              code: 'UNAUTHENTICATED',
              http: { status: 401 },
            }
          });
        } else {
        let domain =  prisma.domain.findUnique({ where: { sub_domain: String(sub_domain) } }).first
        let event =  prisma.event.findUnique({ where: { domainId: String(domain?.id) } }).first
          if (event_id == event ) {
            
          }
        }
        return { domain };
      },
    })(request);
  }