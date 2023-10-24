import React from "react";
import { Link } from "react-router-dom";
import Button from "../../../../components/tools/button";



const Photo = () => {
  return (
    <section className="mx-3 my-4">
      <h1 className="w-full flex justify-center text-white uppercase pt-6  font-bold  lg:py-20 lg:text-3xl">
        Mes photos Itinérance
      </h1>
      <div className="card rounded-lg  p-4  my-10 md:mx-28 lg:mx-20  ">
        <div className="contain flex flex-col items-center rounded-lg p-4  lg:mx-20 lg:my-10 ">
          <div className="text-white text-2xl pb-3">
            Vous pouvez parcourir les photos de la boutique en cliquant sur le
            bouton ci-dessous:
          </div>
         
      
      
      <div class="carousel w-full ">
  <div id="slide1" class="carousel-item relative w-full">
    <img src="/images/etang.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide2" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" class="carousel-item relative w-full">
    <img src="/images/bluemoutains.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" class="btn btn-circle">❮</a> 
      <a href="#slide3" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" class="carousel-item relative w-full">
    <img src="/images/cap.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" class="btn btn-circle">❮</a> 
      <a href="#slide4" class="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" class="carousel-item relative w-full">
    <img src="/images/Lake.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" class="btn btn-circle">❮</a> 
      <a href="#slide5" class="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide5" class="carousel-item relative w-full">
    <img src="/images/koala.jpg" class="w-full" />
    <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" class="btn btn-circle">❮</a> 
      <a href="#slide1" class="btn btn-circle">❯</a>
    </div>
  </div>
</div>

  </div>
  <div className="text-white my-4 text-2xl flex justify-center">
<Link to={`/shop/`}>
<Button type="button" value="Voir +" />
</Link>
</div>
</div>
    </section>
  );
};

export default Photo;
