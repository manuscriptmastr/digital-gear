import React from 'react';
import Layout from './Layout';
import { Link } from 'react-router-dom';

let HomeScreen = () =>
  <Layout>
    <h1>Hello! Welcome to DigitalGear</h1>
    <Link to="/products" title="All products">See all products</Link>
  </Layout>

export default HomeScreen;