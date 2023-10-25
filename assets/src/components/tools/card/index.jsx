import React from "react";
import PropTypes from "prop-types";
import Button from "../button";


const Plaque =(props) =>{
    return(

        <>
        
        <div class="w-60 h-80 bg-gray-200 p-3 flex flex-col gap-1 rounded-2xl">
  <div class="h-48 bg-gray-700 rounded-xl"></div>
  <div class="flex flex-col gap-4">
    <div class="flex flex-row justify-between">
      <div class="flex flex-col">
        <span class="text-xl font-bold">Title</span>
        <p class="text-xs text-gray-700">description</p>
      </div>
      <span class="font-bold  text-red-600">new</span>
    </div>
    <Button  type={props.type} className={props.className} />
  </div>
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
export default Plaque;

