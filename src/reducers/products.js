export let updateProductsReducer = (state, action) =>
  ({ ...state, products: action.payload });