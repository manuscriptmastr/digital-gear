export let updateQueryReducer = (state, action) =>
  ({ ...state, search: { ...state.search, query: action.payload } });

export let updateFiltersReducer = (state, action) => state;

export let updateSortReducer = (state, action) =>
  ({ ...state, search: { ...state.search, sort: action.payload } });