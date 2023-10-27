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
      

        <div className="w-auto h-auto bg-gray-900 p-3 flex flex-col my-8 justify-center mx-96   gap-1 rounded-2xl hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 ">
            <div className="flex justify-center ">
              <img src={products.image} alt="logo" width={300}  className="h-56  rounded-xl " />
            </div>
            <div class="flex flex-col gap-4">
              <div class="flex flex-row justify-between">
                <div class="flex flex-col pt-10">
                  <span class="text-xl font-bold text-gray-200">{products.name}</span>
                  <p className="mt-2 text-gray-200">{products.alldescription}</p>
                  <p class=" text-gray-200 mt-2 text-xl">{products.tarifs}€</p>
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
