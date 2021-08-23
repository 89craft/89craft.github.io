import React, { useState } from 'react';
import {
  Typography,
  CssBaseline,
  makeStyles,
} from '@material-ui/core';
//import jwt_decode from 'jwt-decode';
import CG_Footer from './cg-footer';
import globalStyles from '../globalStyling.module.css';

const useStyles = makeStyles((theme) => ({}));

function Home() {
  const classes = useStyles();

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
      <CG_Footer />
    </div>
  );
}
export default Home;