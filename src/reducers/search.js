export let updateQueryReducer = (state, action) =>
  ({ ...state, search: { ...state.search, query: action.payload } });

export let updateFiltersReducer = (state, action) => {
  return ({ ...state, search: { ...state.search, filters: { ...state.search.filters, categoryId: action.payload } } } );
}

export let updateSortReducer = (state, action) =>
  ({ ...state, search: { ...state.search, sort: action.payload } });