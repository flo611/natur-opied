import React from "react";

const Partie = () => {
  return (
    <>
      <section>
        {" "}
        <div className="h-screen grid grid-cols-2 py-20 ">
          <div className="glass-logo flex items-center jusstify-center">
            <a href="http://localhost:8000/phantomblood">
              <img
                src="/medias/logo/p1-logo.png"
                alt="part1"
                width={300}
                height={300}
                className="p-5"
              />
            </a>
          </div>
          <div className="glass-logo flex items-center jusstify-center">
            <a href="http://localhost:8000/battletendency">
              <img
                src="/medias/logo/p2-logo.png"
                alt="part2"
                width={300}
                height={300}
                className="p-5"
              />
            </a>
          </div>
          <div className="glass-logo flex items-center jusstify-center">
            <a href="http://localhost:8000/stardustcrusaders">
              <img
                src="/medias/logo/p3-logo.png"
                alt="part3"
                width={300}
                height={300}
                className="p-5"
              />
            </a>
          </div>
          <div className="glass-logo flex items-center jusstify-center">
            <a href="">
              <img
                src="/medias/logo/p4-logo.png"
                alt="part4"
                width={300}
                height={300}
                className="p-5"
              />
            </a>
          </div>
          <div className="glass-logo flex items-center jusstify-center">
            <a href="">
              <img
                src="/medias/logo/p5-logo.png"
                alt="part5"
                width={300}
                height={300}
                className="p-5"
              />
            </a>
          </div>
          <div className="glass-logo flex items-center jusstify-center">
            <a href="">
              <img
                src="/medias/logo/p6-logo.png"
                alt="part6"
                width={300}
                height={300}
                className="p-5"
              />
            </a>
          </div>
          <div className="glass-logo flex items-center jusstify-center">
            <a href="">
              <img
                src="/medias/logo/p7-logo.png"
                alt="part7"
                width={300}
                height={300}
                className="p-5"
              />
            </a>
          </div>
          <div className="glass-logo flex items-center jusstify-center">
            <a href="">
              <img
                src="/medias/logo/p8-logo.png"
                alt="part8"
                width={300}
                height={300}
                className="p-5"
              />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};
export default Partie;
