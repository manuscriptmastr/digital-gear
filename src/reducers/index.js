import initState from './initState';

import { createUser, removeUser } from './../actions/users';
import { addItem, removeItem } from './../actions/items';
import { updateFilters, updateSort } from './../actions/search';

import { createUserReducer, removeUserReducer } from './users';
import { addItemReducer, removeItemReducer } from './items';
import { updateFiltersReducer, updateSortReducer } from './../reducers/search';

let fallbackReducer = (state, action) => state;

let reducers = {
  [createUser]: createUserReducer,
  [removeUser]: removeUserReducer,
  [addItem]: addItemReducer,
  [removeItem]: removeItemReducer,
  [updateFilters]: updateFiltersReducer,
  [updateSort]: updateSortReducer
}

let reducer = (state = initState, action) => {
  let reqReducer = reducers[action.type] || fallbackReducer;
  return reqReducer(state, action);
}

export default reducer;