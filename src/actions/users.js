const CREATE_USER = 'CREATE_USER';
export let createUser = (payload) => ({ type: CREATE_USER, payload });
createUser.toString = () => CREATE_USER;

const REMOVE_USER = 'REMOVE_USER';
export let removeUser = (payload) => ({ type: REMOVE_USER, payload });
removeUser.toString = () => REMOVE_USER;
