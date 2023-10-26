import React from "react";
import NavbarMobile from "../../components/layouts/navbar/mobile";
import Navbardesktop from "../../components/layouts/navbar/desktop";
import Introduction from "./section/introduction";
import Footer from "../../components/layouts/footer";

const Home = () => {
  return (
    <>
      <NavbarMobile/>
      <Navbardesktop/>
      <Introduction />
      <Footer/>
    </>
  );
};

export default Home;
