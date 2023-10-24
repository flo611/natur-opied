import React from "react";
import NavbarMobile from "../../components/layouts/navbar/mobile";
import Navbardesktop from "../../components/layouts/navbar/desktop";
import Main from "../../components/layouts/main";
import Panier from "./section";
import Footer from "../../components/layouts/footer";

const Basket = () => {
  return (
    <>
      <Main>
        <NavbarMobile />
        <Navbardesktop />
        <Panier />
        <Footer/>
      </Main>
    </>
  );
};

export default Basket;
