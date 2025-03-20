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
    email: String;             
    salutation: String;             
    first_name: String;             
    last_name: String;             
    position: String;             
    organization: String;             
    address: String;             
    city: String;             
    mobile: String;             
    online_status: String;              
    locale: String;             
    otp: String;             
    avatar: String;             
    authentication_token: String;             
    custom_fields: String;            
    encrypted_password: String;             
    reset_password_token: String;
    reset_password_sent_at: String;
    current_event_id: String;
    createdAt: String;       
    updatedAt: String;        
    roleId: String;
    
    f1?: String;             
    f2?: String;             
    f3?: String;             
    f4?: String;             
    f5?: String;             
    f6?: String;             
    f7?: String;             
    f8?: String;             
    f9?: String;             
    f10?: String;             
    f11?: String;             
    f12?: String;             
    f13?: String;             
    f14?: String;             
    f15?: String;
  }

  type category {
    id: Int!
    content: String!
    eventId: Int!      
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
    description: String
    startDate: String
    slug: String
    address: String
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
    forms: [Form] # Correct relationship with Form model
    categorys: [category]
    teachers: [User]
  }

  type Contact {
    id: Int
    name: String
    email: String
    subject: String
    message: String
    eventId: Int
  }

  type Query {
    users: [User]
    user(id: ID!): User

    events: [Event]
    event(id: ID!): Event
    forms: [Form]
    form(id: ID!): Form
    form_section_fields: [FormSectionField]
    form_section_field(id: ID!): FormSectionField
    form_field_choices: [FormFieldChoice]
    form_field_choice(id: ID!): FormFieldChoice
    contacts: [Contact]
    contact(id: ID!): Contact
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    addcontact(name: String!, email: String!, subject: String!, message: String!, event_id: String!): Contact
  }
`;

// Define resolvers
const resolvers = {
  BigInt: GraphQLBigInt, // Add support for BigInt
  Query: {
    users: async () => await prisma.user.findMany(),
    user: async (_, { id }) => await prisma.user.findUnique({ where: { id: Number(id) } }),
    events: async () => {
      return await prisma.event.findMany();
    },
    event: async (_, { id }) => await prisma.event.findUnique({ where: { id: Number(id) } }),
    forms: async () => await prisma.form.findMany(),
    form: async (_, { id }) => await prisma.form.findUnique({ where: { id: Number(id) } }),
    form_section_fields: async () => await prisma.formSectionField.findMany({ where: { is_active: true }}),
    form_field_choices: async () => await prisma.formFieldChoice.findMany({ where: { isActive: true }}),
    contacts: async () => await prisma.contact.findMany(),
    contact: async (_, { id }) => await prisma.contact.findUnique({ where: { id: Number(id) } }),
  },

  Event: {
    forms: async (parent) => {
      return await prisma.form.findMany({
        where: {
          event_id: parent.id,  // Use the `eventId` to fetch related forms
          is_active: true
        },
      });
    },
    categorys: async (parent) => {
      return await prisma.category.findMany({
        where: {
          eventId: parent.id,  // Use the `eventId` to fetch related forms
          // is_active: true
        },
      });
    },
    teachers: async (parent) => {
      // const role = await prisma.role.findFirst({where: {
      //   name: 'teachers',
      //   in_active: true
      // }})
      // const adminUsers = await prisma.user.findMany({
      //   where: {
      //     current_event_id: parent.id,
      //     roleId: role?.id
      //   },
        
      // });

      const adminUsers = await prisma.user.findMany({
        where: {
          current_event_id: String(parent.id),
          role: {
            name: 'teachers',
            in_active: true
          }
        },
        
      });
      console.log(adminUsers)
      return adminUsers;
    },
  },
  Form: {
    form_section_fields: async (parent) => {
      return await prisma.formSectionField.findMany({
        where: {
          form_id: parent.id,
        },
        
      });
    },
  },

  FormSectionField: {
    form_field_choices: async (parent) => {
    },
  },

  Mutation: {
    createUser: async (_, { name, email }) => {
      return await prisma.user.create({ data: { name, email } });
    },
    addcontact: async (_, { name, email, subject, message, event_id }) => {
      return await prisma.contact.create({
        data: {
          name,
          email,
          subject,
          message,
          eventId: Number(event_id),
        },
      });
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

const handler = startServerAndCreateNextHandler(apolloServer);

export { handler as GET, handler as POST };