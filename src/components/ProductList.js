import React from 'react';
import Product from './Product';

let ProductList = ({ products }) =>
  <ul className="product-list">
    {
      products.map(p =>
        <Product product={p} />
      )
    }
  </ul>

export default ProductList;