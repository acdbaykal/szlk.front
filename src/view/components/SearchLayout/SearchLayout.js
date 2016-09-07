import React, {PropTypes} from 'react';
import SearchInput from 'view/components/SearchInput/SearchInputContainer';
import SearchResultHeader from 'view/components/SearchResult/SearchResultHeaderContainer';
import SearchResultList from 'view/components/SearchResult/SearchResultListContainer';
import HandlerFactory from 'view/action_handling/HandlerFactory';
import styles from './style/SearchLayout.styl';
import {connect} from 'react-redux';

class SearchLayout extends React.Component{

  constructor(props){
    super(props);
    const {dispatch} = props;

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
      const handler = HandlerFactory('LOGIN_NAVIGATION_REQUESTED', dispatch);
      doc.addEventListener('keydown', handler);
    }
  }

  shouldComponentUpdate(){
    return false;
  }

  render(){
    return (
      <div className={styles.dictionary}>
        <SearchInput />
        <div>
          <SearchResultHeader />
          <SearchResultList />
        </div>
      </div>
    );
  }
}

SearchLayout.propTypes = {
  document: PropTypes.element.any
};

//eslint-disable-next-line arrow-body-style
export default connect(() => {return {};})(SearchLayout);
