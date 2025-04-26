import styled from 'styled-components';

export const FormularioContainer = styled.form`
  background-color: ${(props) => props.theme.fundo};
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const CampoTexto = styled.input`
  padding: 0.75rem 1rem;
  border: 1px solid ${(props) => props.theme.corSecundaria};
  border-radius: 8px;
  font-size: 1rem;
`;

export const Botao = styled.button`
  padding: 0.75rem 1.2rem;
  background-color: ${(props) => props.theme.corPrimaria};
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Titulo = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.corPrincipal};
`;
