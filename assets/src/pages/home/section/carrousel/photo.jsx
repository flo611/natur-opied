import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Link } from "react-router-dom";
import "flowbite";
import Button from "../../../../components/tools/button";



const Photo = () => {

  return (
    <section className="mx-3 my-4">
      <h1 className="w-full flex justify-center text-white uppercase pt-6  font-bold  lg:py-20 lg:text-3xl">
        Mes photos Itinérance
      </h1>
      <div className="card rounded-lg  p-4  my-10 md:mx-28 lg:mx-80 ">
        <div className="contain flex flex-col items-center rounded-lg p-4  lg:p-8 ">
          <div className="text-white pb-3">
            Vous pouvez parcourir les photos de la boutique en cliquant sur le
            bouton ci-dessous:
          </div>
          {/* <div>
            <Carousel
              autoPlay
              infiniteLoop
              className=" justify-center lg:z-10"
              showThumbs={0}
              showIndicators={0}
              showStatus={0}
              arr
              interval={2000}
            >
              <div>
                <img
                  src="/images/etang.jpg"
                  className="h-80 w-80"
                  alt="etang"
                  width={100}
                  height={100}
                />
              </div>
              <div>
                <img
                  src="/images/bluemoutains.jpg"
                  className="h-80 w-80"
                  alt="bluemoutains"
                  width={300}
                  height={300}
                />
              </div>
              <div>
                <img
                  src="/images/cap.jpg"
                  className="h-80 w-80"
                  width={50}
                  height={50}
                  alt="cap"
                />
              </div>
              <div>
                <img
                  src="/images/Lake.jpg"
                  className="h-80 w-80"
                  alt="Lake"
                  width={50}
                  height={50}
                />
              </div>
              <div>
                <img
                  src="/images/Rouvre.jpg"
                  className="h-80 w-80"
                  width={900}
                  height={900}
                  alt="Larouvre"
                />
              </div>
            </Carousel>
          </div> */}
        </div>
      </div>
      <div className="flex justify-center  ">
        <Link to={`/shop/`}>
          <Button type="button" value="Buy Here" />
        </Link>
      </div>
      <div
        id="default-carousel"
        className="relative w-full"
        data-carousel="slide"
      >
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/images/Etang.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={100}
              height={100}
              alt="etang"
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/images/bluemoutains.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={100}
              height={100}
              alt="bluemoutains"
            />
          </div>

          <div className="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/images/cap.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={100}
              height={100}
              alt="cap"
            />
          </div>
          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/images/Lake.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={100}
              height={100}
              alt="lake"
            />
          </div>

          <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img
              src="/images/Rouvre.jpg"
              className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={100}
              height={100}
              alt="rouvre"
            />
          </div>
        </div>

        <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>

        <button
          type="button"
          class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div>

    </section>
  );
};

export default Photo;
