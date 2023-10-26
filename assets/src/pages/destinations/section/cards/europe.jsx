import React from "react";

import data from "./data.json";
import PropTypes, { element } from "prop-types";
import Card from "./card";

import { EU } from 'country-flag-icons/react/3x2'



const Europe = () => {
  return (
    <section id="Europe">
      <div className="flex w-full justify-center pt-20 ">
      <EU title="European Union" className="my-6" width={100}/>
      </div>
      <div className="lg:grid lg:grid-cols-3">
        {data.map((element) => {
          if (element.title === "Europe") {
            return (
              <Card
                title={element.localisation}
                subtitle={element.subtitle}
                description={element.description}
                alldescription={element.alldescription}
                icon={element.icon}
                photo={element.photo}
                lien={element.lien}
                gpx={element.gpx}
                best={element.best}
                onClick={() => showContent(element)}
              />
            );
          }
        })}
      </div>
    </section>
  );
};
Europe.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};
export default Europe;
