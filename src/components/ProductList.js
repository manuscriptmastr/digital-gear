import React from 'react';
import Product from './Product';

let ProductList = ({ products }) =>
  <ul className="product-list">
    {
      products.map((p, key) =>
        <Product key={key} product={p} />
      )
    }
  </ul>

export default ProductList;