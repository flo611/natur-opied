import React from "react";
import Main from "../../components/layouts/main";
import NavbarMobile from "../../components/layouts/navbar/mobile";
import Navbardesktop from "../../components/layouts/navbar/desktop";
import Map from "../destinations/section/map";
import Footer from "../../components/layouts/footer";

const Destinations =() => {
    return(
        <>
        <Main>
        <NavbarMobile/>
        <Navbardesktop/>
        <Map/>
        <Footer/>
        </Main>
        </>
    );
};

export default Destinations;