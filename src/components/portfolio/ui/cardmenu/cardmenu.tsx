import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import CloudIcon from '@material-ui/icons/Cloud';
import KeyboardIcon from '@material-ui/icons/Keyboard';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import GamepadIcon from '@material-ui/icons/Gamepad';
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    link: {
      display: 'flex',
      cursor: 'pointer',
      color: 'black'
    },
    icon: {
      marginRight: theme.spacing(0.5),
      width: 20,
      height: 20,
    },

    breadcrumbs : {
      marginTop: '12px',
marginLeft : '45px',
    }
  }),
);


export default function IconBreadcrumbs(props:any) {

  const classes = useStyles();
   const pressHandler = (num:any) => props.clicked(num);
  return (
    <Breadcrumbs aria-label="breadcrumb" className={classes.breadcrumbs}>
      <Link color="inherit" onClick={()=>(pressHandler(0))}  className={classes.link}>
        <KeyboardIcon className={classes.icon} />
        Type King
      </Link>
      <Link
        color="inherit"
        onClick={()=>(pressHandler(1))}
        className={classes.link}
      >
        <CloudIcon className={classes.icon} />
        Weather Grabbr
      </Link>
      <Link
        color="inherit"
        onClick={()=>(pressHandler(2))}
        className={classes.link}
      >
        <AssignmentTurnedInIcon className={classes.icon} />
        Todoz
      </Link>
      <Link
        color="inherit"
        onClick={()=>(pressHandler(3))}
        className={classes.link}
      >
        <GamepadIcon className={classes.icon} />
        Ez Sens
      </Link>
    </Breadcrumbs>
  );
}
