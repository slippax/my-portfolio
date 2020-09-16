import React from 'react'
import classes from './sections.module.css'
import Flip from 'react-reveal/Rotate';
const sectionheader = (props) => {
    return (
        <Flip top left>
        <div className={classes.sectionbox}>
          <div className={classes.section}>
          <h3 className={classes.aboutme} onClick={props.clickedhome}>Home</h3>
            <h3 className={classes.aboutme} onClick={props.clickedabout}>About</h3>

            <h3 className={classes.projects} onClick={props.clickedprojects}>Projects</h3>

            <h3 className={classes.work} onClick={props.clickedwork}>Work</h3>

            <h3 className={classes.work} onClick={props.clickedcontact}>Contact</h3>
            <div></div>
          </div>
          </div>
          </Flip>
    )
}

export default sectionheader
