import React, {PropTypes} from 'react';
import SearchInput from 'view/components/SearchInput/SearchInput';
import SearchResultHeader from 'view/components/SearchResult/SearchResultHeader';
import SearchResultList from 'view/components/SearchResult/SearchResultList';
import TranslationsSelector from 'selectors/TranslationsSelector';
import styles from './style/SearchLayout.styl';
import {connect} from 'react-redux';

function createInputChangeHandler(dispatch){
  return function onInputChange({value}){
    dispatch({type: 'SEARCH_REQUESTED', search: value});
  };
}

function createSortRequestHandler(dispatch){
  return function onSortRequest({sort_by}){
    dispatch({type: 'SORT_REQUESTED', sort_by});
  };
}

const A_KEY_CODE = 65;

function keyDownHandlerFactory(dispatch){
  return (event) => {
    if(event.shiftKey && event.ctrlKey &&
      (event.which === A_KEY_CODE || event.keyCode === A_KEY_CODE)){
      dispatch({type: 'LOGIN_NAVIGATION_REQUESTED'});
    }
  };
}

class SearchLayout extends React.Component{

  constructor(props){
    super(props);
    const {dispatch} = props;
    this._onSearchInputChange = createInputChangeHandler(dispatch);
    this._onSortRequest = createSortRequestHandler(dispatch);

    //document can be mocked for testing and passed as a property,
    //but normally it should be the document provided by the DOM
    const doc = (() => {
      let result = props.document;
      if(typeof doc === 'undefined' && window && window.document){
        result = window.document;
      }
      return result;
    })();
    if(typeof doc !== 'undefined'){
      doc.addEventListener('keydown', keyDownHandlerFactory(dispatch));
    }
  }

  render(){
    return (
      <div className={styles.dictionary}>
        <SearchInput
          onInputChange={this._onSearchInputChange}
          value={this.props.filtering.search_term}
        />
        <div>
          <SearchResultHeader
            onSortRequest={this._onSortRequest}
            sortBy={this.props.sorting.sort_by}
            sortOrder={this.props.sorting.sort_order}
          />
          <SearchResultList
            translations={this.props.translations}
          />
        </div>
      </div>
    );
  }
}

SearchLayout.propTypes = {
  document: PropTypes.element.any,
  filtering: PropTypes.object.isRequired,
  sorting: PropTypes.object.isRequired,
  translations: PropTypes.array.isRequired
};

function mapStateToProps(state){
  return {
    ...state,
    translations: TranslationsSelector(state)
  };
}

export default connect(mapStateToProps)(SearchLayout);
