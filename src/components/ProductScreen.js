import React from 'react';
import Layout from './Layout';
import Searchbar from './Searchbar';
import ProductList from './ProductList';
import { pipe, queryBy, sortBy } from './../lib/utils';
import { connect } from 'react-redux';

let ProductScreen = ({ products }) =>
  <Layout>
    <Searchbar />
    <ProductList products={products}/>
  </Layout>

let mapStateToProps = ({ products, search: { query, filters, sort } }) =>
({ products: pipe(queryBy(query), sortBy(sort))(products) });

export default connect(mapStateToProps)(ProductScreen);