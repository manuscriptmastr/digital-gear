import React from 'react';
import Category from './Category';

let CategoryList = ({ categories }) =>
  <ul className="category-list">
    {
      categories.map(c =>
        <Category category={c} />
      )
    }
  </ul>

export default CategoryList;