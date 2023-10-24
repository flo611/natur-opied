import React from "react";
import { createBrowserRouter } from "react-router-dom";

import Book from "../../pages/book";
import Home from "../../pages/home page";
import PhantomBlood from "../../pages/phantomblood/";
import BattleTendency from "../../pages/battletendency";
import StardustCrusaders from "../../pages/stardustcrusaders";
import Dashboard from "../../pages/dashboard";
import TomeUn from "../../pages/phantomblood/tome1";
import Read from "../../pages/read";

export const Provider = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Book",
    element: <Book />,
  },
  {
    path: "/phantomblood",
    element: <PhantomBlood />,
  },
  {
    path: "/battletendency",
    element: <BattleTendency />,
  },
  {
    path: "/stardustcrusaders",
    element: <StardustCrusaders />,
  },
  {
    path: "/profil",
    element: <Dashboard />,
  },
  {
    path: "/phantomblood/diolenvahisseur",
    element: <TomeUn />,
  },
  {
    path: "/read",
    element: <Read />,
  },
]);
