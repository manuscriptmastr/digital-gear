import React from 'react';
import { connect } from 'react-redux';
import { updateQuery } from './../../actions/search';

let Query = ({ query, updateQuery }) =>
  <input type="search" placeholder="Search" value={query} onChange={(e) => updateQuery(e.target.value)} />

let mapStateToProps = ({ search: { query } }) => ({ query });

let mapDispatchToProps = {
  updateQuery
};

export default connect(mapStateToProps, mapDispatchToProps)(Query);