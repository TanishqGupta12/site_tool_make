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
  hasGallery: string;
  hasInfo: boolean;
  hasAboutPage: boolean;
  hasContactPage: boolean;
  slug: string;
  latitude: number;
  longitude: number;
  endDate: string;
  email: string;
  phone: string;
  logoMeta: string;
  timeZone: string;
  customCss: string;
  customJs: string;
  termsAndConditions: string;
  protectedGallery: boolean;
  paymentNeeded: boolean;
  publishableKey: string;
  secretKey: string;
  templateVersion: string;
  eventAgendaDescription: string;
  landingPageContent: string;
  onlyLandingPage: boolean;
  hideRegistrationButton: boolean;
  sendRegistrationConfirmationEmailToGuest: boolean;
  footerText: string;
  hideBlog: boolean;
  hideForum: boolean;
  createdAt: string;
  updatedAt: string;
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