import { createTheme } from '@mui/material/styles';
import backgroundLight from './img/winery.jpg';
import backgroundDark from './img/winerydark.jpg';

export const getTheme = (mode) =>
  createTheme({
    palette: {
      mode,
      primary: { main: '#864E3F' }, 
      secondary: { main: '#F4E1D2' }, 
      background: { default: mode === 'dark' ? '#121212' : '#fff' },
      text: { 
        primary: mode === 'dark' ? '#fff' : '#000',
      },
    },
    typography: {
      fontFamily: 'Montserrat, Arial, sans-serif',
      h3: { fontWeight: 700, marginBottom: '1rem' },
      h4: { fontWeight: 700, marginBottom: '1rem' },
      h5: { fontWeight: 600, marginBottom: '0.5rem' },
      body1: { lineHeight: 1.6 },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            backgroundImage:
              mode === 'dark'
                ? `url(${backgroundDark})`
    : `url(${backgroundLight})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'background 0.3s ease', 
          },
        },
      },
    },
  });
