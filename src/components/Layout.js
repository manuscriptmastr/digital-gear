import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

let Layout = ({ children }) =>
  <div className="layout">
    <Header />
    <Sidebar />
    <main className="dashboard">
      {children}
    </main>
  </div>

export default Layout;
