import React from 'react';
import './App.css';

import Controller from './container/Controller';
import DisplayAstroid from './container/DisplayAstroid';

import { HashRouter, Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">
      <HashRouter>
        <Route path="/" component={Controller} exact />
        <Route path="/:id" component={DisplayAstroid} exact />
      </HashRouter>
    </div>
  );
};

export default App;
