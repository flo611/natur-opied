import React from "react";
import { BsGithub } from "react-icons/bs";
import { IoEarth } from "react-icons/io5";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import {CiLinkedin} from "react-icons/ci"
const Footer = () => {
  return (
    <footer className="lg:w-full bg-gray-900 ">
      <div class="hidden  lg:container px-5 py-8 mx-auto lg:flex items-center sm:flex-row flex-col bg-gray-900">
        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
          <img
            src="/images/logos/black-logo.svg"
            width={75}
            height={75}
            alt="logo"
          />
          <span class="ml-3 text-xl text-gray-200">Natur'opied</span>
        </a>
        <p class="text-sm text-gray-500 hover:text-gray-200 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
          © 2023 Natur'opied —
          <a
            href="https://www.linkedin.com/in/florian-sabine/"
            class="text-gray-600 hover:text-gray-200 ml-1"
            rel="noopener noreferrer"
            target="_blank"
          >
            @florian
          </a>
        </p>
        <span class="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
          <a
            href="https://www.openrunner.com/my-space/mobile-app-history"
            class=" mt-1 text-2xl text-gray-500 hover:text-gray-200"
          >
            <IoEarth />
          </a>
          <a
            href="https://github.com/flo611"
            className="mx-6  mt-1 text-2xl text-gray-500 hover:text-gray-200"
          >
            <BsGithub />
          </a>
          <a
            class=" mt-0.5 text-3xl text-gray-500 hover:text-gray-200"
            href="https://www.linkedin.com/in/florian-sabine/"
          >
            
            <CiLinkedin/>
          </a>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
