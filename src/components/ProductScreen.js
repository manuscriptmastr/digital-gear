import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';
import Layout from './Layout';
import ProductDetail from './ProductDetail';
import { updateProducts } from './../actions/products';
import { fetchProducts } from '../api/products';

const fallback = {
  "_id": "5ae0a62fdd0ecc0014542d13",
  "title": "DC Hoodie",
  "description": "Baby, it's cold outside!",
  "createdAt": "2018-04-25T16:00:47.790Z",
  "updatedAt": "2018-04-25T16:00:47.805Z",
  "__v": 0,
  "category": {
      "_id": "5ae0a5eddd0ecc0014542d10",
      "title": "Clothing",
      "description": "You gotta wear something, y'know.",
      "createdAt": "2018-04-25T15:59:41.797Z",
      "updatedAt": "2018-04-25T15:59:41.805Z",
      "__v": 0,
      "id": "5ae0a5eddd0ecc0014542d10",
      "products": null
  },
  "id": "5ae0a62fdd0ecc0014542d13",
  "price": 44.99,
  "cartItems": [],
  "images": [
      {
          "_id": "5ae1f052ad45d100146f3d5f",
          "url": "https://picsum.photos/400/400?image=10",
          "createdAt": "2018-04-26T15:29:22.967Z",
          "updatedAt": "2018-04-26T15:29:22.974Z",
          "__v": 0,
          "product": "5ae0a62fdd0ecc0014542d13",
          "id": "5ae1f052ad45d100146f3d5f"
      }
  ]
}

let ProductScreen = ({ product }) =>
  <Layout>
    <ProductDetail product={product}/>
  </Layout>

let mapStateToProps = ({ jwt, products }, { match }) =>
  ({
    jwt,
    products,
    product: products.find(p => p._id === match.params.id) || fallback
  });

let mapDispatchToProps = {
  updateProducts
}

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

export default enhance(ProductScreen);