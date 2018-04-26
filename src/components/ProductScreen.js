import React from 'react';
import Layout from './Layout';
import Searchbar from './Searchbar';
import ProductList from './ProductList';
import { pipe, sortBy } from './../lib/utils';
import { connect } from 'react-redux';

let ProductScreen = ({ products }) =>
  <Layout>
    <Searchbar />
    <ProductList products={products}/>
  </Layout>

let mapStateToProps = ({ products, search: { filters, sort } }) =>
({ products: pipe(sortBy(sort))(products) });

export default connect(mapStateToProps)(ProductScreen);