import React from 'react';
import {findDOMNode} from 'react-dom';
import {FormattedMessage} from 'react-intl';
import styles from './style/LoginComponent.styl';

const PASS_INPUT_ID = 'login-field__pwd';
const USER_INPUT_ID = 'login-field__user';

class Selector{
  constructor(react_component){
    this._reactComponent = react_component;
  }

  get root(){
    if(typeof this._rootElement === 'undefined'){
      this._rootElement = findDOMNode(this._reactComponent);
    }

    return this._rootElement;
  }

  get cancelBtn(){
    return this.root.querySelector('.js-cancel-btn');
  }

  get sendBtn(){
    return this.root.querySelector('.js-send-btn');
  }

  get passwordInput(){
    return this.root.querySelector('.js-pass-input');
  }

  get userInput(){
    return this.root.querySelector('.js-user-input');
  }
}

function getLogInInputFieldValue(input_element){
  if(typeof input_element !== 'undefined'){
    return input_element.value.trim();
  }
  return '';
}

function sendRequestHandlerFactory(callback, selector){
  return () => {
    const pass = getLogInInputFieldValue(selector.passwordInput);
    const user = getLogInInputFieldValue(selector.userInput);
    callback({user, pass});
  };
}

function cancelRequestHandlerFactory(callback){
  return () => {
    callback();
  };
}

export default class LoginCompponent extends React.Component{
  constructor(properties){
    super(properties);
    const {onLogIn: on_log_in,
           onCancel: on_cancel
          } = properties;
    const selector = this._selector = new Selector(this);
    this._onSendRequestHandler = sendRequestHandlerFactory(on_log_in, selector);
    this._onCancelRequestHandler = cancelRequestHandlerFactory(on_cancel);
  }

  render(){
    return (
      <div>
        <div className={styles['login-componnet__form-container']}>
          <div className={styles['login-component__label-container']}>
            <label htmlFor={USER_INPUT_ID} className={styles['login-component__label']}>
              <FormattedMessage id="app.login.user" defaultMessage="Kullanıcı" /><span>:</span>
            </label>
            <br />
            <label htmlFor={PASS_INPUT_ID} className={styles['login-component__label']}>
              <FormattedMessage id="app.login.pass" defaultMessage="Şifre" /><span>:</span>
            </label>
          </div>
          <div className={styles['login-component__input-container']}>
            <input className={`js-user-input ${styles['login-component__input']}`}
              type="text" id={USER_INPUT_ID}
            />
          <input className={`js-pass-input ${styles['login-component__input']}`}
            type="password" id={PASS_INPUT_ID}
          />
          </div>
        </div>
        <div>
          <button className = "js-send-btn" onClick={this._onSendRequestHandler}>
            <FormattedMessage id="app.login.send" defaultMessage="Gönder" />
          </button>
          <button className = "js-cancel-btn" onClick={this._onCancelRequestHandler}>
            <FormattedMessage id="app.login.cancel" defaultMessage="İptal" />
          </button>
        </div>
      </div>
    );
  }
}
