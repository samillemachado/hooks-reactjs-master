import {
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@mui/material';
import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

const dados = [
  {
    id: 1,
    nome: 'João',
    dataNascimento: '01/01/1995',
    dataEntrevista: '01/06/2022',
    resultado: [
      {
        perfil: 'Analista',
        pontucao: 28,
      },
      {
        perfil: 'Anmigável',
        pontucao: 16,
      },
      {
        perfil: 'Autoritário',
        pontucao: 14,
      },
      {
        perfil: 'Expressivo',
        pontucao: 22,
      },
    ],
  },
  {
    id: 2,
    nome: 'Maria',
    dataNascimento: '01/05/1995',
    dataEntrevista: '01/06/2022',
    resultado: [
      {
        perfil: 'Analista',
        pontucao: 28,
      },
      {
        perfil: 'Anmigável',
        pontucao: 16,
      },
      {
        perfil: 'Autoritário',
        pontucao: 14,
      },
      {
        perfil: 'Expressivo',
        pontucao: 22,
      },
    ],
  },
];

const TabelaDados = () => {
  return (
    <TableContainer>
      <Table stickyHeader aria-label="sticky table">
        <TableHead>
          <TableRow>
            <TableCell variant="head">
              <Typography variant="h6">ID</Typography>
            </TableCell>
            <TableCell variant="head">
              <Typography variant="h6">Nome Completo</Typography>
            </TableCell>
            <TableCell variant="head">
              <Typography variant="h6">Data Nascimento</Typography>
            </TableCell>
            <TableCell variant="head">
              <Typography variant="h6">Data Entrevista</Typography>
            </TableCell>
            <TableCell variant="head">
              <Typography variant="h6">Resultado</Typography>
            </TableCell>
            <TableCell variant="head">
              <Typography variant="h6">Ações</Typography>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {dados.map((dado) => (
            <TableRow key={dado.id}>
              <TableCell variant="body">{dado.id}</TableCell>
              <TableCell variant="body">{dado.nome}</TableCell>
              <TableCell variant="body">{dado.dataNascimento}</TableCell>
              <TableCell variant="body">{dado.dataEntrevista}</TableCell>
              <TableCell>
                {dado.resultado.map((resultado) => (
                  <Stack direction="column" key={resultado.perfil}>
                    <Typography variant="body2">{resultado.perfil}</Typography>
                    <Typography variant="body2">
                      {resultado.pontucao}
                    </Typography>
                  </Stack>
                ))}
              </TableCell>
              <TableCell>
                <IconButton aria-label="delete" color="error" size="large">
                  <DeleteIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TabelaDados;
