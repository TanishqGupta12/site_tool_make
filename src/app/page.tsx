import Footer_v1 from "@/compoments/footer/Footer_v1";
import Navbar_v1 from "@/compoments/navbar/Navbar_v1";

import ApolloProviderWrapper from "./ClientProvider"; // Import the client component

// import { gql, useQuery } from '@apollo/client';

// import {GetDataResponse} from "../interface/types";

// const GET_DATA = gql`
// query RoleData {
//   roles {
//     id
//     name
//   }
// }
// `;

export default function Home() {
  // const { loading, error, data } = useQuery<GetDataResponse>(GET_DATA);
  
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error fkc: {error.message}</p>;
  
  // if (!data || !data?.roles) return <p>No data available </p>;
  return (
    <>
     <ApolloProviderWrapper>
      <CustomHead />
      <Navbar_v1 />
      
      <Footer_v1 />
      </ApolloProviderWrapper>
    </>
  );
}