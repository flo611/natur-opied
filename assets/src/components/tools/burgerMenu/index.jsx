import React from "react";
// import { slide as Menu } from "react-burger-menu";
// import { styles } from "../burgerMenu/styles";
import { Link } from "react-router-dom";
import { TbApi } from "react-icons/tb";
import { IoSpeedometerOutline } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";
const MenuHamburger = () => {
  return (
    <h1>hello</h1>
    // <Menu styles={styles}>
    //   <div className=" w-full fixed flex flex-row items-center list-none text-white">
    //     <div className="">
    //       <img
    //         src="/images/logos/black-logo.svg"
    //         alt="logo"
    //         width={75}
    //         height={75}
    //       />
    //     </div>
             
    //     <div>
    //       <ul className="flex flex-col text-2xl  ">
    //       <li >
    //       <a
    //                 class="hover:text-gray-200"
    //                 href="https://naturopied.sabine-portfolio.fr/"
    //               >
    //                 Home
    //               </a>
    //         </li>
    //         <li className="py-4">
    //         <Link to="/destinations" class="hover:text-gray-200 ">Destinations </Link>
    //         </li>
    //         <li className=" hover:text-gray-200">
    //         <Link to="/shop">Shop</Link>
    //         </li>
    //         <li className=" hover:text-gray-200 py-4">
    //           <Link to="/admin#/products">
    //             <TbApi />
    //           </Link>
    //         </li>
    //         <li >
    //         <Link to="/dashboard" className=" hover:text-gray-200">
    //             <IoSpeedometerOutline />
                  
    //             </Link>
               
    //         </li>
    //         <li className="pt-4">
    //         <a className="hover:text-gray-200" href="http://localhost:8000/login">
    //             <RiAdminLine />
                  
    //             </a>
    //         </li>
    //       </ul>
    //     </div>
    //   </div>
    // </Menu>
  );
};

export default MenuHamburger;
