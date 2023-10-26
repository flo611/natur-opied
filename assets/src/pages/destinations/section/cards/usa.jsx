import React from "react";
import data from "./data.json";
import PropTypes, { element } from "prop-types";
import Test from "./card";
import { US } from 'country-flag-icons/react/3x2'

const Usa = () => {
  return (
    <section id="USA">
      <div className="flex w-full justify-center">
      <US title="United States" className="my-6" width={100}/>

      </div>
      <div className="lg:grid lg:grid-cols-3">
      {data.map((element) => {
        if (element.title === "USA") {
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
Usa.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};
export default Usa;
