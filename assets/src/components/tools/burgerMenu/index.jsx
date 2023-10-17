import React from "react";
import { slide as Menu } from "react-burger-menu";
import { styles } from "../burgerMenu/styles";
import { Link } from "react-router-dom";

const MenuHamburger = () => {
  return (
    <Menu styles={styles}>
      <div className=" w-full fixed flex flex-row items-center list-none text-white">
        <div className="w-full flex flex-row justify-center">
          <img
            src="/images/logos/black-logo.svg"
            alt="logo"
            width={75}
            height={75}
          />
        </div>
        <div className="py-16">
          <ul>
            <li className="flex flex-col list-none">Home</li>
            <Link to="/destinations">
              <li>Destinations</li>
            </Link>
            <Link to="/shop">
              <li>Shop</li>
            </Link>
            <Link to="/shop">
              <li>Panier</li>
            </Link>
          </ul>
        </div>
      </div>
    </Menu>
  );
};

export default MenuHamburger;
