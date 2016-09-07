import React from 'react';
import {connect} from 'react-redux';
import SearchResultHeader from 'view/components/SearchResult/SearchResultHeader';

const SearchResultListContainer = ({sorting, onSortRequest}) => {
  const {sort_by, sort_order} = sorting;
  return (
    <SearchResultHeader
      sortBy = {sort_by}
      sortOrder = {sort_order}
      onSortRequest = {onSortRequest}
    />
  );
};

function mapStateToProps(state){
  return {
    sorting: state.sorting
  };
}

export default connect(mapStateToProps)(SearchResultListContainer);
