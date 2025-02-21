interface Role {
   id: string;
   name: string;
}

export interface GetDataResponse {
  roles: Role[];
}