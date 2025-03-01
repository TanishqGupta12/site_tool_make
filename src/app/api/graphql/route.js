import { GraphQLBigInt } from "graphql-scalars";
import { ApolloServer } from "@apollo/server";
import { PrismaClient } from "@prisma/client";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
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

  type Domain {
    id: BigInt
    domain_name: String
    subdomain_name: String
    host: String
    description: String
    logo_file_name: String
    logo_meta: String
    custom_font_name: String
    createdAt: String!
    updatedAt: String!
    events: [Event]
  }
  
  type Form {
    id: ID!
    caption: String
    Description: String
    startDate: String
    slug: String
    is_active: Boolean

    registration_successful_message: String
    registration_updated_successful_message: String

    eventId: ID!
  }

type Event {
    id: ID!
    name: String
    domainId: Int
    description: String
    startDate: String
    slug: String
    latitude: Float
    longitude: Float
    email: String
    phone: String
    timeZone: String

    customCss: String
    customJs: String
    termsAndConditions: String
    paymentNeeded: Boolean
    publishableKey: String
    secretKey: String
    sendRegistrationConfirmationEmailToGuest: Boolean
    footerText: String
    hideBlog: Boolean

    PageContent: String
    galleryText: String
    hideAboutPage: Boolean
    hideCategory: Boolean
    hideCourses: Boolean
    hideGallery: Boolean
    hideInfo: Boolean
    hideTeacherPage: Boolean

    forms: [Form] # Forms are now linked correctly!

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
    
    domains: [Domain]
    domain(id: ID!): Domain

    events: [Event]
    event(id: ID!): Event

    forms: [Form]
    form(id: ID!): Form
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`;

// Define resolvers
const resolvers = {
  BigInt: GraphQLBigInt, // Add support for BigInt
  Query: {
    users: async () => await prisma.user.findMany(),
    user: async (_, { id }) => await prisma.user.findUnique({ where: { id: Number(id) } }),
    roles: async () => await prisma.role.findMany(),
    role: async (_, { id }) => await prisma.role.findUnique({ where: { id: Number(id) } }),
    domains: async () => await prisma.domain.findMany(),
    domain: async (_, { id }, ctx) => {
      const sub_domain = ctx.domain[0]?.subdomain_name;
      // console.log(ctx.domain[0].events);
      // console.log("ctx.domain[0].events");
      
      if (!sub_domain) {
        throw new GraphQLError("Subdomain not found");
      }
      return await prisma.domain.findFirst({
        where: { subdomain_name: sub_domain },
        include: { events: true },
      });
    },
    events: async () => {
    const events = await prisma.event.findMany({include: { forms: true }})
      return  events
    },
    event: async (_, { id }) => await prisma.event.findUnique({ where: { id: Number(id) } }),
    form: async (_, { id }) => await prisma.form.findUnique({ where: { id: Number(id) } }),
    forms: async () => await prisma.form.findMany({ where: { is_active: true }}),
  },

  Event: {
    forms: async (parent) => {
      return await prisma.form.findMany({
        where: {
          is_active: true,
          event_id: parent.id
        },
      });
    },
  },

  Mutation: {
    createUser: async (_, { name, email }) => {
      return await prisma.user.create({ data: { name, email } });
    },
  },
};

// Create Apollo Server
const schema = makeExecutableSchema({ typeDefs, resolvers });

const apolloServer = new ApolloServer({
  schema,
});

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = startServerAndCreateNextHandler(apolloServer, {
  context: async (ctx) => {
    const sub_domain = ctx.headers.get("sub_domain") || "";
    if (!sub_domain) {
      throw new GraphQLError("Subdomain not found in headers");
    }

    try {
      const domain = await prisma.domain.findMany({
        where: { subdomain_name: sub_domain },
        include: { events: true },
      });

      
      if (!domain || domain.length === 0) {
        throw new GraphQLError("Domain and Event not found");
      }

      return { domain };
    } catch (error) {
      console.error("Error fetching domain:", error);
      throw new GraphQLError("Internal server error");
    }
  },
});

// Export a single handler for both GET and POST
export { handler as GET, handler as POST };