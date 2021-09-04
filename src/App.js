import React from 'react';
//import { makeStyles } from '@material-ui/core';
import './App.css';
import Router from './router';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './styling/theme.jsx';
import cgTheme from './styling/cg/cgTheme.jsx';
import gdTheme from './styling/gd/gdTheme.jsx';
import wdTheme from './styling/wd/wdTheme.jsx';

function getThemeText(url) {
  if (url.startsWith('/cg')) {
    return 'cgTheme';
  } else if (url.startsWith('/gd')) {
    return 'gdTheme';
  } else if (url.startsWith('/wd')) {
    return 'wdTheme';
  } else {
    return 'theme';
  }
}

function getTheme(url) {
  console.log(getThemeText(url));

  if (url.startsWith('/cg')) {
    return cgTheme;
  } else if (url.startsWith('/gd')) {
    return gdTheme;
  } else if (url.startsWith('/wd')) {
    return wdTheme;
  } else {
    return theme;
  }
}

function App() {
  const pathname = window.location.pathname;
  //console.log(getThemeText(pathname));
  //console.log(getTheme(pathname));

  return (
    <div className="App">
      <ThemeProvider theme={getTheme(pathname)}>
        <Router />
      </ThemeProvider>
    </div>
  );
}
export default App;