export let updateSortReducer = (state, action) =>
  ({ ...state, search: { ...state.search, sort: action.payload } });
export let updateFiltersReducer = (state, action) => state;