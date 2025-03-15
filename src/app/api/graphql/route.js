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

  type FormFieldChoice {

    id: BigInt
    sequence: Int
    caption: String
    isActive: Boolean
    specificFieldIfOther: Boolean
    createdAt: String
    updatedAt: String

    form_section_field: [FormSectionField]

  }

  type FormSectionField {
    id: Int
    caption: String
    placeholder: String
    field_hint: String
    field_type: String
    data_field: String
    sequence: Int
    is_required: Boolean
    is_active: Boolean
    form_id: Int
    form_section_id: Int
    file_upload_filed: Boolean
    file_upload_type: String
    created_at: String
    updated_at: String
    is_single_column: Boolean
    form: Form
    value: String           
    onlyReady: Boolean  
  
    form_field_choices: [FormFieldChoice]
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

    form_section_fields: [FormSectionField]
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

  type contact {
  
    id:                             Int    
    name:                            String   
    email:                          String

    subject:                       String   
    message:                         String   

    eventId:                         Int 
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

    form_section_fields: [FormSectionField]
    form_section_field(id: ID!): FormSectionField

    form_field_choices: [FormFieldChoice]
    form_field_choice(id: ID!): FormFieldChoice

    contacts: [contact]
    contact(id: ID!): contact
  }

  type Mutation {
    createUser(name: String!, email: String!): User

  }
  type Mutation {
      addcontact(name: String!, email: String!, subject: String!, message: String!, event_id: String!): contact
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
    form_section_fields: async () => await prisma.formSectionField.findMany({ where: { is_active: true }}),
    form_field_choices: async () => await prisma.form_field_choices.findMany({ where: { is_active: true }}),
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
  Form: {
    form_section_fields: async (parent) => {
      
      return await prisma.formSectionField.findMany({
        where: {
          is_active: true,
          form_id: parent.id
        },
        orderBy: {
          sequence: "asc" 
        }
      });
    },
  },

  FormSectionField: {
    form_field_choices: async (parent) => {
      
      const data = await prisma.formFieldChoice.findMany({
        where: {
          isActive: true, 
          form_section_field_id: parent.id
        },
        orderBy: {
          sequence: "asc" 
        }
      });      return data;
    },
  },
  // FormFieldChoice: {
  //   forms: async (parent) => {
  //     return await prisma.form.findMany({
  //       where: {
  //         is_active: true,
  //         event_id: parent.form_section_field.form_id
  //       },
  //     });
  //   },
  // },

  Mutation: {
    createUser: async (_, { name, email }) => {
      return await prisma.user.create({ data: { name, email } });
    },

    addcontact: async (_, { name, email, subject, message, event_id }) => {
      try {
        // Simulating database insertion logic
        if (!name || !email || !subject ||  !message || !event_id) {
          throw new Error("somrthing missage");
        }

        // const emailRegex = /\S+@\S+\.\S+/;
        // if (!emailRegex.test(email)) {
        //   throw new GraphQLError("Invalid email format");
        // }
        
        const newUser = await prisma.contact.create({ data: {  name: name, email: email  , subject: subject , message: message , eventId: Number(event_id) } })

       console.log(newUser);
       
    
        return newUser;
      } catch (error) {
        
        throw new Error(error.message || "An error occurred while adding the user.");
      }
    },
  
  },
};

// Create Apollo Server
const schema = makeExecutableSchema({ typeDefs, resolvers });

const apolloServer = new ApolloServer({
  schema,
  introspection: true, 
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

      return { domain };
    } catch (error) {
      throw new GraphQLError( error.message ||"Internal Server Error");
    }
  },
});

// Export a single handler for both GET and POST
export { handler as GET, handler as POST };