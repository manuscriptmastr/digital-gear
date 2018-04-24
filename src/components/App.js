import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

let App = ({ match }) =>
  <div className="App">
    <Header className="header" />
    <Sidebar className="sidebar" />
    <Dashboard className="dashboard" />
  </div>

export default App;
