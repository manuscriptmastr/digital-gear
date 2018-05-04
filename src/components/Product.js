import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

let Product = ({ product: { _id, price, title, images } }) =>
  <Link className="product" to={`/products/${_id}`}>
    <img className="product-image" src={images[0].url} alt={images[0].title} />
    <h1 className="product-title">{title} - ${price}</h1>
  </Link>

export default Product;