import styled from 'styled-components';

export const CardVaga = styled.div`
  background-color: ${(props) => props.theme.fundo};
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`;

export const TituloVaga = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.75rem;
  color: ${(props) => props.theme.corPrincipal};
`;

export const InfoVaga = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Localizacao = styled.span`
  font-size: 1rem;
  color: ${(props) => props.theme.corSecundaria};
`;

export const BotaoDetalhes = styled.button`
  padding: 0.5rem 1rem;
  background-color: ${(props) => props.theme.corPrimaria};
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;
