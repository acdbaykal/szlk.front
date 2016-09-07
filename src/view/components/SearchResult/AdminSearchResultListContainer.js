import React from 'react';
import {connect} from 'react-redux';
import SearchResultList from 'view/components/SearchResult/AdminSearchResultList';
import TranslationsSelector from 'selectors/TranslationsSelector';
import HandlerFactory from 'view/action_handling/HandlerFactory';

class SearchResultListContainer extends React.Component{
  constructor(props){
    super(props);
    const {dispatch} = props;
    this._onEdit = HandlerFactory('TRANSLATION_UPDATE_REQUESTED', dispatch);
    this._onDelete = HandlerFactory('TRANSLATION_DELETE_REQUESTED', dispatch);
  }

  render(){
    return (
      <SearchResultList
        translations = {this.props.translations}
        onEdit = {this._onEdit}
        onDelete = {this._onDelete}
      />
    );
  }
}

function mapStateToProps(state){
  return {
    translations: TranslationsSelector(state)
  };
}

export default connect(mapStateToProps)(SearchResultListContainer);
