import React from 'react';
import {injectIntl, intlShape} from 'react-intl';
import {EntryType} from 'global/data/Translation';

const ENTRY_TYPE_INTL = [
  {id: 'app.translation.type.adj', defaultMessage: 'Sıfat', type: EntryType.ADJECTIVE},
  {id: 'app.translation.type.direct', defaultMessage: 'Direktif', type: EntryType.DIRECTIVE},
  {id: 'app.translation.type.noun.fem', defaultMessage: 'İsim (dişi)', type: EntryType.NOUN_FEM},
  {id: 'app.translation.type.noun.masc', defaultMessage: 'İsim (erkek)', type: EntryType.NOUN_MAS},
  {id: 'app.translation.type.noun.neut', defaultMessage: 'İsim (neut)', type: EntryType.NOUN_NEUT},
  {id: 'app.translation.type.noun.pl', defaultMessage: 'İsim (çoğul)', type: EntryType.NOUN_PL},
  {id: 'app.translation.type.pre', defaultMessage: 'Ön ek', type: EntryType.PREFIX},
  {id: 'app.translation.type.verb', defaultMessage: 'Fiil', type: EntryType.VERB},
];

function _getIntlData(type){
  return ENTRY_TYPE_INTL.filter((data) => data.type === type)[0];
}

class SearchResultItemTypeCell extends React.Component{
  get type(){
    return this.props.type;
  }

  get internationalisedType(){
    const type = this.type;
    const {intl} = this.props;
    const {formatMessage} = intl;
    return formatMessage(_getIntlData(type));
  }

  render(){
    const {className,
      contentEditable = false,
      onFocus,
      onBlur} = this.props;

    const int_type = this.internationalisedType;
    return (
      <span>
        <div
          onFocus={onFocus}
          onBlur={onBlur}
          className={className}
          contentEditable={contentEditable}
          data-property="type"
          className="js-type-field"
        >
          {int_type}
        </div>
      </span>
    );
  }
}

SearchResultItemTypeCell.propTypes = {
  className: React.PropTypes.string,
  contentEditable: React.PropTypes.boolean,
  intl: intlShape.isRequired,
  onBlur: React.PropTypes.function,
  onFocus: React.PropTypes.function,
  type: React.PropTypes.string.isRequired
};

export default injectIntl(SearchResultItemTypeCell);
