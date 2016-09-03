import ReducerFactory from './ReducerFactory';

function handleLogin(store, action){
  return {...(action.payload), logged_in: true};
}

function handleLoginReject(store){
  return {...store, logged_in: false};
}

const map = {
  LOGIN_FULFILLED: handleLogin,
  LOGIN_REJECTED: handleLoginReject
};

export default ReducerFactory(map, {});
