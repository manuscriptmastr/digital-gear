import React from 'react';
import './Cart.css';
import SiteLogo from './SiteLogo';
import Badge from './Badge';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

let Cart = ({ items }) =>
  <Link to="/cart" className="cart">
    <SiteLogo className="cart-icon"/>
    <Badge num={items.length} />
  </Link>

let mapStateToProps = ({ items }) => ({ items });

export default connect(mapStateToProps)(Cart);