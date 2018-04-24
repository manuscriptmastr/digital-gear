import React from 'react';
import { HashRouter as RouteList, Route, Switch } from 'react-router-dom';
import App from './App';

let Router = () =>
  <RouteList>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </RouteList>

export default Router;