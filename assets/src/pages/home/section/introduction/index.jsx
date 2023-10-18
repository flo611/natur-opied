import React from "react";
import Button from "../../../../components/tools/button";
import { Link } from "react-router-dom";

const Introduction = () => {
  return (
    <section className="mt-44 card mx-20">
      <div className=" md:mx-12 lg:grid lg:grid-cols-2">
        <div className=" flex flex-row w-full  my-10">
          <p>
            Bonjour et bienvenue sur le site Naturopied ! Vous allez découvrir un
            site sur la Nature avec des randonnées à effectuer sur le
            territoire. Bonne balade !
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
      <div className=" py-6 font-bold flex justify-center mx-8 md:mx-12  underline">
        Si vous voulez acheter des photos de mes balades ou de paysage rendez-vous sur la page shop ou en cliquant sur le boutton ci-dessous:
      </div>
      <div className="flex justify-center my-4 ">
      <Link to={`/shop/`}>
        <Button type="button" value="Buy Here" />
        </Link>
      </div>
    </section>
  );
};

export default Introduction;
