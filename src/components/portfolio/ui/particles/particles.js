import React from "react";
import Particles from "react-particles-js";

export default () => (
  <div
    style={{
      width: "100%",
      height: "100%",
    }}
  >
    <Particles
    height={window.outerHeight}
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
