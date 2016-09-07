import React from 'react';
import {connect} from 'react-redux';
import SearchInput from 'view/components/SearchInput/SearchInput';

const SearchResultListContainer = ({input_value, onInputChange}) => {
  return (
    <SearchInput
      value = {input_value}
      onInputChange = {onInputChange}
    />
  );
};

function mapStateToProps(state){
  return {
    input_value: state.filtering.search_term
  };
}

export default connect(mapStateToProps)(SearchResultListContainer);
