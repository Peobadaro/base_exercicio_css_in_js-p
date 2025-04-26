import styled from 'styled-components';

export const HeroContainer = styled.section`
  background: linear-gradient(135deg, ${(props) => props.theme.corPrimaria}, ${(props) => props.theme.corSecundaria});
  color: white;
  padding: 4rem 2rem;
  text-align: center;
  border-radius: 10px;
  margin: 2rem auto;
  max-width: 800px;
`;

export const HeroTitulo = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1rem;
`;

export const HeroTexto = styled.p`
  font-size: 1.2rem;
`;
