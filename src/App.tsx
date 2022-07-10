import { createTheme, ThemeProvider } from '@mui/material';
import React from 'react';
import StyledGlobal from './config/GlobalStyles';
import AppRoutes from './routes/AppRoutes';

const meuTema = createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
    h6: {
      fontSize: '18px',
      fontWeight: '700',
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={meuTema}>
      <StyledGlobal />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
