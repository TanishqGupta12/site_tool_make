interface Role {
   id: string;
   name: string;

}

interface FormFieldChoice {
  id: string
  sequence: string
  caption: string
  isActive: Boolean
  specificFieldIfOther: Boolean
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
  is_required: Boolean;
  is_active: Boolean;
  form_id: string;
  form_section_id: string;
  file_upload_filed: Boolean;
  file_upload_type: string;
  created_at: string;
  updated_at: string;
  is_single_column: boolean;
  value: String;           
  onlyReady: Boolean;  
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
    address: String
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




export interface GetDataResponse {



  forms: Form[]
  form: Form
  
  event: Event;
}