import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartProvider";
import { useState } from "react";
import { RiAdminLine } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { IoSpeedometerOutline } from "react-icons/io5";

import "../../../../../css/styles.css";

const Navbardesktop = () => {
  const { basket } = useContext(CartContext);
  const [showDestinationsMenu, setShowDestinationsMenu] = useState(false);

  return (
    <header>
 
      <div class="sm:hidden md:hidden lg:flex flex-wrap place-items-center text-2xl ">
        <section class="relative mx-auto">
          <nav class="flex justify-between bg-gray-900 text-gray-500 w-screen">
            <div class="px-5 xl:px-12 py-6 flex w-full items-center">
              <img
                src="/images/logos/black-logo.svg"
                alt="logo"
                width={100}
                height={100}
              />

              <ul class="hidden md:flex px-4 mx-auto font-semibold font-heading space-x-12">
                <li>
                  <a
                    className="hover:text-gray-200"
                    href="https://naturopied.sabine-portfolio.fr/"
                  >
                    Home
                  </a>
                </li>
                <li>
                  {" "}
                  <Link to="/destinations" class="hover:text-gray-200">
                    <li
                      className=" hover:text-gray-200"
                      onMouseEnter={() => setShowDestinationsMenu(true)}
                      onMouseLeave={() => setShowDestinationsMenu(false)}
                    >
                      Destinations
                      {showDestinationsMenu && (
                        <ul className="absolute z-10 bg-gray-900 border divide-y  divide-gray-100 text-white rounded-lg shadow w-44 ">
                          <li className="block px-4 py-2 hover:text-gray-200 ">
                            <Link to="/destinations" key="Europe">
                              Europe
                            </Link>
                          </li>
                          <li className="block px-4 py-2  hover:text-gray-200 ">
                            <Link to="/destinations" key="USA">
                              USA
                            </Link>
                          </li>
                          <li className="block px-4 py-2  hover:text-gray-200 ">
                            <Link to="/destinations" key="Oceanie">
                              Océanie
                            </Link>
                          </li>
                        </ul>
                      )}
                    </li>{" "}
                  </Link>
                </li>
                <li className="hover:text-gray-200">
                  {" "}
                  <Link to="/shop">Shop</Link>
                </li>
              </ul>

              <div className="hidden xl:flex items-center space-x-5 ">
                <a className="hover:text-gray-200" href="http://localhost:8000/login">
                <RiAdminLine />
                  
                </a>
                <a class="flex items-center hover:text-gray-200" href="/panier">
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
                  <span class="flex absolute -mt-5 ml-4">
                    <span className="animate-ping absolute inline-flex h-3 w-3 rounded-full bg-pink-600 opacity-75"></span>
                    <span > <sup>{basket.length}</sup></span>
                  </span>
                </a>
                <Link to="/admin#/products" className="flex items-center hover:text-gray-200">
                <TbApi />
                </Link>
                <Link to="/dashboard" className="flex items-center hover:text-gray-200">
                <IoSpeedometerOutline />
                  
                </Link>
               
              </div>
            </div>

          </nav>
        </section>
      </div>

   
      
     
    </header>
  );
};

export default Navbardesktop;
