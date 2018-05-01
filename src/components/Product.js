import React from 'react';
import { Link } from 'react-router-dom';

let Product = ({ product: { _id, price, title, images } }) =>
  <li className="product">
    <Link to={`/products/${_id}`}>
      <h1>{title} - ${price}</h1>
      <img src={images[0].url} alt={images[0].title} />
    </Link>
  </li>

export default Product;