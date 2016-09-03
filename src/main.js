import React from 'react';
import ReactDOM from 'react-dom';
import domready from 'domready';
import RedBox from 'redbox-react';
import ReduxLogger from 'redux-logger';
import {applyMiddleware, createStore} from 'redux';
import {browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import UserRequestHandler from 'reducers/middleware/UserRequestHandler';
import LanguageMiddleware from 'reducers/middleware/LanguageMiddleware';
import RoutingMiddleware from 'reducers/middleware/RoutingMiddleware';
import PromiseMiddleware from 'redux-promise-middleware';
import ServerDataAccess from 'reducers/data_access/ServerDataAccess';
import MockDataAccess from 'reducers/data_access/FileDataAccess';
import MainReducer from 'reducers/MainReducer';
import Root from './Root';
import SortBy from 'global/data/SortableEnum';
import SortDirection from 'global/data/SortDirectionEnum';
import Immutable from 'immutable';

const in_development = typeof DEVELOPMENT !== 'undefined';

if(in_development){
  console.log('!! in development mode !!');
}

const data_access = in_development ? MockDataAccess() : ServerDataAccess('http://localhost:3000');
// const data_access = MockDataAccess();
const middleware = applyMiddleware(
                        UserRequestHandler(data_access),
                        LanguageMiddleware(data_access),
                        RoutingMiddleware(browserHistory),
                        PromiseMiddleware(),
                        ReduxLogger()
                    );
const initial_state = {
  translations: Immutable.Map(),
  sorting: {sort_by: SortBy.ORIGIN, sort_order: SortDirection.ASCENDING},
  filtering: {search_term: ''},
  login: {user: '', pass: '', logged_in: false},
  language: {
    messages: Immutable.Map(),
    supported: Immutable.Map(),
  }
};
const store = createStore(MainReducer, initial_state, middleware);
const history = syncHistoryWithStore(browserHistory, store);

function boot(){
  let rootElement = null;

  function requestLanguageData(){
    store.dispatch({type: 'INIT_LANGUAGE'});
  }

  function render(){
    ReactDOM.render(
      <Root store={store} history={history} />,
      rootElement
    );
  }

  function renderError(error){
    ReactDOM.render(<RedBox error={error} />, rootElement);
  }

  function hotReload(){
    try{
      render();
    }catch(error){
      renderError(error);
    }
  }

  function setupHotModuleReload(){
    return module.hot && module.hot.accept('./Root', () => setTimeout(hotReload));
  }

  domready(() => {
    rootElement = document.getElementById('app-root');
    render(rootElement);
    setupHotModuleReload();
  });

  requestLanguageData();
}

boot();
