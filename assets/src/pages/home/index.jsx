import React from "react";
import NavbarMobile from "../../components/layouts/navbar/mobile";
import Navbardesktop from "../../components/layouts/navbar/desktop";
import Main from "../../components/layouts/main";
import Introduction from "./section/introduction";
import Photo from "./section/carrousel/photo";
// import Footer from "../../components/layouts/footer";

const Home = () => {
  return (
    <Main>
      <NavbarMobile/>
      <Navbardesktop/>
      <Introduction />
      <Photo />
      {/* <Footer/> */}
    </Main>
  );
};

export default Home;
