import { createTheme } from '@material-ui/core/styles';

/*
 * The theme pallette containing the default website colors
 */
const theme = createTheme({
  palette: {
    spacing: '8px',
    primary: {
      //light: '#ffbe6d',
      main: '#00ff00',
      //dark: '#c25e09',
      //contrastText: '#000000',
    },
    secondary: {
      //light: '#ffffff',
      main: '#0000ff',
      //dark: '#ffffff',
      //contrastText: '#000000',
    },
    text: { //Typography
      primary: 'rgba(0, 0, 0, 0.87)',
      secondary: 'rgba(0, 0, 0, 0.54)',
      disabled: 'rgba(0, 0, 0, 0.38)',
    },
    action: { //Buttons
      active: 'rgba(0, 0, 0, 0.54)',
      hover: 'rgba(0, 0, 0, 0.04)',
      selected: 'rgba(0, 0, 0, 0.08)',
      disabled: 'rgba(0, 0, 0, 0.26)',
      disabledBackground: 'rgba(0, 0, 0, 0.12)',
    },
    background: { //Background
      default: '#ff0000',//'#fafafa',
      paper: '#fff',
    },
    divider: 'rgba(0, 0, 0, 0.12)', //Divider
  },
});

export default theme;