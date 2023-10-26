import React from "react";
import Button from "../../../../components/tools/button";
import { Link } from "react-router-dom";
import Carousel from "better-react-carousel";

const Introduction = () => {
  return (
    <section>
      <div class=" w-100  h-100 mx-40 my-40 py-20 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
        <p class="font-bold m-2">
          {" "}
          Bonjour et bienvenue sur le site Naturopied ! Vous allez découvrir un
          site sur la nature avec des randonnées à effectuer sur le
          territoire.Ainsi qu'une galerie de photos. Bonne balade !
        </p>

        <div class="  bg-neutral-800 hover:bg-gray-900 rounded-2xl">
          {" "}
          <Carousel cols={3} rows={1} gap={10} loop={true} autoPlay={2000}>
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

        <p class="mx-2 my-4">
          {" "}
          Si vous voulez acheter des photos de mes balades ou de paysage
          rendez-vous sur la page shop ou en cliquant sur le boutton ci-dessous:
        </p>

        <div className="flex w-full justify-center">
          <Link to={`/shop/`}>
            <Button
              type="button"
              value="Shop"
              className="my-6 flex justify-center"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Introduction;
