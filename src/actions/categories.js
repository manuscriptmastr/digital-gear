const UPDATE_CATEGORIES = 'UPDATE_CATEGORIES';
export let updateCategories = (payload) => ({ type: UPDATE_CATEGORIES, payload });
updateCategories.toString = () => UPDATE_CATEGORIES;