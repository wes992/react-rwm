import React from "react";
import Header from "./components/shared/header";
import Routes from './routes';

import { BrowserRouter as Router } from "react-router-dom";
import {StateContext } from './stateContext';
import store from './store'

const App = () => {


  return (
      <StateContext.Provider value = { store }>
      <Router>
        <Header />
        <Routes />
      </Router>
      </StateContext.Provider>
  );
};

export default App;
