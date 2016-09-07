import React from 'react';
import SortBy from 'global/data/SortableEnum';
import AbstractSearchResultHeader from './AbstractSearchResultHeader';

const SearchResultHeader = (() => AbstractSearchResultHeader([
  SortBy.ORIGIN, SortBy.TYPE, SortBy.TRANSLATION
]))();
export default SearchResultHeader;
