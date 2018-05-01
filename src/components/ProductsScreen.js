import React from 'react';
import Layout from './Layout';
import Searchbar from './search/index';
import Query from './search/Query';
import Sort from './search/Sort';
import CategoryFilter from './search/CategoryFilter';
import ProductList from './ProductList';
import { pipe, fromCategory, queryBy, sortBy } from './../lib/utils';
import { updateProducts } from './../actions/products';
import { fetchProducts } from './../api/products';
import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';

let ProductsScreen = ({ products }) =>
  <Layout>
    <Searchbar>
      <Query />
      <Sort />
      <CategoryFilter />
    </Searchbar>
    <ProductList products={products}/>
  </Layout>

let mapStateToProps = ({ products, search, jwt }) => {
  let { category, query, sort } = search;
  return ({
    products: pipe(fromCategory(category), queryBy(query), sortBy(sort))(products),
    search,
    jwt
  });
}

let mapDispatchToProps = {
  updateProducts
};

let enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    updateProducts: ({ jwt, updateProducts }) => async () => {
      let products = await fetchProducts(jwt);
      updateProducts(products);
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.updateProducts();
    }
  })
);

export default enhance(ProductsScreen);