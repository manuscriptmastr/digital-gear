import React from 'react';
import Product from './Product';
import './ProductList.css';

let ProductList = ({ products }) =>
  <ul className="product-list">
    {
      products.map((p, key) =>
        <li className="product-item">
          <Product key={key} product={p} />
        </li>
      )
    }
  </ul>

export default ProductList;