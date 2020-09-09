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
          <img src={props.ezsensimage} alt="project"></img>
        </div>
        <div
          className={classes.media}
          onClick={() => window.open("http://slippax.github.io/weather-grabbr")}
        >
          <img src={props.weatherimage} alt="weather"></img>
        </div>
        <div
          className={classes.media}
          onClick={() => window.open("https://slippax.github.io/todoz/")}
        >
          <img src={props.todozimage} alt="todoz"></img>
        </div>
        <div
          className={classes.media}
          onClick={() => window.open("https://slippax.github.io/type-god")}
        >
          <img src={props.typeimage} alt="type"></img>
        </div>
      </ReactCardCarousel>
    </div>
  );
};

export default card;
