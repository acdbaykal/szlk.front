import React, {PropTypes} from 'react';
import LocaleChangeComponent from 'view/components/LocaleChangeComponent/LocaleChangeComponent';
import LogoComponent from 'view/components/LogoComponent/LogoComponent';
import {connect} from 'react-redux';

function createLocaleChangeHandler(dispatch){
  return function onLocaleChange(locale_key){
    dispatch({type: 'SET_LOCALE', payload: locale_key});
  };
}

class TopFloatLayout extends React.Component{
  constructor(props){
    super(props);
    this._onLocaleChange = createLocaleChangeHandler(props.dispatch);
  }

  render(){
    return (
      <div>
        <LogoComponent />
        <LocaleChangeComponent
          supportedLocales={this.props.language.supported}
          current={this.props.language.current}
          onLocaleChange={this._onLocaleChange}
        />
      </div>
    );
  }
}

TopFloatLayout.propTypes = {
  dispatch: PropTypes.func.isRequired,
  language: PropTypes.object.isRequired
};

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(TopFloatLayout);
