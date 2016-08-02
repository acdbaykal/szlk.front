import React, {PropTypes} from 'react'
import SearchInput from 'view/components/SearchInput/SearchInput.js'
import SearchResultHeader from "view/components/SearchResult/AdminSearchResultHeader"
import SearchResultList from 'view/components/SearchResult/AdminSearchResultList'
import TranslationsSelector from 'selectors/TranslationsSelector'
import AddTranslationComponent from 'view/components/AddTranslation/AddTranslationComponent'
import { connect } from 'react-redux'

function createInputChangeHandler(dispatch){
  return function({value}){
    console.log("dispatch SEARCH_REQUESTED");
      dispatch({type:"SEARCH_REQUESTED", search:value});
  };
}

function createSortRequestHandler(dispatch){
  return function({sort_by}){
      dispatch({type:"SORT_REQUESTED", sort_by});
  };
}

function createTranslationEditHandler(dispatch){
  return (translation)=>{
    dispatch({type:"TRANSLATION_UPDATE_REQUESTED", translation});
  };
}

export function createTranslationDeleteHandler(dispatch){ // exported for testing
  return (translation)=>{
    dispatch({type:"TRANSLATION_DELETE_REQUESTED", translation});
  };
}

export function createTranslationAddHandler(dispatch){// exported for testing
  return (translation)=>{
    dispatch({type:"TRANSLATION_ADD_REQUESTED", translation});
  }
}


class AdminLayout extends React.Component{
  constructor(props) {
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
          value={this.props.filtering.search_term}
        />
      <AddTranslationComponent
          onAdd={this._onAdd}
        />
        <div>
          <div style={{width:`${(100/7)*6}%`}}>
            <SearchResultHeader
              onSortRequest={this._onSortRequest}
              sortBy={this.props.sorting.sort_by}
              sortOrder={this.props.sorting.sort_order}
            />
          </div>
          <SearchResultList
            translations={this.props.translations}
            onEdit = {this._onEditRequest}
            onDelete = {this._onDeletRequest}
          />
        </div>
      </div>
    );
  }
}

AdminLayout.propTypes = {
  translations:PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  if(typeof state === 'undefined')
    state = ownProps.initialState || ownProps.store.getState();
  return {
    ...state,
    translations:TranslationsSelector(state)
  };
}

export default connect(mapStateToProps)(AdminLayout)
