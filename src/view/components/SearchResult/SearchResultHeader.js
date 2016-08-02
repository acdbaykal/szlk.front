import React, {PropTypes} from 'react'
import SortBy from 'global/data/SortableEnum'
import AbstractSearchResultHeader from './AbstractSearchResultHeader'

const SearchResultHeader = (()=>{
  return AbstractSearchResultHeader([
    SortBy.ORIGIN, SortBy.TYPE, SortBy.TRANSLATION
  ]);
})();
export default SearchResultHeader
