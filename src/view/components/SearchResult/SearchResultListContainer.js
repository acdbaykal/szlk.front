import React from 'react';
import {connect} from 'react-redux';
import SearchResultList from 'view/components/SearchResult/SearchResultList';
import TranslationsSelector from 'selectors/TranslationsSelector';

const SearchResultListContainer = ({translations}) => (
  <SearchResultList
    translations = {translations}
  />
);

function mapStateToProps(state){
  return {
    translations: TranslationsSelector(state)
  };
}

export default connect(mapStateToProps)(SearchResultListContainer);
