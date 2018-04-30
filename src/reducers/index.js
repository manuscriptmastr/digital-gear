import initState from './initState';

import { createUser, removeUser } from './../actions/users';
import { addItem, removeItem } from './../actions/items';
import { updateProducts } from './../actions/products';
import { updateCategories } from './../actions/categories';
import { updateCategory, updateQuery, updateSort } from './../actions/search';

import { createUserReducer, removeUserReducer } from './users';
import { addItemReducer, removeItemReducer } from './items';
import { updateProductsReducer } from './products';
import { updateCategoriesReducer } from './categories';
import { updateCategoryReducer, updateQueryReducer, updateSortReducer } from './../reducers/search';

let fallbackReducer = (state, action) => state;

let reducers = {
  [createUser]: createUserReducer,
  [removeUser]: removeUserReducer,
  [addItem]: addItemReducer,
  [removeItem]: removeItemReducer,
  [updateProducts]: updateProductsReducer,
  [updateCategories]: updateCategoriesReducer,
  [updateCategory]: updateCategoryReducer,
  [updateQuery]: updateQueryReducer,
  [updateSort]: updateSortReducer
}

let reducer = (state = initState, action) => {
  let reqReducer = reducers[action.type] || fallbackReducer;
  return reqReducer(state, action);
}

export default reducer;