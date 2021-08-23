import React, { useState } from 'react';
import {
  Typography,
  CssBaseline,
  makeStyles,
} from '@material-ui/core';
//import jwt_decode from 'jwt-decode';
import WD_Footer from './wd-footer';
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
        Web Development
      </Typography>
      <Typography variant="h6" component="h1" className={classes.name}>
        About
      </Typography>
      <WD_Footer />
    </div>
  );
}
export default Home;