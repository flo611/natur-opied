
import React from "react";
import MenuHamburger from "../../../tools/burgerMenu"

const NavbarMobile = () => {
  return (
    <header>
      <nav className=" bg-black z-10 grid grid-cols-3 items-center py-3 w-full opacity-75 text-white fixed lg:hidden   ">
        <div className="flex justify-center items-center ">
          <MenuHamburger />
        </div>
        <div className="flex justify-center">
          <img
            src="/images/logos/black-logo.svg"
            alt="logo"
            width={75}
            height={75}
          />
        </div>
        <div className="flex flex-row justify-center">
          <p>Naturopied</p>
        </div>
      </nav>
    </header>
  );
};
export default NavbarMobile;
