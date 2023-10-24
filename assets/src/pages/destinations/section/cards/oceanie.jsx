import React from "react";

import data from "./data.json";
import PropTypes, { element } from "prop-types";
import Test from "./card";

const Oceanie = () => {
  return (
    <section id="Oceanie">
     <div className="flex w-full justify-center ">
        <img
  alt="Australia"
  src="http://purecatamphetamine.github.io/country-flag-icons/3x2/AU.svg"
  width={100}
  height={100}/>

      </div>
      <div className="lg:grid lg:grid-cols-3">
      {data.map((element) => {
        if (element.title === "Océanie") {
          return (
            <Test
              title={element.localisation}
              subtitle={element.subtitle}
              description={element.description}
              alldescription={element.alldescription}
              icon={element.icon}
              photo={element.photo}
              lien={element.lien}
              gpx={element.gpx}
              onClick={() => showContent(element)}
            />
          );
        }
      })}
      </div>
      </section>
  );
};
Oceanie.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};
export default Oceanie;
