import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import { makeStyles } from '@material-ui/core/styles';
import {NavLink} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

export default function BasicButtonGroup() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group" fullWidth = "true">
        <Button><span style={{fontFamily: "'Noto Sans JP', sans-serif",fontSize:"1rem"}}><NavLink to = '/main' style = {{textDecoration: "none"}}>Current Projects</NavLink></span></Button>
        <Button><span style={{fontFamily: "'Noto Sans JP', sans-serif",fontSize:"1rem"}}><NavLink to = '/newPage' style = {{textDecoration: "none"}}>SPOC</NavLink></span></Button>
        <Button><span style={{fontFamily: "'Noto Sans JP', sans-serif",fontSize:"1rem"}}><NavLink to = '/newPage' style = {{textDecoration: "none"}}>Imp Links</NavLink></span></Button>
        <Button><span style={{fontFamily: "'Noto Sans JP', sans-serif",fontSize:"1rem"}}><NavLink to = '/newPage' style = {{textDecoration: "none"}}>Social Team</NavLink></span></Button>
      </ButtonGroup>
    </div>
  );
}
