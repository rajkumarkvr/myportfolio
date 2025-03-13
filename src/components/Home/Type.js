import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Backend Student",
          "I love learning 😊",
          "Code, Debug, Repeat 🚀",
          "Error 404: Giving up not found",
          "Crafting scalable solutions, one line at a time",
          "I debug, therefore I exist",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
