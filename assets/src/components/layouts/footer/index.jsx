import React from "react";
import { BsGithub } from "react-icons/bs";
import{IoEarth} from "react-icons/io5"
const Footer = () => {
  return (
    <footer className="w-full bg-gray-900 ">
      <div class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col bg-gray-900">
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
          <a href="https://www.openrunner.com/my-space/mobile-app-history" class="ml-3 text-gray-500 hover:text-gray-200">
         <IoEarth/>
          </a>
          <a href="https://github.com/flo611" className="ml-3 text-gray-500 hover:text-gray-200">
            <BsGithub />
          </a>
          <a
            class="ml-3 text-gray-500 hover:text-gray-200"
            href="https://www.linkedin.com/in/florian-sabine/"
          >
            <svg
              fill="currentColor"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="0"
              class="w-5 h-5"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </span>
      </div>
    </footer>
  );
};
export default Footer;
