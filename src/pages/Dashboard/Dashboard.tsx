/* eslint-disable react/no-children-prop */
import { Container } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';
import BarChartIcon from '@mui/icons-material/BarChart';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Titulo from '../../components/Titulo';
import ButtonFloat from '../../components/ButtonFloat';
import CardContent from '../../components/CardContent';
import GraficoPie from '../../components/GraficoPie';
import GraficoBar from '../../components/GraficoBar';

const Dashboard = () => {
  return (
    <Container maxWidth="lg">
      <Titulo
        icone={<BarChartIcon sx={{ fontSize: '50px' }} />}
        titulo="Dashboard"
      />
      <CardContent>
        <GraficoBar />
      </CardContent>
      <CardContent>
        <GraficoPie />
      </CardContent>
      <Link to="/listagem">
        {' '}
        <ButtonFloat iconeR={<ArrowForwardIcon />} />{' '}
      </Link>
    </Container>
  );
};

export default Dashboard;
