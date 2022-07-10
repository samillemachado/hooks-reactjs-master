/* eslint-disable react/no-children-prop */
import { Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import AddchartIcon from '@mui/icons-material/Addchart';
import AddIcon from '@mui/icons-material/Add';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Titulo from '../../components/Titulo';
import ButtonFloat from '../../components/ButtonFloat';
import CardContent from '../../components/CardContent';
import TabelaDados from '../../components/TabelaDados';

const Listagem = () => {
  return (
    <Container maxWidth="lg">
      <Titulo
        icone={<AddchartIcon sx={{ fontSize: '50px' }} />}
        titulo="Listagem"
      />
      <CardContent>
        <TabelaDados />
      </CardContent>
      <Link to="/">
        {' '}
        <ButtonFloat esquerda iconeL={<ArrowBackIcon />} />{' '}
      </Link>
      <ButtonFloat iconeR={<AddIcon />} />
    </Container>
  );
};

export default Listagem;
