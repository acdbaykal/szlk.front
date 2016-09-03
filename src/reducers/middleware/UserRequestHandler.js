export default (server_access => store => next => action => {
  const {type} = action;
  const {login} = store.getState();

  if(type === 'SEARCH_REQUESTED'){
    const {search} = action;
    if(typeof search === 'string' && search.length > 2){
      const result = server_access.search(search);
      next({type: 'SEARCH', payload: result});
    }
    next({type: 'SET_SEARCH_TERM', payload: {search_term: search}});
  }else if(type === 'SORT_REQUESTED'){
    next({type: 'SET_SORTBY', sort_by: action.sort_by});
  }else if(type === 'LOGIN_NAVIGATION_REQUESTED'){
    next({type: 'ROUTE_TO', url: '/login'});
  }else if(type === 'LOGIN_REQUESTED'){
    const result = server_access.logIn(action.user, action.pass);
    next({type: 'LOGIN', payload: result});
  }else if(type === 'TRANSLATION_UPDATE_REQUESTED'){
    const result = server_access.update(action.translation, login.user, login.pass);
    next({type: 'UPDATE_TRANSLATION', payload: result});
  }else if(type === 'TRANSLATION_DELETE_REQUESTED'){
    const {translation} = action;
    const result = server_access.delete(translation, login.user, login.pass);
    next({type: 'DELETE_TRANSLATION', payload: result});
  }else if(type === 'TRANSLATION_ADD_REQUESTED'){
    const result = server_access.add(action.translation, login.user, login.pass);
    next({type: 'ADD_TRANSLATION', payload: result});
  }else{//does not concern this mid ware, just forward it
    next(action);
  }
});
