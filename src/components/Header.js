import React from 'react';
import './Header.css';
import Avatar from './Avatar';
import Cart from './Cart';

let Header = () =>
  <header className="header">
    <Avatar />
    <Cart />
  </header>

export default Header;