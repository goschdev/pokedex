import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'visual/styles/GlobalStyle';
import { Header } from 'components/Header';
import { Routes } from 'components/Routes';

export const App = () => (
  <>
    <GlobalStyle />
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  </>
);

export default App;
