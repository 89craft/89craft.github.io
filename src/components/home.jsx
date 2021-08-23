import React, { useState } from 'react';
import {
  Typography,
  CssBaseline,
  makeStyles,
  Paper
} from '@material-ui/core';
//import jwt_decode from 'jwt-decode';
import Footer from './footer';
import globalStyles from './globalStyling.module.css';

const useStyles = makeStyles((theme) => ({}));

function PH_Content() {
  const elements = ['0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0', '0'];
  return (
    <div>
      {elements.map((value, index) => {
        return <Typography variant="h4" component="h1">
          {value}
        </Typography>
      })}
    </div>
  )
}

function Home() {
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      <Typography variant="h6" component="h1">
        R.H.
      </Typography>
      <Paper className={`${classes.Paper} ${globalStyles.smlPgContainer}`}>
        <PH_Content />
      </Paper>
    </div>
  );
}
export default Home;