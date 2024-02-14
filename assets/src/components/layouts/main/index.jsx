import React from "react";

const Main = ({ children }) => {
  return (
   
    <main className="overflow-x-hidden  h-screen w-full bg-shine bg-no-repeat bg-cover bg-top"   style={{backgroundImage: `url(/images/background.jpg)`}}>
      {children}
    </main>
  );
};

export default Main;
