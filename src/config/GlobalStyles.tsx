import React from 'react';
import { GlobalStyles } from '@mui/material';

const StyledGlobal: React.FC = () => {
  return (
    <GlobalStyles
      styles={{
        body: {
          background:
            'linear-gradient(120deg, #ffffff 44.9%, #12142e 45%) no-repeat fixed',
          fontFamily: 'Poppins, sans-serif',
        },
      }}
    />
  );
};

export default StyledGlobal;
