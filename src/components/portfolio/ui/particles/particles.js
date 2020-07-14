import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div
    style={{
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
    }}
  >
    <Particles
      params={{
        particles: {
          number: {
            value: 10,
          },
          size: {
            value: 2,
          },
          color: {
            value: "#080808",
          },
          line_linked: {
            enable: false,
          },
        },
      }}
    />
  </div>
);
