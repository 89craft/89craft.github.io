import React from 'react';
import {
  Typography,
  makeStyles,
} from '@material-ui/core';
import globalStyles from '../../styling/globalStyling.module.css';

const useStyles = makeStyles((theme) => ({}));

function Home() {
  const classes = useStyles();

  return (
    <div style={{ textAlign: 'center' }}>
      <Typography variant="h6" component="h1" className={classes.name}>
        R.H.
      </Typography>
      <Typography variant="h6" component="h1" className={classes.name}>
        Web Development
      </Typography>
      <Typography variant="h6" component="h1" className={classes.name}>
        Blog
      </Typography>
    </div>
  );
}
export default Home;