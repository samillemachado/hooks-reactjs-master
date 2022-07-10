/* eslint-disable react/jsx-curly-brace-presence */
import React from 'react';
import { Chart } from 'react-google-charts';

export const data = [
  ['Perfil', 'Percentual'],
  ['Analítico', 16],
  ['Amigável', 11],
  ['Autoritário', 2],
  ['Expressivo', 2],
];
export const options = {
  title: 'Pontuação Total sobre Perfis Analisados',
};
const GraficoBar = () => {
  return (
    <Chart
      chartType="BarChart"
      data={data}
      options={options}
      width={'100%'}
      height={'400px'}
    />
  );
};

export default GraficoBar;
