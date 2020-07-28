import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ReactCardCarousel from "react-card-carousel";

const card = (props) => {
  const styles = makeStyles({
    root: {
      position: "relative",
      height: "35vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
      paddingTop: '45px',
    },
    media: {
      height: "300px",
      width: "220px",
      paddingTop: "20px",
      textAlign: "center",
      background: "#7A8E8E",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box",
    },
  });
  const classes = styles();
  return (
    <div className={classes.root}>
      <ReactCardCarousel autoplay={true} autoplay_speed={3000}>
        <div className={classes.media} onClick={()=>window.open('https://slippax.github.io/Ez-Sens/')}>
          <p>Ez Sens</p>
          <img src={props.ezsensimage} alt="project"></img>
        </div>
        <div className={classes.media} onClick={()=>window.open('https://github.com/slippax/weather-grabbr')}>
          <p>Weather Grabbr</p>
          <img src={props.weatherimage} alt="weather"></img>
        </div>
        <div className={classes.media}>Habit Tracker</div>
      </ReactCardCarousel>
    </div>
  );
};

export default card;
