import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Button,
  IconButton,
  Drawer,
  //Link,
  MenuItem,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import React, { useState, useEffect } from 'react';
//import { Link as RouterLink } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import globalStyles from '../styling/globalStyling.module.css';

const menuOptions = [
  {
    label: '3D Graphics',
    href: '/?/cg',
  },
  {
    label: 'Game Development',
    href: '/?/gd',
  },
  {
    label: 'Web Development',
    href: '/?/wd',
  },
  {
    label: 'Blog',
    href: '/?/blog',
  },
  {
    label: 'About',
    href: '/?/about',
  },
];

// Styles to be changed - made navbar responsive for mobile use
const useStyles = makeStyles((theme) => ({
  header: {
    padding: theme.spacing(0),
    position: 'fixed',
    boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.25)',
  },
  name: {
    fontFamily: 'Laila, sans-serif',
    fontWeight: 400,
  },
  menuButton: {
    fontFamily: 'Laila, sans-serif',
    fontWeight: 400,
    //size: '18px',
    padding: theme.spacing(0.5, 3),
    margin: theme.spacing(0, 1),
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  drawerContainer: {
    padding: '20px 30px',
  },
}));

function HEADER() {
  const classes = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;

  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };
    setResponsiveness();
    window.addEventListener('resize', () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={classes.toolbar}>
        <MyName />
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar className={classes.toolbar}>
        <MyName />
        <Drawer
          {...{
            anchor: 'right',
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={classes.drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>
        <div>
          <IconButton
            {...{
              edge: 'false',
              color: 'inherit',
              'aria-label': 'menu',
              'aria-haspopup': 'true',
              onClick: handleDrawerOpen,
            }}
          >
            <MenuIcon />
          </IconButton>
        </div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return menuOptions.map(({ label, href }) => {
      return (
        <Link
          key={label}
          {...{
            to: href,
            color: 'inherit',
            style: { textDecoration: 'none' },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const MyName = () => {
    const classes = useStyles();
    return (
      <div>
        <a href="/" style={{ textDecoration: 'none' }}>
          <Typography variant="h6" component="h1" className={classes.name}>
            R.H.
          </Typography>
        </a>
      </div>
    );
  };

  const getMenuButtons = () => {
    return menuOptions.map(({ label, href }) => {
      return (
        <Button
          key={label}
          {...{
            key: label,
            color: 'inherit',
            href: href,
            className: classes.menuButton,
          }}
        >
          {label}
        </Button>
      );
    });
  };

  return (
    <header>
      <AppBar className={classes.header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}

export default HEADER;
