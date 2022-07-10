/* eslint-disable react/jsx-no-useless-fragment */
import { Fab } from '@mui/material';
import React, { ReactNode } from 'react';

interface ButtonFloatProps {
  esquerda?: boolean;
  iconeL?: ReactNode;
  iconeR?: ReactNode;
}

const ButtonFloat: React.FC<ButtonFloatProps> = ({
  esquerda,
  iconeL,
  iconeR,
}) => {
  return (
    <>
      {esquerda ? (
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: 'fixed', left: '2em', bottom: '2em' }}
        >
          {iconeL}
        </Fab>
      ) : (
        <Fab
          color="primary"
          aria-label="add"
          sx={{ position: 'fixed', right: '2em', bottom: '2em' }}
        >
          {iconeR}
        </Fab>
      )}
    </>
  );
};

export default ButtonFloat;
