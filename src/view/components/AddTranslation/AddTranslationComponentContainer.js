import React from 'react';
import {connect} from 'react-redux';
import AddTranslationComponent from './AddTranslationComponent';

const AddTranslationComponentContainer = ({currentLocale, onAdd}) => (
  <AddTranslationComponent
    currentLocale = {currentLocale}
    onAdd = {onAdd}
  />
);

function mapStateToProps(state){
  return {
    currentLocale: state.language.current
  };
}

export default connect(mapStateToProps)(AddTranslationComponentContainer);
