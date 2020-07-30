import React from "react";
import Header from "./components/shared/header";
import Routes from './routes';

import { BrowserRouter as Router } from "react-router-dom";
import Provider from './store/provider';
import {initStore} from './store'

const store = initStore();
const App = () => {


  return (
      <Provider store = { store }>
      <Router>
        <Header />
        <Routes />
      </Router>
      </Provider>
  );
};

export default App;
