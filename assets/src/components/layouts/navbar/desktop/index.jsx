import React, { useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../../context/cartProvider";
import { useState } from "react";
import { RiAdminLine } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { IoSpeedometerOutline } from "react-icons/io5";

const Navbardesktop = () => {
  const { basket } = useContext(CartContext);
  const [showDestinationsMenu, setShowDestinationsMenu] = useState(false);

  return (
    <header>
      <div className="hidden bg-black z-10 lg:grid lg:grid-cols-3 items-center justify-center py-3 w-full  text-white fixed ">
        <div className="flex justify-start pl-4">
          <img
            src="/images/logos/black-logo.svg"
            alt="logo"
            width={100}
            height={100}
          />
        </div>

        <div>
          <ul className="flex flex-row w-full justify-center items-center text-2xl">
            <a href="https://naturopied.sabine-portfolio.fr/">
              <li className=" hover:bg-white hover:rounded-full hover:text-black p-4">
                Home
              </li>
            </a>
            <Link to="/destinations">
              <li
                className=" hover:bg-white hover:rounded-full hover:text-black mx-20 p-4 "
                onMouseEnter={() => setShowDestinationsMenu(true)}
                onMouseLeave={() => setShowDestinationsMenu(false)}
              >
                
                Destinations
                {showDestinationsMenu && (
                <ul className="absolute z-10 bg-black border divide-y  divide-gray-100 text-white rounded-lg shadow w-44 ">
                <li>
                  <Link to="/destinations" className="block px-4 py-2 hover:bg-purple-800  ">Europe</Link>
                </li>
                <li>
                  <Link to="/destinations" className="block px-4 py-2  hover:bg-purple-800">USA</Link>
                </li>
                <li>
                  <Link to="/destinations" className="block px-4 py-2  hover:bg-purple-800">Océanie</Link>
                </li>
              </ul>
                )}
              </li>
            </Link>
            <Link to="/shop">
              <li className=" hover:bg-white hover:rounded-full hover:text-black p-4">
                Shop
              </li>
            </Link>
            <Link to="/panier" className="">
              <li className=" hover:bg-white hover:rounded-full hover:text-black mx-20 p-4 ">
                Panier 
                <sup className="pl-2">{basket.length}</sup>
              </li>
            </Link>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col items-end mr-16  ">
            <li className=" hover:bg-white hover:rounded-full hover:text-black text-4xl  ">
              <a href="http://localhost:8000/login">
                <RiAdminLine />
              </a>
            </li>
            <li className=" hover:bg-white hover:rounded-full hover:text-black my-2 text-4xl">
              <Link to="/dashboard">
                <IoSpeedometerOutline />
              </Link>
            </li>
            <li className=" hover:bg-white hover:rounded-full hover:text-black text-4xl">
              <Link to="/admin#/products">
                <TbApi />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbardesktop;
