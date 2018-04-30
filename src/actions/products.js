const UPDATE_PRODUCTS = 'UPDATE_PRODUCTS';
export let updateProducts = (payload) => ({ type: UPDATE_PRODUCTS, payload });
updateProducts.toString = () => UPDATE_PRODUCTS;