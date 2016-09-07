import React from 'react';
import {connect} from 'react-redux';
import AdminSearchResultHeader from 'view/components/SearchResult/AdminSearchResultHeader';
import HandlerFactory from 'view/action_handling/HandlerFactory';

class SearchResultListContainer extends React.Component{
  constructor(props){
    super(props);
    this._onSortRequest = HandlerFactory('SORT_REQUESTED', props.dispatch);
  }

  render(){
    const {sort_by, sort_order} = this.props.sorting;
    return (
      <AdminSearchResultHeader
        sortBy = {sort_by}
        sortOrder = {sort_order}
        onSortRequest = {this._onSortRequest}
      />
    );
  }
}

function mapStateToProps(state){
  return {
    sorting: state.sorting
  };
}

export default connect(mapStateToProps)(SearchResultListContainer);
