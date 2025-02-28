// import { NextResponse } from "next/server";
import { GraphQLBigInt } from "graphql-scalars";
import { ApolloServer } from "@apollo/server";
import { PrismaClient } from "@prisma/client";
import { makeExecutableSchema } from "@graphql-tools/schema";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
// import { startStandaloneServer } from '@apollo/server/standalone';
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
    id:               BigInt  
    domain_name:      String  
    subdomain_name:   String 
    host:             String 
    description:      String  
    logo_file_name:   String   
    logo_meta:        String   
    custom_font_name: String  

    createdAt:        String!
    updatedAt:        String!
  }
  
    type Event {

        id:      ID!
        name:    String
        domainId:  Int
        description:   String 
        startDate:     String
        hasGallery:    Boolean 
        hasInfo:       Boolean 
        hasAboutPage:  Boolean 
        hasContactPage: Boolean 
        slug:           String 
        latitude:       Float 
        longitude:      Float 
        endDate:       String
        email:         String 
        phone:         String 
        logoMeta:      String 
        timeZone:      String 
        customCss:     String 
        customJs:      String 
        termsAndConditions:  String 
        protectedGallery:    Boolean 
        paymentNeeded:       Boolean 
        publishableKey:      String 
        secretKey:           String 
        templateVersion:     String 
        eventAgendaDescription: String 
        landingPageContent:  String 
        onlyLandingPage:     Boolean 
        hideRegistrationButton:  Boolean 
        sendRegistrationConfirmationEmailToGuest:  Boolean 
        footerText:  String 
        hideBlog:    Boolean 
        hideForum:   Boolean 
        createdAt:   String
        updatedAt:   String
        domain:      Domain
        users:       [Event]
        
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
      domains: async () => {
        return await prisma.domain.findMany();
      },
      // domain: async (_, { id }) => {
      //   return await prisma.domain.findUnique({ where: { id: Number(id) } });
      // },
      domain: async (_, { id }, ctx) => {
        var sub_domain = ctx.domain[0].subdomain_name
        
        return await prisma.domain.findFirst({
            where: { subdomain_name: sub_domain },
            include: { events: true },
        });
      },
      events: async () => {
        return await prisma.event.findMany();
      },
      event: async (_, { id }) => {
        return await prisma.event.findUnique({ where: { id: Number(id) } });
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
    context: async (ctx) => {
      const sub_domain = ctx.headers.get("sub_domain") || "";
  
      if (!sub_domain) {
        throw new GraphQLError("Subdomain not found in headers");
      }

      
      try {
        const domain = await prisma.domain.findMany({
          where: { subdomain_name: sub_domain },
          include: {
            events: true
          }
        });

        
        if (!domain || domain.length === 0) {
            new GraphQLError("Domain and Event not found");
            return 0;
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