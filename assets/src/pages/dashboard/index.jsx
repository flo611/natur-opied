import React from "react";
import NavbarMobile from "../../components/layouts/navbar/mobile";
import Navbardesktop from "../../components/layouts/navbar/desktop";
import Main from "../../components/layouts/main";
import Login from "./login";
import Footer from "../../components/layouts/footer";
 
const Dashboard =()=>{
return (
<Main>
<Navbardesktop/>
<NavbarMobile/>
<Login/>
<Footer/>

</Main>
  );
};
export default Dashboard;
