import React from 'react'
import LogInComponent from 'view/components/LoginComponent/LoginComponent'
import { connect } from 'react-redux'


function loginRequestHandlerFactory(dispatch){
    return ({user="", pass=""})=>{
        dispatch({type:"LOGIN_REQUESTED", user, pass})
    }
}

function cancelRequestHandlerFactory(dispatch){
    return ()=>{
        dispatch({type:"LOGIN_CANCEL_REQUESTED"})
    }
}

class LoginLayout extends React.Component {
  constructor(props) {
    super(props);
    const {dispatch} = props;
    this._loginRequestHandler = loginRequestHandlerFactory(dispatch);
    this._cancelRequestHandler = cancelRequestHandlerFactory(dispatch);
  }

  render(){
    return (<LogInComponent
      onCancel={this._cancelRequestHandler}
      onLogIn={this._loginRequestHandler}/>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return state;
}

export default connect(mapStateToProps)(LoginLayout)
