import React from 'react';
import { updateSort } from './../../actions/search';
import { connect } from 'react-redux';

let Sort = ({ sort, updateSort }) =>
  <select value={sort} onChange={(e) => updateSort(e.target.value)}>
    <option value="">Sort</option>
    <option value="title">Title</option>
    <option value="price">Price</option>
  </select>

let mapStateToProps = ({ search: { sort } }) => ({ sort });

let mapDispatchToProps = {
  updateSort
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);