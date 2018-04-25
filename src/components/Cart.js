import React from 'react';
import Badge from './Badge';

let Cart = () =>
  <a className="header__cart">
    <img src="/assets/icon-cart.svg" alt="cart icon" />
    <Badge num={3} />
  </a>

export default Cart;