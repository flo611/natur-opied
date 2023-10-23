import React from "react";
import PropTypes from "prop-types";
import "../../../../../assets/css/styles.css"


const Button = (props) => {
  return (
    <button
      type={props.type}
      className={` ${props.className}  button `}
     
  
      onClick={props.onClick}
    >
      {props.value}
      
      <div className="buttton-top"></div>
      <div className="button-bottom"></div>
      <div className="button-base"></div>
    </button>
  );
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  className: PropTypes.string,
  value: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
