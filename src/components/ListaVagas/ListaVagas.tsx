import React from 'react';
import Vaga from '../Vaga/Vaga';
import { ListaContainer } from './ListaVagas.styles';

const listaDeVagas = [
  { titulo: 'Desenvolvedor Front-End', localizacao: 'São Paulo, SP' },
  { titulo: 'UX Designer', localizacao: 'Remoto' },
  { titulo: 'Product Owner', localizacao: 'Belo Horizonte, MG' },
];

export default function ListaVagas() {
  return (
    <ListaContainer>
      {listaDeVagas.map((vaga, index) => (
        <Vaga
          key={index}
          titulo={vaga.titulo}
          localizacao={vaga.localizacao}
        />
      ))}
    </ListaContainer>
  );
}
