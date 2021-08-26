import { createTheme } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';

/*
 * The theme pallette containing the default website colors
 */
const theme = createTheme({
  palette: {
    spacing: '8px',
    primary: {
      //light: '#ffbe6d',
      main: '#aaaaaa',//'rgba(0, 0, 0, 0.67)',
      //dark: '#c25e09',
      //contrastText: '#000000',
    },
    secondary: {
      //light: '#ffffff',
      main: '#555555',//'rgba(0, 0, 0, 0.33)',
      //dark: '#ffffff',
      //contrastText: '#000000',
    },
    error: red,
    contrastThreshold: 3,
    tonalOffset: 0.2,
    text: { //Typography
      primary: '#212121',//'rgba(0, 0, 0, 0.87)',
      secondary: '#757575',//'rgba(0, 0, 0, 0.54)',
      disabled: '#9e9e9e',//'rgba(0, 0, 0, 0.38)',
    },
    action: { //Buttons
      active: '#757575',//'rgba(0, 0, 0, 0.54)',
      hover: '#f5f5f5',//'rgba(0, 0, 0, 0.04)',
      selected: '#ebebeb',//'rgba(0, 0, 0, 0.08)',
      disabled: '#bdbdbd',//'rgba(0, 0, 0, 0.26)',
      disabledBackground: '#e0e0e0',//'rgba(0, 0, 0, 0.12)',
    },
    background: { //Background
      default: '#fafafa',
      paper: '#fff',
    },
    divider: '#e0e0e0',//'rgba(0, 0, 0, 0.12)', //Divider
  },
});

export default theme;