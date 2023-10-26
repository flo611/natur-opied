import React from "react";

const Main = ({ children }) => {
  return (
   
    <main className="overflow-x-hidden h-screen w-full bg-shine bg-no-repeat bg-cover bg-top">
      {children}
    </main>
  );
};

export default Main;
