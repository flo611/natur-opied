
import React, { useEffect, useContext,useState } from "react";


import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartProvider";
import {LiaPlaneSolid} from "react-icons/lia"
import { RiAdminLine } from "react-icons/ri";

import { IoSpeedometerOutline } from "react-icons/io5";
import{BiShoppingBag} from "react-icons/bi"

const NavbarMobile = () => {

  const { basket } = useContext(CartContext);


  return (
    <header className="fixed bottom-10 w-full flex justify-center z-50 ">
      <div className="button-container  flex flex-row justify-center w-full lg:hidden">
      
      <button className="button ">
      <a
                    className=":text-gray-200 "
                    href="https://naturopied.org/"
                  >
                   
                  
        <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 1024 1024" stroke-width="0" fill="currentColor" stroke="currentColor" class="icon">
          <path d="M946.5 505L560.1 118.8l-25.9-25.9a31.5 31.5 0 0 0-44.4 0L77.5 505a63.9 63.9 0 0 0-18.8 46c.4 35.2 29.7 63.3 64.9 63.3h42.5V940h691.8V614.3h43.4c17.1 0 33.2-6.7 45.3-18.8a63.6 63.6 0 0 0 18.7-45.3c0-17-6.7-33.1-18.8-45.2zM568 868H456V664h112v204zm217.9-325.7V868H632V640c0-22.1-17.9-40-40-40H432c-22.1 0-40 17.9-40 40v228H238.1V542.3h-96l370-369.7 23.1 23.1L882 542.3h-96.1z"></path>
        </svg>
        </a>
      </button>
      <button class="button">
      <Link to="/destinations" class="text-gray-200 text-6xl">
                   
                     <LiaPlaneSolid/>
                       
                  </Link>
     
      </button>
      
      <button className="button  border-r-4 text-gray-200 text-6xl">
      <Link to="/shop">
        <BiShoppingBag/>
        </Link>
      </button>
      <div className="border-r-2 h-6 my-auto mx-4 border-gray-200"></div>
      <button class="button">
      <a
                  className="hover:text-gray-200 text-6xl"
                  href="http://localhost:8000/login"
                >
                  <RiAdminLine />
                </a>
      </button>

      <button class="button ">
      <a class="flex items-center text-gray-200 text-2xl" href="/panier">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-12 w-12 text-6xl"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                    className="text-6xl"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span class="flex absolute -mt-5 ml-6 ">
                    <span className="animate-ping absolute inline-flex ml-5 h-3 w-3 rounded-full bg-pink-600 opacity-75"></span>
                    <span className="h-12 w-12">
                      {" "}
                      <sup>{basket.length}</sup>
                    </span>
                  </span>
                </a>
      </button>
      <button class="button">
      <Link
                  to="/dashboard"
                  className="flex items-center text-gray-200 text-6xl"
                >
                  <IoSpeedometerOutline />
                </Link>
      </button>
      
      </div>
  
    
    </header>
  );
};
export default NavbarMobile;
