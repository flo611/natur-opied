import React from "react";
import PropTypes from "prop-types";
import Button from "../button";


const Card =(props) =>{
    return(

        <>
        
<div class="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-sky-400 transition-shadow">
  <div class="w-52 h-40 bg-sky-300 rounded-2xl"></div>
  <div class="">
      <p class="font-extrabold">Card title</p>
      <p class="">4 popular types of cards in UI design.</p>
  </div>
  <Button className={`${props.className}`}/>
</div>
        
        </>
    );
};

Card.propTypes = {
    type: PropTypes.string.isRequired,
    className: PropTypes.string,
    value: PropTypes.string,
    onClick: PropTypes.func,
  };
export default Card;

