import { ApolloServer } from "apollo-server-micro";
import { PrismaClient } from "@prisma/client";
import { makeExecutableSchema } from "@graphql-tools/schema";

const prisma = new PrismaClient();

// Define GraphQL schema
const typeDefs = `
  type User {
    id: ID!
    name: String!
    email: String!
  }
  
  type Query {
    users: [User]
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`;

// Define resolvers
const resolvers = {
    Query: {
      users: async () => await prisma.user.findMany(),
    },
    Mutation: {
      createUser: async (_, { name, email }) => {
        return await prisma.user.create({
          data: { name, email },
        });
      },
    },
  };

const schema = makeExecutableSchema({ typeDefs, resolvers });

const apolloServer = new ApolloServer({ schema });

export const config = {
  api: {
    bodyParser: false,
  },
};

export default apolloServer.createHandler({ path: "/api/graphql" });
