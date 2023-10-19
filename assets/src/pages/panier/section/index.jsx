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
      <h1 className="w-full flex justify-center text-white text-4xl  pt-14 font-bold  lg:py-48 lg:text-6xl">
        <SlBasket />
      </h1>
      <div className="card mx-60">
        <div className="contain lg:mx-40 lg:py-10 text-red-500 ">
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
        <h1>Total = {total}€</h1>
      </div>
      <div className="lg:flex lg:flex-row lg:w-full lg:justify-center ">
        <div className="flex justify-center my-8 pr-6">
          <Popup
            trigger={
              <button className="flex justify-center items-center text-black font-bold uppercase bg-white  rounded-full md:mx-60 md:py-2  lg:px-10 lg:py-2 lg:my-8 lg:mx-16 hover:text-white hover:bg-purple-950">
                {" "}
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
          </Popup>
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
