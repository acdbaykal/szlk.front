import {initLocaleData} from 'szlk.messages/locale_data';
import {supportedLanguages} from 'szlk.messages/supported_languages';

export default (data_connection => store => next => action => {
  const {type} = action;
  if(type === 'INIT_LANGUAGE'){
    const language_guess = (() => {
      if(window && window.navigator){
        const nav_lang = window.navigator.userLanguage || window.navigator.language;
        const is_supported = supportedLanguages.hasOwnProperty(nav_lang);
        if(is_supported){
          return nav_lang;
        }
      }
      return Object.getOwnPropertyNames(supportedLanguages)[0];
    })();
    initLocaleData();
    const messages_promise = data_connection.getMessages(language_guess);
    next({type: 'SET_MESSAGES', payload: messages_promise});
    next({type: 'SET_SUPPORTED_LANGUAGES_FULFILLED', payload: supportedLanguages});
  }else if(type === 'SET_LOCALE'){
    const locale = action.payload;
    const messages = store.getState().language.messages;
    if(typeof messages.get(locale) === 'undefined'){
      //the messages for this language have not yet been loaded
      //request them
      const messages_promise = data_connection.getMessages(locale);
      store.dispatch({type: 'SET_MESSAGES', payload: messages_promise});
    }
    next(action); //allow the curret locale to be set
  }else{
    next(action);
  }
});
