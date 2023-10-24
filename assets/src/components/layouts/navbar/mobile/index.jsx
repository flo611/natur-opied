
import React, { useEffect, useContext,useState } from "react";
import MenuHamburger from "../../../tools/burgerMenu"

import { TbApi } from "react-icons/tb";
import { IoSpeedometerOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartProvider";
import { RiAdminLine } from "react-icons/ri";


const NavbarMobile = () => {
  const { basket } = useContext(CartContext);
  const [showDestinationsMenu, setShowDestinationsMenu] = useState(false);
  return (
    <header>
      <nav className=" bg-gray-900 z-10 flex flex-row mr-6 items-center w-full fixed lg:hidden   ">
      <div >
          <img
            src="/images/logos/black-logo.svg"
            alt="logo"
            width={75}
            height={75}
          />
        </div>
        <div class="flex fex-row justify-end w-full mr-40  text-gray-200" href="/panier">
         
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span class="flex flex-row  ">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-600 opacity-75"></span>
                    <span > <sup>{basket.length}</sup></span>
                  </span>
                 
                  
                </div>
                <div className="flex    ">
          <MenuHamburger />
        </div>
        
  
      </nav>

         
    </header>
  );
};
export default NavbarMobile;
