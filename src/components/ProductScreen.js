import React from 'react';
import Layout from './Layout';
import Searchbar from './search/index';
import Query from './search/Query';
import Sort from './search/Sort';
import CategoryFilter from './search/CategoryFilter';
import ProductList from './ProductList';
import { pipe, queryBy, filterBy, sortBy } from './../lib/utils';
import { connect } from 'react-redux';

let ProductScreen = ({ products }) =>
  <Layout>
    <Searchbar>
      <Query />
      <Sort />
      <CategoryFilter />
    </Searchbar>
    <ProductList products={products}/>
  </Layout>

let mapStateToProps = ({ products, search }) => {
  let { query, filters, sort } = search;
  return ({
    products: pipe(queryBy(query), filterBy(filters), sortBy(sort))(products),
    search
  });
}

export default connect(mapStateToProps)(ProductScreen);