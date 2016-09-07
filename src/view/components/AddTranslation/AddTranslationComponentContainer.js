import React from 'react';
import {connect} from 'react-redux';
import AddTranslationComponent from './AddTranslationComponent';
import HandlerFactory from 'view/action_handling/HandlerFactory';

class AddTranslationComponentContainer extends React.Component{
  constructor(props){
    super(props);
    this._onAdd = HandlerFactory('TRANSLATION_ADD_REQUESTED', props.dispatch);
  }

  render(){
    const {currentLocale} = this.props;
    return (
      <AddTranslationComponent
        currentLocale = {currentLocale}
        onAdd = {this._onAdd}
      />
    );
  }
}

function mapStateToProps(state){
  return {
    currentLocale: state.language.current
  };
}

export default connect(mapStateToProps)(AddTranslationComponentContainer);
