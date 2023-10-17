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
        <h1 className="w-full flex justify-center text-white uppercase pt-6  font-bold  lg:pt-40 lg:text-3xl">
          Show shop
        </h1>

        <div className="pt-40">
          <div className="card py-20 mx-96  ">
            <div className="contain flex flex-col items-center py-20 mx-20 text-white">
              {products.name}

              <div className="">
                <img
                  src={products.image}
                  width={160}
                  height={160}
                  alt="photolandscape"
                  className="my-6"
                />
              </div>
              <div>
                <p>{products.alldescription}</p>
              </div>
              <div>{products.tarifs} €</div>
              <div className="mx-4 my-4">
                <>
                  <Button
                    type="button"
                    value="Buy Here"
                    onClick={() => {
                      updateCart(products, products.tarifs);
                    }}
                  />
                </>
              </div>
            </div>
          </div>
        </div>
      </Main>
      <Footer />
    </>
  );
};

export default ShowShop;
