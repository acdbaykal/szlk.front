import React from 'react';
import {injectIntl, intlShape} from 'react-intl';
import getTranslationTypeData from 'global/utils/getTraslationTypeData';

const EMPTY_FUNC = () => {};

function _getIntlData(type){
  return getTranslationTypeData(type);
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
      onFocus = EMPTY_FUNC,
      onBlur = EMPTY_FUNC} = this.props;

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
