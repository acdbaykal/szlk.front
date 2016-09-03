import ReducerFactory from './ReducerFactory';
import Immutable from 'immutable';

function handleSetLocale(store, {payload}){
  const {current} = store;
  return payload === current ? //we should make sure not to cause any unecesarry actions
    store : {...store, current: payload}
  ;
}

function handleSetMessages(store, {payload}){
  const {messages: all_messages} = store; //all messages we have, for each language
  const {language} = payload; //for which language these messages are for
  const current_messages = all_messages.get(language);
  const {messages: retrieved_messages} = payload;
  const new_messages = typeof current_messages !== 'undefined' ?
      current_messages.mergeDeep(retrieved_messages) : retrieved_messages; //update
  return {...store,
    current: payload.language,
    messages: all_messages.set(language, new_messages)
  };//insert
}

function handleSetSupportedLanguages(store, {payload}){
  const supported = store.supported.mergeDeep(payload);
  return {...store, supported};
}

const map = {
  SET_LOCALE: handleSetLocale,
  SET_MESSAGES_FULFILLED: handleSetMessages,
  SET_SUPPORTED_LANGUAGES_FULFILLED: handleSetSupportedLanguages
};


export default ReducerFactory(map, {
  supported: Immutable.Map(),
  messages: Immutable.Map(),
  current: 'tr'
});
