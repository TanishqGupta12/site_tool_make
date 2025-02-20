// "use client";
import Footer_v1 from "@/compoments/footer/Footer_v1";
import Navbar_v1 from "@/compoments/navbar/Navbar_v1";
import CustomHead from "./CustomHead";
import useGetDmain from "../Hook/useGetDmain";

// import { gql, useQuery } from '@apollo/client';

// interface roles {
//   id: string;
//   name: string;
// }

// interface GetDataResponse {
//   roles: roles[];
// }

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
  const daa = useGetDmain()
  // if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error fkc: {error.message}</p>;
  
  // if (!data || !data?.roles) return <p>No data available </p>;
  return (
    <>
      {/* {getDmain()} */}
      <CustomHead />
      <Navbar_v1 />


          {/* <ul>
          {data.roles.map((user) => (
            <li key={user.id}>{user.name}</li> // ✅ Render names in a list
          ))}
        </ul> */}
      
      <Footer_v1 />
    </>
  );
}