"use client"
import Footer_v1 from "@/components/footer/Footer_v1";
import Navbar_v1 from "@/components/navbar/Navbar_v1";

import Main_v1 from "@/components/Main/Main_v1";
import { gql, useQuery } from '@apollo/client';

import {GetDataResponse} from "../interface/types";

const GET_DATA = gql`
query RoleData {
  roles {
    id
    name
  }
}
`;

export default function Home() {
  const { loading, error, data } = useQuery<GetDataResponse>(GET_DATA);
  
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error fkc: {error.message}</p>;
  
  if (!data || !data?.roles) return <p>No data available </p>;
  return (
    <>

      <Navbar_v1 />
      <ul>
        {data.roles.map((role) => (
          <li key={role.id}>{role.name}</li>
        ))}
      </ul>
      <Main_v1 />
      <Footer_v1 />
    </>
  );
}