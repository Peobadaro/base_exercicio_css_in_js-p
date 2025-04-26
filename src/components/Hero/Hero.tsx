import React from 'react';
import { HeroContainer, HeroTitulo, HeroTexto } from './Hero.styles';

export default function Hero() {
  return (
    <HeroContainer>
      <HeroTitulo>Encontre a vaga dos seus sonhos</HeroTitulo>
      <HeroTexto>Filtre por localização e encontre vagas incríveis na sua região.</HeroTexto>
    </HeroContainer>
  );
}
