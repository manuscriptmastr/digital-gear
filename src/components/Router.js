import React from 'react';
import { HashRouter as RouteList, Route, Switch } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import ProductsScreen from './ProductsScreen';
import CategoryScreen from './CategoryScreen';

let Router = () =>
  <RouteList>
    <Switch>
      <Route path="/categories" component={CategoryScreen}/>
      <Route path="/products" component={ProductsScreen} />
      <Route path="/" component={HomeScreen} />
    </Switch>
  </RouteList>

export default Router;