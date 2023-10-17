import React from "react";
import Home from "../../pages/home";
import Destinations from "../../pages/destinations";

// SHOP PAGE
import Shop from "../../pages/shop";
import ShowShop from "../../pages/shop/functions/showShop";

// BASKET PAGE
import Basket from "../../pages/panier";
import Admin from "../../pages/admin";


// DASHBOARD
import Dashboard from "../../pages/dashboard";

// CONTEXT
import CartProvider from "../../components/context/cartProvider";

import { createBrowserRouter } from "react-router-dom";



export const Provider = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <CartProvider>
          <Home />
        </CartProvider>
      </>
    ),
  },
  {
    path: "/destinations",
    element: (
      <>
        <CartProvider>
          <Destinations />
        </CartProvider>
      </>
    ),
  },
  {
    path: "/shop",
    element: (
      <>
        <CartProvider>
          <Shop />
        </CartProvider>
      </>
    ),
  },
  {
    path: "/shop/:id",
    element: (
      <>
        <CartProvider>
          <ShowShop />
        </CartProvider>
      </>
    ),
  },
  {
    path: "/panier",
    element: (
      <>
        <CartProvider>
          <Basket />
        </CartProvider>
      </>
    ),
  },
  {
    path: "/admin",
    element: (
      <>
        <Admin />
      </>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <>
        <CartProvider>
          <Dashboard />
        </CartProvider>
      </>
    ),
  },
]);
