import ReducerFactory from './ReducerFactory'

function payLoadIsNewState(store, task){
  return task.payload;
}

const mapping ={
  "SET_SEARCH_TERM":payLoadIsNewState
}

export default (ReducerFactory(mapping, ""));
