import React, { useContext, useEffect } from "react";
import Button from "../../../components/tools/button";
import { CartContext } from "../../../components/context/cartProvider";
// import Popup from "reactjs-popup";
// import "reactjs-popup/dist/index.css";
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

    const unique = arr.filter((element ) => {
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
      <h1 className="w-full flex justify-center text-white text-4xl  font-bold  lg:py-20 lg:text-6xl">
      <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-20 w-20"
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
                  </svg>
      </h1>
      <div className="card mx-60">
        <div className="contain lg:mx-40 lg:my-10 lg:py-10 text-white ">
          <div className="grid grid-rows-1">
            {test.map((e) => {
              return (
                <>
                  {e.map((element) => {
                    return (
                      <div
                        key={element.id}
                        className="w-full inline-flex justify-around"
                      >
                        Qty:{element.id}
                        <h1>Titre : {element.name}</h1>
                        <h1>Prix : {element.tarifs}€</h1>
                        <img
                          src={element.image}
                          width={50}
                          height={50}
                          alt="landscape"
                        />
                        <button
                          type="button"
                          value="X"
                          onClick={() => {
                            DeleteItem(element.id);
                            window.localStorage.removeItem("total");
                          }}
                        >
                          X
                        </button>
                      </div>
                    );
                  })}
                </>
              );
            })}
          </div>
        </div>
        <h1 className="flex justify-center text-2xl text-white">Total = {total}€</h1>
      </div>
      <div className="lg:flex lg:flex-row lg:w-full lg:justify-center ">
        <div className="flex justify-center my-8 pr-6">
          {/* <Popup
            trigger={
              <button className=" cursor-pointer transition-all bg-blue-500 text-white px-6  rounded-lg
              border-blue-600
              border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
              active:border-b-[2px] active:brightness-90 active:translate-y-[2px]  " type="button">
                Valider le Panier
               
              </button>
                
            }
            position="top left"
          >
         
            <div className="card px-6 ">
              <h1 className="flex  justify-center pt-10 font-bold uppercase">
                Paiement
              </h1>
              <div className="contain  lg:px-20 lg:my-10 lg:py-6 flex flex-col items-center text-white ">
                <h1 className=" uppercase">
                  Veuillez régler le montant ci-dessous:
                </h1>
                <p className="font-bold">Total = {total}€</p>
                <div className="lg:flex lg:flex-row lg:w-full lg:justify-center lg:my-4 ">
                  <Button
                    type="button"
                    value="BUY"
                    onClick={() => alert("Congratulations")}
                  />
                </div>
              </div>
            </div>
          </Popup> */}
        </div>

        {basket.length === 0 ? null : (
          <>
            <div className="flex justify-center my-16 m  opacity-50">
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
    </>
  );
};

export default Panier;
