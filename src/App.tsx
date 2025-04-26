import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { themeLight } from './styles/themeLight';
import { themeDark } from './styles/themeDark';

import Header from './components/Cabecalho/Header';
import Form from './components/FormVagas/Form';
import Hero from './components/Hero/Hero';
import ListaVagas from './components/ListaVagas/ListaVagas';

function App() {
  const [temaEscuro, setTemaEscuro] = useState(false);

  const alternarTema = () => {
    setTemaEscuro(!temaEscuro);
  };

  return (
    <ThemeProvider theme={temaEscuro ? themeDark : themeLight}>
      <GlobalStyles />
      <Header />
      <button onClick={alternarTema} style={{ margin: '1rem', padding: '0.5rem' }}>
        Alternar Tema
      </button>
      <Hero />
      <Form />
      <ListaVagas />
    </ThemeProvider>
  );
}

export default App;
