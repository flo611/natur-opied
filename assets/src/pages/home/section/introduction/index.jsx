import React from "react";
import Button from "../../../../components/tools/button";
import { Link } from "react-router-dom";
import Carousel from 'better-react-carousel'

const Introduction = () => {
  return (
    <section className="mt-40   bg-gray-900 rounded-xl mx-10 my-60 text-gray-200">
      <div className="  lg:mx-20 my-10">
      <div className="  md:mx-12 ">
        <div className=" flex flex-row w-full  my-10 lg:text-2xl">
          <p>
            Bonjour et bienvenue sur le site Naturopied ! Vous allez découvrir un
            site sur la nature avec des randonnées à effectuer sur le
            territoire.Ainsi qu'une galerie de photos. Bonne balade !
          </p>
   
        </div>
        <div className="flex justify-center">
          <img
            src="/images/logos/black-logo.svg"
            alt="logo"
            width={160}
            height={160}
          />
        </div>
      </div>

      <Carousel cols={2} rows={1} gap={10} loop>
      <Carousel.Item>
        <img width="100%"  src="/images/flam.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="/images/bluemoutains.jpg" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="/images/koala.jpg" />
      </Carousel.Item>
      <Carousel.Item>
      <img width="100%" src="/images/losangeles.jpg" />
      </Carousel.Item>
      {/* ... */}
    </Carousel>

      <div className=" py-6  flex justify-center mx-8 md:mx-12  lg:text-2xl">
        Si vous voulez acheter des photos de mes balades ou de paysage rendez-vous sur la page shop ou en cliquant sur le boutton ci-dessous:
      </div>
      </div>
      <div className="flex justify-center my-4 text-white text-2xl">
      <Link to={`/shop/`}>
        <Button type="button" value="Shop" className="my-6" />
        </Link>
      </div>
    </section>
  );
};

export default Introduction;
