import React from 'react';
import Category from './Category';

let CategoryList = ({ categories }) =>
  <ul className="category-list">
    {
      categories.map((c, key) =>
        <li key={key}>
          <Category category={c} />
        </li>
      )
    }
  </ul>

export default CategoryList;