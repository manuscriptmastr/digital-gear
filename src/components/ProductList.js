import React from 'react';
import Product from './Product';
import './ProductList.css';

let ProductList = ({ products }) =>
  <ul className="product-list">
    {
      products.map((p, key) =>
        <li key={key} className="product-item">
          <Product product={p} />
        </li>
      )
    }
  </ul>

export default ProductList;