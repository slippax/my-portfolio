import React from 'react'
import Container from "@material-ui/core/Container";
import classes from './workxp.module.css';

const workxp = () => {
    return (
            <Container maxWidth="sm" className={classes.Container}>
                <h3 className={classes.workXP}>Work Experience</h3>
                <p><strong>Apple</strong></p>
                <p><strong>Mac Genius (2018-Present)</strong></p>
                <p>Repairing Macbooks and iPhones as well as coaching a team of specialists to provide memorable customer experiences. </p>
                <p><strong>Family Room Specialist (2015-2018)</strong></p>
                <p>Appointment servicing for customers with various Apple product issues. Discovering needs for customers and repairing customer relationships.</p>
                <p><strong>Staples</strong></p>
                <p><strong>Technician (2013-2015)</strong></p>
                <p>Technician for servicing customer technology such as repairing desktops, laptops and tablets.</p>
            </Container>
        
    )
}

export default workxp
