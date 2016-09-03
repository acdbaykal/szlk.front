import ReducerFactory from './ReducerFactory';
import {Translation} from 'global/data/Translation';

function payloadIsNewState(store, action){
  const {payload} = action;
  let result = store;
  for(let i = 0, iLimit = payload.length; i < iLimit; i++){
    const t = payload[i];
    result = result.set(t.get('_id'), t);
  }

  return result;
}

function updateSingleTranslation(store, translation){
  return store.set(translation.get('_id'), translation);
}

function update(store, action){
  const {payload} = action;

  if(payload instanceof Array){
    const translation_arr = payload;
    let new_store = store;
    for(let i = 0, iLimit = translation_arr.length; i < iLimit; i++){
      new_store = updateSingleTranslation(new_store, translation_arr[i]);
    }
    return new_store;
  }else if(payload instanceof Translation){
    return updateSingleTranslation(store, payload);
  }
  return store;
}

function _deleteSingleTranslation(store, translation){
  return store.delete(translation.get('_id'), translation);
}

function delete_translation(store, action){
  const {payload} = action;

  if(payload instanceof Array){
    return [store, ...payload].reduce(_deleteSingleTranslation);
  }
  return _deleteSingleTranslation(store, payload);
}

const mapping = {
  SEARCH: payloadIsNewState,
  SEARCH_FULFILLED: payloadIsNewState,
  UPDATE_TRANSLATION_FULFILLED: update,
  DELETE_TRANSLATION_FULFILLED: delete_translation,
  ADD_TRANSLATION_FULFILLED: update
};

export default (ReducerFactory(mapping, []));
