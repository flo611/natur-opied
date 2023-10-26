import React, { useContext, useEffect } from "react";
import Button from "../../../components/tools/button";
import { CartContext } from "../../../components/context/cartProvider";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";
import { SlBasket } from "react-icons/sl";

const Panier = () => {
  const {
    basket,
    setBasket,
    totalBasket,
    setTotalBasket,
    totalArrayBasket,
    setTotalArrayBasket,
  } = useContext(CartContext);

  const total = JSON.parse(localStorage.getItem("total") || "[]").reduce(
    (acc, val) => acc + val,
    0
  );

  const DeleteItem = (id) => {
    const updatedBasket = [...basket];

    const filteredBasket = updatedBasket.filter((item) => item.id !== id);

    setBasket(filteredBasket);

    // const newTotal = filteredBasket.reduce((acc, item) => acc + item.tarifs, 0);
    // localStorage.setItem('total', JSON.stringify(newTotal));
    // setTotalBasket(newTotal);

    // const newTotalQty = filteredBasket.length;
    // const newTotalPrice = filteredBasket.reduce((acc, item) => acc + item.tarifs, 0);
    // setTotalBasket(newTotalQty);
    // localStorage.setItem('total', JSON.stringify(newTotalQty));
    // setTotalArrayBasket(filteredBasket);
  };

  const test = [];

  function removeDuplicates(arr) {
    const uniqueIds = [];

    const unique = arr.filter((element) => {
      const isDuplicate = uniqueIds.includes(element.id);

      if (!isDuplicate) {
        uniqueIds.push(element.id);

        return true;
      }

      return false;
    });
    test.push(unique);
  }

  removeDuplicates(basket);
  console.log(test, basket);

  return (
    <>
     <div >
      <div className="bg-gray-900 text-white max-w-md mx-auto rounded-xl shadow-md overflow-hidden md:max-w-2xl m-5  my-20 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-all duration-500 ease-in-out ">
      <div class="sm:my-6 uppercase tracking-wide  text-gray-200 font-semibold flex justify-center lg:pt-10">
      <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg></div>
        <div className="  lg:my-10 lg:py-10 text-white ">
          <div className="grid grid-rows-1">
            {test.map((e) => {
              return (
                <>
                  {e.map((element) => {
                    return (
                      <div
                        key={element.id}
                        className="w-full inline-flex justify-around text-gray-200"
                      >
                        Qty : <br />{element.id}
                        <h1>Titre : <br /> {element.name}</h1>
                        <h1>Prix : <br /> {element.tarifs}€</h1>
                       <div>Image :
                        <br />
                        <img
                        className="pt-2"
                          src={element.image}
                          width={50}
                          height={50}
                          alt="landscape"
                        
                        />
                        </div>
                        <div> Delete :
                          <br />
                          <div className="pt-3">
                        <button
                        className="bin flex justify-center  "
                          type="button"
                          value="X"
                          onClick={() => {
                            DeleteItem(element.id);
                            window.localStorage.removeItem("total");
                          }}
                        >
                          
                        </button>
                        </div>
                        </div>
                      </div>
                    );
                  })}
                </>
              );
            })}
          </div>
          
        </div>
        <hr className="sm:my-4 sm:mx-16 lg:my-6 lg:mx-20"/>
        <h1 className="flex justify-center pb-4 text-2xl text-gray-200">
          Total = {total}€
        </h1>
      </div>
      <div className="lg:flex lg:flex-row lg:w-full lg:justify-center ">
        <div className="flex justify-center  pr-6">
          <Popup
            trigger={
              <button
                className="sm:px-4 sm:py-2 cursor-pointer transition-all bg-blue-500 text-white lg:px-6 lg:my-16 rounded-lg
              border-blue-600 
              border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
              active:border-b-[2px] active:brightness-90 active:translate-y-[2px]  "
                type="button"
              >
                Valider le Panier
              </button>
            }
            position="top left"
          >
            <div class="flex flex-col items-center justify-center h-screen pt-40 dark">
              <div class="w-full max-w-md bg-gray-900 rounded-lg shadow-md p-6">
                <h2 class="text-2xl font-bold text-gray-200 mb-4">Paiement</h2>

                <h1 className=" uppercase text-gray-200">
                  Veuillez régler le montant ci-dessous:
                </h1>
                <p className="font-bold text-gray-200">Total = {total}€</p>
                <div className="lg:flex lg:flex-row lg:w-full lg:justify-center lg:my-4 ">
                  <Button
                    type="button"
                    value="BUY"
                    onClick={() => alert("Congratulations")}
                  />
                </div>
              </div>
            </div>
          </Popup>
        </div>

        {basket.length === 0 ? null : (
          <>
            <div className="sm:my-10 sm:pr-4 sm:flex sm:flex-col items-center lg:flex lg:justify-center lg:my-16   opacity-50">
              <Button
                type="button"
                value="Vider le panier"
                onClick={() => {
                  setBasket([]);
                  setTotalArrayBasket([]);
                  window.localStorage.removeItem("cart");
                  window.localStorage.removeItem("total");
                }}
              ></Button>
            </div>
          </>
        )}
      </div>
      </div>
    </>
  );
};

export default Panier;
