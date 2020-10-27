import React from "react";
import ReactCardCarousel from "react-card-carousel";
import classes from "./card.module.css";
import Cardmenu from '../cardmenu/cardmenu';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import CodeIcon from '@material-ui/icons/Code';
const Card = (props) => {
  const Carousal = React.useRef();

  const handleClick = (index) => {
    Carousal.current.goTo(index)
  }
  return (
    <div>
      <div className={classes.root}>
        <ReactCardCarousel autoplay={true} autoplay_speed={10000} ref={Carousal}>
          <div
            className={classes.media}
          >
            <img src={props.typeimage} alt="type"></img>

            <p className={classes.iconbox}><SportsEsportsIcon onClick={() => window.open("https://slippax.github.io/type-god")} className={classes.demoicon} fontSize="large" /><CodeIcon onClick={() => window.open("https://github.com/slippax/type-god")} className={classes.demoicon} fontSize="large" /></p>
          </div>
          <div
            className={classes.media}

          >

            <img src={props.weatherimage} alt="weather" ></img>

            <p className={classes.iconbox}><SportsEsportsIcon onClick={() => window.open("http://slippax.github.io/weather-grabbr")} className={classes.demoicon} fontSize="large" /><CodeIcon onClick={() => window.open("https://github.com/slippax/weather-grabbr")} className={classes.demoicon} fontSize="large" /></p>
          </div>
          <div
            className={classes.media}
          >

            <img src={props.todozimage} alt="todoz"></img>

            <p className={classes.iconbox}><SportsEsportsIcon onClick={() => window.open("https://slippax.github.io/todoz/")} className={classes.demoicon} fontSize="large" /><CodeIcon onClick={() => window.open("https://github.com/slippax/todoz")} className={classes.demoicon} fontSize="large" /></p>
          </div>
          <div
            className={classes.media}
          >
            <img src={props.ezsensimage} alt="project" ></img>

            <p className={classes.iconbox}><SportsEsportsIcon onClick={() => window.open("https://slippax.github.io/Ez-Sens/")} className={classes.demoicon} fontSize="large" /><CodeIcon onClick={() => window.open("https://github.com/slippax/Ez-Sens")} className={classes.demoicon} fontSize="large" /></p>
          </div>



        </ReactCardCarousel>
        
      </div>
      <div className={classes.menubox}>
          <Cardmenu clicked={(num) => handleClick(num)} />
        </div>
    </div>
  );
};

export default Card;
