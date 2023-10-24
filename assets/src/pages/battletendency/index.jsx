import React from "react";

const BattleTendency = () => {
  return (
    <>
      <section>
        <div className="flex items-center justify-center ">
          <img
            src="phantom-blood.jpg"
            alt=""
            className="glass-b"
            width={1000}
            height={400}
          />
        </div>
        <div className="h-screen">
          <h1 className="uppercase">tomes</h1>
          <div className="lg:grid lg:grid-cols-5">
            <div>
              <a href="">
                <img className="glass" src="./tome-1.jpg" alt="" />
              </a>
            </div>
            <div>
              <a href="">
                <img className="glass" src="./tome-1.jpg" alt="" />
              </a>
            </div>
            <div>
              <a href="">
                <img className="glass" src="./tome-1.jpg" alt="" />
              </a>
            </div>
            <div>
              <a href="">
                <img className="glass" src="./tome-1.jpg" alt="" />
              </a>
            </div>
            <div>
              <a href="">
                <img className="glass" src="./tome-1.jpg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default BattleTendency;
