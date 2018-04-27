const UPDATE_QUERY = 'UPDATE_QUERY';
export let updateQuery = (payload) => ({ type: UPDATE_QUERY, payload });
updateQuery.toString = () => UPDATE_QUERY;

const UPDATE_SORT = 'UPDATE_SORT';
export let updateSort = (payload) => ({ type: UPDATE_SORT, payload });
updateSort.toString = () => UPDATE_SORT;

const UPDATE_FILTERS = 'UPDATE_FILTERS';
export let updateFilters = (payload) => ({ type: UPDATE_FILTERS, payload });
updateFilters.toString = () => UPDATE_FILTERS;