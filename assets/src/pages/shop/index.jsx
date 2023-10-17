import React from "react";
import NavbarMobile from "../../components/layouts/navbar/mobile";
import Navbardesktop from "../../components/layouts/navbar/desktop";
import Main from "../../components/layouts/main";
import Buy from "./sections";
// import Footer from "../../components/layouts/footer";

const Shop = () => {
  return (
    <>
      <Main>
        <NavbarMobile />
        <Navbardesktop />
        <Buy />
      </Main>
      {/* <Footer /> */}
    </>
  );
};

export default Shop;
