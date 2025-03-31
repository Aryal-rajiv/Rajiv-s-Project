import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0f111a', // Dark header/footer color
    },
    secondary: {
      main: '#f5f7fc', //light color
    },
    background: {
        default: '#181d28', //Dark bg color
        paper: '#1e2130',
    },
    text:{
        primary: '#ffffff',
        secondary: '#d7d7d7',
    },

    mode: 'light', // or 'dark'
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
});