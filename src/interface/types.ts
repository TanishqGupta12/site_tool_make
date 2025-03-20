interface Role {
   id: string;
   name: string;

}

interface User {
  id: string;                
  email: string;             
  salutation: string;             
  first_name: string;             
  last_name: string;             
  position: string;             
  organization: string;             
  address: string;             
  city: string;             
  mobile: string;             
  online_status: string;              
  locale: string;             
  otp: string;             
  avatar: string;             
  authentication_token: string;             
  custom_fields: string;            
  encrypted_password: string;             
  reset_password_token: string;
  reset_password_sent_at: string;
  current_event_id: string;
  createdAt: string;       
  updatedAt: string;        
  roleId: string;
  
  f1?: string;             
  f2?: string;             
  f3?: string;             
  f4?: string;             
  f5?: string;             
  f6?: string;             
  f7?: string;             
  f8?: string;             
  f9?: string;             
  f10?: string;             
  f11?: string;             
  f12?: string;             
  f13?: string;             
  f14?: string;             
  f15?: string;             
}
interface FormFieldChoice {
  id: string
  sequence: string
  caption: string
  isActive: boolean
  specificFieldIfOther: boolean
  createdAt: string
  updatedAt: string
  form_section_field_id: string

}

interface FormSectionField {
  id: string;
  caption: string;
  placeholder: string;
  field_hint: string;
  field_type: string;
  data_field: string;
  sequence: string
  is_required: boolean;
  is_active: boolean;
  form_id: string;
  form_section_id: string;
  file_upload_filed: boolean;
  file_upload_type: string;
  created_at: string;
  updated_at: string;
  is_single_column: boolean;
  value: string;           
  onlyReady: boolean;  
  form: Form[];
  // form_section: FormSection[];
  form_field_choices: FormFieldChoice[];
}

interface Form {
  id: string;
  caption: string;
  Description: string;
  startDate: string;
  slug: string;
  is_active: boolean;

  form_section_fields: FormSectionField[]
  registration_successful_message: string;
  registration_updated_successful_message: string;

}
interface Event {

    id: string;
    name: string;
    address: string;
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
    teachers: User[]
  
}




export interface GetDataResponse {



  forms: Form[];
  form: Form;
  Role: Role;
  event: Event;
}