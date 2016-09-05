import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {MainContainer} from './view/containers/index';
import {SearchLayout, LogInLayout, AdminLayout} from './view/components/index';
import TopFloatLayout from 'view/components/TopFloatLayout/TopFloatLayout';

function routeDependingOnLogInState(store){
  return (next_state, replace) => {
    const state = store.getState();
    const path_name = next_state.location.pathname;

    if(state.login.logged_in){
      const redirect = '/admin';
      if(path_name !== redirect){
        replace(redirect);
      }
    }else{
      const redirect = '/login';
      if(path_name !== redirect){
        replace(redirect);
      }
    }
  };
}

export default (store) => (
  <Route path="/" component={MainContainer}>
    <IndexRoute components={{top_float: TopFloatLayout, main: SearchLayout}} />
    <Route path="/login"
      component={{top_float: TopFloatLayout, main: LogInLayout}}
      onEnter={routeDependingOnLogInState(store)}
    />
    <Route
      path="/admin"
      component={{top_float: TopFloatLayout, main: AdminLayout}}
      onEnter={routeDependingOnLogInState(store)}
    />
    <Route
      path ="*"
      component={{top_float: TopFloatLayout, main: SearchLayout}}
    />
  </Route>
);
