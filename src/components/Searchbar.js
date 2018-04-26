import React from 'react';
import { connect } from 'react-redux';
import { updateSort } from './../actions/search';

let Searchbar = ({ search: { filters, sort }, updateSort }) =>
  <form>
    <select value={sort} onChange={(e) => updateSort(e.target.value)}>
      <option value="title">Title</option>
      <option value="price">Price</option>
    </select>
  </form>

let mapStateToProps = ({ search }) => ({ search });

let mapDispatchToProps = {
  updateSort
}

export default connect(mapStateToProps, mapDispatchToProps)(Searchbar);