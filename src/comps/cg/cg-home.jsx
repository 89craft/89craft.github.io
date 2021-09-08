import React from 'react';
import {
  Typography,
  makeStyles,
  Paper,
  Grid,
  Box,
} from '@material-ui/core';
import Placeholder from '../../media/cg/momsIcosphere.png';
import globalStyles from '../../styling/globalStyling.module.css';

const useStyles = makeStyles((theme) => ({
  splashImage: {
    //boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
    //position: 'relative',
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    width: '95%',
    height: '100vh',
    padding: theme.spacing(16, 12, 16),
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
    <div className={`${globalStyles.centerItems}`}>
      <Box
        className={classes.splashImage}
        style={{ backgroundImage: `url(${Placeholder})` }}
      >
        {/* Increase the priority of the hero background image */}
        <img
          style={{ display: 'none' }}
          src={Placeholder}
          alt="Ryan Heal's portrait picture"
        />
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
      </Box>
    </div>
  );
}
export default Home;