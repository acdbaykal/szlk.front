import React from 'react';
import styles from './style/MainContainer.styl';

//eslint-disable-next-line react/prefer-stateless-function
export default class MainContainer extends React.Component{
  render(){
    return (
      <div className={styles.wrap_all}>
        <div className={styles.main_container}>
          {React.cloneElement(this.props.top_float, this.props)}
          {React.cloneElement(this.props.main, this.props)}
        </div>
      </div>
    );
  }
}
