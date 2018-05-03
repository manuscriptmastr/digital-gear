import React from 'react';
import './Layout.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';

let Layout = ({ children }) =>
  <div className="layout">
    <Header />
    <Sidebar />
    <Dashboard>
      {children}
    </Dashboard>
  </div>

export default Layout;
