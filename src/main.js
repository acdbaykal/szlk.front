import React from 'react'
import ReactDOM from 'react-dom'
import domready from 'domready'
import RedBox from 'redbox-react'
import redux_logger from 'redux-logger'
import {applyMiddleware, createStore} from 'redux'
import {Provider, connect} from 'react-redux'
import { browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import UserRequestHandler from 'reducers/middleware/UserRequestHandler'
import RoutingMiddleware from 'reducers/middleware/RoutingMiddleware'
import promise_middleware from 'redux-promise-middleware'
import ServerDataAccess from 'reducers/data_access/ServerDataAccess.js' //webpack won't find it without the .js for some reason
import MockDataAccess from 'reducers/data_access/FileDataAccess'
import MainReducer from 'reducers/MainReducer'
import Root from './Root'
import SortBy from 'global/data/SortableEnum'
import SortDirection from 'global/data/SortDirectionEnum'
import Immutable from 'immutable'

const is_client_only = true;
const data_access = is_client_only ? MockDataAccess() : ServerDataAccess();
const middleware = applyMiddleware(
                        UserRequestHandler(data_access),
                        RoutingMiddleware(browserHistory),
                        promise_middleware(),
                        redux_logger()
                    );
const init_state = {
                      translations:Immutable.Map(),
                      sorting:{sort_by:SortBy.ORIGIN, sort_order:SortDirection.ASCENDING},
                      filtering:{search_term:""},
                      login:{user:"", pass:"", logged_in:false}
                    };
const store = createStore(MainReducer(browserHistory), init_state, middleware);
const history = syncHistoryWithStore(browserHistory, store);
const connect_all_state = (state) => state;
const ConnectedRootComponent = connect(connect_all_state)(Root);



boot();

function boot() {
  let rootElement = null;

  domready(() => {
    rootElement = document.getElementById('app-root');
    render(rootElement);
    setupHotModuleReload();
  });

  function render(rootElement) {
    ReactDOM.render(
      <Root store={store} history={history} />,
      rootElement
    );
  }

  function setupHotModuleReload() {
    module.hot && module.hot.accept('./Root', () => setTimeout(hotReload));
  }

  function hotReload() {
    try {
      render();
    } catch (error) {
      renderError(error);
    }
  }

  function renderError(error) {
    ReactDOM.render(<RedBox error={error} />, rootElement);
  }
}
