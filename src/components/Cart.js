import React from 'react';
import Badge from './Badge';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let Cart = ({ items }) =>
  <Link to="/cart" className="cart">
    <img src="/assets/icon-cart.svg" alt="cart icon" />
    <Badge num={items.length} />
  </Link>

let mapStateToProps = ({ items }) => ({ items });

export default connect(mapStateToProps)(Cart);