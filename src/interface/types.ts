interface Role {
   id: string;
   name: string;
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

  event: Event;
}