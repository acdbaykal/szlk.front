import ReducerFactory from './ReducerFactory'

function payloadIsNewState(store, action){
  const {payload}  = action;
  let result = store;
  for(let i = 0, iLimit = payload.length; i < iLimit; i++){
    const t = payload[i];
    result = result.set(t.get("_id"), t);
  }

  return result;
}

function update(store, action){
  const translation = action.payload;
  return store.set(translation.get("_id"), translation);
}

function delete_translation(store, action){
  const translation = action.payload;
  return store.delete(translation.get("_id"), translation);
}

const mapping = {
  SEARCH:payloadIsNewState,
  SEARCH_FULFILLED:payloadIsNewState,
  UPDATE_TRANSLATION_FULFILLED:update,
  DELETE_TRANSLATION_FULFILLED:delete_translation,
  ADD_TRANSLATION_FULFILLED:update
};

export default (ReducerFactory(mapping, []));
