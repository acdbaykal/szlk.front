import React from 'react';
import {connect} from 'react-redux';
import SearchResultList from 'view/components/SearchResult/AdminSearchResultList';
import TranslationsSelector from 'selectors/TranslationsSelector';

const SearchResultListContainer = ({translations, onEdit, onDelete}) => (
  <SearchResultList
    translations = {translations}
    onEdit = {onEdit}
    onDelete = {onDelete}
  />
);

function mapStateToProps(state){
  return {
    translations: TranslationsSelector(state)
  };
}

export default connect(mapStateToProps)(SearchResultListContainer);
