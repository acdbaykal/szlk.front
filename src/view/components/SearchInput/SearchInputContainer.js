import React from 'react';
import {connect} from 'react-redux';
import SearchInput from 'view/components/SearchInput/SearchInput';
import HandlerFactory from 'view/action_handling/HandlerFactory';

class SearchInputContainer extends React.Component{
  constructor(props){
    super(props);
    this._onSearchInputChange = HandlerFactory('SEARCH_REQUESTED', props.dispatch);
  }

  render(){
    return (
      <SearchInput
        value = {this.props.input_value}
        onInputChange = {this._onSearchInputChange}
      />
    );
  }
}

function mapStateToProps(state){
  return {
    input_value: state.filtering.search_term
  };
}

export default connect(mapStateToProps)(SearchInputContainer);
