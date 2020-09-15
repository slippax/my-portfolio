import React from "react";
import ReactCardCarousel from "react-card-carousel";
import classes from "./card.module.css";

const card = (props) => {
  return (
    <div className={classes.root}>
      <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
        <div
          className={classes.media}
          
        >
          <img src={props.ezsensimage} alt="project" onClick={() => window.open("https://slippax.github.io/Ez-Sens/")}></img>
          <p>Mouse sensitivity converter for common FPS titles.</p>
        </div>
        <div
          className={classes.media}
         
        >
          <img src={props.weatherimage} alt="weather"  onClick={() => window.open("http://slippax.github.io/weather-grabbr")}></img>
          <p>Weather data fetcher using open weather API.</p>
        </div>
        <div
          className={classes.media}
          
        >
          <img src={props.todozimage} alt="todoz" onClick={() => window.open("https://slippax.github.io/todoz/")}></img>
          <p>Todo List using Redux</p>
        </div>
        <div
          className={classes.media}
          
        >
          <img src={props.typeimage} alt="type" onClick={() => window.open("https://slippax.github.io/type-god")}></img>
          <p>Typing challenge using google firebase auth & realtime database</p>
        </div>
      </ReactCardCarousel>
    </div>
  );
};

export default card;
