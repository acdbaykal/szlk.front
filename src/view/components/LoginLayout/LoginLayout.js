import React from 'react';
import LogInComponent from 'view/components/LoginComponent/LoginComponent';
import HandlerFactory from 'view/action_handling/HandlerFactory';
import {connect} from 'react-redux';

class LoginLayout extends React.Component{
  constructor(props){
    super(props);
    const {dispatch} = props;
    this._loginRequestHandler = HandlerFactory('LOGIN_REQUESTED', dispatch);
    this._cancelRequestHandler = HandlerFactory('LOGIN_CANCEL_REQUESTED', dispatch);
  }

  render(){
    return (<LogInComponent
      onCancel={this._cancelRequestHandler}
      onLogIn={this._loginRequestHandler}
    />);
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(LoginLayout);
