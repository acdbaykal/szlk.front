import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';
import RoutesFactory from './routes';
import {Router} from 'react-router';
import IntlProvider from 'view/components/IntlProvider/IntlProvider';

export default class Root extends Component{
  constructor(props){
    super(props);
    this._routes = RoutesFactory(props.store);
  }
  render(){
    const {store, history} = this.props;
    return (
      <Provider store={store}>
        <IntlProvider>
          <Router history={history} routes={this._routes} />
        </IntlProvider>
      </Provider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
};
