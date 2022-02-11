import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#ce3f3e',
    },
    secondary: {
      main: '#b7c6e4',
    },
    error: {
      main: red.A400,
    },
  },
});

export default theme;