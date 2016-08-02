import ReducerFactory from './ReducerFactory'

export default (history)=>{return (store={}, action)=>{
  const {type} = action;
  if(type === "LOGIN_FULFILLED"){
    return action.payload;
  }
  else{
    return store;
  }
}}
