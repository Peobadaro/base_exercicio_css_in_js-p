import React from 'react';
import { CardVaga, TituloVaga, InfoVaga, Localizacao, BotaoDetalhes } from './Vaga.styles';

type Props = {
  titulo: string;
  localizacao: string;
};

export default function Vaga({ titulo, localizacao }: Props) {
  return (
    <CardVaga>
      <TituloVaga>{titulo}</TituloVaga>
      <InfoVaga>
        <Localizacao>{localizacao}</Localizacao>
        <BotaoDetalhes>Ver detalhes</BotaoDetalhes>
      </InfoVaga>
    </CardVaga>
  );
}
