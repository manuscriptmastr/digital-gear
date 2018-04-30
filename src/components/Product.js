import React from 'react';
import { Link } from 'react-router-dom';

let Product = ({ product: { _id, price, title } }) =>
  <li className="product">
    <Link to={`/products/${_id}`}>
      <h1>{title} - ${price}</h1>
    </Link>
  </li>

export default Product;