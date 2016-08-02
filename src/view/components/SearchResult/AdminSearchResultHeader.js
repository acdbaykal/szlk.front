import React, {PropTypes} from 'react'
import SortBy from 'global/data/SortableEnum'
import AbstractSearchResultHeader from './AbstractSearchResultHeader'

const SearchResultHeader = (()=>{
  return AbstractSearchResultHeader([
    SortBy.ORIGIN, SortBy.SHORT, SortBy.TYPE, SortBy.TRANSLATION, SortBy.CREATION_DATE, SortBy.EDIT_DATE
  ]);
})();
export default SearchResultHeader
