import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import Button from "../../../components/tools/button";
import Navbardesktop from "../../../components/layouts/navbar/desktop";
import NavbarMobile from "../../../components/layouts/navbar/mobile";
import Main from "../../../components/layouts/main";
import Footer from "../../../components/layouts/footer";
import { Link } from "react-router-dom";
import { CartContext } from "../../../components/context/cartProvider";

const ShowShop = () => {
  let id = useParams().id;

  const { basket, setBasketCount, totalArrayBasket } = useContext(CartContext);
  const [products, setProducts] = useState({});

  useEffect(() => {
    axios.get(`/api/products/${id}`).then((response) => {
      // console.log(response);
      setProducts(response.data);
    });
  }, []);

  const updateCart = (product, price) => {
    basket.push(product);
    totalArrayBasket.push(price);
    window.localStorage.setItem("total", JSON.stringify(totalArrayBasket));
    window.localStorage.setItem( "cart",JSON.stringify(basket));
    setBasketCount(basket.length);
  };

  return (
    <>
      <Main>
        <Navbardesktop />
        <NavbarMobile />
        <h1 className="w-full flex justify-center text-black uppercase pt-6  font-bold  lg:pt-4 lg:text-3xl">
          Show shop
        </h1>

        <div className="w-auto h-auto bg-gray-200 p-3 flex flex-col  justify-center mx-96   gap-1 rounded-2xl ">
            <div className="flex justify-center ">
              <img src={products.image} alt="logo" className="h-52  rounded-xl " />
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex flex-row justify-between">
                <div class="flex flex-col">
                  <span class="text-xl font-bold">{products.name}</span>
                  <p className="mt-2">{products.alldescription}</p>
                  <p class=" text-gray-700 mt-2">{products.tarifs}€</p>
                </div>
                <span class="font-bold"></span>
              </div>
              <div className="my-10 flex justify-center">
              <Button
                    type="button"
                    value="Buy Here"
                    onClick={() => {
                      updateCart(products, products.tarifs);
                    }}
                  />
              </div>
            </div>
          </div>



      </Main>
      <Footer />
    </>
  );
};

export default ShowShop;
