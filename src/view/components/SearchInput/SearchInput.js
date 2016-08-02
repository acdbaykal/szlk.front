import React from 'react';

/**
  wraps the handler and adapts the event call to the handlers signature
  params:
  1)input is a SearchInput
  2)handler is an event handler that is passed onto the the SearchIputs props
  and handles chnage events. It is supposed to take the current value as a parameter
**/
function wrapChangeEvent(input, handler){
  return function(event){
    handler.call(input, {value:event.target.value});
  };
}

export default class SearchInput extends React.Component{
  constructor(props){
      super(props);
      const {onInputChange} = props;
      this._eventHandler = wrapChangeEvent(this, onInputChange);
  }

  render(){
    const defaultValue = this.props.defaultValue || "";
    return (
      <input type="text"
        defaultValue={defaultValue}
        value={this.props.value}
        onChange={this._eventHandler}>
      </input>
    );
  }
}
