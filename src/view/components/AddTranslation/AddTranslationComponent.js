import React from 'react';
import {findDOMNode} from 'react-dom';
import {createTranslation, EntryType} from 'global/data/Translation';
import {FormattedMessage, injectIntl} from 'react-intl';
import localeCompare from 'global/utils/localeCompare';
import styles from './style/AddTranslationComponent.styl';

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

class Selector{
  constructor(root_component){
    this._root_component = root_component;
  }

  get inputArea(){
    const root = this.rootElement;
    return root.querySelector('.js-input-area');
  }
  get rootElement(){
    if(typeof this.root === 'undefined'){
      this.root = findDOMNode(this._root_component);
    }
    return this.root;
  }

  get originInput(){
    const root = this.rootElement;
    return root.querySelector('.js-origin-input');
  }

  get shortInput(){
    const root = this.rootElement;
    return root.querySelector('.js-short-input');
  }

  get typeInput(){
    const root = this.rootElement;
    return root.querySelector('.js-type-input');
  }

  get translationInput(){
    const root = this.rootElement;
    return root.querySelector('.js-translation-input');
  }
}

function getType(select_elem){
  const {selectedIndex: selected_index} = select_elem;
  const selected_option = select_elem.options[selected_index];
  return selected_option.value;
}

function createTranslationFromDOM(selector){
  const origin_input = selector.originInput;
  const type_input = selector.typeInput;
  const short_input = selector.shortInput;
  const translation_input = selector.translationInput;

  const translation_obj = {
    origin: {
      main: origin_input.value.trim(),
      short: short_input.value.trim() === '' ? undefined : short_input.value,
    },
    translation: translation_input.value.trim(),
    type: getType(type_input)
  };

  return createTranslation(translation_obj);
}

class AddTranslationComponent extends React.Component{
  constructor(props){
    super(props);
    const {onAdd = () => {}} = props;
    const selector = this._selector = new Selector(this);
    this._onAdd = () => {
      const translation = createTranslationFromDOM(selector);
      onAdd(translation);
    };

    this._onOpenBtnClick = this._onOpenBtnClick.bind(this);
    this._closeInput = this._closeInput.bind(this);
    this._onAdd = this._onAdd.bind(this);
  }

  componentWillMount(){
    const {initiallyClosed} = this.props;
    const closed = typeof initiallyClosed === 'boolean' ? initiallyClosed : true;
    this.setState({closed});
  }

  _closeInput(){
    this.setState({closed: true});
  }

  _openInput(){
    this.setState({closed: false});
  }

  _onOpenBtnClick(){
    const closed = this.state.closed;

    if(closed){
      this._openInput();
    }else{
      this._closeInput();
    }
  }

  _createOptions(){
    const {currentLocale: current_locale, intl} = this.props;
    const {formatMessage} = intl;
    const options_data = ENTRY_TYPE_INTL.sort((first, second) => {
      const first_id = first.id;
      const first_message = formatMessage({id: first_id});
      const second_id = second.id;
      const second_message = formatMessage({id: second_id});
      return localeCompare(first_message, second_message, current_locale);
    });
    return options_data.map(data => {
      const {id, defaultMessage, type} = data;
      return (
        <FormattedMessage id={id} defaultMessage={defaultMessage}>
          {(message) => <option value={type}>{message}</option>}
        </FormattedMessage>
    );});
  }

  render(){
    const {closed} = this.state;
    const open_btn_class = `js-open-close-btn ${styles['add-translation__open-btn']}`;
    const input_area_block = styles['add-translation__input-area'];
    const input_area_modifier = closed ? styles['add-translation__input-area_closed'] :
                                         styles['add-translation__input-area_open'];
    const input_area_class = `js-input-area ${input_area_block} ${input_area_modifier}`;
    return (
      <span className={`js-add-translation ${styles['add-translation']}`}>
        <button
          className={open_btn_class}
          onClick={this._onOpenBtnClick}
        >
          +
        </button>
        <div className={input_area_class}>
            <div>
              <label>
                <FormattedMessage id="app.translation.origin" defaultMessage="Almanca" />
              </label>
              <input className="js-origin-input" type="text" />
            </div>
            <div>
              <label>
                <FormattedMessage id="app.translation.short" defaultMessage="Kısaltma" />
              </label>
              <input className = "js-short-input" type="text" />
            <div>
              <label>
                <FormattedMessage id="app.translation.type" defaultMessage="İşlev" />
              </label>
              <select className = "js-type-input">
                {this._createOptions()}
              </select>
            </div>
            <div>
              <label>
                <FormattedMessage id="app.translation.destination" defaultMessage="Türkçe" />
              </label>
              <input className="js-translation-input" type="text" />
            </div>
          </div>
          <div>
            <button className="js-cancel-btn" onClick={this._closeInput}>Kapat</button>
            <button className="js-add-btn" onClick={this._onAdd}>Ekle</button>
          </div>
        </div>
      </span>
    );
  }
}

export default injectIntl(AddTranslationComponent);
