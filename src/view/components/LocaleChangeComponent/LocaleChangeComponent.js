import React from 'react';
import {findDOMNode} from 'react-dom';
import Promise from 'global/Promise';
import LocaleChangeComponentItem from './LocalChangeComponentItem';
import styles from './style/LocaleChangeComponent.styl';
import item_styles from './style/LocaleChangeComponentItem.styl';
import {TweenMax as Tween} from 'gsap';

function generateData(props){
  const {
    current
  } = props;

  const supported_locales = props.supportedLocales.toJS();

  const result = [];
  for(const l in supported_locales){
    if(supported_locales.hasOwnProperty(l)){
      const locale = supported_locales[l];
      if(l === current){
        result.splice(0, 0, {
          key: l,
          title: locale.name,
          flag: locale.flag
        });
      }else{
        result.push({
          key: l,
          title: locale.name,
          flag: locale.flag
        });
      }
    }
  }
  return result;
}

class Selector{
  constructor(root_component){
    this._root_component = root_component;
  }

  get rootNode(){
    if(typeof this._root_node === 'undefined'){
      this._root_node = findDOMNode(this._root_component);
    }

    return this._root_node;
  }

  get items(){
    return this.rootNode.querySelectorAll(`.${item_styles['locale-change-item']}`);
  }
}

class LocaleChangeComponent extends React.Component{
  constructor(props){
    super(props);
    this._items = [];
    this.selector = new Selector(this);
    this._handleSelect = this._handleSelect.bind(this);
  }

  componentWillMount(){
    this.setState({closed: true});
  }

  componentWillUnmount(){//clean up
    this._items = undefined;
    this.selector = undefined;
  }

  _handleOpen(){
    const {selector} = this;
    const root_node = selector.rootNode;
    const items = selector.items;
    const item_count = items.length;

    if(item_count > 0){
      let resolve;
      const promise = new Promise((res) => {resolve = res;});
      const first_item = items[0];
      const last_item = items[item_count - 1];
      const first_item_rect = first_item.getBoundingClientRect();
      const last_item_rect = last_item.getBoundingClientRect();
      const total_height = Math.abs(first_item_rect.top - last_item_rect.bottom);
      const onTweenComplete = () => {
        this.setState({closed: false});
        resolve();
      };
      Tween.to(root_node, 0.4, {
        height: total_height,
        onComplete: onTweenComplete,
        clearProps: 'height'
      });
      return promise;
    }
    return Promise.resolve();
  }

  _handleClose(){
    const {selector} = this;
    const root_node = selector.rootNode;
    const items = selector.items;
    const item_count = items.length;

    if(item_count > 0){
      let resolve;
      const promise = new Promise((res) => {resolve = res;});
      const first_item = items[0];
      const first_item_rect = first_item.getBoundingClientRect();
      const total_height = Math.abs(first_item_rect.top - first_item_rect.bottom);
      const onTweenComplete = () => {
        this.setState({closed: true});
        resolve();
      };
      Tween.to(root_node, 0.4, {
        height: total_height,
        onComplete: onTweenComplete,
        clearProps: 'height'
      });
      return promise;
    }
    return Promise.resolve();
  }

  _handleSelect(key){
    if(this.state.closed){
      this._handleOpen();
    }else{
      this._handleClose().then(() => {
        const {current: curret_locale} = this.props;
        if(curret_locale !== key){
          const {onLocaleChange} = this.props;
          onLocaleChange(key);
        }
      });
    }
  }

  render(){
    const data = generateData(this.props);
    const {current} = this.props;
    //eslint-disable-next-line prefer-template
    const class_name = styles['locale-change-component'] + ' ' + (
      this.state.closed ? styles['locale-change-component--closed'] :
                          styles['locale-change-component--open']
    );
    const items = data.map((locale_data) => {
      const visible = !this.state.closed || locale_data.key === current;
      return (<LocaleChangeComponentItem
        key={locale_data.key}
        data={locale_data}
        onSelect={this._handleSelect}
        visible={visible}
      />);
    });
    this._items = items;
    return (
      <div className={styles['locale-change-component-wrapper']}>
        <div className={class_name}>
          {items}
        </div>
      </div>
    );
  }
}

export default LocaleChangeComponent;
