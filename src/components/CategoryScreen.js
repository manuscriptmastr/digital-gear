import React from 'react';
import Layout from './Layout';
import CategoryList from './CategoryList';
import { connect } from 'react-redux';

let CategoryScreen = ({ categories }) =>
  <Layout>
    <CategoryList categories={categories}/>
  </Layout>

let mapStateToProps = ({ categories }) => ({ categories });

export default connect(mapStateToProps)(CategoryScreen);