import React from 'react';
import { connect } from 'react-redux';
import { updateQuery, updateSort } from './../actions/search';

let Searchbar = ({ search: { query, filters, sort }, updateQuery, updateSort }) =>
  <form>
    <input type="search" placeholder="Search" value={query} onChange={(e) => updateQuery(e.target.value)} />
    <select value={sort} onChange={(e) => updateSort(e.target.value)}>
      <option value="title">Title</option>
      <option value="price">Price</option>
    </select>
  </form>

let mapStateToProps = ({ search }) => ({ search });

let mapDispatchToProps = {
  updateQuery,
  updateSort
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);