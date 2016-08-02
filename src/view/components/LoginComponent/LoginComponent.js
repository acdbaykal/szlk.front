import React from 'react'
import {findDOMNode} from 'react-dom'

const PASS_INPUT_ID = "login-field__pwd";

class Selector{
  constructor(react_component){
    this._react_component;
  }

  get root(){
    if(typeof this._root === "undefined"){
      this._root = findDOMNode(this._react_component);
    }

    return this._root;
  }

  get cancelBtn(){
    return this._root.querySelector('.js-cancel-btn');
  }

  get sendBtn(){
    return this._root.querySelector('.js-send-btn');
  }

  get passwordInput(){
    return this._root.querySelector('js-pass-input');
  }
}

function sendRequestHandlerFactory(callback, selector){
  return (event)=>{
    const pass = (()=>{
      if(typeof doc !== "undefined"){
          const input_elem = selector.passwordInput;
          return input_elem.value;
      }
      else{
        return "";
      }
    })();
    callback({pass});
  }
}

function cancelRequestHandlerFactory(callback){
  return (event)=>{
      callback();
  }
}

export default class LoginCompponent extends React.Component{
  constructor(properties) {
    super(properties);
    const { onLogIn:on_log_in,
            onCancel:on_cancel
          } = properties;
    const selector = this._selector = new Selector(this);
    this._onSendRequestHandler = sendRequestHandlerFactory(on_log_in, selector);
    this._onCancelRequestHandler = cancelRequestHandlerFactory(on_cancel);
  }

  render(){
    return (
      <div>
        <div>
          <label for={PASS_INPUT_ID}>Sifre</label>
          <input className="js-pass-input" type="password" id={PASS_INPUT_ID}/>
        </div>
        <div>
          <button className = "js-send-btn" onClick={this._onSendRequestHandler}>Gönder</button>
          <button className = "js-cancel-btn" onClick={this._onCancelRequestHandler}>Iptal</button>
        </div>
      </div>
    );
  }
}
