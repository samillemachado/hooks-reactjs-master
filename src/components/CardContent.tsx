import { Grid, Paper } from '@mui/material';
import React, { ReactNode } from 'react';

interface CardContentProps {
  children: ReactNode;
}

const CardContent: React.FC<CardContentProps> = ({ children }) => {
  return (
    <Paper
      elevation={3}
      sx={{ marginTop: '30px', marginBottom: '30px', padding: '20px' }}
    >
      <Grid container>
        <Grid item sx={{ width: '100%' }} xl={12}>
          {children}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CardContent;
