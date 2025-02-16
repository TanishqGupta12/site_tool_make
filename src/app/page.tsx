
import Footer_v1 from "@/compoments/footer/Footer_v1";
import Navbar_v1 from "@/compoments/navbar/Navbar_v1";

import CustomHead from "./CustomHead";

import "../css/style.css";
// import "../scss/style.scss";
export default function Home() {
  return (
 <>
  <CustomHead />
  <Navbar_v1 />
  <Footer_v1 />
 </>
  );
}
