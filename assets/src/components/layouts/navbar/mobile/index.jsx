
import React from "react";
import MenuHamburger from "../../../tools/burgerMenu"
import { RiAdminLine } from "react-icons/ri";
import { TbApi } from "react-icons/tb";
import { IoSpeedometerOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const NavbarMobile = () => {
  return (
    <header>
      <nav className=" bg-black z-10 grid grid-cols-3 items-center py-3 w-full opacity-75 text-white fixed lg:hidden   ">
        <div className="flex  justify-center  ">
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
        <div>
          <ul className="flex flex-col items-end mr-16  ">
            <li className=" hover:bg-white hover:rounded-full hover:text-black text-4xl  ">
              <a href="http://localhost:8000/login">
                <RiAdminLine />
              </a>
            </li>
            <li className=" hover:bg-white hover:rounded-full hover:text-black my-6 text-4xl">
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
      </nav>
    </header>
  );
};
export default NavbarMobile;
