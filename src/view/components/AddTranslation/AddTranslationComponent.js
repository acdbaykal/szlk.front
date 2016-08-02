import React from 'react'
import {findDOMNode}from 'react-dom'
import {createTranslation, EntryType} from 'global/data/Translation'
import styles from './style/AddTranslationComponent.styl'

class Selector{
  constructor(root_component){
    this._root_component = root_component;
  }

  get inputArea(){
    const root = this.rootElement;
    return root.querySelector(".js-input-area");;
  }
  get rootElement(){
    if(typeof this.root === "undefined"){
      this.root = findDOMNode(this._root_component);
    }
    return this.root;
  }

  get originInput(){
    const root = this.rootElement;
    return root.querySelector(".js-origin-input");
  }

  get shortInput(){
    const root = this.rootElement;
    return root.querySelector(".js-short-input");
  }

  get typeInput(){
    const root = this.rootElement;
    return root.querySelector(".js-type-input");;
  }

  get translationInput(){
    const root = this.rootElement;
    return root.querySelector(".js-translation-input");
  }
}

const selectedIndexTypeMap = [
  EntryType.NOUN_FEM,
  EntryType.NOUN_MAS,
  EntryType.NOUN_NEUT,
  EntryType.NOUN_PL,
  EntryType.VERB,
  EntryType.ADJECTIVE,
  EntryType.DIRECTIVE,
  EntryType.PREFIX
];
function getType(select_elem){
  const {selectedIndex} = select_elem;
  return selectedIndexTypeMap[selectedIndex];
}

function createTranslationFromDOM(selector){
  const origin_input = selector.originInput;
  const type_input = selector.typeInput;
  const short_input = selector.shortInput;
  const translation_input = selector.translationInput;

  const translation_obj ={
    origin:{
      main:origin_input.value.trim(),
      short:short_input.value.trim() === "" ? undefined : short_input.value,
    },
    translation:translation_input.value.trim(),
    type:getType(type_input)
  }

  return createTranslation(translation_obj);
}

export default class AddTranslationComponent extends React.Component{
  constructor(props){
      super(props);
      const {document:doc_param, onAdd=()=>{}} = props;
      const doc = (typeof window !== "undefined") && (typeof window.document !== "undefined")
                    ? window.document : doc_param;
      const root_class = this.rootElementClass = styles["add-translation"];
      const selector = this._selector = new Selector(this);
      this._onAdd = (event)=>{
        const translation = createTranslationFromDOM(selector);
        onAdd(translation);
      }
  }

  _closeInput(){
    this.setState({closed:true});
  }

  _openInput(){
    this.setState({closed:false});
  }

  _onOpenBtnClick(event){
    const closed = this.state.closed;

    if(closed){
      this._openInput();
    }
    else{
      this._closeInput();
    }
  }

  componentWillMount(){
    this.setState({closed:true});
  }

  render(){
    const {closed} = this.state;
    const open_btn_class = `js-open-close-btn ${styles['add-translation__open-btn']}`;
    const input_area_class = closed ?
      `js-input-area ${styles['add-translation__input-area']} ${styles['add-translation__input-area_closed']}`:
      `js-input-area ${styles['add-translation__input-area']} ${styles['add-translation__input-area_open']}`
    ;
    return (<span className={`js-add-translation ${this.rootElementClass}`}>
      <button
        className={open_btn_class}
        onClick={this._onOpenBtnClick.bind(this)}
        >+</button>
      <div className={input_area_class}>
        <div>
          <div><label>Almanca</label><input className = "js-origin-input" type="text"/></div>
          <div><label>Kisaltma</label><input className = "js-short-input" type="text"/></div>
          <div>
            <label>Islev</label>
            <select className = "js-type-input">
              <option value="Isim (fem.)" selected></option>
              <option value="Isim (mask.)"></option>
              <option value="Isim (nesnel)"></option>
              <option value="Isim (cogul)"></option>
              <option value="Fiil"></option>
              <option value="Sifat"></option>
              <option value="Direktif"></option>
              <option value="Ön ek"></option>
            </select>
          </div>
          <div><label>Türkce</label><input className="js-translation-input" type="text"/></div>
        </div>
        <div>
          <button className="js-cancel-btn" onClick={this._closeInput.bind(this)}>Kapat</button>
          <button className="js-add-btn" onClick={this._onAdd.bind(this)}>Ekle</button>
        </div>
      </div>
    </span>);
  }
};
