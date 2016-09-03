import React from 'react';
import Immutable from 'immutable';
import {connect} from 'react-redux';
import {IntlProvider as IntlProviderOriginal} from 'react-intl';


//export for testing
export function _shouldComponentUpdate(next_language_props){
  const {current: next_locale, messages} = next_language_props;
  return typeof next_locale === 'string' &&
         Immutable.Map.isMap(messages) &&
         typeof messages.get(next_locale) !== 'undefined';
}

/*eslint-disable react/prefer-stateless-function*/
class IntlProviderAdapter extends React.Component{

  shouldComponentUpdate(next_props){
    return _shouldComponentUpdate(next_props.language);
  }

  render(){
    const {
      children,
      language,
      formats,
      defaultLocale,
      defaultFormats
    } = this.props;
    const {current} = language;
    const messages = language.messages.toJS()[current];

    return (
    <IntlProviderOriginal
      key={current}
      locale={current}
      formats={formats}
      messages={messages}
      defaultLocale={defaultLocale}
      defaultFormats={defaultFormats}
    >
      {React.cloneElement(children, this.props)}
    </IntlProviderOriginal>
    );
  }
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps)(IntlProviderAdapter);
