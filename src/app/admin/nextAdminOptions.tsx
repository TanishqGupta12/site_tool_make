import type { NextAdminOptions} from "@premieroctet/next-admin";

import { handleCloudinaryRequest } from "@/lib/cloudinary";


import { Prisma } from "@prisma/client";


import CustomButton from "@/components/Custom/seleted";
import CustomEditor from "@/components/Custom/CustomEditor";

let inputTypes = [
  "text", "password", "checkbox", "radio", "file", "date", 
  "email", "number", "tel", "url", "search", "range", 
  "color", "datetime-local", "month", "week", "time", 
  "button", "submit", "reset", "image", "hidden"
];
const options: NextAdminOptions = {
  title: "Dashboard",

  model: {

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
            format: "richtext-html",
            input: <CustomEditor  name="termsAndConditions" disabled={false} required={true} />,
          },
          name: {
            
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
      styles: {
        _form: "",
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
      icon: "PhotoIcon",
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
            input: <CustomButton  options={Object.keys(Prisma.UserScalarFieldEnum)} name="field_type" disabled={false} required={true} />,

          },
          data_field: {
            format: "select",
            input: <CustomButton options={inputTypes}  name="data_field" disabled={false} required={true}  />,

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
    },
    EmailContent: {
      toString: (content) => `(${content.id.toString()})  `,
      title: "EmailContent",
      icon: "InboxIcon",
      edit: {
 
      },
    },
    contact: {
      toString: (Contacts) => `(${Contacts.id.toString()})  `,
      title: "Contact",
      icon: "PhoneIcon",
      edit: {
 
      },
    },
    category: {
      toString: (Contact) => `(${Contact.id.toString()})  `,
      title: "category",
      icon: "FunnelIcon",
      edit: {
 
      },
    },
    QuizTopic: {
      toString: (Contact) => `(${Contact.id.toString()})  `,
      title: "QuizTopic",
      icon: "AcademicCapIcon",
      edit: {
 
      },
    },
    QuizQuestion: {
      toString: (Contact) => `(${Contact.id.toString()})  `,
      title: "QuizQuestion",
      icon: "PuzzlePieceIcon",
      edit: {
 
      },
    },
    QuizQuestionOption: {
      toString: (Contact) => `(${Contact.id.toString()})  `,
      title: "QuizQuestionOption",
      icon: "PlusIcon",
      edit: {
 
      },
    },
    QuizAttemptResult: {
      toString: (Contact) => `(${Contact.id.toString()})  `,
      title: "QuizAttemptResult",
      icon: "QueueListIcon",
      edit: {
 
      },
    },
    QuizAttempt: {
      toString: (Contact) => `(${Contact.id.toString()})  `,
      title: "QuizAttempt",
      icon: "PresentationChartBarIcon",
      edit: {
 
      },
    },
    QuizResult: {
      toString: (Contact) => `(${Contact.id.toString()})  `,
      title: "QuizResult",
      icon: "TrophyIcon",
      edit: {
 
      },
    },
    EventAgenda: {
      toString: (agenda) => `(${agenda.id.toString()})  `,
      title: "EventAgenda",
      icon: "TrophyIcon",
      edit: {
 
      },
    },
    Caption: {
      toString: (agenda) => `(${agenda.id.toString()})  `,
      title: "Caption",
      icon: "BoldIcon",
      edit: {
 
      },
    },
    Discount: {
      toString: (discount) => `(${discount.id.toString()})  `,
      title: "Discount",
      icon: "PercentBadgeIcon",
      edit: {
 
      },
    },
    Tricket: {
      toString: (ticket) => `(${ticket.id.toString()})  `,
      title: "Ticket",
      icon: "CalculatorIcon",
      edit: {
 
      },
    },
    User_Note: {
      toString: (Note) => `(${Note.id.toString()})  `,
      title: "User Note",
      icon: "ClipboardDocumentIcon",
      edit: {
 
      },
    },
    User_Ticket: {
      toString: (Note) => `(${Note.id.toString()})  `,
      title: "User Ticket",
      icon: "ClipboardDocumentIcon",
      edit: {
 
      },
    },
    UserCourse: {
      toString: (Note) => `(${Note.id.toString()})  `,
      title: "User Course",
      icon: "NewspaperIcon",
      edit: {
 
      },
    },
  },
  pages: {
    "": {
      title: "Home",
      icon: "HomeIcon",
    },
  },
  sidebar: {
    groups: [
      {
        title: "configuration",
        className: " bg-green-600 p-2 rounded-md", // group title extra classes. (optional)
        models: ['Event' , "PostGallery" ,"category", "EventAgenda" ,"Caption" ,"EmailContent"],
      },
      {
        title: "Registration",
        models: ["Role","User" , "Form" , "FormSectionField" , "FormFieldChoice"],
      },
      {
        title: "Quiz Builder",
        models: ["QuizTopic" , "QuizQuestion" , "QuizQuestionOption" , "QuizAttemptResult" , "QuizAttempt" , "QuizResult"],
      },
      {
        title: "More Link",
        models: ["contact" , "Discount" , "Tricket" , "User_Note" ,"User_Ticket" , "UserCourse"],
      },
    ],
  }
}

export default options;