import React from 'react';
import Layout from './Layout';
import ProductList from './ProductList';
import { pipe, filterBy, sortBy } from './../lib/utils';
import { connect } from 'react-redux';

let ProductScreen = ({ products }) =>
  <Layout>
    <ProductList products={products}/>
  </Layout>

let mapStateToProps = ({ products, search: { filters, sort } }) =>
({ products: pipe(filterBy(filters), sortBy(sort))(products) });

export default connect(mapStateToProps)(ProductScreen);