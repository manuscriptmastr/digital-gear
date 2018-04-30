import React from 'react';
import { Link } from 'react-router-dom';

let Category = ({ category: { _id, title } }) =>
  <li>
    <Link to={`/categories/${_id}`} title={title}>
      {title}
    </Link>
  </li>

export default Category;