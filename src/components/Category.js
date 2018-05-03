import React from 'react';
import { Link } from 'react-router-dom';

let Category = ({ category: { _id, title } }) =>
  <Link to={`/categories/${_id}`} title={title}>
    {title}
  </Link>

export default Category;