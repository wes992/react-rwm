import React from "react";
import { Switch, Route } from "react-router-dom";

import RentalHome from './pages/rental';
import Login from './pages/login';
import Register from './pages/register';

const Routes = () => {
  return (
    <div className='container rwm-container'>
        <Switch>
        <Route exact path="/">
            <RentalHome />
        </Route>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/register">
            <Register />
        </Route>
        </Switch>
    </div>
  );
};

export default Routes;