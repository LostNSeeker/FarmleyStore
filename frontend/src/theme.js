import { createTheme } from '@mui/material'

const theme = createTheme({
  palette: {
    primary: {
      main: '#4a6741', // Natural green for brand identity
      light: '#6b8e5c',
      dark: '#2c4229',
    },
    secondary: {
      main: '#d4a373', // Warm brown for accent
      light: '#e6c9a8',
      dark: '#8b6b4a',
    },
    background: {
      default: '#f8f5f1', // Warm light beige
      paper: '#ffffff',
    },
    text: {
      primary: '#2c4229', // Dark green for main text
      secondary: '#666666', // Gray for secondary text
    },
  },
  typography: {
    fontFamily: '"Poppins", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
      fontSize: '2.5rem',
    },
    h2: {
      fontWeight: 600,
      fontSize: '2rem',
    },
    h3: {
      fontWeight: 500,
      fontSize: '1.75rem',
    },
    h4: {
      fontWeight: 500,
      fontSize: '1.5rem',
    },
    h5: {
      fontWeight: 500,
      fontSize: '1.25rem',
    },
    h6: {
      fontWeight: 500,
      fontSize: '1rem',
    },
    subtitle1: {
      fontSize: '1.1rem',
      lineHeight: 1.6,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
          fontWeight: 500,
          padding: '8px 24px',
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: '0px 2px 4px rgba(0,0,0,0.1)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0px 4px 12px rgba(0,0,0,0.05)',
        },
      },
    },
  },
})

export default theme 