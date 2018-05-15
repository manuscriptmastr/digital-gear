import React from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

let Product = ({ product: { _id, price, title, images: [ img ] } }) =>
  <Link className="product" to={`/products/${_id}`}>
    <img className="product-image" src={img.url} alt={img.title} />
    <h1 className="product-title">{title} - ${price}</h1>
  </Link>

export default Product;