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
          <p className={classes.title}>Ez-Sens (FPS Sens Converter)</p>
          <img src={props.ezsensimage} alt="project" onClick={() => window.open("https://slippax.github.io/Ez-Sens/")}></img>
          <p>Made with React.</p>
        </div>
       
        <div
          className={classes.media}
         
        >
           <p className={classes.title}>Weather Grabbr</p>
          <img src={props.weatherimage} alt="weather"  onClick={() => window.open("http://slippax.github.io/weather-grabbr")}></img>
          <p>Using open weather API & React</p>
        </div>
        <div
          className={classes.media}
          
        >
          <p className={classes.title}>Todoz</p>
          <img src={props.todozimage} alt="todoz" onClick={() => window.open("https://slippax.github.io/todoz/")}></img>
          <p>Made with React & Redux</p>
        </div>
        <div
          className={classes.media}
          
        >
          <p className={classes.title}>Type King</p>
          <img src={props.typeimage} alt="type" onClick={() => window.open("https://slippax.github.io/type-god")}></img>
          <p>Using Google Firebase (Realtime & Auth) + React</p>
        </div>
      </ReactCardCarousel>
    </div>
  );
};

export default card;
