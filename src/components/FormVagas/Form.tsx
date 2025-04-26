import React from 'react';
import {
  FormularioContainer,
  CampoTexto,
  Botao,
  Titulo
} from './Form.styles';

export default function Form() {
  return (
    <FormularioContainer>
      <Titulo>Filtrar Vagas</Titulo>
      <CampoTexto type="text" placeholder="Digite o título da vaga" />
      <CampoTexto type="text" placeholder="Digite a localização" />
      <Botao type="submit">Buscar</Botao>
    </FormularioContainer>
  );
}
