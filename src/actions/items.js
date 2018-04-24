const ADD_ITEM = 'ADD_ITEM';
export let addItem = (payload) => ({ type: ADD_ITEM, payload });
addItem.toString = () => ADD_ITEM;


const REMOVE_ITEM = 'REMOVE_ITEM';
export let removeItem = (payload) => ({ type: REMOVE_ITEM, payload });
removeItem.toString = () => REMOVE_ITEM;
