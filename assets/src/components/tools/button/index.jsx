import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      type={props.type}
      className={`text-black bg-white font-bold font-nunitoRegular  rounded-full flex flex-row uppercase px-2 py-2 w-36 justify-center items-center hover:bg-purple-950 hover:text-white hover:transition hover:ease-in-out hover:duration-200 ${props.className}lg:text-lg  lg:w-48 `}
      onClick={props.onClick}
    >
      {props.value}
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
