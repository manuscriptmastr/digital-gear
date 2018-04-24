import { createUser, removeUser } from './../actions/users';
import { addItem, removeItem } from './../actions/items';
import { createUserReducer, removeUserReducer } from './users';
import { addItemReducer, removeItemReducer } from './items';

let fallbackReducer = (state, action) => state;

let reducers = {
  [createUser]: createUserReducer,
  [removeUser]: removeUserReducer,
  [addItem]: addItemReducer,
  [removeItem]: removeItemReducer
}

let reducer = (state, action) => {
  let reqReducer = reducers[action.type] || fallbackReducer;
  return reqReducer(state, action);
}

export default reducer;