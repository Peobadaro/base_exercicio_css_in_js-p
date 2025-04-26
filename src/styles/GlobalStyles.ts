import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${(props) => props.theme.fundo};
    color: ${(props) => props.theme.texto};
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: background 0.3s ease;
  }

  a {
    color: ${(props) => props.theme.corPrincipal};
    text-decoration: none;
  }
`;
