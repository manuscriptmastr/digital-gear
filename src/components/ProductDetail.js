import React from 'react';
import { addItem, removeItem } from './../actions/items';
import { connect } from 'react-redux';
import { compose } from 'recompose';

let ProductDetail = ({
  product: {
    _id,
    price,
    title,
    description,
    images: [ img ]
  },
  addItem,
  removeItem
}) =>
  <div className="product-detail">
    <img className="product-detail-image" src={img.url} alt={img.title} />
    <h1 className="product-detail-title">{title} - ${price}</h1>
    <p className="product-detail-description">{description}</p>
    <button className="product-detail-action" onClick={() => addItem(_id)} >Add to cart</button>
    <button className="product-detail-action" onClick={() => removeItem(_id)} >Remove from cart</button>
  </div>

let mapDispatchToProps = {
  addItem,
  removeItem
}

let enhance = compose(
  connect(null, mapDispatchToProps)
);

export default enhance(ProductDetail);