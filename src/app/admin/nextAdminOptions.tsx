import type { NextAdminOptions} from "@premieroctet/next-admin";

import { handleCloudinaryRequest } from "@/lib/cloudinary";


import { Prisma } from "@prisma/client";


import CustomButton from "@/components/Custom/seleted";

let inputTypes = [
  "text", "password", "checkbox", "radio", "file", "date", 
  "email", "number", "tel", "url", "search", "range", 
  "color", "datetime-local", "month", "week", "time", 
  "button", "submit", "reset", "image", "hidden"
];
const options: NextAdminOptions = {
  title: "Dashboard",

  model: {
    Domain: {
      toString: (domain) => `(${domain.id})  (${domain.domain_name}) (${domain.subdomain_name})`,
      title: "Domain",
      icon: "AdjustmentsVerticalIcon",
      list: {
      },
    },

    Event: {
      toString: (event) => `(${event.id})  (${event.name})`,
      title: "Event",
      icon: "Cog8ToothIcon",
      list: {},
      edit: {
        // display: [
        //   "name",
        //   {
        //     title: "Email is mandatory",
        //     id: "editor",
        //     description: "You must add an email from now on",
        //   } as const,
        //   "domain"
        // ],
        fields: {
          termsAndConditions: {
            format: "richtext-html"
          },
          name: {
            
          },
          domain: {
            relationOptionFormatter: (domain) => {
              return `${domain.domain_name}`;
            },
          },
          gallery: {
            format: "file",
            handler: {
              upload: async (buffer: any, infos: any) => {
                console.log("Uploading file:", infos);
                console.log(buffer);
                
                return "https://www.gravatar.com/avatar/00000000000000000000000000000000";
              },
              get: async (value: any) =>{
                console.log(any);
                
              }
            },
            hooks: {
              beforeDb: (value: any) => {
                console.log("Storing in DB:", value);
                return value; // Ensures the correct URL is stored
              },
            },
          },
          hooks: {
            gallery: {
              beforeDb: async(values: any) => {

                console.log(values);
              },
            }
          },
        },
      },
    },
    User: {
      toString: (user) => `(${user.id})  (${user.email}) `,
      title: "Users",
      icon: "UsersIcon",
      list: {
        search: ["email"],
        filters: [
          {
            name: "Users",
            active: false,
            value: {
             
            },
          },
        ],
      },
    },
    Role: {
      toString: (role) => `(${role.id.toString()}) (${role.name})  `,
      title: "Role",
      icon: "IdentificationIcon",
      list: {
      },
    },
    PostGallery: {
      toString: (post_gallery) => `(${post_gallery.id.toString()}) (${post_gallery.name})  `,
      title: "PostGallery",
      icon: "IdentificationIcon",
      edit: {
        fields: {
          name: {},
          poster: {
            format: "file",
            handler: {
              upload: async (buffer: any, infos: any) => {
                const uploadResult = await handleCloudinaryRequest("POST", infos.name, buffer);
                return uploadResult.secure_url;
              },
              get: async (value: any) => {
                return value;
              }
            },
            hooks: {
              beforeDb: (value: any) => {
                console.log("Storing in DB:", value);
                return value; // Ensures the correct URL is stored
              },
            },
          }
        },
      },
    },
    Form: {
      toString: (form) => `(${form.id.toString()}) (${form.caption})  `,
      title: "Form",
      icon: "Square2StackIcon",
      edit: {
        fields: {
          Description:{
            format: "richtext-html"
          }
        }
      },
    },
    FormSectionField: {
      toString: (field) => `(${field.id.toString()}) (${field.caption})  `,
      title: "FormSectionField",
      icon: "Square2StackIcon",
      edit: {
        fields: {
          field_type:{
            format: "select",
            input: <CustomButton  value={Object.keys(Prisma.UserScalarFieldEnum)} name="field_type" disabled={false} required={true} />,

          },
          data_field: {
            format: "select",
            input: <CustomButton value={inputTypes} />,

          }
        }
      },
    },
    FormFieldChoice: {
      toString: (choice) => `(${choice.id.toString()}) (${choice.caption})  `,
      title: "FormFieldChoice",
      icon: "Square2StackIcon",
      edit: {
 
      },
    }
  },
  pages: {
    "": {
      title: "Home",
      icon: "HomeIcon",
    },
  }
}

export default options;