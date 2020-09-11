import React from 'react';

import { HashRouter, Route } from 'react-router-dom';
import Home from '../pages/Home';
import CadastrarTarefa from '../pages/CadastrarTarefa';

const Routes: React.FC = () => {
  return (
    <HashRouter>
      <Route path="/" exact component={Home} />
      <Route path="/cadastrarTarefa" exact component={CadastrarTarefa} />
    </HashRouter>
  );
};

export default Routes;
