import React from 'react'
import classes from './sections.module.css'
import Flip from 'react-reveal/Flip';
const sectionheader = (props) => {
    return (
        <Flip cascade top>
        <div className={classes.sectionbox}>
          <div className={classes.section}>
            <h3 className={classes.aboutme} onClick={props.clickedabout}>About</h3>
            <h3 className={classes.seperator}>/</h3>
            <h3 className={classes.projects} onClick={props.clickedprojects}>Projects</h3>
            <h3 className={classes.seperator}>/</h3>
            <h3 className={classes.work} onClick={props.clickedwork}>Work</h3>
            <h3 className={classes.seperator}>/</h3>
            <h3 className={classes.work} onClick={props.clickedcontact}>Contact</h3>
          </div>
          </div>
          </Flip>
    )
}

export default sectionheader
