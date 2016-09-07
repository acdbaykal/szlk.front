import React from 'react';
import SearchInput from 'view/components/SearchInput/SearchInputContainer';
import SearchResultHeader from 'view/components/SearchResult/AdminSearchResultHeaderContainer';
import SearchResultList from 'view/components/SearchResult/AdminSearchResultListContainer';
import AddTranslationComponent from
  'view/components/AddTranslation/AddTranslationComponentContainer';

const AdminLayout = () => (
  <div>
    <SearchInput />
    <AddTranslationComponent />
    <div>
      <div style={{width: `${(100 / 7) * 6}%`}}>
        <SearchResultHeader />
      </div>
      <SearchResultList />
    </div>
  </div>
);

export default AdminLayout;
