import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { MainContainer} from './view/containers/index';
import { SearchLayout, LogInLayout, AdminLayout} from './view/components/index';

export default (
  <Route path="/" component={MainContainer}>
    <IndexRoute component={SearchLayout}/>
    <Route path="/login" component={LogInLayout}/>
    <Route path="/admin" component={AdminLayout}/>
    <Route path ="*" component={SearchLayout}/>
  </Route>
);
