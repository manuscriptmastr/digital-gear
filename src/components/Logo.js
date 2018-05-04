import React from 'react';
import SiteLogo from './SiteLogo';
import './Logo.css';
import { Link } from 'react-router-dom';

let Logo = () =>
  <Link className="logo" to="/" >
    <SiteLogo className="logo-icon" />
  </Link>

export default Logo;