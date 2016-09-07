import React from 'react';
import SearchInput from 'view/components/SearchInput/SearchInputContainer';
import SearchResultHeader from 'view/components/SearchResult/AdminSearchResultHeaderContainer';
import SearchResultList from 'view/components/SearchResult/AdminSearchResultListContainer';
import AddTranslationComponent from
  'view/components/AddTranslation/AddTranslationComponentContainer';
import {connect} from 'react-redux';

function createInputChangeHandler(dispatch){
  return function notifyParent({value}){
    dispatch({type: 'SEARCH_REQUESTED', search: value});
  };
}

function createSortRequestHandler(dispatch){
  return function notifyParent({sort_by}){
    dispatch({type: 'SORT_REQUESTED', sort_by});
  };
}

function createTranslationEditHandler(dispatch){
  return (translation) => {
    dispatch({type: 'TRANSLATION_UPDATE_REQUESTED', translation});
  };
}

export function createTranslationDeleteHandler(dispatch){ //exported for testing
  return (translation) => {
    dispatch({type: 'TRANSLATION_DELETE_REQUESTED', translation});
  };
}

export function createTranslationAddHandler(dispatch){//exported for testing
  return (translation) => {
    dispatch({type: 'TRANSLATION_ADD_REQUESTED', translation});
  };
}


class AdminLayout extends React.Component{
  constructor(props){
    super(props);
    const {dispatch} = props;
    this._onSearchInputChange = createInputChangeHandler(dispatch);
    this._onSortRequest = createSortRequestHandler(dispatch);
    this._onEditRequest = createTranslationEditHandler(dispatch);
    this._onDeletRequest = createTranslationDeleteHandler(dispatch);
    this._onAdd = createTranslationAddHandler(dispatch);
  }

  render(){
    return (
      <div>
        <SearchInput
          onInputChange={this._onSearchInputChange}
        />
      <AddTranslationComponent
        onAdd={this._onAdd}
      />
      <div>
        <div style={{width: `${(100 / 7) * 6}%`}}>
          <SearchResultHeader
            onSortRequest={this._onSortRequest}
          />
        </div>
        <SearchResultList
          onEdit = {this._onEditRequest}
          onDelete = {this._onDeletRequest}
        />
      </div>
    </div>
    );
  }
}

function mapStateToProps(){
  return {};
}

export default connect(mapStateToProps)(AdminLayout);
