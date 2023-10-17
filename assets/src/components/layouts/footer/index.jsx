import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className=" bg-black flex flex-col items-center justify-center  ">
        <img
          src="/images/logos/black-logo.svg"
          width={75}
          height={75}
          alt="logo"
        />
        <hr className="border-1 text-white w-full" />
        <div className="flex flex-col items-center italic py-1 text-white ">
          &copy; All rights reserved
        </div>
      </div>
    </footer>
  );
};
export default Footer;
