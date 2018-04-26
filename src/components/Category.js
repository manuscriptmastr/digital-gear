import React from 'react';
import { Link } from 'react-router-dom';

let Category = ({ category: { id, title } }) =>
  <li>
    <Link to={`/categories/${id}`} title={title}>
      {title}
    </Link>
  </li>

export default Category;