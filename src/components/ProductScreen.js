import React from 'react';
import Layout from './Layout';
import Searchbar from './search/index';
import Query from './search/Query';
import Sort from './search/Sort';
import ProductList from './ProductList';
import { pipe, queryBy, sortBy } from './../lib/utils';
import { connect } from 'react-redux';

let ProductScreen = ({ products }) =>
  <Layout>
    <Searchbar>
      <Query />
      <Sort />
    </Searchbar>
    <ProductList products={products}/>
  </Layout>

let mapStateToProps = ({ products, search: { query, filters, sort } }) =>
({ products: pipe(queryBy(query), sortBy(sort))(products) });

export default connect(mapStateToProps)(ProductScreen);