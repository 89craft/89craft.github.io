import React from 'react';
import {
  Typography,
  makeStyles,
  Paper,
  Grid,
  Box,
} from '@material-ui/core';
import BioPic from '../../media/bioPic.jpg';
import globalStyles from '../../styling/globalStyling.module.css';

const useStyles = makeStyles((theme) => ({
  splashImage: {
    //boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
    //position: 'relative',
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '75%',
    height: '100vh',
    padding: theme.spacing(4, 0),
  },
  splashTextContainer: {
    padding: theme.spacing(16, 12, 16),
  },
  splashTitle: {
    margin: theme.spacing(0, 0, 4),
  },
  splashText: {
    margin: theme.spacing(0, 0, 8),
  },
}));

function Home() {
  const classes = useStyles();

  return (
    <div>
      <Grid container spacing={0}>
        <Grid item xs={6}>
          <Box
            className={classes.splashImage}
            style={{ backgroundImage: `url(${BioPic})` }}
          >
            {/* Increase the priority of the hero background image */}
            <img
              style={{ display: 'none' }}
              src={BioPic}
              alt="Ryan Heal's portrait picture"
            />
          </Box>
        </Grid>
        <Grid item xs={6} className={classes.splashTextContainer}>
          <Typography variant="h2" className={classes.splashTitle}>
            Ryan Heal
          </Typography>
          <Typography variant="body1" className={classes.splashText}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            hendrerit enim ut urna vestibulum bibendum. Vestibulum tempor,
            ipsum in lobortis fringilla, augue elit tempus odio, sit amet
            tincidunt augue nisl et mauris. Etiam tempor mauris nisi, sed
            maximus felis tincidunt et.
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}
export default Home;