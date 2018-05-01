import React from 'react';
import { connect } from 'react-redux';
import { compose, withHandlers, lifecycle } from 'recompose';
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

let mapDispatchToProps = {
  updateCategory: (_id) => updateCategory(_id),
  updateCategories
}

let enhance = compose(
  connect(mapStateToProps, mapDispatchToProps),
  withHandlers({
    updateCategories: ({ jwt, updateCategories }) => async () => {
      let categories = await fetchCategories(jwt);
      updateCategories(categories);
    }
  }),
  lifecycle({
    componentDidMount() {
      this.props.updateCategories();
    }
  })
);

export default enhance(CategoryFilter);