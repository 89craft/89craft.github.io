import React, { useState } from 'react';
import {
  Typography,
  CssBaseline,
  makeStyles,
} from '@material-ui/core';
//import jwt_decode from 'jwt-decode';
import globalStyles from '../../styling/globalStyling.module.css';

const useStyles = makeStyles((theme) => ({}));

function Home() {
  const classes = useStyles();
  console.log("cg about");

  return (
    <div style={{ textAlign: 'center' }}>
      <CssBaseline />
      <Typography variant="h6" component="h1" className={classes.name}>
        R.H.
      </Typography>
      <Typography variant="h6" component="h1" className={classes.name}>
        3D Graphics
      </Typography>
      <Typography variant="h6" component="h1" className={classes.name}>
        About
      </Typography>
    </div>
  );
}
export default Home;