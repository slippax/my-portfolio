import React from "react";
import Particles from "react-tsparticles";
import classes from "./particles.module.css";
const particles = () => {
  return (
    <div>
      <Particles
        className={classes.Particles}
        options={{
          background: {
            image: "",
            position: "50% 50%",
            repeat: "no-repeat",
            size: "cover",
            opacity: 1,
          },
          detectRetina: true,
          fpsLimit: 60,
          infection: {
            cure: false,
            delay: 0,
            enable: false,
            infections: 0,
            stages: [],
          },
          interactivity: {
            detectsOn: "canvas",
            events: {
              onClick: { enable: false, mode: "push" },
              onDiv: { ids: [], enable: false, mode: [], type: "circle" },
              onHover: {
                enable: false,
                mode: "repulse",
                parallax: { enable: false, force: 2, smooth: 10 },
              },
              resize: true,
            },
            modes: {
              attract: { distance: 200, duration: 0.4, speed: 1 },
              bubble: { distance: 400, duration: 2, opacity: 0.3, size: 30 },
              connect: { distance: 80, links: { opacity: 0.3 }, radius: 60 },
              grab: { distance: 400, links: { opacity: 0.3 } },
              push: { quantity: 4 },
              remove: { quantity: 2 },
              repulse: { distance: 200, duration: 0.4, speed: 1 },
              slow: { factor: 3, radius: 200 },
              trail: { delay: 1, quantity: 1 },
            },
          },
          particles: {
            collisions: { enable: false, mode: "bounce" },
            color: {
              value: "#ffffff",
              animation: { enable: false, speed: 1, sync: true },
            },
            move: {
              angle: 90,
              attract: { enable: false, rotate: { x: 600, y: 1200 } },
              direction: "none",
              enable: true,
              noise: {
                delay: { random: { enable: false, minimumValue: 0 }, value: 0 },
                enable: false,
              },
              outMode: "destroy",
              random: false,
              speed: 4,
              straight: false,
              trail: {
                enable: false,
                length: 10,
                fillColor: { value: "#000000" },
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: { enable: true, area: 800, factor: 1000 },
              limit: 0,
              value: 0,
            },

            size: {
              animation: {
                destroy: "max",
                enable: true,
                minimumValue: 0.1,
                speed: 4,
                startValue: "min",
                sync: true,
              },
              random: { enable: false, minimumValue: 1 },
              value: 15,
            },
          },
          pauseOnBlur: true,
          emitters: {
            direction: "top",
            life: {},
            rate: { quantity: 0.9, delay: 0.6 },
            size: { mode: "percent", height: 0, width: 100 },
            position: { x: 50, y: 100 },
          },
        }}
      />
    </div>
  );
};

export default particles;
