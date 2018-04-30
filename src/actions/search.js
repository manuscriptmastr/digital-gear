const UPDATE_CATEGORY = 'UPDATE_CATEGORY';
export let updateCategory = (payload) => ({ type: UPDATE_CATEGORY, payload });
updateCategory.toString = () => UPDATE_CATEGORY;

const UPDATE_QUERY = 'UPDATE_QUERY';
export let updateQuery = (payload) => ({ type: UPDATE_QUERY, payload });
updateQuery.toString = () => UPDATE_QUERY;

const UPDATE_SORT = 'UPDATE_SORT';
export let updateSort = (payload) => ({ type: UPDATE_SORT, payload });
updateSort.toString = () => UPDATE_SORT;