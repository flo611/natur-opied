import React from "react";
import Button from "../../../../components/tools/button";
import { Link } from "react-router-dom";
import Carousel from "better-react-carousel";
import TypeAnimations from "../../../../components/tools/typeAnimation";
import {CiLinkedin} from "react-icons/ci"
import { IoEarth } from "react-icons/io5";
import { BsGithub } from "react-icons/bs";

const Introduction = () => {
  return (
    <section className="h-full ">
    <div className="w-full " >
    <video autoPlay loop muted className="w-full h-auto">
    <source   src="/video/intro.mp4" type="video/mp4"></source>
    Votre navigateur ne supporte pas la lecture de vidéos.
  </video>
  <div className="sm:top-10 absolute  lg:top-56 left-0 right-0 flex justify-center items-center">
    <div className=" sm:flex sm:flex-col sm:items-center flex text-amber-400 text-center">
      
      <span className="text-2xl font-bold "><TypeAnimations/><br/></span>
      <img src="/images/logos/black-logo.svg" width={200} height={200} alt="logonaturopied" />
      <span className="font-bold pt-6 text-xl">Vous allez découvrir un site sur la nature avec des randonnées à effectuer sur le territoire. Ainsi qu'une galerie de photos. Bonne balade !</span>
    </div>
  </div>
     </div>
      <div className=" w-100  h-full  sm:py-40 lg:py-20 bg-neutral-800  text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 ">
        <div className="  bg-neutral-800 ">
          {" "}
          <Carousel cols={3} rows={1} gap={10} loop={true} autoPlay>
            <Carousel.Item>
              <img
                width="full"
                className="h-full"
                src="/images/flam.jpg"
                alt="flam"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="100%"
                className=""
                src="/images/Etang.jpg"
                alt="boisroger"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/koala.jpg" alt="koala" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/losangeles.jpg" alt="losangeles" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/background.jpg" alt="australie" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="100%" src="/images/cap.jpg" alt="cap" />
            </Carousel.Item>
            {/* ... */}
          </Carousel>
        </div>
       
        <p class="flex w-full justify-center my-4">
          {" "}
          Si vous voulez acheter des photos de mes balades ou de paysage
          rendez-vous sur la page shop ou en cliquant sur le boutton ci-dessous:
        </p>

        <div className="flex w-full justify-center">
          <Link to={`/shop/`}>
            <Button
              type="button"
              value="Shop"
              className=" flex justify-center"
            />
          </Link>
        </div>
        <div className="flex items-center justify-center mx-auto sm:my-0 md:my-14 lg:hidden ">
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
      </div>
      
    </section>
  );
};

export default Introduction;
