export let updateQueryReducer = (state, action) =>
  ({ ...state, search: { ...state.search, query: action.payload } });

export let updateCategoryReducer = (state, action) =>
  ({ ...state, search: { ...state.search, category: action.payload } });

export let updateSortReducer = (state, action) =>
  ({ ...state, search: { ...state.search, sort: action.payload } });