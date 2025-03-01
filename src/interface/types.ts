interface Role {
   id: string;
   name: string;

}

interface Form {
  id: string;
  caption: string;
  Description: string;
  startDate: string;
  slug: string;
  is_active: boolean;

  registration_successful_message: string;
  registration_updated_successful_message: string;

}
interface Event {

    id: string;
    name: string;
    domainId: string;
    description: string;
    startDate: string;
    slug: string;
    latitude: GLfloat;
    longitude: GLfloat;
    email: string;
    phone: string
    timeZone: string;
    customCss: string;
    customJs: string;
    termsAndConditions: string;
    paymentNeeded: boolean;
    publishableKey: string;
    secretKey: string;
    sendRegistrationConfirmationEmailToGuest: boolean;
    footerText: string;
    hideBlog: boolean;

    PageContent: string;
    galleryText: string;
    hideAboutPage: boolean;
    hideCategory: boolean;
    hideCourses: boolean;
    hideGallery: boolean;
    hideInfo: boolean;
    hideTeacherPage: boolean;

    forms: Form[]
  
}

interface Domain {
  id:               string;  
  domain_name:      string;  
  subdomain_name:   string; 
  host:             string; 
  description:      string;  
  logo_file_name:   string;   
  logo_meta:        string;   
  custom_font_name: string;  

  createdAt:        string;
  updatedAt:        string;

  event: Event[];
}


export interface GetDataResponse {
  role: Role;
  roles: Role[];

  domain: Domain;

  forms: Form[]
  form: Form
  
  event: Event;
}