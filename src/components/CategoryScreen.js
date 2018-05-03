import React from 'react';
import Layout from './Layout';
import Category from './Category';
import ProductList from './ProductList';
import { updateProducts } from './../actions/products';
import { updateCategories } from './../actions/categories';
import { fetchProducts } from './../api/products';
import { fetchCategories } from './../api/categories';
import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';
import { fromCategory, pipe } from './../lib/utils';

let CategoryScreen = ({ products, categories }) =>
  <Layout>
    <ul className="categorized-products-list">
      {
        categories.map((c, key) =>
          <li key={key} className="categorized-products">
            <Category category={c} />
            <ProductList products={pipe(fromCategory(c._id))(products)} />
          </li>
        )
      }
    </ul>
  </Layout>

let mapStateToProps = ({ products, categories, jwt }) => ({ products, categories, jwt });

let mapDispatchToProps = {
  updateProducts,
  updateCategories
};

let enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    updateProducts: ({ jwt, updateProducts }) => async () => {
      let products = await fetchProducts(jwt);
      updateProducts(products);
    },
    updateCategories: ({ jwt, updateCategories }) => async () => {
      let categories = await fetchCategories(jwt);
      updateCategories(categories);
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.updateProducts();
      this.props.updateCategories();
    }
  })
);

export default enhance(CategoryScreen);