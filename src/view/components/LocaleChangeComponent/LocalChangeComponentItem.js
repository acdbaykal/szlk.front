import React from 'react';
import styles from './style/LocaleChangeComponentItem.styl';

class LocaleChangeComponentItem extends React.Component{
  constructor(props){
    super(props);
    this._handleClick = this._handleClick.bind(this);
    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  _handleClick(){
    const {onSelect, data} = this.props;
    if(typeof onSelect === 'function' && typeof data === 'object'){
      onSelect(data.key);
    }
  }

  _handleKeyDown(event){
    if(event.which === 13 || event.keyCode === 13){ //treat Enter as click
      this._handleClick();
    }
  }

  render(){
    const {data} = this.props;
    const {visible = false} = this.props;
    const flag_class_name = `${styles['locale-change-item__flag']} ${
      visible ? styles['locale-change-item__flag--visible'] :
                styles['locale-change-item__flag--hidden']
    }`;
    return (
      <div className={styles['locale-change-item']}>
        <img
          className={flag_class_name}
          src={data.flag}
          onClick={this._handleClick}
          onKeyDown={this._handleKeyDown}
        />
    </div>
    );
  }
}

export default LocaleChangeComponentItem;
