import { Stack, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface TituloProps {
  titulo: string;
  icone: ReactNode;
}

const Titulo: React.FC<TituloProps> = ({ titulo, icone }) => {
  return (
    <Stack direction="row" alignItems="center" marginTop={3}>
      <span>{icone}</span>
      <Typography variant="h3">{titulo}</Typography>
    </Stack>
  );
};

export default Titulo;
