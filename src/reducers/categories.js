export let updateCategoriesReducer = (state, action) =>
  ({ ...state, categories: action.payload });