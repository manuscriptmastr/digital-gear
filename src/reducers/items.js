export let addItemReducer = (state, action) =>
  ({
    ...state, items: [ ...state.items, action.payload ]
  });
export let removeItemReducer = (state, action) => state;