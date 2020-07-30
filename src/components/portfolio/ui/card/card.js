import React from "react";
import ReactCardCarousel from "react-card-carousel";
import classes from "./card.module.css";

const card = (props) => {
  return (
    <div className={classes.root}>
      <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
        <div
          className={classes.media}
          onClick={() => window.open("https://slippax.github.io/Ez-Sens/")}
        >
          <p>Ez Sens</p>
          <img src={props.ezsensimage} alt="project"></img>
        </div>
        <div
          className={classes.media}
          onClick={() =>
            window.open("http://slippax.github.io/weather-grabbr")
          }
        >
          <p>Weather Grabbr</p>
          <img src={props.weatherimage} alt="weather"></img>
        </div>
        <div className={classes.media}>Habit Tracker (Under Construction)</div>
      </ReactCardCarousel>
    </div>
  );
};

export default card;
