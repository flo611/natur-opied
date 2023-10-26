"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeAnimations = () => {
  return (
    <TypeAnimation
      sequence={[
        "Bonjour et bienvenue sur le site Naturopied!",
        1000,
        // Same substring at the start will only be typed out once, initially
       
      ]}
      wrapper="span"
      speed={40}
      style={{ display: "contents" }}
      repeat={Infinity}
    />
  );
};

export default TypeAnimations;
