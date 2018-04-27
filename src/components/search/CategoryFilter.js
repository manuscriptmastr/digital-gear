import React from 'react';
import { connect } from 'react-redux';
import { updateFilters } from './../../actions/search';

let CategoryFilter = ({ categories, categoryId, updateFilters }) =>
  <select className="categories" value={categoryId} onChange={(e) => updateFilters(e.target.value)}>
    <option value="">Category</option>
    {
      categories.map(({ id, title }) =>
        <option value={id}>{title}</option>
      )
    }
  </select>

let mapStateToProps = ({ categories, search: { filters: { categoryId } } }) => ({ categories, categoryId });

let mapDispatchToProps = {
  updateFilters
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryFilter);