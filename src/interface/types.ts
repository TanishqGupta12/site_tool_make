interface Role {
   id: string;
   name: string;
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
}

export interface GetDataResponse {
  role: Role;
  roles: Role[];
  domain: Domain;
}