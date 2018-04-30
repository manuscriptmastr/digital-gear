import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCategory } from './../../actions/search';
import { fetchCategories } from './../../api/categories';
import { updateCategories } from './../../actions/categories';

let CategoryFilter = ({ categories, category, updateCategory }) =>
  <select className="categories" value={category._id} onChange={(e) => updateCategory(e.target.value)}>
    <option value="">Category</option>
    {
      categories.map(({ _id, title }, key) =>
        <option key={key} value={_id}>{title}</option>
      )
    }
  </select>

let mapStateToProps = ({ categories, search: { category }, jwt }) => ({ categories, category, jwt });

let mapDispatchToProps = (dispatch) =>
    ({
      updateCategory: (_id) => dispatch(updateCategory(_id)),
      dispatch
    });

class Api extends Component {
  componentDidMount() {
    this.update();
  }

  async update() {
    let { jwt } = this.props;
    let categories = await fetchCategories(jwt);
    this.props.dispatch(updateCategories(categories));
  }

  render() {
    return <CategoryFilter {...this.props} />
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Api);