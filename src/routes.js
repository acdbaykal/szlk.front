import React from 'react';
import {IndexRoute, Route} from 'react-router';
import {MainContainer} from './view/containers/index';
import {SearchLayout, LogInLayout, AdminLayout} from './view/components/index';

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

export default (store) =>
  <Route path="/" component={MainContainer}>
    <IndexRoute component={SearchLayout} />
    <Route path="/login" component={LogInLayout} onEnter={routeDependingOnLogInState(store)} />
    <Route path="/admin" component={AdminLayout} onEnter={routeDependingOnLogInState(store)} />
    <Route path ="*" component={SearchLayout} />
  </Route>;
